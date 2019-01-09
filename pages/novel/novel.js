// pages/novel/novel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    result: null,
    pics: null,
    hassearched: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var p = this;
    wx.request({
      url: 'https://www.apiopen.top/novelApi',
      data: {},
      success(res) {
        console.log(res.data.data)
        p.setData({
          pics: res.data.data
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (this.data.result == null) {
      this.setData({
        hassearched: false
      })
    }
  },

  inputEvent: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
    var that = this;
    wx.request({
      url: 'https://www.apiopen.top/novelSearchApi?name=' + that.data.inputValue,
      data: {},
      success(res) {
        console.log(res.data.data);
        if (res.data.data != null) {
          that.setData({
            result: res.data.data,
            hassearched: true
          })
        }
        else {
          that.setData({
            result: null,
            hassearched: false
          })
        }
      }
    })
  },

  click: function (e) {
    console.log(this.data.inputValue);

  },

  enterdetail: function (e) {
    console.log(e.currentTarget.dataset.name);
    wx.navigateTo({
      url: '../detail/detail?name=' + e.currentTarget.dataset.name,
    })
  },

  recommend: function (e) {
    console.log(e.currentTarget.dataset.bookname)
    wx.navigateTo({
      url: '../detail/detail?name=' + e.currentTarget.dataset.bookname,
    })
  }

})