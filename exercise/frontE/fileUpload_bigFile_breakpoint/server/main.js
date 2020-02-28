const http = require('http')
const path = require('path')
const Multiparty = require('multiparty')
const server = http.createServer()
const UPLOAD_DIR = path.resolve(__dirname,".","target")
const fse = require('fs-extra')

server.on("request", async (req, res) => {
    
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Alllow-Headers", "*")
    if (req.url == '/') {
        const multiparty = new Multiparty.Form()
        // console.log(multiparty)
        multiparty.parse(req, async (err, fileds, files) => {
            if (err) {
                return
            }
            const [chunk] = files.chunk // 获得文件块
            const [filename] = fileds.filename
            const dir_name = filename.split('-')[0]
            const chunkDir = path.resolve(UPLOAD_DIR, dir_name)
            // console.log(chunkDir)
            if(!fse.existsSync(chunkDir)) {
                await fse.mkdirs(chunkDir)
            }
            await fse.move(chunk.path, `${chunkDir}/${filename}`)
        })
    } else if (req.url == '/merge') {
        res.end('OK')
    }
    res.end("hello")

})

server.listen(3000, () => console.log('正在监听3000端口'))