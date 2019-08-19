<template>
	<view>
		<!-- #ifdef MP -->
		<view class="mp-login mb-flex mb-flex-column ">
			<view class='header mb-flex mb-flex-center'>
				<view class='img'></view>
			</view>
			<view class='content'>
				<view>申请获取以下权限</view>
				<text>获得你的公开信息(昵称，头像等)</text>
			</view>

			<view class="botton-btn">
				<button type='primary' class="radius" open-type="getUserInfo" @getuserinfo="wxGetUserInfo">授权登录</button>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<view class="app-login mb-flex mb-flex-column">
			<view class="logo">
				<image src="../../static/login_bg.png" mode="scaleToFill"></image>
			</view>
			<view class="login-form mb-flex mb-flex-column">
				<form @submit="formSubmit" @reset="formReset">
					<view class="mb-form-item">
						<view class="mb-flex border-bottom mb-flex-v-center">
							<input class="mb-input " placeholder="请输入电话号码" v-model="mobileCode" type="number" name="mobile"  @input="clearInput" cursor-spacing="30" />
							<view class="icon iconfont iconguanbi mb-icon " v-if="showClearIcon" @click="clearIcon"></view>
						</view>
					</view>
					<view class="mb-form-item mb-flex mb-flex-v-center">
						<view class="mb-flex border-bottom  mb-form-item mb-flex-v-center">
							<input class="mb-input " placeholder="请输入验证码" v-model="yzCode" name="code" :password="showPassword" type="number" cursor-spacing="30"/>
							<view class="uni-icon uni-icon-eye " :class="[!showPassword ? 'uni-active' : '']" @click="changePassword"></view>
						</view>
						<view class="login-yanz mb-flex mb-flex-v-center">
							<!-- <view>获取验证码</view> -->
							<button class="yz-btn" @tap="getCode" :disabled="disabled">{{countdown}} <text v-show="timestatus">秒重获</text></button>
						</view>
					</view>
					<view class="mb-form-item form-btn">
						<button type="primary" formType="submit">登 陆</button>
					</view>
				</form>
				
			</view>
			<view class="auth-login mb-flex mb-flex-center mb-form-item">
				<view class="weixin-login mb-flex mb-flex-column mb-flex-center"  @click="getuserinfo">
					<view class="icon iconfont iconweixinhaoyou weixin-icon"></view>
					<view class="text">微信登陆</view>
				</view>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import Utils from '../../common/utils.js'
	export default {
		data() {
			return {
				
				// isCanUse: uni.getStorageSync('isCanUse')||true//默认为true
				// #ifdef APP-PLUS
				mobileCode:'',
				showClearIcon: false,
				showPassword: true,
				timestatus: false,
				disabled: false,
				countdown: '获取验证码',
				clear: '',
				yzCode:''
				// #endif
			};
		},
		onLoad() {
			console.log(1231)
		},
		onShow() {
			// #ifdef MP
			this.getAuth();
			// #endif
		},
		methods: {
			// #ifdef APP-PLUS
			clearInput: function(event) {
				if (this.mobileCode.length > 0) {
					this.showClearIcon = true;
				} else {
					this.showClearIcon = false;
				}
			},
			clearIcon: function() {
				this.mobileCode = '';
				this.showClearIcon = false;
			},
			changePassword: function() {
				this.showPassword = !this.showPassword;
			},
			formSubmit: function(e) {
				let dataParams = e.detail.value;
				if(!dataParams.mobile){
					uni.showToast({
					    title: '请输入手机号码',
					    icon: 'none'
					});
					return;
				}
				if(!dataParams.code){
					uni.showToast({
					    title: '请输验证码',
					    icon: 'none'
					});
					return;
				}
				this.mobileLogin(dataParams);
			},
			mobileLogin(data){
				this.$http.request({
					url:this.$api.AuthLoginByMobile,
					data:data,
					method:'POST'
				}).then(res =>{
					//本地存储token
					uni.setStorageSync("X-MCB-Token", res.data.token);
					uni.switchTab({
						"url": "/pages/home/index/index"
					});
				})					
			},	
			getuserinfo() {
				console.log('APP微信登录')
				let _this = this;
				uni.getProvider({
					service: 'oauth',
					success: function(res) {
						console.log(JSON.stringify(res))
						if (~res.provider.indexOf('weixin')) {
							uni.login({
								provider: 'weixin',
								success: function(loginRes) {
									// console.log("loginRes: " + JSON.stringify(loginRes));
									//获取用户信息
									uni.getUserInfo({
										provider: 'weixin',
										success:function (res) {
											// console.log("resxinx: " + JSON.stringify(res));
											let useInfo = Object.assign({access_token:loginRes.authResult['access_token']},JSON.parse(res.rawData))
											console.log("useInfo: " + JSON.stringify(useInfo));
											_this.userLogin(JSON.stringify(useInfo),loginRes.code)
										}
									})
// 									uni.switchTab({
// 										"url": "/pages/home/index/index"
// 									});
								}
							});

						}
					}
				})
			},
			getCode() {
				let _this = this;
				if(!this.mobileCode){
					uni.showToast({
                        title: '请输入手机号码',
                        icon: 'none'
                    });
					return;
				}
				if(!Utils.isMobile.test(_this.mobileCode)){
					uni.showToast({
					    title: '手机号码错误',
					    icon: 'none'
					});
					return;
				}
				
				this.countdown = 60;
				this.timestatus = true;
				this.disabled = true;
				this.clear = setInterval(_this.countDown, 1000)

			},
			countDown() {
				let _this = this;
				if (!this.countdown) {
					this.disabled = false;
					this.timestatus = false;
					this.countdown = '获取验证码';
					clearInterval(_this.clear)
				} else {
					--this.countdown;
				}
			},
			// #endif
			// #ifdef MP
			getAuth() {
				let _this = this;
				uni.getSetting({
					success(res) {
						if (res.authSetting['scope.userInfo']) {
							uni.login({
								provider: 'weixin',
								success(res1) {
									uni.getUserInfo({
										provider: 'weixin',
										success(res) {
											console.log(res)
											_this.userLogin(res.rawData, res1.code,res.encryptedData,res.iv);
										}
									})
								}
							})
						} else {
							// _this.checkAuth();
						}
					}
				})
			},
			wxGetUserInfo(res) {
				console.log(res)
				let _this = this;
				if (res.detail.errMsg == "getUserInfo:ok") {
					uni.login({
						provider: 'weixin',
						success(res1) {
							_this.userLogin(res.detail.rawData, res1.code,res.detail.encryptedData,res.detail.iv);
						}
					})

				}
			},
			checkAuth() {
				let _this = this;
				uni.showModal({
					content: '请开启微信授权登陆',
					cancelText: '取消',
					confirmText: '授权',
					success(res) {
						if (res.confirm) {
							console.log('用户点击了确认')
						} else {
							console.log('用户点击了取消')
						}
					}
				});
			},
			
			// #endif
			userLogin(userInfo, code='',signature='',iv='') {
				
				let _this = this;
				_this.$http.request({
					method: 'POST',
					url: _this.$api.AuthLoginByWeixin,
					data: {
						code: code,
						userInfo: JSON.parse(userInfo),
						signature:signature,
						iv:iv,
						recommendId: ''
					}
				}).then(res => {
					//本地存储token
					console.log(res)
					if(res.errno != '-1'){
						uni.setStorageSync("X-MCB-Token", res.data.token);
						uni.switchTab({
							"url": "/pages/home/index/index"
						});
					}
					
				})
			
			
			}

		}

	}
</script>

<style lang="scss">
	pages {
		width: 100%;
		height: 100%;
	}

	/* #ifdef MP */
	.mp-login {
		padding: 0 30upx;

		.header {
			border-bottom: 1px solid #ccc;
			height: 320upx;
			width: 100%;

			.img {
				width: 200upx;
				height: 200upx;
				background: blueviolet;
				border-radius: 14upx;
			}
		}

		.content {
			padding-top: 60upx;

			view {
				margin-bottom: 40upx;
			}

			text {
				color: #9d9d9d;
			}
		}

		.botton-btn {
			margin-top: 90upx;
			width: 100%;

			.radius {
				// border-radius: 40upx;
			}
		}

	}

	/* #endif */
	/* #ifdef APP-PLUS */
	.app-login{
		height: 100%;
		width: 100%;
	}
	.logo {
		height: 600upx;
		width: 100%;

		image {
			height: 100%;
			width: 100%;
		}
	}

	.login-form {
		width: 600upx;
		margin: 20upx auto;

		.border-bottom {
			border-bottom: 1upx solid #999;
		}

		.login-yanz {
			margin-left: 10upx;
			color: #1296DB;

			.yz-btn {
				width: 180upx;
				height: 76upx;
				font-size: 24upx;
				line-height: 76upx;
			}
		}

		.icon-custom {
			position: relative;
			left: -20upx;
		}

		.form-btn {
			margin-top: 30upx;
		}
	}
	.auth-login{
		height: 300upx;
		.weixin-login {
			width: 200upx;
			height: 140upx;
			// position: absolute;
// 			bottom: 180upx;
// 			left: 50%;
// 			transform: translateX(-50%);
			color: #2A2B2D;
		
			.weixin-icon {
				font-size: 88upx;
				color: #30AD37;
				margin-bottom: -10upx;
			}
			.text{
				font-size: 36upx;
				margin-top: 10upx;
			}
		}
	}
	

	/* #endif */
</style>
