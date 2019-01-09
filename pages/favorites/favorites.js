// pages/favorites/favorites.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    uhide:0,
    favorites:null,
    hascol:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var fs = app.globalData.favorites;
    if(fs==null || fs.length==0){
      this.setData({
        hascol:false
      })
    }
    else{
      this.setData({
        hascol:true
      })
    }
    this.setData({
      favorites: fs
    })
  },

  addtap:function(e){
    console.log("addtap")
    wx.navigateTo({
      url: '../novel/novel',
    })
  },

  favtap:function(e){
    console.log(e.currentTarget.dataset.favorite)
    var favorite = e.currentTarget.dataset.favorite;
    if (this.data.uhide==favorite){
      this.setData({
        uhide:0
      })
    }
    else{
      this.setData({
        uhide:favorite
      })
    }
  },

  readtap:function(e){
    var title=e.currentTarget.dataset.favorite;
    wx.navigateTo({
      url: '../detail/detail?name=' + title,
    })
  },

  deltap:function(e){
    var title = e.currentTarget.dataset.favorite;
    var fs = app.globalData.favorites;
      for (var i = 0; i < fs.length; i++) {
        if (fs[i].title == title) {
          fs.splice(i,1);
          wx.showToast({
            title: '已删除',
            icon: 'success',
            duration: 1000
          })
          if(fs ==null || fs.length==0){
            this.setData({
              hascol:false
            })
          }
          this.setData({
            favorites:fs
          })
          return;
        }
      }
    wx.showToast({
      title: '删除失败',
      icon: 'fail',
      duration: 1000
    })
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
    this.setData({
      uhide: 0
    })
    var fs = app.globalData.favorites;
    if (fs == null || fs.length == 0) {
      this.setData({
        hascol: false
      })
    }
    else {
      this.setData({
        hascol: true
      })
    }
    this.setData({
      favorites: fs
    })
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