const  { mysql } = require('../../mysql')

module.exports = async (ctx) => {
    // 获取轮播图数据
    const banner = await mysql('nideshop_ad').where({
        ad_position_id: 1
    }).select()
    // 获取分类的数据
    const channel = await mysql('nideshop_channel').select()
    // 获取brand的数据
    const brand = await mysql('nideshop_brand').where({
        is_new: 1
    }).orderBy('new_sort_order', 'asc').limit(4).select()
    // 新品首发
    const newGoods = await mysql('nideshop_goods').where({
        is_new: 1
    }).orderBy('id','asc').limit(5).select()
    // 人去推荐
    const hotGoods = await mysql('nideshop_goods').column('id', 'name', 'list_pic_url', 'retail_price', 'goods_brief').where({
        is_hot: 1
    }).limit(5).select()
    // 专题精选
    const topicList = await mysql('nideshop_topic').limit(3).select()
    // 好物列表
    const categoryList = await mysql('nideshop_category').where({
        parent_id: 0
    }).select()
    const newCategoryList = []

    for( let i = 0; i < categoryList.length; i++) {
        let item = categoryList[i]
        let childCategoryIds = await mysql('nideshop_category').where({
            parent_id: item.id
        }).column('id').select()
        childCategoryIds = childCategoryIds.map((item) => {
            return item.id
        })
        const categoryGoods = await mysql('nideshop_goods').column('id', 'name', 'list_pic_url', 'retail_price').whereIn('category_id', childCategoryIds).limit(7).select()
        newCategoryList.push({
            'id': item.id,
            'name': item.name,
            'goodsList': categoryGoods
        })
    }

    ctx.body = {
        'banner': banner,
        'channel': channel,
        'brand': brand,
        'newGoods': newGoods,
        'hotGoods': hotGoods,
        'topicList': topicList,
        'newCategoryList': newCategoryList
    }
}



