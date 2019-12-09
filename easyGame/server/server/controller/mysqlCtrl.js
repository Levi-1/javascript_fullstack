const concted = require('./mysqlConfig')

// mysql操作定义

// 登录 
let login = function (username, password) {
    let _sql = `select * from users where username="${username}" and password="${password}"`
    return concted.allServices.query(_sql)
}

// 查询用户是否已存在
let checkUser = function (username) {
    let _sql = `select * from users where username="${username}"`
    return concted.allServices.query(_sql)
}

// 注册 
let register = function (value) {
    let _sql = `insert into users set username=?,password=?`
    return concted.allServices.query(_sql, value)
}

module.exports = {
    login,
    checkUser,
    register
}