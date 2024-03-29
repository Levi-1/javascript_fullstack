const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')
const utils = require('../controllers/utils')
 

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
  if (!username || !userpwd || !nickname) {
    ctx.body = {
      code: '10000',
      mess: '用户名密码昵称不能为空'
    }
  }
  await userService.findUser(username)
  .then(async(res) => {
    if (res.length) {
      ctx.body = {
        code: '10003',
        data: 'err',
        mess: '用户名已存在'
      }
      try {
        throw Error('用户名已存在')
      } catch (error) {
        console.log(error)
      }
    }
    else {
      await userService.insertUser([username, userpwd, nickname])
      .then((res) => {
        let r = ''
        if (res.affectedRows !== 0) {
          r = 'ok'
          ctx.body = {
            code: '200',
            data: r,
            mess: '注册成功'
          }
        }
        else {
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

// 根据分类名称查找笔记列表
router.post('/findNoteListBytype', async(ctx, next) => {
  let note_type = ctx.request.body.note_type
  await userService.findNoteListByType(note_type)
  .then(async(res) => {
    let r = ''
    if (res.length) {
      r = 'ok'
      ctx.body = {
        code: '200',
        data: res,
        mess: '查询成功'
      }
    }
    else {
      r = 'error'
      ctx.body = {
        code: '404',
        data: r,
        mess: '查询失败'
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

// 根据id查询对应笔记详情
router.post('/findNoteDetailById', async(ctx,next) => {
  let id = ctx.request.body.id
  await userService.findNoteDetailById(id)
  .then(async(res) => {
    let r = ''
    if (res.length) {
      r = 'ok'
      ctx.body = {
        code: '200',
        data: res[0],
        mess: '查询成功'
      }
    }
    else {
      r = 'false'
      ctx.body = {
        code: '404',
        data: r,
        mess: '查找失败'
      }
    }
  })
  .catch((err) => {
    ctx.body = {
      code: '800',
      data: err
    }
  })
})

// 发布笔记
router.post('/insertNote',async(ctx, next) => {
  let c_time = utils.getNowFormatDate()
  let m_time = utils.getNowFormatDate()
  let note_content = ctx.request.body.note_content
  let head_img = ctx.request.body.head_img
  let title = ctx.request.body.title
  let note_type = ctx.request.body.note_type
  let userId = ctx.request.body.userId
  let nickname = ctx.request.body.nickname
  await userService.insertNote([c_time, m_time, note_content, head_img, title, note_type, userId, nickname])
  .then((res) => {
    let r = ''
    if (res.affectedRows !== 0) {
      r = 'ok'
      ctx.body = {
        code: '200',
        data: r,
        mess: '发布成功'
      }
    }
    else {
      r = 'false'
      ctx.body = {
        code: '555',
        data: r,
        mess: '发布失败'
      }
    }
  })
  .catch((err) => {
    ctx.body = {
      code: '505',
      data: err
    }
  })

})


module.exports = router
