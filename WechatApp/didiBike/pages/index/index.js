// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:116.323066,//经度116.333374
    latitude:39.989956,//维度,40.009645
    scale:19
  },
  toUser(){

  }
  ,
  toMsg(){
    
  }
  ,
  toReset(){//回到起点
    this.mapCtx.moveToLocation();
  }
  ,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //微信赋予小程序可以调用的API
    wx.showLoading({
      title:'获取坐标中'
    })
    //获取手机的GPS
    wx.getLocation({
      type:'gcj02',
      success:(res) =>{
        console.log(res)
        let {longitude,latitude} = res//从res中获取longitude和latitude
        console.log(longitude,latitude)
        this.setData({//setData({},()=>)
          longitude,//变量名相同省略写
          latitude
        },()=>{
          wx.hideLoading()
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //地图js上下文环境对象
    this.mapCtx = wx.createMapContext('myMap')//将地图名传入api 创建地图对象
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})