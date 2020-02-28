const path = require('path')
const fse = require('fs-extra')

const UPLOAD_DIR = path.resolve(__dirname, '.', 'target')// 上传目录
console.log(UPLOAD_DIR)
const filename = '2'
const filePath = path.resolve(UPLOAD_DIR, "..", `${filename}.jpg`)
console.log(filePath) // 合并后的路径为 /server/2.jpg
// 合并文件块


const pipStream = (path, wirteStream) => 
    new Promise (resolve => {
        const readStream = fse.createReadStream(path)
        readStream.on("end", ()=>{
            fse.unlinkSync(path)
            resolve()
        })
        readStream.pipe(wirteStream)
    })

const mergeFileChunk = async (filePath, filename, size) => {
    // 大文件上传时，后端为，每个要上传的文件，先以文件名为target ，将分块文件blob
    // 文件上传之前添加上index
    // 存入此目录中，再合并 stream
    const chunkDir = path.resolve(UPLOAD_DIR, filename)
    const chunkPaths = await fse.readdir(chunkDir)
    chunkPaths.sort((a,b)=>a.split("-")[1]-b.split("-")[1])
    await Promise.all(
        chunkPaths.map((chunkPath, index) => pipStream(
            path.resolve(chunkDir, chunkPath),
            fse.createWriteStream(filePath, {
                start: index * size,
                end: (index + 1) * size
            })
        ))
    )
    console.log('文件合并成功')
    fse.rmdirSync(chunkDir)
}

mergeFileChunk(filePath,filename, 1024*1024)