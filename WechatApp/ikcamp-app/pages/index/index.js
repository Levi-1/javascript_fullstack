//index.js
//获取应用实例
const app = getApp()
const articleList = require('./articleList.js')
Page({
  data: {
    articleList: articleList
  },
  gotoDetail: function(){
    wx.navigateTo({
      url:'../detail/index'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  requestArticle(){
    wx.request({
      url:'http://static.zhaoboy.com/ikcamp-mock/list.json',
      success:(res)=>{//回调函数
        console.log(res)
      }
    })
  },
  onLoad: function () {
    // this.requestArticle()
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
