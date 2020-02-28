const path = require('path')
const UPLOAD_DIR = path.resolve(__dirname, '..', 'target')
const fs = require('fs-extra')
const Multiparty = require('multiparty')

const extractExt = filename => 
filename.slice(filename.lastIndexOf("."), filename.length)

const resolvePost = req => new Promise(resolve => {
    let chunk = ''
    req.on('data', data => {
        chunk += data // 二进制流
    })
    req.on('end', () => {
        console.log('end', chunk)
        resolve(JSON.parse(chunk))
    })
})

module.exports = class {
    async handleVerifyUpload (req, res) {
        // res.end('verify')
        // 服务器端是否有此文件
        // 拿到post的 data， bodyParser
        const data = await resolvePost(req)
        const { fileHash, filename } = data
        const ext = extractExt(filename)
        const filePath = path.resolve(UPLOAD_DIR, `${fileHash}${ext}`)
        console.log(filePath)
        if (fs.existsSync(filePath)) {
            res.end(JSON.stringify({
                shouldUpload: false
            }))
        } else {
            res.end(
                JSON.stringify({
                    shouldUpload: true,
                    uploadedList: []
                })
            )
        }
    }
    async handleFormData (req, res) {
        // 带有文件上传的表单
        const multiparty = new Multiparty.Form()
        multiparty.parse(req, async (err, fields, files) => {
            if (err) {
                console.error(err)
                res.status = 500
                res.end('process file chunk failed')
                return
            }
            const [chunk] = files.chunk
            const [hash] = fields.hash
            const [filename] = fields.filename
            const [fileHash] = fields.filehash
            console.log(chunk, hash, fileHash, filename, '----------------------------------------------')
            const filePath = path.resolve(UPLOAD_DIR, `${fileHash}${extractExt(filename)}`)
            const chunkDir = path.resolve(UPLOAD_DIR, fileHash)
            if (fs.existsSync(filePath)) {
                res.end('files existed')
                return
            }

            if (!fs.existsSync(chunkDir)) {
                await fs.mkdirsSync(chunkDir)
            }
            await fs.move(chunk.path, path.resolve(chunkDir, hash)) // 使用2.jpg时出现传输丢失，切片数量不正确
            res.end('received file chunk')
        })
    }
}