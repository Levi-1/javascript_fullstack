module.exports =  {
    'get /': async (app) => {
        const name = await app.$service.user.getName()
        app.ctx.body = '用户' + name // 通过app中获得的ctx，将数据输出到页面的过程完成。
    },
    'get /detail': app => {
        app.ctx.body = '用户年龄' + app.$service.user.getAge()
    }
}