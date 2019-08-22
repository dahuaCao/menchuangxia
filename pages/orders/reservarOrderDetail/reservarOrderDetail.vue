<template>
	<view class="">
		<view class="pos-bg"></view>
		<template v-if="erectorInfo.name">
			<view class="worker-info">
				<view class="hd mb-flex mb-flex-v-center">
					<view class="hd mb-flex mb-flex-v-center">
						<view class="icon iconfont iconicontouxiang"></view>
						<view class="">师傅信息</view>
					</view>
					
				</view>
				<view class="bd">
					<view class="item">姓　　名: {{erectorInfo.name}}</view>
					<view class="item  mb-flex mb-flex-h-bt">
						<view class="">电　　话: {{erectorInfo.mobile}}</view>
						<view class="icon iconfont icondianhua"></view>
					</view>
					<view class="item">好 评 率: {{erectorInfo.favourableComment*100}}.0%</view>
				</view>
			</view>
		</template>
		<view class="order-content">
			<view class="order-info" v-if="orderInfo">
				<view class="hd mb-flex mb-flex-v-center">
					<view class="icon iconfont icondingdan"></view>
					<view class="">订单信息</view>
				</view>
				<view class="bd">
					<view class="bd-item">订单编号: {{orderInfo.orderId}}</view>
					<view class="bd-item">下单时间: {{orderInfo.orderTime}}</view>
					<view class="bd-item mb-flex mb-flex-h-bt" v-if="orderInfo.bargainMoney">
						<view class="">定金金额: ¥{{orderInfo.bargainMoney}}</view>
						<view class="">{{orderInfo.bargainMoneyPayStatus}}</view>
					</view>	
					<view class="bd-item mb-flex mb-flex-h-bt" v-if="orderInfo.balancePayment">
						<view class="">尾款金额: ¥{{orderInfo.balancePayment}}</view>
						<view class="">{{orderInfo.balancePaymentStatus}}</view>
					</view>	
				</view>
			</view>
			<view class="product-info">
				<view class="hd mb-flex mb-flex-v-center">
					<view class="icon iconfont icondingdan"></view>
					<view class="">商品信息</view>
				</view>
				<view class="bd">
					<block v-for="(item,index) in orderInfo.productInfos" :key="index">
						<view class="bd-item">
							<view class="bd-t mb-flex">
								<view class="pic">
									<image :src="item.picture" mode="scaleToFill"></image>
								</view>
								<view class="tt mb-form-item">{{item.title}}</view>
							</view>
							<view class="bd-h">
								<view class="item mb-flex">
									<view class="item-l">货 号:</view>
									<view class="item-r mb-form-item">{{item.goodsCode}}</view>
								</view>
								<view class="item mb-flex">
									<view class="item-l">规 格:</view>
									<view class="item-r mb-form-item">{{item.standard}}</view>
								</view>
								<block v-for="(item1,index1) in item.priceDetail.prices" :key="index1">
									<view class="item mb-flex mb-flex-h-bt">
										<view class="item-l">{{item1.name}}:</view>
										<view class="item-r mb-form-item">{{item1.value}}{{item1.unit}}</view>
									</view>
									<template v-if="item1.attach">
										<view class="item mb-flex">
											<view class="item-l">附加价格:</view>
											<view class="item-r mb-form-item">
												{{item1.attach.control.unit}}大于<text class='bold'>{{item1.attach.control.value}}</text>附加<text class='bold'>{{item1.attach.attachGt.value}}元</text>,小于等于<text
												 class='bold'>{{item1.attach.control.value}}</text> 附加<text class='bold'>{{item1.attach.attachLte.value}}元</text>。
											</view>
										</view>
									</template>
									
								</block>
							</view>
						</view>
						<view class="pics">
							<view class="dra-pic" v-if="orderType != '1'&&item.bluePrint">
								<view class="tt">图纸</view>
								<view class="pc-c">
									<block v-for="(item1,index1) in item.bluePrint" :key = "index1">
										<view class="pic" @tap="preImage(item1)">
											<image :src="item1" mode="scaleToFill"></image>
										</view>
									</block>
								</view>	
							</view>
							<view class="ori-pic" v-if="orderType != '1'&&item.originPicture">
								<view class="tt">图纸</view>
								<view class="pc-c">
									<block v-for="(item1,index1) in item.originPicture" :key = "index1">
										<view class="pic" @tap="preImage(item1)">
											<image :src="item1" mode="scaleToFill"></image>
										</view>
									</block>
								</view>	
							</view>
							<view class="ori-pic" v-if="orderType != '1'&&item.completePicture">
								<view class="tt">完工图纸</view>
								<view class="pc-c">
									<block v-for="(item1,index1) in item.completePicture" :key = "index1">
										<view class="pic" @tap="preImage(item1)">
											<image :src="item1" mode="scaleToFill"></image>
										</view>
									</block>
								</view>	
							</view>
						</view>
						
						<view class="subtotal mb-flex mb-flex-h-bt" v-if="orderType =='2'">
							<view class="text">小  计:</view>
							<view class="cacul-price" >
								<cacul-price :item="item"></cacul-price>
							</view>
						</view>
					</block>		
				</view>		
			</view>
		</view>
		<view class="coupons mb-flex mb-flex-v-center mb-flex-h-bt"  @tap="chooseCoupon" v-if="orderType =='2'">
			<view class="yh mb-flex mb-flex-v-center">
				<view>优惠卷</view>
				<view class="status">{{couponTitle}}</view>
			</view>
			<view class="icon iconfont iconjiantou"></view>
		</view>
		<view class="pay-c " v-if="orderInfo.aggregateAmount&&orderType =='2'">
			<view class="item mb-flex mb-flex-h-bt">
				<view class="">商品金额:</view>
				<view class="">{{orderInfo.aggregateAmount}}.00</view>
			</view>
			<view class="item mb-flex mb-flex-h-bt">
				 <view class="">{{orderInfo.orderStatus == '待支付定金'?'定金金额:':'尾款金额:'}}</view>
				<view class="">{{orderInfo.bargainMoney}}.00</view>
			</view>
			<button type="primary" class="pay-btn" @tap="pay">{{orderInfo.orderStatus == '待支付定金'?'支付定金':'支付金额'}}</button>
		</view>
		<view class="coupon-con">
			<view class="coupon-mask" @touchmove.stop.prevent="moveHandle" v-show="showCouPon&&couPonList" @tap="hideCoupon"></view>
			<view class="coupon-c" v-show="showCouPon&&couPonList">
				<view class="tit">
						优惠卷
					<view class="icon iconfont iconguanbi1" @tap="hideCoupon"></view>
				</view>
				<view class="pos-bg" style="background: #F5F5F5;"></view>
				<view class="content">
					<block v-for="(item,index) in couPonList" :key="index">
						<view class="item mb-flex mb-flex-v-center mb-flex-h-bt" @tap="chooseAmount(item)">
							<view class="lf mb-flex ">
								<view class="pic mb-flex mb-flex-center">
									<view class="dw">¥</view><view class="num">{{item.couponAmount}}</view>
								</view>
								<view class="des">
									<view class="dd">全场通用卷</view>
									<view class="dc">{{item.startTime.split(' ')[0]}}至{{item.endTime.split(' ')[0]}}</view>
								</view>
							</view>
							<view class="rf mb-flex">
								<view v-if="item.checked" class="icon iconfont iconradio"></view>
								<view v-else class="circle"></view>
							</view>
						</view>	
					</block>
					<view class="item mb-flex mb-flex-v-center mb-flex-h-bt" @tap="chooseAmount(0)">
						<view class="lf ">
							不使用优惠卷
						</view>
						<view class="rf">
							<view v-if="checkCoupon" class="icon iconfont iconradio"></view>
							<view v-else class="circle"></view>
						</view>
					</view>
				</view>
				<view class="btn-c">
					<!-- <view class="btn">确定</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import CaculPrice from '@/components/caculPrice.vue'
	export default {
		components:{
			CaculPrice,
		},
		data() {
			return {
				orderType:1,// 1 预约订单 2 待付款订单
				orderInfo:'',
				erectorInfo:'',
				couPonList:'',
				showCouPon:false,
				checkCoupon:false,
				couponTitle:'点击选择优惠卷',
				couPonId:0
			};
		},
		onLoad(option) {
			if(option.orderId){
				this.orderId = option.orderId
			}
			if(option.orderType){
				this.orderType = option.orderType;
				if(option.orderType == '2'){
					this.queryCoupon();
				}	
			}
			this.getDetail();
			
		},
		methods:{
			getDetail(){
				let _this = this;
				this.$http.request({
					url:this.$api.Query_OrderDetail,
					data:{
						orderId:_this.orderId
					},
					method:'POST'
				}).then( res => {
					let data = res.data;
					this.orderInfo = data.orderInfo;
					this.erectorInfo = data.erectorInfo || '';
				})
			},
			preImage(url){
				uni.previewImage({
					urls:[url],
					success() {
						
					}
				})
			},
			queryCoupon(){
				let _this = this;
				this.$http.request({
					url:this.$api.NeedCoupon,
					data:{
						orderId:_this.orderId
					},
					method:'POST'
				}).then(res => {
					this.couPonList = res.data;
				})
			},
			chooseCoupon(){
				if(!this.couPonList){
					this.$pop.msg('暂无可用优惠卷!!!')
					return;
				}
				this.showCouPon = true;
			},
			chooseAmount(item){
				if(item){
					this.$set(item,"checked",true);
					this.checkCoupon = false;
					this.couPonId = item.id;
					this.couponTitle = item.title;
				}else{
					let _this = this;
					this.checkCoupon = true;
					this.couPonId = 0;
					this.couponTitle = "不使用优惠卷";
					this.couPonList.forEach(function(item){
						_this.$set(item,"checked",false);
					})
					
				}
				
			},
			noUseCoupon(){
				this.checkCoupon = !this.checkCoupon;
				
				if(this.checkCoupon){
					this.couponTitle = "不使用优惠卷";
				}		
			},
			moveHandle(){
				
			},
			hideCoupon(){
				this.showCouPon = false;
			},
			noticeTrail(){
				let _this = this;
				this.$http.request({
					url:this.$api.PayNotify,
					data:{
						orderId:_this.orderId
					},
					method:'POST'
				}).then(res => {
					
				})
			},
			pay(){
				console.log('zhifu')
				let _this = this;
				// #ifdef MP-WEIXIN
				this.$http.request({
					url:this.$api.WeixinPay,
					data:{
						orderId:_this.orderId,
						couPonId:_this.couPonId
					},
					method:'POST'
				}).then(res => {
					if(!res.errno){
						console.log("res: " + JSON.stringify(res));
						let paymentData = res.data;
						_this.WeixinPay(paymentData);
					}else{
						_this.$pop.msg('获取支付失败,请稍后重试!!')
					}
					
					
				})
				// #endif
				// #ifdef APP-PLUS
				this.$http.request({
					url:this.$api.AppPrePay,
					data:{
						orderId:_this.orderId,
						couPonId:_this.couPonId
					},
					method:'POST'
				}).then(res => {
					console.log('App预支付')
					let orderInfo = JSON.stringify(res);
					_this.payMent(orderInfo);
					
				})
				// #endif
				
				
				
			},
			// #ifdef MP-WEIXIN
			WeixinPay(pay){
				console.log('开启支付')
				uni.requestPayment({
				    timeStamp: pay.timeStamp,
				    nonceStr: pay.nonceStr,
				    package: pay.packageValue,
				    signType: pay.signType,
				    paySign: pay.paySign,
				    success: (res) => {
						console.log(res)
						this.noticeTrail();
				        uni.showToast({
				            title: "感谢您的赞助!"
				        })
						uni.navigateBack({
							
						});
				    },
				    fail: (res) => {
				        uni.showModal({
				            content: "支付失败,原因为: " + res
				                .errMsg,
				            showCancel: false
				        })
				    },
				    complete: () => {
				        this.loading = false;
				    }
				})
			},
			// #endif
			// #ifdef APP-PLUS
			payMent(orderInfo){
				console.log('APP 调用微信支付')
				uni.requestPayment({
				    provider: 'wxpay',
				    orderInfo: orderInfo,
				    success: (e) => {
				        console.log("success", e);
				        uni.showToast({
				            title: "感谢您的赞助!"
				        })
				    },
				    fail: (e) => {
				        console.log("fail", e);
				        uni.showModal({
				            content: "支付失败,原因为: " + e.errMsg,
				            showCancel: false
				        })
				    },
				    complete: () => {
				       
				    }
				})
			}
			// #endif
		},
		computed:{
			
		}
	}
</script>

<style lang="scss">
	.worker-info{
		padding: 30upx;
		.hd{
			height: 50upx;
			border-bottom: 1px solid #ccc;
			.icon{
				color: #2574EB;
				font-size: 32upx;
				margin-right: 16upx;
			}
		}
		.bd{
			.item{
				margin: 10upx;
				.icon{
					color:green;
					margin-right: 30upx;
				}
			}
		}
	}
	.order-content{
		font-size: 28upx;
		.order-info{
			padding: 30upx 30upx 50upx;
			.hd{
				height: 60upx;
				border-bottom: 1px solid #ccc;
				.icon{
					color: #2574EB;
					font-size: 44upx;
					margin-right: 16upx;
				}
			}
			.bd{
				.bd-item{
					margin: 10upx 0;
				}
			}
		}
		.product-info{
			padding:0 30upx;
			.hd{
				height: 50upx;
				border-bottom: 1px solid #ccc;
				.icon{
					color: #2574EB;
					font-size: 44upx;
					margin-right: 16upx;
				}
				margin-bottom: 10upx;
			}
			.bd{
				.bd-item{
					margin-bottom: 20upx;
					.bd-t{
						.pic{
							flex-shrink: 0;
							margin-right: 16upx;
							image{
								height: 190upx;
								width: 190upx;
							}
						}
						.tt{
							flex-shrink: 0;
						}
					}
					.bd-h{
						.item{
							margin-bottom: 10upx;
							.item-l{
								width: 120upx;
								margin-right: 10upx;
								text-align: right;
								background-color: #ccc;
							}
							.item-r{
								width: 0;
							}
						}
					}
				}
				.pics{
					margin-bottom: 40upx;
				}
				.dra-pic,.ori-pic{
					.pc-c{
						overflow: hidden;
						.pic{
							float: left;
							margin: 0 10upx 10upx 0;
							height: 140upx;
							width: 140upx;
							box-shadow: 0 0 8upx 0 #000;
							image{
								width: 140upx;
								height: 140upx;
							}
						}
					}
				}
				.ori-pic{
					
				}
				.subtotal{
					margin: 10upx 0 30upx;
				}
			}
		}
	}
	.coupons{
		height: 50upx;
		border-bottom: 1px solid #ccc;
		margin:0 30upx 10upx;
		.yh{
			.status{
				margin-left: 18upx;
				font-size: 20upx;
				color: #777;
			}
		}
		.icon{
			font-size: 36upx;
		}
	}
	.pay-c{
		padding: 0 30upx 50upx 30upx;
		font-weight: 600;
		.item{
			margin: 10upx;;
		}
		.pay-btn{
			margin: 20upx 0 40upx 0;
			font-weight: 400;
		}
	}
	.coupon-con{
		.coupon-mask{
			position: fixed;
			z-index: 998;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: rgba(0, 0, 0, 0.3);
		}
		.coupon-c{
			position: fixed;
			z-index: 999;
			background-color: #ffffff;
			left: 0;
			bottom: 0;
			width: 100%;
			min-height: 200upx;
			border-top-left-radius: 20upx;
			border-top-right-radius: 20upx;
			.tit{
				height: 100upx;
				text-align: center;
				line-height: 100upx;
				position:relative;
				font-size:36upx;
				.icon{
					position: absolute;
					right: 40upx;
					top:0;
					font-size: 36upx;
				}
			}
			.content{
				padding: 0 30upx;
				.item{
					height: 130upx;
					padding:10upx 0;
					overflow:hidden;
					.lf{
						.pic{
							height: 130upx;
							width: 130upx;
							margin-right: 10upx;
							background: #F98888;
							color: #fff;
							font-size:26upx;
							.dw{
								position: relative;
								top:6upx;
							}
							.num{
								font-weight: 600;
								font-size: 48upx;
							}
						}
						.des{
							height:100%;
							.dd{
								width: 130upx;
								height: 38upx;
								background: #2574EB;
								border-radius: 16upx;
								color: #fff;
								text-align: center;
								margin-bottom: 20upx;
							}
							color: #777;
							.dc{
								font-size: 18upx;
							}
						}
					}
					.rf{
						.icon{
							font-size: 44upx;
							color: #D81E06;
						}
						.circle{
							width: 32upx;
							height: 32upx;
							border: 3upx solid #D81E06;
							border-radius: 100%;
							position: relative;
							top:1upx;
							left: -4upx;
						}
					}
				}
			}
			.btn-c{
				padding: 30upx 30upx 50upx 30upx;
				.btn{
					height: 68upx;
					width: 100%;
					background: #2574EB;
					color: #fff;
					text-align: center;
					line-height: 68upx;
					border-radius: 16upx;
				}
			}	
		}
	}
</style>
