const http = require('http')
const server = http.createServer()
const Controller = require('./controller.js')

const controller = new Controller()

server.on("request", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    if (req.method === 'OPTIONS') { // 
        res.status = 200
        res.end()
        return
    }

    if(req.url == '/verify') {
        // res.end('verify')
        await controller.handleVerifyUpload(req, res)
    }
    if(req.url == '/') {
        await controller.handleFormData(req, res)
    }
})

server.listen(3000, () => console.log("正在监听3000端口"))