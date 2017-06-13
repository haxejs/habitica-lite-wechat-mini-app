//logs.js
//var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  onShareAppMessage: function () {    
    return {      
        title: '习惯成就未来', 
        desc: '培养良好习惯，快来挑战自己吧',
        path: '/pages/achivement/achivement?userId=123' 
    }  
  },
  onLoad: function (options) {
    var that = this;
    console.log(options.userId);
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
