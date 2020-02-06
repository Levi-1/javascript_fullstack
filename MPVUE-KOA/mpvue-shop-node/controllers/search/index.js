const { mysql } = require('../../mysql')

// 添加搜索历史

async function addHistoryAction (ctx) {
    // const {openId, keyword} = ctx.request.body
    console.log(ctx.request.body)
    // const oldData = await mysql('nideshop_search_history').where({
    //     'user_id': openId,
    //     'keyword': keyword
    // })
    // if (oldData.length === 0) {
    //     const data = await mysql('nideshop_search_history').insert({
    //         'user_id': openId,
    //         'keyword': keyword,
    //         'add_time': parseInt(new Date().getTime()/1000)
    //     })
    //     if (data) {
    //         ctx.body = {
    //             data: 'success'
    //         }
    //     }
    //     else {
    //         ctx.body = {
    //             data: 'false'
    //         }
    //     }
    // }
    // else {
    //     ctx.body = {
    //         data: 'existed'
    //     }
    // }
}

// 获取搜索历史

async function indexAction (ctx) {
    const openId = ctx.query.openId // 传参的方式为路由拼接
    console.log(openId)
    // 默认关键字
    const defaultKeyWord = await mysql('nideshop_keywords').where({
        'is_default': 1
    }).limit(1).select()
    // 热门关键字
    const hotKeyWord = await mysql('nideshop_keywords').distinct('keyword').column('keyword','is_hot').limit(10).select()

    const historyData = await mysql('nideshop_search_history').where({
        'user_id': openId
    }).limit(10).select()
    ctx.body = {
        'defaultKeyWord': defaultKeyWord[0],
        'hotKeyWord': hotKeyWord,
        'historyData': historyData
    }
}

module.exports = {
    addHistoryAction,
    indexAction
}