const config = require('./config')

var knex = require('knex') ({
    client: 'mysql',
    connection: {
        port: config.mysql.port,
        user: config.mysql.user,
        password: config.mysql.password,
        host: config.mysql.host,
        database: config.mysql.database
    }
})


// 将基础配置和sdk.config合并 导出初始化完成的sdk
module.exports = { mysql: knex }

