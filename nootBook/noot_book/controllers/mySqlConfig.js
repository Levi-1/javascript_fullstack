var mysql = require('mysql')
var config = require('./defaultConfig')

// 创建线程池
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

// 统一链接数据库的方法
let allServies = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release() //释放连接池
          })
        }
      })
    })
  }
}

//读取所有user表数据，测试数据连接
let getAllUsers = function () {
  let _sql = `select * from users`
  return allServies.query(_sql)
}

// 用户登录
let userLogin = function (username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
  return allServies.query(_sql)
}

// 查找用户
let findUser = function (username) {
  let _sql = `select * from users where username="${username}";`
  return allServies.query(_sql)
}

// 注册用户
let insertUser = function (value) {
  let _sql = `insert into users set username=?,userpwd=?,nickname=?;`
  return allServies.query(_sql, value)
}

// 根据分类名称查找笔记列表
let findNoteListByType = function (note_type) {
  let _sql = `select * from note where note_type="${note_type}"`
  return allServies.query(_sql)
}

// 根据id查找对应的笔记详情
let findNoteDetailById = function (id) {
  let _sql = `select * from note where id="${id}"`
  return allServies.query(_sql)
}

// 发布笔记
let insertNote = function (option) {
  let _sql = `insert into note set c_time=?,m_time=?,note_content=?,head_img=?,title=?,note_type=?,useId=?,nickname=?`
  return allServies.query(_sql, option)
}

module.exports = {
  getAllUsers,
  userLogin,
  findUser,
  insertUser,
  findNoteListByType,
  findNoteDetailById,
  insertNote
}