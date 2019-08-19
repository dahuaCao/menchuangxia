<template>
	<view class="pageContent mb-flex mb-flex-column">
		<view class="pos-bg"></view>
		<template v-if="orderList.length > 0">
			<scroll-view scroll-y class="content1 mb-form-item">
				<block v-for="(item,index) in orderList" :key="index">
					<view class="order-item mb-flex mb-flex-column" @tap="goDetail(item.orderId)">
						<view class="order-hd mb-flex mb-flex-v-center mb-flex-h-bt">
							<view class="order-num">订单编号: {{item.orderId}}</view>
							<view class="status">{{item.status}}</view>
						</view>
						<view class="order-bd">
							<block v-for="(item1,index1) in item.orderProducts" :key="index1">
								<view class="bd-item mb-flex">
									<view class="pic">
										<image :src="item1.picture" mode="scaleToFill"></image>
									</view>
									<view class="des mb-form-item">
										<view class="t-t">{{item1.title}}</view>
										<view class="t-d" >{{item1.standard}}</view>
									</view>
								</view>
							</block>
						</view>
						<view class="btn-c mb-flex mb-flex-v-center">
							<view v-if="orderType== '1' || (orderType == '2'&& item.status == '待支付定金')" class="cancel-btn btn-item" hover-class="click" @tap.stop="deleOrder(item.orderId)">取消订单</view>
							<view class="pay-btn btn-item" hover-class="click" v-if="orderType == '2'">{{item.status == '待支付定金'?'支付定金':'支付尾款'}}</view>
							<view v-if="orderType == '4'" class="pay-btn btn-item" @tap.stop="evaluate(item.orderId)" hover-class="click" >评　　价</view>
						</view>
						<time-line :status="item.status" :travel="item.orderTrail"></time-line>
					</view>
				</block>
			</scroll-view>
		</template>
		<template v-else>
			<view class="empty-order mb-flex mb-flex-center mb-flex-column">
				<uni-icon type="zanwuchiyouzhongdingdan" size="200" color="#ccc"></uni-icon>
				<view class="text">暂无订单....</view>
			</view>
		</template>
		
	</view>
</template>

<script>
	import timeLine from '@/components/timeLine.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	export default {
		components: {
			timeLine,
			uniIcon
		},
		data() {
			return {
				orderList: '',
				orderType:1,// 1 预约订单 2 待付款订单
			};
		},
		onLoad(option) {
			if(option.orderType){
				this.orderType = option.orderType;
				console.log(this.orderType)
				this.setNavBar();
			}
			this.queryOrder();
		},

		methods: {
			queryOrder() {
				let _this = this;
				this.$http.request({
					url: this.$api.queryMyOrder,
					data: {
						orderStatusType: _this.orderType
					},
					method: 'POST'
				}).then(res => {
					let data = res.data;
					this.orderList = data;
				})
			},
			goDetail(id) {
				uni.navigateTo({
					url: '../reservarOrderDetail/reservarOrderDetail?orderId=' + id+'&orderType='+this.orderType
				})
			},
			setNavBar(){
				let title = "待付款";
				if(this.orderType == '3'){
					title = '待安装/待维修'
				}
				uni.setNavigationBarTitle({
					title:title
				})
			},
			deleOrder(id){
				let _this = this;
				uni.showModal({
					title:"提示",
					content:"确认删除此订单吗?",
					success(res){
						if(res.confirm){
							_this.$http.request({
								url:_this.$api.Cancel_Order,
								data:{
									orderId:id
								},
								method:'POST'
							}).then(res => {
								if(res.errno == '0'){
									_this.queryOrder();
								}								
							})
						}
					}	
				})
				
			},
			evaluate(orderId){
				console.log('评价评价')
				uni.navigateTo({
					url:'../makeComment/makeComment?orderId='+orderId
				})
			}
		}
	}
</script>

<style lang="scss">
	.pageContent{
		height: 100%;
		width: 100%;
	}
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
		display: none;
	}
	.empty-order{
		height: 400upx;
		
		color: #555555;
		.text{
			margin-top: 20upx;
			font-size: 36upx;
		}
	}
	.content1 {
		padding: 30upx 0;
		font-size: 28upx;
		height: 0;
		.order-item {
			margin: 0upx 10upx 20upx 10upx;
			box-shadow: 0px 0px 10upx 0px rgba(0, 0, 0, 0.2);
			padding: 0 18upx 10upx;

			.order-hd {
				height: 80upx;
				border-bottom: 1px solid #ccc;

				.status {
					color: #FE0707;
				}
			}

			.order-bd {
				.bd-item {
					margin: 14upx 0;

					.pic {
						flex-shrink: 0;
						margin-right: 20upx;

						image {
							height: 190upx;
							width: 190upx;
							background: forestgreen;
						}
					}

					.des {
						flex-shrink: 0;

						.t-t {
							margin-bottom: 10upx;
						}

						.t-d {
							color: #ccc;
						}
					}
				}
			}

			.btn-c {
				height: 70upx;
				justify-content: flex-end;
				.btn-item{
					padding: 10upx 18upx;
					border: 1px solid #000;
					border-radius: 6upx;
					margin-left: 20upx;
					background: #fff;
					&.click{
						opacity: .8;
					}
				}
				.cancel-btn {
					&.click {
						border-color: red;
						color: red;
					}
				}
				.pay-btn{
					border-color: red;
					color: red;
					
				}
			}
		}
	}
</style>
