// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'lesvi'

cloud.init()
//获取数据库句柄
const db = cloud.database({env})
// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo
  return await db.collection('group').add({//库名
    data:{
      name:event.groupName,
      createBy:userInfo.openID,
      createTime:new Date(),
      delete:false,
      updateTime:new Date()
    }
  })
    .then(res => {
      return db.collection('user-group').add({
        data: {
          groupId: res._id,
          userId: userInfo.openId,
          invalid: false
        }
      })
    })
}