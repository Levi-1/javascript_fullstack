const mysql = require('mysql')
const config = require('./default')

// 创建线程池

var pool = mysql.createPool({
    database: config.database.DATABASE,
    password: config.database.PASSWORD,
    user: config.database.USERNAME,
    port: config.database.PORT,
    host: config.database.HOST
})

// 统一链接执行语句

let allServices = {
    query: function (sql, values) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err)
                } else {
                    connection.query(sql, values, (err, res) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(res)
                        }
                        connection.release() // 释放连接池
                    })
                }
            })
        })
    }
}


module.exports = {
    allServices
}