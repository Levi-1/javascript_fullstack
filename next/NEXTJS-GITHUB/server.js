const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    // router.get('/test', (ctx,next) => { // 在/test/后接参数可通过 ctx.params. 来获取
    //     // ctx.body = `<p>request /test ${ctx.params.id} </p>`
    //     // next()
    //     ctx.body={success: true}
    //     ctx.set('Content-Type', 'application/json') // 设置返回的数据格式
    // })

    router.get('/a/:id', async (ctx) => {
        const id = ctx.params.id
        await handle(ctx.req, ctx.res, {
            pathname: '/test/a',
            query: {
                id: id
            }
        })
        ctx.respond = false
    })

    // server.use(async (ctx, next) => {
    //     const path = ctx.path
    //     const methods = ctx.method
    //     ctx.body = `<span>Koa Render ${path} ${methods}</span>`
    //     await next() // 若不调用则不会向下执行其他中间件
    // })
    // server.use(router.routes())
    // server.use(async (ctx, next) => {
    //     ctx.body='<span>Koa Render2</span>'
    // })
    server.use(router.routes())
    server.use(async (ctx, next) => { // 中间见就是一个函数，在koa接收到请求后按use中的方法处理接受到的内容。
        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })

    server.listen(3000, () => {
        console.log('koa server listening at port 3000')
    })

})