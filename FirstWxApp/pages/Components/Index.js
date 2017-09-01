// Index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   list:[{
     name:'视图容器',
     isOpen:false,
     pages:['view','scroll-view','swipe','movable-view','cover-view']
   }, {
     name: '基础内容',
     isOpen: false,
     pages: ['icon', 'text', 'rich-text', 'progress']
     }, {
       name: '表单组件',
       isOpen: false,
       pages: ['button', 'checkbox', 'form', 'input', 'label','picker','picker-view','radio','slider','switch','textarea']
   }, {
     name: '导航',
     isOpen: false,
     pages: ['navigator']
     }, {
       name: '媒体组件',
       isOpen: false,
       pages: ['audio', 'image', 'video']
   }, {
     name: '地图',
     isOpen: false,
     pages: ['map']
     }, {
       name: '画布',
       isOpen: false,
       pages: ['canvas']
     }]
  },
  clickHead: function () {
    wx.showToast({
      title: '点击了头视图',
    })
  },
  // 点击展开或者关闭view
  clickDisplayContent: function (e) {

    wx.showToast({
      title: '点击了false',
    })
    // if(e.currentTarget.isOpen == false) {
    //   wx.showToast({
    //     title: '点击了false',
    //   })
    // }else{
    //   wx.showToast({
    //     title: '点击了true',
    //   })
    // }
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
    console('ddd');
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
    wx.showToast({
      title: '点击了右上角按钮',
    })
  }
})