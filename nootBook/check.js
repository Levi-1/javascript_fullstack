const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')

router.prefix('/users') //路由前缀

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/all', async(ctx, next) => {
  await userService.getAllUsers()
  .then((res) => {
    console.log('打印结果' + JSON.stringify(res))
    ctx.body = res
  })
})

// 登录
router.post('/userLogin', async(ctx, next) => {
  var _username = ctx.request.body.username
  var _userpwd = ctx.request.body.userpwd

  await userService.userLogin(_username, _userpwd)
  .then((res) => {
    let r = '';
    // console.log(res)
    if (res.length) {
      r = 'ok';
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {
        code: '200',
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error';
      ctx.body = {
        code: '404',
        data: r,
        mess: '账号或密码错误'
      }
    }
  })
  .catch((err) => {
    ctx.body = {
      code: '500',
      data: err
    }
  })
})

// 注册
router.post('/userRegister', async(ctx, next) => {
  var username = ctx.request.body.username
  var userpwd = ctx.request.body.userpwd
  var nickname = ctx.request.body.nickname
  if (!username||!userpwd||!nickname) {
    ctx.body = {
      code: '80000',
      mess: '账号，密码，昵称不能为空'
    }
  }
  let user = {
    username: username,
    userpwd: userpwd,
    nickname: nickname
  }

  await userService.findUser(user.username)
  .then(async (res) => {
    console.log(res)
    if (res.length) {
      try {
        throw Error('用户名已存在')
      } catch (error) {
        console.log(error) 
      }
      ctx.body = {
        code: '80003',
        data: 'err',
        mess: '用户名已存在'
      }
    } else {
      await userService.insertUser([user.username, user.userpwd, user.nickname])
      .then((res) => {
        // console.log(res)
        let r = ''
        if (res.affectedRows !== 0) {
          r = 'ok'
          ctx.body = {
            code: '200',
            data: r,
            mess: '注册成功'
          }
        } else {
          r = 'error'
          ctx.body = {
            code: '500',
            data: r,
            mess: '注册失败'
          }
        }
      })
      .catch((err) => {
        ctx.body = {
          code: '500',
          data: err
        }
      })
    }
  })
})

module.exports = router