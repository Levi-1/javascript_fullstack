const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaStatic = require('koa-static')
const KoaCors = require('koa-cors')
const KoaBody = require('koa-body')
const app = new Koa()
const router = new KoaRouter()
const path = require('path')


//针对单个路由的中间件
router.post('/upload', KoaBody({
    multipart: true,
    formidable: {
        uploadDir: path.join(__dirname, '/static/'), //dirname 文件运行时，当前目录下文件路径
        keepExtensions: true,
        hash: true // 给每个上传的文件添加一个hash字符串  md5 sha256
    }
}) ,async (ctx) => {
    /** ctx = {封装的请求
        request
        respone
    }*/ 
    const diskPath = ctx.request.files.avatar.path
    let fileName = path.basename(diskPath)
    ctx.body = {
        code: 200,
        url: `http://localhost:3000/${fileName}`
    }
})
//中间件的引入有顺序要求
//全局的
app.use(KoaCors())
app.use(router.routes())
.use(router.allowedMethods())
app.listen(3000, () => {
    console.log('server is running')
})          