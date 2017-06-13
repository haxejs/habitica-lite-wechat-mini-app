var app = getApp();
Page({
    data:{
        date: "2016-09-01",
        modalHidden:false
    },
    modalChange: function(e) {
        this.setData({ modalHidden: true
    })},
    bindDateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
    }
});