// miniprogram/pages/index/index.js
import notify from '../dist/notify/notify'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newGroupModal: false,
    groupName: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  showNewGroupModal() {
    this.setData({
      newGroupModal: true
    })
  },
  closeDialog() {
    this.setData({
      newGroupModal: false
    })
  },
  onGroupNameChange(event) {
    console.log(event)
    this.setData({
      groupName: event.detail
    })
  },
  createGroup() {
    let self = this
    if (self.data.groupName == '') {
      notify({
        text: '请输入名称',
        duration: 1500,
        selector: '#notify-selector',
        backgroundColor: '#dc3545'
      })
      self.setData({
        newGroupModal: true
      })
      self.selectComponent('#new-group-modal').stopLoading()
      return
    }
    else {
      wx.cloud.callFunction({
        name: 'createGroup',
        data: {
          groupName: self.data.groupName
        },
        success(res) {
          self.setData({
            newGroupModal: false,
            groupName: ''
          })
          notify({
            text: '新建成功',
            duration: 1500,
            selector: '#notify-selector',
            backgroundColor: '#9AFF9A',
          })
        },
        fail(error) {
          console.log(error)
        }
      })
    }
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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