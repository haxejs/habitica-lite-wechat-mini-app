var app = getApp();
Page({
    data:{
        difficulties: ["非常简单", "简单", "中等", "困难"],
        difficultyIndex: 0,
    },
    bindDifficultyChange: function(e) {
        console.log('picker difficulty 发生选择改变，携带值为', e.detail.value);

        this.setData({
            difficultyIndex: e.detail.value
        })
    }
});