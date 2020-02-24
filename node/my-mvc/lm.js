const Koa = require('koa')
const { initRouter, initController, initService } = require('./lm-loader')

class lm {
    constructor (conf) {
        this.$app = new Koa(conf)
        this.$service = initService()
        this.$ctrl = initController()  // 先初始化控制层否则初始化路由层时
        this.$router = initRouter(this)
        this.$app.use(this.$router.routes())
    }

    start (port) {
        this.$app.listen(port, () => {
            console.log('Server is running at port', port)
        
        })
    }
}

module.exports = lm