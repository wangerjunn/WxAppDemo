//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '你好 再见',
    desc: '点击跳转新页面',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  //点击跳转新页面
  navigationToPage: function () {
    wx.showToast({
      title: '跳转新页面',
    }),
    wx.navigateTo({
      url: '../TestPages/TestPage'
    })
  },

  //点击内容
  clickContent: function () {
    wx.showToast({
      title: '点击内容',
    })
  },
  onLoad: function () {
    console.log('onLoad')
    wx.setNavigationBarTitle({
      title: '小标题',
    })
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
