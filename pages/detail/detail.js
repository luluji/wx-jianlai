// pages/detail/detail.js
//获取应用实例
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    hasdata:true,
    novelname:null,
    title:null,
    author:null,
    category:null,
    cover:null,
    desc:null,
    first_chapter:null,
    tags:null,
    first_chapter:null,
    latest_chapter:null,
    sp:"    "
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.name+' ok');
    this.setData({
      novelname:options.name
    });
    var that=this;
    wx.request({
      url: 'https://www.apiopen.top/novelInfoApi?name='+that.data.novelname,
      success(res){
        console.log(res.data);
        var t = res.data.data;
        if(t!=null && t.aladdin!=null){
          var d=t.aladdin;
          if(d!=null && d.title!=null && d.author!=null && d.desc!=null){
            that.setData({
              hasdata:true,
              title: d.title,
              author: d.author,
              category: d.category,
              cover: d.cover,
              tags: d.tags,
              desc: that.data.sp + d.desc,
              first_chapter: d.first_chapter,
              latest_chapter: d.latest_chapter,
            })
          }
          else{
            that.setData({
              hasdata:false
            })
          }
        }
        else {
          that.setData({
            hasdata: false
          })
        }
      }
    })
  },

  coltap:function(e){
    var json = {title:this.data.title,author:this.data.author,cover:this.data.cover,desc:this.data.desc};
    console.log("json");
    console.log(json);
    console.log(app.globalData.favorites);
    var fs = app.globalData.favorites;
    if (fs!=null ){
      var hascol=false;
      for(var i=0;i<fs.length;i++){
        if(fs[i].title==json.title){
          hascol=true;
          break;
        }
      }
      if(hascol){
        wx.showToast({
          title: '已收藏',
          icon: 'success',
          duration: 1000
        })
      }
      else{
        app.globalData.favorites.push(json);
        wx.showToast({
          title: '收藏成功',
          icon: 'success',
          duration: 1000
        })
      }
    }
    else{
      app.globalData.favorites = [];
      app.globalData.favorites.push(json);
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        duration: 1000
      })
    }
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