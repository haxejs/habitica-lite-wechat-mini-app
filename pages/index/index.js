//index.js
//获取应用实例
var app = getApp();

var sliderWidth = 96; 
// 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        userInfo: {},
        modalHidden:true,
        tabs: ["习惯", "每日任务", "待办事项", "奖励"],
        activeIndex: 1,
        sliderOffset: 0,
        sliderLeft: 0,
        windowWidth: 0,
        windowHeight:0
    },
    //事件处理函数
    bindViewTap: function() {
      wx.navigateTo({
        url: '../achivement/achivement?userId=xxxx'
      })
    },
    bindAddTap: function() {
      var urls = ['../task/habit','../task/daily','../task/todo','../task/award'];
      wx.navigateTo({
        url: urls[this.data.activeIndex]
      })
    },
    bindEditName: function() {
      this.setData({ modalHidden: false});
    },
    modalChange: function(e) {
        this.setData({ modalHidden: true
    })},
    onLoad: function () {
        var that = this;
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo){
          //更新数据
          that.setData({
            userInfo:userInfo
          })
        });
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
                    windowWidth:res.windowWidth,
                    windowHeight:res.windowHeight
                });
            }
        });
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    swiperChange:function(e){
        console.dir(e.detail);
        console.log(this.data.windowWidth);
        this.setData({
            sliderOffset:(this.data.windowWidth / this.data.tabs.length) * e.detail.current,
            activeIndex:e.detail.current
        });
    }
});