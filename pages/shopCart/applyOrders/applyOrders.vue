<template>
	<view class="container mb-flex mb-flex-column">
		<view class="pos-bg"></view>
		<template v-if="addressInfo">
			<view class="address mb-flex" @tap="changeAdress">
				<view class="lf">
					<view class="icon iconfont icondingwei"></view>
				</view>
				<view class="ad-info mb-form-item">
					<view class="ad-item mb-flex ">
						<view class="name">{{addressInfo.name}}</view>
						<view class="phone">{{addressInfo.mobile}}</view>
					</view>
					<view class="ad-item ad">收货地址</view>
					<view class="ad-item mb-flex">
						<view class="detail mb-form-item">{{addressInfo.detailAddress}}</view>
						<view class="icon iconfont iconjiantou"></view>
					</view>
				</view>
			</view>
		</template>
		<template v-else>
			<view class="no-adress mb-flex mb-flex-h-bt mb-flex-v-center" @tap="changeAdress">
				<view class="text">暂无收货地址,请添加...</view>
				<view class="icon iconfont iconjiantou"></view>
			</view>
		</template>
		<view class="pos-bg"></view>
		<scroll-view scroll-y class="scroll-ct mb-form-item">
			<view class="list">
				<block v-for="(item,index) in lists" :key="index">
					<view class="list-item mb-flex">
						<view class="pic">
							<image :src="item.picUrl" mode="scaleToFill"></image>
						</view>
						<view class="i-info mb-form-item">
							<view class="info-item tt">{{item.goodsName}}</view>
							<view class="info-item spec">规格:{{item.specs}}</view>
							<view class="info-item price">¥ {{item.unitPrice}}</view>
						</view>
					</view>
				</block>

			</view>
		</scroll-view>
		<view class="buy-btn mb-flex mb-flex-center">
			<button type="primary" class="coustom" hover-class="opt" @tap="bookOrders">提 交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressId: '',
				ids: '',
				id: '',
				addressInfo: '',
				lists: []
			};
		},
		onLoad(options) {
			if (options.parms) {
				this.ids = decodeURI(options.parms);
			}
			if(options.speId){
				this.speId = options.speId;
			}
			
		},
		onShow() {
			this.getDetail();
		},
		methods: {
			getDetail() {
				let data;
				if (uni.getStorageSync('addressId')) {
					this.addressId = uni.getStorageSync('addressId');
					try {
						uni.removeStorageSync('addressId');
					} catch (e) {
						// error
					}
				}
				if (this.ids) {
					data = {
						ids: this.ids,
						addressId: this.addressId
					}
				}else{
					data = {
						id: this.speId,
						addressId: this.addressId
					}
				}
				this.$http.request({
					url: this.$api.AppointOrders,
					data: data
				}).then(res => {
					let data = res.data;
					this.addressInfo = data.address_info;
					this.addressId = data.address_info.id || '';
					this.lists = data.goodsBuy;
				})
			},
			async  bookOrders(){
				if(!this.addressId){
					this.$pop.msg('请选择收货地址!!!')
					return;
				}
				let data,_this = this;
				if(this.ids){
					data = {
						cartId: 0, 
						addressId: _this.addressId
					}
				}else{
					data = {
						productId: _this.lists[0].specId, 
						addressId: _this.addressId
					}
				}
				let res = await this.$http.request({
					url:this.$api.BookOrder,
					data:data,
					method:'POST'
				})
				this.$pop.msg('订单提交成功!!')
				uni.navigateBack({
					
				});
				
			},
			changeAdress() {
				uni.navigateTo({
					url: '/pages/mine/address/addressManger/addressManger'
				})
			}
		}
	}
</script>

<style lang="scss">
	page,
	.container {
		width: 100%;
		height: 100%;
		font-size: 28upx;
	}

	.address {
		padding: 30upx;

		.lf {
			width: 70upx;
			color: #ccc;

			.icon {
				font-size: 48upx;
				color: #2574EB;
			}
		}

		.ad-info {
			.ad-item {
				width: 100%;

				.name {
					margin-right: 20upx;
					font-weight: 600;
				}

				&.ad {
					margin: 14upx 0;
					color: red;
				}

				.icon {
					font-size: 56upx;
					margin-left: 20upx;
					line-height: 32upx;
					color: #ccc;
				}
			}
		}
	}

	.no-adress {
		height: 80upx;
		padding: 0 30upx;

		.icon {
			font-size: 56upx;
			color: #ccc;
		}
	}

	.scroll-ct {
		height: 0;

		.list {
			padding: 30upx;

			.list-item {
				margin-bottom: 20upx;

				.pic {
					margin-right: 20upx;

					image {
						height: 190upx;
						width: 190upx;
					}
				}

				.i-info {
					width: 0;

					.tt {
						font-size: 30upx;
						font-weight: 600;
					}

					.spec {
						margin: 18upx 0;
					}

					.price {
						color: red;
						font-weight: 600;
					}
				}
			}
		}
	}

	.buy-btn {
		height: 160upx;
		padding: 0 50upx;

		.coustom {
			width: 100%;
			height: 68upx;
			line-height: 68upx;
			text-align: center;
			color: #fff;
			background: #2574EB;

			&.opt {
				opacity: .8;
			}
		}
	}
</style>
