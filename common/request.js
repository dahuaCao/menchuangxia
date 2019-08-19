import config from './config.js'

export default {
	config: {
		header: {
			'Content-Type': 'application/json;charset=UTF-8',
			// 'Content-Type':'application/x-www-form-urlencoded'
		},
		data: {},
		method: "GET",
		dataType: "json",
	},
	request(options = {}) {
		options.header = options.header || this.config.header;
		options.method = options.method || this.config.method;
		// options.dataType = options.dataType || this.config.dataType;
		// TODO：token增加等操作
		if (options.token) {
			// 验证用户是否登录
			if (!this.checkToken(options.checkToken)) return;
			// 验证用户操作权限（验证是否绑定手机号码）
			if (!this.checkAuth(options.checkAuth)) return;
		}
		if (uni.getStorageSync('X-MCB-Token')) {
			options.header['X-MCB-Token'] = uni.getStorageSync('X-MCB-Token');
		}
		// return uni.request(options);
		
		return new Promise((resolve, reject) => {
			uni.showLoading({
				title: '加载中',
				// mask:true
			});
			uni.request({
				url: options.url,
				header: options.header,
				method: options.method,
				data: options.data || '',
				success: function(res) {
					resolve(res.data)
				},
				fail: function(err) {
					reject(err)
				},
				complete: function() {
					uni.hideLoading()
				}
			})
		})

	},
	// 验证用户是否登录
	checkToken(checkToken) {
		if (checkToken && !User.token) {
			uni.showToast({
				title: '请先登录',
				icon: "none"
			})
			uni.navigateTo({
				url: '/pages/login/login'
			});
			return false;
		}
		return true;
	},
	// 验证用户权限
	checkAuth(checkAuth) {
		if (checkAuth && !User.userinfo.phone) {
			uni.showToast({
				title: '请先绑定手机号码',
				icon: "none"
			})
			uni.navigateTo({
				url: '/pages/user-bind-phone/user-bind-phone'
			});
			return false;
		}
		return true;
	}

}
