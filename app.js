//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (resLogin) {
          wx.getUserInfo({
            withCredentials:true,
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              wx.request({
                url: 'https://todos.haxejs.com:3000/api/v1/users/wxAppLogin',
                header: {'content-type': 'application/json'},
                method:'POST',
                data: {
                  code: resLogin.code,
                  encryptedData:res.encryptedData,
                  iv:res.iv
                }
              });
              typeof cb == "function" && cb(that.globalData.userInfo);
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})