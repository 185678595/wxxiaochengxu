// card.js
var obj=require("../../data/data.js")
Page({
  choseprice:function(e){
    this.setData({
      _num:e.currentTarget.dataset.num
    })
  },
  chosecard:function(e){
    this.setData({
      cardnum:e.currentTarget.dataset.index
    })
  },
  map:function(){
    wx.navigateTo({
      url: '/pages/map/map',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var id=options.id;

    var cl=options.class;

    this.setData({_num:0,card:obj.card,cardnum:0})

    if(cl=="coffee"){
      this.setData({
        info: obj.coffee[id],
        gift:obj.cardprice
      })
      wx.setNavigationBarTitle({
        title: obj.coffee[id].txt
      })
    }else{
      this.setData({
        info: obj.card[id],
        gift:obj.gift
      })
      wx.setNavigationBarTitle({
        title: obj.card[id].txt
      })
    }
    

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
  
  }
})