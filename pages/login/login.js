// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: null,
    password: null,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  accountEvent: function (e) {
    this.setData({
      account: e.detail.value
    })
  },

  passwordEvent: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  click: function (e) {
    console.log('账号：' + this.data.account + '密码：' + this.data.password)
  }

})