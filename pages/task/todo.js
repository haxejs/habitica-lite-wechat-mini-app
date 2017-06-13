var app = getApp();
Page({
    data:{
        difficulties: ["非常简单", "简单", "中等", "困难"],
        difficultyIndex: 0,
        modalHidden:true,
        date: "2016-09-01",
        remindsDate: ["2016-09-01","2017-09-01"],
        remindsTime: ["12:01","13:01"]
    },
    modalChange: function(e) {
        this.setData({ modalHidden: true
    })},
    showRemindModal:function(e){
        this.setData({ modalHidden: false});
    },
    bindDateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
    },
    bindTimeChange: function (e) {
        console.log('picker time 发生选择改变，携带值为', e.detail.value);
    },
    bindDifficultyChange: function(e) {
        console.log('picker difficulty 发生选择改变，携带值为', e.detail.value);

        this.setData({
            difficultyIndex: e.detail.value
        })
    }
});