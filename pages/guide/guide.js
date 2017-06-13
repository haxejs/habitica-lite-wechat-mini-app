var app = getApp();

Page({
  data: {
    guides: [
      'Guide-1', 
      'Guide-2', 
      'Guide-3'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  //事件处理函数
  bindEnterTap: function() {
    wx.redirectTo({
      url: '../index/index'
    })
  },
  onLoad: function () {
    console.log('onLoad');
  }
});