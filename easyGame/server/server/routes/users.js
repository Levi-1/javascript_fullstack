const router = require('koa-router')()
const userService = require('../controller/mysqlCtrl')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

// 用户登录
router.post('/login', async(ctx, next) => {
  let username = ctx.request.body.username
  let password = ctx.request.body.password
  await userService.login(username, password).then((res) => {
    if (res.length) {
      ctx.body = {
        code: '200',
        data: res,
        mess: '登录成功'
      }
    } else {
      ctx.body = {
        code: '505',
        data: 'false',
        mess: '登录失败'
      }
    }
  })
  .catch((err) => {
    ctx.body = {
      code: '404',
      data: err,
      mess: 'error'
    }
  })

})

// 用户注册

module.exports = router
