// pages/starting/starting.js
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js')
var qqmapsdk = new QQMapWX({
  key: 'DHNBZ-2ZLKK-T7IJJ-AXSQW-WX5L6-A6FJZ'

})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 39.923374,
    longitude: 116.403164,
    scale: 16,
    address: '',
    bluraddress: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      type: "gcj02",
      success: (res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude,
          },
          success:  (res) => {
            console.log(res);
            // app.globalData.location = location
            this.setData({
              address: res.result.address,
              bluraddress: res.result.formatted_addresses.recommend
            });
          }
        })
      }
    })
  },
  bindregionchange (e) {
    //经纬度改变，lat lng会改变
    // 获得新地址？，mapctx
    console.log(e)
    var that = this
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.latitude, res.longitude)
        qqmapsdk.reverseGeocoder({
          loaction: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function(res) {
            that.setData({
              address: res.result.address,
              bluraddress: res.result.formatted_addresses.recommend
            })
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('didiMap')
    this.movetoPosition()
  },
  movetoPosition: function () {
    this.mapCtx.moveToLocation()
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