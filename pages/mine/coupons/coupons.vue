<template>
	<view class="coupon mb-flex mb-flex-column">
		<scroll-view scroll-x class="swiper-tab">
			<block v-for="(item,index) in tabBars" :key="index">
				<view class="table-item" :class="tabIndex==index ? 'active' : ''" @tap="tapTab(index)">{{item.name}}</view>
			</block>

		</scroll-view>
		<swiper :current="tabIndex" class="swiper-box mb-form-item" :duration="300" @change="changeTab">
			<swiper-item>
				<scroll-view scroll-y class="item-scroll">
					<template v-if="couponList.unUsedCoupons&&couponList.unUsedCoupons.length > 0">
						<view class="swiper-item mb-flex mb-flex-v-center" v-for="(item,index) in couponList.unUsedCoupons" :key = "index">
							<view class="lf mb-flex mb-flex-center mb-flex-column">
								<view class='top'>¥{{item.usedAmount}}</view>
								<view class='bottom'>抵用券</view>
							</view>
							<view class="ct mb-form-item">
								<view class='top'>{{item.title}}</view>
								<view class='center'></view>
								<view class='bottom'>{{item.outparam1.split(' ')[0]}} 至 {{item.outparam2.split(' ')[0]}}</view>
							</view>
							<view class="rf">
								<view class='top'>去使用</view>
								<view class='bottom'>即将失效</view>
							</view>
						</view>
					</template>
					<template v-else>
						<view class="no-coupon mb-flex mb-flex-center mb-flex-column">
							<uni-icon type="zanwuyouhuiquan" size="160" color="#D2ECFF"></uni-icon>
							<view>暂无可用优惠卷....</view>
						</view>
					</template>

				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y class="item-scroll">
					<template v-if="couponList.usedCoupons&&couponList.usedCoupons.length > 0">
						<view class="swiper-item mb-flex mb-flex-v-center" v-for="(item,index) in couponList.usedCoupons" :key = "index">
							<view class="lf mb-flex mb-flex-center mb-flex-column">
								<view class='top'>¥{{item.usedAmount}}</view>
								<view class='bottom'>抵用券</view>
							</view>
							<view class="ct mb-form-item">
								<view class='top'>{{item.title}}</view>
								<view class='center'></view>
								<view class='bottom'>{{item.outparam1.split(' ')[0]}} 至 {{item.outparam2.split(' ')[0]}}</view>
							</view>
							<view class="rf">
								<view class="circle">已使用</view>
							</view>
						</view>
					</template>
					<template v-else>
						<view class="no-coupon mb-flex mb-flex-center mb-flex-column">
							<uni-icon type="zanwuyouhuiquan" size="160" color="#ccc"></uni-icon>
							<view>暂无可用优惠卷....</view>
						</view>
					</template>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y class="item-scroll">
					<template v-if="couponList.unUsedCoupons&&couponList.unUsedCoupons.length > 0">
						<view class="swiper-item mb-flex mb-flex-v-center" v-for="(item,index) in couponList.unUsedCoupons" :key = "index">
							<view class="lf mb-flex mb-flex-center mb-flex-column blue">
								<view class='top'>¥{{item.usedAmount}}</view>
								<view class='bottom'>抵用券</view>
							</view>
							<view class="ct mb-form-item">
								<view class='top'>{{item.title}}</view>
								<view class='center'></view>
								<view class='bottom'>{{item.outparam1.split(' ')[0]}} 至 {{item.outparam2.split(' ')[0]}}</view>
							</view>
							<view class="rf">
								<view class="circle blue">已失效</view>
							</view>
						</view>
					</template>
					<template v-else>
						<view class="no-coupon mb-flex mb-flex-center mb-flex-column">
							<uni-icon type="zanwuyouhuiquan" size="160" color="#ccc"></uni-icon>
							<view>暂无可用优惠卷....</view>
						</view>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				tabBars: [{
					name: '未使用',
					id: 'guanzhu'
				}, {
					name: '已使用',
					id: 'tuijian'
				}, {
					name: '已失效',
					id: 'tiyu'
				}],
				tabIndex: 0,
				couponList: ''

			}
		},
		created() {
			// uni.getSystemInfo({
			// 	success: (res) => {
			// 		console.log(res)
			// 		if (res.errMsg == 'getSystemInfo:ok') {
			// 			this.sliderLeft = (res.windowWidth / this.tabBars.length - this.sliderWidth) / 2;
			// 			this.sliderOffset = res.windowWidth / this.tabBars.length * this.tabIndex;
			// 		}
			// 	}
			// })
		},
		onLoad() {
			this.getCoupons();
		},
		methods: {
			tapTab(index) {
				this.tabIndex = index;
			},
			changeTab(e) {
				console.log(e)
				let index = e.target.current;
				console.log(index)
				this.tabIndex = index;
			},
			getCoupons() {
				this.$http.request({
					url: this.$api.CouponList
				}).then(res => {
					console.log(res)
					if (res.errno == '0') {
						let data = res.data;
						this.couponList = res.data;
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.coupon {
		height: 100%;

		.swiper-tab {
			position: relative;
			height: 80upx;
			width: 100%;
			line-height: 80upx;
			// white-space: nowrap;
			border-bottom: 1px solid #ccc;
			background: #F5F5F5;

			.table-item {
				width: 33.33%;
				text-align: center;
				display: inline-block;

				&.active {
					color: red;
				}
			}
		}

		.swiper-box {
			height: 0;

			.item-scroll {
				height: 100%;

				.no-coupon {
					height: 500upx;
					color: #ccc;
				}

				.swiper-item {
					height: 224upx;
					box-shadow: 0px 0px 20upx 0px rgba(0, 0, 0, 0.1);
					// display: flex;
					// align-items: center;
					position: relative;
					// justify-content: space-between;
					margin: 30upx 34upx;

					.lf {
						width: 138upx;
						height: 128upx;
						// background: rgba(241, 241, 241, 1);
						border: 1px dashed #FF0000;
						border-radius: 7px;
						margin: 0 14upx;
						color: #FF0000;
						&.blue{
							background: #F1F1F1;
							border-color: #A9A9A9;
							color: #A9A9A9;
						}
					}

					.ct {
						.top,.bottom{
							font-size: 24upx;
							text-align: center;
						}
						
						.center{
							width: 100%;
							height: 1px;
							background: #000;
							margin: 10upx 0;
						}
					}

					.rf {
						margin: 0 14upx;
						text-align: center;
						.top{
							padding:6upx 20upx;
							background: #FF0006;
							margin-bottom: 14upx;
							color: #FFFFFF;
						}
						.bottom{
							color: #ccc;
						}
						.circle{
							height: 104upx;
							width: 104upx;
							line-height: 104upx;
							border:1px solid #FF0000;
							color: #FF0000;
							border-radius: 100%;
							&.blue{
								background: #F1F1F1;
								border-color: #A9A9A9;
								color: #A9A9A9;
							}
						}
					}
				}
			}
		}
	}
</style>
