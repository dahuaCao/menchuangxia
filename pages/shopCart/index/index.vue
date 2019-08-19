<template>
	<view class="cart-content">
		<template v-if="cartLists.length > 0">
			<view class="cart mb-flex mb-flex-column">
				<view class="pos-bg "></view>
				<view class="t-hd">共选中{{totalSelect}}件商品</view>
				<scroll-view class="cart-s mb-form-item " scroll-y>
					<view class="cart-list">
						<block v-for="(item,index) in cartLists" :key="index">
							<view class="cart-item mb-flex">
								<view class="checked" @tap="changeCheck(index)">
									<view v-if="!item.checked" class="circle"></view>
									<view v-else class="icon iconfont iconradio"></view>
								</view>
								<view class="i-c mb-form-item " @tap="goDetail(item.goodsId)">
									<view class="tit mb-flex mb-flex-v-center">
										<view class="tt mb-form-item">{{item.goodsName}}</view>
										<view class="del-btn" hover-class="opt" @tap.stop="delItem(item.id)">删除</view>
									</view>
									<view class="tc mb-flex">
										<view class="img">
											<img :src="item.picUrl" alt="">
										</view>
										<view class="des mb-flex mb-flex-column mb-flex-h-bt">
											<view class="spec">{{item.specs}}</view>
											<view class="price">¥{{item.unitPrice}}</view>
										</view>
									</view>
								</view>
							</view>
						</block>
					</view>
				</scroll-view>
				<view class="bottom mb-flex mb-flex-v-center mb-flex-h-bt">
					<view class="ck mb-flex mb-flex-v-center" @tap="selectAll">
						<view class="radio">
							<view v-if="!isCheckAll" class="circle"></view>
							<view v-else class="icon iconfont iconradio"></view>
						</view>
						<view class="">全选</view>
					</view>
					<view class="btn" hover-class="opt" @tap="AppointOrder">预约下单</view>
				</view>
			</view>
		</template>
		<template v-else>
			<view class="empt-cart mb-flex mb-flex-column mb-flex-center">
				<text class="iconfont iconwudingdan" style='font-size:200rpx;margin-bottom:20rpx;'></text>
				<view>
					<text>购物车空空,请移步商品中心..</text>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	import Utils from '@/common/utils.js';
	export default {
		data() {
			return {
				isCheckAll: true,
				cartLists: []
			};
		},
		onLoad() {
			
		},
		onShow() {
			this.getCarts();
		},
		methods: {
			getCarts() {
				this.$http.request({
					url: this.$api.CartLists
				}).then(res => {
					let data = res.data;
					this.cartLists = data.cartList;
				})
			},
			changeCheck(index) {
				this.cartLists[index].checked = this.cartLists[index].checked ? 0 : 1;
				if (this.checkAll()) {
					this.isCheckAll = true;
				} else {
					this.isCheckAll = false;
				}
			},
			checkAll() {
				return this.cartLists.every(function(item) {
					return !!item.checked;
				})
			},
			selectAll() {
				this.isCheckAll = !this.isCheckAll;
				let selectType = this.isCheckAll ? 1 : 0;
				this.cartLists.forEach(function(item) {
					item.checked = selectType;
				})
			},
			delItem:Utils.debounce(function(id){
				let _this = this;
				uni.showModal({
					title: "温馨提示",
					content: "确定要删除此件商品吗?",
					success(res) {
						if (res.confirm) {
							_this.$http.request({
								url:_this.$api.CartDelete,
								data:{
									cartId:id
								}
							}).then(res => {
								_this.getCarts();
							})
						}
					}
				})
			},500),
			AppointOrder:Utils.debounce(function(){
				let checkIds = [];
				this.cartLists.forEach(function(item){
					if(item.checked){
						checkIds.push(item.id)
					}
				});
				if(checkIds.length > 0){
					checkIds = checkIds.join(',');
				}else{
					this.$pop.msg('请选择合适商品!!')
					return;
				}
				console.log(checkIds)
				uni.navigateTo({
					url:'../applyOrders/applyOrders?parms=' +  encodeURI(checkIds)
				})
			},500),
			goDetail(id){
				uni.navigateTo({
					url:'/pages/product/productDetail/productDetail?id=' +id
				})
			}
		},
		computed: {
			totalSelect() {
				let num = 0;
				this.cartLists.forEach((item) => {
					if (item.checked) {
						num++;
					}
				})
				return num;
			}
		}
	}
</script>

<style lang="scss">
	page,
	.cart-content {
		height: 100%;
		width: 100%;
		font-size: 28upx;
	}

	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	.cart {
		height: 100%;
		width: 100%;

		.t-hd {
			height: 80upx;
			line-height: 80upx;
			padding: 0 30upx;
			color: #FE0000;
		}

		.cart-s {
			height: 0;

			.cart-list {
				padding-top: 10upx;

				.cart-item {
					height: 336upx;
					box-shadow: 0px 0px 4upx 0px rgba(0, 0, 0, 0.18);
					margin-bottom: 28upx;
					padding: 30upx;

					.checked {
						width: 40upx;

						// background: gainsboro;
						.circle {
							width: 30upx;
							height: 30upx;
							border: 1px solid #ccc;
							border-radius: 100%;
						}

						.icon {
							font-size: 40upx;
							position: relative;
							left: -2upx;
							top: -4upx;
							color: #FF0000;
						}
					}

					.i-c {
						width: 0;

						.tit {
							.tt {
								width: 0;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
								font-size: 30upx;
								font-weight: 600;
							}

							.del-btn {
								margin-left: 10upx;
								width: 104upx;
								height: 48upx;
								background: #FF0000;
								border-radius: 6upx;
								line-height: 48upx;
								text-align: center;
								color: #fff;

								&.opt {
									opacity: .7;
								}
							}
						}

						.tc {
							margin-top: 12upx;

							.img {
								margin-right: 14upx;

								image {
									height: 190upx;
									width: 190upx;
								}
							}

							.des {
								height: 190upx;
							}
						}
					}
				}
			}
		}

		.bottom {
			height: 130upx;
			padding: 0 30upx;
			background: #F8F5F5;
			border-radius: 6upx;

			.ck {
				.radio {
					width: 50upx;

					.circle {
						width: 30upx;
						height: 30upx;
						border-radius: 100%;
						border: 1px solid #000;
					}

					.icon {
						font-size: 40upx;
						color: #FE0000;
						position: relative;
						left: -4upx;
					}
				}

			}

			.btn {
				width: 168upx;
				height: 56upx;
				color: #fff;
				background: #FF0000;
				line-height: 56upx;
				text-align: center;

				&.opt {
					opacity: .8;
				}
			}
		}
	}
	.empt-cart{
		height: 500upx;
		color:#ccc;
	}
</style>
