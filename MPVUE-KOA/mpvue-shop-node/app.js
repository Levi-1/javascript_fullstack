const koa = require('koa')
const Router = require('koa-router')
const config = require('./config')

const app = new koa()
const router = new Router()

router.get('/index', (ctx, next) => {
    ctx.body = 'hello world'
})

app.use(router)

app.listen(config.port, () => {
    console.log(`Server is running at port ${config.port}`)
})
