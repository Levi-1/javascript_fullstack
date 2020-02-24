// 加载controller中的目录和文件
const fs = require('fs') // 操作文件文件夹
const path = require('path')
const Router = require('koa-router')

function load (dir, cb) {
  // 获取绝对路径
  const url = path.resolve(__dirname, dir)
  // 读取目录
  const files = fs.readdirSync(url) // 读取目录
  // 遍历
  files.forEach(filename => {
    // 去除扩展名
    filename = filename.replace('.js', '')
    const file = require(url + '/' + filename)
    cb(filename, file)
  })


}


load('routes', filename => console.log('routes:' + filename))

// 加载路由
function initRouter (app) {
  const router = new Router()
  load('routes', (filename, routes) => {
    routes = typeof routes === 'function' ? routes(app) : routes // 在修改成func后返回的类型没变么？
    const prefix = filename === 'index' ? '' : `/${filename}`
    Object.keys(routes).forEach(key => {
      const [method, path] = key.split(' ') // [get, /]
      console.log('映射地址', method.toLocaleUpperCase(), prefix, path)
    
    // 注册路由
    // app.get('/', ctx => {})
    // router[method](prefix + path, routes[key]) // router.get('path', async ctx => {})
    router[method](prefix + path, async ctx => { // index的路由注册失败
      app.ctx = ctx
      await routes[key](app) // 将ctx通过app.ctx在router中的user.js中完成对页面的数据输出
    })
    })
  })
  return router
}

function initController () {
  const controllers = {}
  load('controller', (filename, controller) => {
    controllers[filename] = controller
  })
  return controllers
}


function initService () {
  const services = {}
  load('service', (filename, service) => {
    services[filename] = service
  })
  return services
}




module.exports = {
  initRouter,
  initController,
  initService
}

// initRouter()