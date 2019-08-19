<template>
	<view class="container">
		<view class="top-s" v-show="productInfo">
			<swiper class="coustom-swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
			 :circular="circular">
				<block v-for="(item,index) in pcitures" :key="index">
					<swiper-item>
						<image class="swiper-item" :src="item" mode="scaleToFill"></image>
					</swiper-item>
				</block>
			</swiper>
			<view class="pro-info">
				<view class="title">{{productInfo.title}}</view>
				<view class="des mb-flex mb-flex-h-bt mb-flex-v-center">
					<view class="price mb-flex mb-flex-v-center">
						<view class="p-s">工厂价</view>
						<view class="p-p">¥{{productInfo.outparam1}}-{{productInfo.outparam2}}</view>
					</view>
					<view class="sales">月销152笔</view>
				</view>
			</view>
			<view class="pos-bg"></view>
			<view class="pro-des mb-flex ">
				<view class="des mb-flex mb-flex-v-center">
					<view class="des-t">服务</view>
					<view class="des-t">正品保证</view>
					<view class="des-t">支持退换</view>
				</view>
			</view>
			<view class="pos-bg"></view>
			<view class="rich-text">
				<uParse :content="productDes" />
			</view>
		</view>
		<view class="b-btn mb-flex">
			<view class="link mb-flex mb-flex-center mb-flex-column">
				<view class="icon iconfont iconlianxikefu"></view>
				<view class="">联系客服</view>
			</view>
			<view class="add b-item" hover-class="opt" @tap="addCart">加入购物车</view>
			<view class="buy b-item mb-form-item" hover-class="opt" @tap="preBuy">预约下单</view>
		</view>
		<view class="pop-mask" v-show="isShowPop" @touchmove.stop.prevent="touch" @tap="hide"></view>
		<view class="pop-box" v-show="isShowPop" @touchmove.stop.prevent="touch">
			<scroll-view class="pop-attr" scroll-y>
				<!-- 商品规格选择 -->
				<view class="spec-con">
					<block v-for="(item,index) in productAttr" :key="index">
						<view class="spec-item">
							<view class="name">{{item.name}}</view>
							<view class="values mb-flex">
								<block v-for="(item1,index1) in item.list" :key="index1">
									<view class="value" :class="{active:item1.select}" hover-class="opt" @tap="specSelect(item.name,item1.name)">{{item1.name}}</view>
								</block>
							</view>
						</view>
					</block>
				</view>
				<!-- 预算价格 -->
				<view class="bugdetPrice" v-if="prices.length > 0">
					<view class="bg-tl">预算造价</view>
					<view class="bg-c">
						<block v-for="(item,index) in prices" :key="index">
							<view class="bg-l mb-flex mb-flex-v-center">
								<view class="p-item mb-form-item">{{item.name}}</view>
								<view class="p-item mb-form-item mb-flex mb-flex-center">
									<input class="input" @input="getVuale" type="text" :data-name="item.name" placeholder="1" value=""
									 cursor-spacing="30" />
								</view>
								<view class="p-item mb-form-item">{{item.value}}{{item.unit}}</view>
							</view>
							<view class="att-price mb-flex" v-if="item.attach">
								<view class="att-tt">服务附加</view>
								<view class="att-c mb-form-item">
									{{item.attach.control.unit}}大于<text class='bold'>{{item.attach.control.value}}</text>附加<text class='bold'>{{item.attach.attachGt.value}}元</text>,小于等于<text
									 class='bold'>{{item.attach.control.value}}</text> 附加<text class='bold'>{{item.attach.attachLte.value}}元</text>。
								</view>
							</view>
						</block>
						<view class="total-price mb-flex mb-flex-h-bt">
							<view class="">合计</view>
							<view class="amount">{{caculPrice}}.00</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import uParse from '@/components/uParse/src/wxParse.vue'
	import Utils from '@/common/utils.js'
	export default {
		components: {
			uParse
		},
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 5000,
				duration: 500,
				circular: true,
				pcitures: [],
				productInfo: '',
				productDes: '',
				productAttr: [],
				isShowPop: false,
				prices: []
			};
		},
		onLoad(option) {
			this.goodsId = option.id;
			this.productDetail(option.id)
		},
		methods: {
			productDetail(id) {
				this.$http.request({
					url: this.$api.GoodsDetail,
					data: {
						goodsId: id
					}
				}).then(res => {
					let data = res.data;
					this.pcitures = data.goodsPicture;
					this.productInfo = data.goods;
					this.productDes = data.detail.goodsDetail;
					this.productAttr = data.attr;
				})
			},
			touch() {

			},
			hide() {
				this.isShowPop = false;
			},
			addCart() {
				if (!this.isShowPop) {
					this.isShowPop = true;
					return;
				}
				if (!this.isCheckAllSpec()) {
					this.$pop.msg('请选择完整规格')
				} else {
					let id = this.goodsId,params = this.getParams();
					this.$http.request({
						url: this.$api.AddCart,
						data: {
							goodsId: id,
							standard: JSON.stringify(params)
						}
					}).then(res => {
						if(res.errno == '-1'){
							this.$pop.msg(res.errmsg)
						}else{
							this.$pop.msg('购物车已添加成功!')
							this.isShowPop = false;
						}
						
					})
				}

			},
			preBuy(){
				if (!this.isShowPop) {
					this.isShowPop = true;
					return;
				}
				if (!this.isCheckAllSpec()) {
					this.$pop.msg('请选择完整规格')
				} else {
					let specId = this.speId;
					uni.navigateTo({
						url:"/pages/shopCart/applyOrders/applyOrders?speId="+specId
					})
				}
			},
			specSelect(type, name) {
				let _this = this;
				this.productAttr.forEach(function(item) {
					if (item.name == type) {
						item.list.forEach(function(item1) {
							if (item1.name == name) {
								_this.$set(item1, 'select', 1)
							} else {
								_this.$set(item1, 'select', 0)
							}
						})
					}
				})
				if (this.isCheckAllSpec()) {
					this.getPrice(this.goodsId);
				}
			},
			isCheckAllSpec() {
				return this.getChecked().every(function(item) {
					return item.checked;
				})
			},
			getChecked() {
				let checkValues = [];
				this.productAttr.forEach(function(item) {
					let obj = {};
					item.list.forEach(function(item1) {
						if (item1.select) {
							obj[item.name] = item1.name;
							obj.checked = true;
						}
					})
					checkValues.push(obj)
				})
				return checkValues;
			},
			getPrice(id) {
				let parms = this.getParams();
				this.$http.request({
					url: this.$api.GoodsParams,
					data: {
						goodsId: id,
						standard: JSON.stringify(parms)
					}
				}).then(res => {
					let data = res.data;
					this.prices = data.prices;
					this.speId = data.speId;
				})
			},
			getParams() {
				let parms = {};
				this.getChecked().forEach(function(item) {
					Object.assign(parms, item)
				})
				delete parms.checked;
				return parms;
			},
			getVuale: Utils.debounce(function(event) {
				let name = event.target.dataset.name;
				let value = event.target.value;
				this.prices.forEach(item => {
					if (item.name == name) {
						this.$set(item, 'defaultValue', value)
					}
				})
			}, 500)
		},
		computed: {
			caculPrice() {
				let totalPrice = 0;
				this.prices.forEach(function(item) {
					let count = item.defaultValue ? item.defaultValue : 1;
					totalPrice += item.value * count;
					if (item.attach) {
						if (count > item.attach.control.value) {
							totalPrice += item.attach.attachGt.value
						} else {
							totalPrice += item.attach.attachLte.value
						}
					}
				})
				return totalPrice
			}

		}
	}
</script>

<style lang="scss">
	@import url("../../../components/uParse/src/wxParse.css");

	.opt {
		opacity: .8;
	}

	.top-s {
		.coustom-swiper {
			height: 730upx;

			swiper-item {
				.swiper-item {
					height: 100%;
					width: 100%;
				}
			}

		}

		.pro-info {
			padding: 30upx;

			.title {
				font-weight: 600;
				margin-bottom: 30upx;
			}

			.des {
				.p-s {
					width: 100upx;
					height: 40upx;
					text-align: center;
					line-height: 40upx;
					background: #F70F46;
					color: #fff;
					margin-right: 30upx;
				}

				.p-p {
					font-size: 48upx;
					font-weight: 600;
					color: #F70F46;
				}

				.sales {
					font-size: 22upx;
					color: #AAA9A9;
				}
			}
		}

		.pro-des {
			height: 84upx;
			padding: 0 30upx;

			.des-t {
				&:nth-child(2) {
					margin: 0 20upx;
				}
			}
		}

		.rich-text {
			padding: 10upx 30upx 128upx 30upx;
		}
	}

	.b-btn {
		height: 128upx;
		width: 100%;
		position: fixed;
		z-index: 1000;
		bottom: 0;
		left: 0;
		border-top: 1px solid #ccc;
		background: #fff;

		.b-item {
			line-height: 128upx;
			text-align: center;
			color: #fff;
			font-size: 38upx;
		}

		.link {
			width: 206upx;
			background: #fff;

			.icon {
				font-size: 58upx;
				color: #707070;
			}
		}

		.add {
			width: 226upx;
			background: #FA742A;
		}

		.buy {
			background: #FF0000;
		}
	}

	.pop-mask {
		position: fixed;
		z-index: 998;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.3);
	}

	.pop-box {
		// position: absolute;
		position: fixed;
		z-index: 999;
		background-color: #ffffff;
		left: 0;
		bottom: 128upx;
		width: 100%;

		.pop-attr {
			min-height: 100upx;
			max-height: 700upx;

			// line-height: 100upx;
			// text-align: center;
			.spec-con {
				padding: 30upx;

				.spec-item {
					.name {
						height: 40upx;
						line-height: 40upx;
						font-size: 32upx;
						font-weight: 600;
						margin-bottom: 10upx;
					}

					.values {
						.value {
							padding: 10upx;
							border: 1px solid #ccc;
							margin: 0 10upx 10upx 2upx;

							&.opt {
								border-color: red;
								background: #ccc;
								color: #fff;
							}

							&.active {
								border-color: #F70F46;
								color: #F70F46;
							}
						}
					}
				}
			}

			.bugdetPrice {
				border-top: 1px solid #ccc;
				padding: 0 30upx 30upx 30upx;

				.bg-tl {
					height: 40upx;
					line-height: 40upx;
					font-size: 32upx;
					font-weight: 600;
					text-align: center;
				}

				.bg-c {
					padding-top: 10upx;

					.bg-l {
						height: 50upx;
						margin-bottom: 16upx;

						// justify-content: space-between;
						.p-item {
							.input {
								width: 100upx;
								height: 42upx !important;
								// display: inline-block;
								min-height: 0;
								border: 1px solid #ccc;
								text-align: center;
							}

							&:last-child {
								text-align: right;
							}
						}

					}

					.att-price {
						.att-tt {
							margin-right: 36upx;
						}

						.att-c {
							width: 0;

							.bold {
								font-weight: 600;
								color: red;
							}
						}
					}
				}
			}
		}
	}
</style>
