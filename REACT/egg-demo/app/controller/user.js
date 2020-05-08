'use strict'

const Controller = require('egg').Controller

class UserController extends Controller {
    async index() {
        const { ctx } = this
        console.log(ctx.service.user.getuser)
        const { title,content } = await ctx.service.user.getuser()
        ctx.body = {
            title,
            content
        }
        // const { username } = ctx.query //请求时携带的参数
        // ctx.body = username
    }
    async getId() {
        const { ctx } = this
        const { id } = ctx.params //请求时携带的参数
        ctx.body = id
    }
    async add() {
        const { ctx } = this
        const { username, userId } = ctx.request.body
        ctx.body = {
            username,
            userId
        }
    }
}

module.exports = UserController