// pages/calculator/calculator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dis: '输入',
    op: null,
    result:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  add:function(e){
    var sum = e.detail.value+this.data.result;
    this.setData({
      result: e.detail.value,
      op:1,
      dis: e.detail.value+"+"
    })
  },
  sub:function(e){
    var sum = e.detail.value + this.data.result;
    this.setData({
      result: sum,
      op: 1,
      dis: "+"
    })
  },
  mul:function(e){
    var sum = e.detail.value + this.data.result;
    this.setData({
      result: sum,
      op: 1,
      dis: "+"
    })
  },
  div:function(e){
    var sum = e.detail.value + this.data.result;
    this.setData({
      result: sum,
      op: 1,
      dis: "+"
    })
  },
  num0:function(e){

  },
  num1: function (e) {

  },
  num2: function (e) {

  },
  num3: function (e) {

  },
  num4: function (e) {

  },
  num5: function (e) {

  },
  num6: function (e) {

  },
  num7: function (e) {

  },
  num8: function (e) {

  },
  num9: function (e) {

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