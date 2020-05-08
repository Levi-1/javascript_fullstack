'use strict';

const Service = require('egg').Service

class UserService extends Service {
    async getuser() {
        return{
            title: '查询user',
            content: 'user信息'
        }
    }
}

module.exports = UserService