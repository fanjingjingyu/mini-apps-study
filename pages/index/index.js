// pages/index/index.js
Page({ // 注册当前页面的

  /**
   * 页面的初始数据
   */
  data: {
		msg: '2222北方汉子',
		userInfo: null
  },
	handleClick(){
		// 点击跳转页面
		wx.redirectTo({
			url: '/pages/list/list'
		})
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log(this);
		// console.log('页面加载');
		// 获取用户的登录信息
		wx.getUserInfo({
			success: (data) => {
				console.log(this, data);
				// 修改data中额数据
				this.setData({
					userInfo: data.userInfo
				})
			}
		})

	
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