<template>
	<view class="invoice-wrapper">
		<view class="top-border"></view>
		<view class="wrapper-content">
			<view class="hd">
				<view class="item mb-flex mb-flex-v-center">
					<view class="lf">订单编号:</view>
					<view class="rf">{{orderId}}</view>
				</view>
				<view class="item mb-flex mb-flex-v-center">
					<view class="lf">开票金额:</view>
					<view class="rf red">¥{{orderAmount}}</view>
				</view>
			</view>
			<view class="bd">
				<view class="item mb-flex mb-flex-v-center">
					<view class="lf">票据类型</view>
					<view class="rf">
						<radio-group >
							<label class="mb-flex">
								<view>
									<radio :value="item.value" checked/>
								</view>
								<view>纸质发票</view>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="item mb-flex mb-flex-v-center">
					<view class="lf">抬头类型</view>
					<view class="rf mb-form-item">
						<radio-group class="mb-flex" @change="radioChange">
							<label class="mb-flex mb-form-item" v-for="(item, index) in titleTypes" :key="index" >
								<view>
									<radio :value="item.type" :checked="index == defaultType" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="input-content mb-flex mb-flex-v-center">
					<view class="lf">发票抬头</view>
					<input class="rf-input mb-form-item" type="text" placeholder="抬头名称" v-model="parms.invoiceTitle">
				</view>
				<view v-show="defaultType == '1'">
					<view class="input-content mb-flex mb-flex-v-center">
						<view class="lf">企业税号</view>
						<input class="rf-input mb-form-item" type="text" placeholder="请输入企业税号" v-model="parms.dutyParagraph">
					</view>
					<view class="input-content mb-flex mb-flex-v-center">
						<view class="lf">地址</view>
						<input class="rf-input mb-form-item" type="text" placeholder="请输入企业地址" v-model="parms.address">
					</view>
					<view class="input-content mb-flex mb-flex-v-center">
						<view class="lf">电话</view>
						<input class="rf-input mb-form-item" type="text" placeholder="请输入企业电话" v-model="parms.phone">
					</view>
					<view class="input-content mb-flex mb-flex-v-center">
						<view class="lf">开户行</view>
						<input class="rf-input mb-form-item" type="text" placeholder="请输入开户行名称" v-model="parms.bank">
					</view>
					<view class="input-content mb-flex mb-flex-v-center">
						<view class="lf">账号</view>
						<input class="rf-input mb-form-item" type="text" placeholder="请输入开户行账号" v-model="parms.bankCard">
					</view>
				</view>
			</view>
		</view>
		<view class="btn">
			<button type="primary" @tap="validate">发 布</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderId: '',
				orderAmount:'',
				titleTypes:[{name:'个人',type:0},{name:'企业',type:1}],
				defaultType:0,
				parms:{
					invoiceType :0,//发票类型
					titleType:0,//抬头类型 0-个人 1-企业
					invoiceTitle :'',//发票抬头
					dutyParagraph:'',//税号
					address:'',//地址
					phone:'',//电话号码
					bank :'',//开户行
					bankCard:''//账号	
				}
			}
		},
		onLoad(option) {
			this.orderId = option.orderId;
			this.orderAmount = option.orderAmount;
			// this.getDetails();
		},
		methods: {
			getDetails() {
				let _this = this;
				this.$http.request({
					url: this.$api.ApplyInvoice,
					data: {
						orderId: _this.orderId
					},
					method: 'POST'
				}).then(res => {

				})
			},
			radioChange(e){
				this.defaultType = e.detail.value;
				this.parms.titleType = e.detail.value;
			},
			validate(){
				if(!this.parms.invoiceTitle){
					this.$pop.msg('请输入发票抬头')
					return;
				}
				if(this.parms.titleType && !this.parms.dutyParagraph){
					this.$pop.msg('请输入企业税号')
					return;
				}
				if(this.parms.titleType && !this.parms.address){
					this.$pop.msg('请输入地址')
					return;
				}
				if(this.parms.titleType && !this.parms.phone){
					this.$pop.msg('请输入联系电话')
					return;
				}
				if(this.parms.titleType && !this.parms.bank){
					this.$pop.msg('请输入开户行')
					return;
				}
				if(this.parms.titleType && !this.parms.bankCard){
					this.$pop.msg('请输入开户账号')
					return;
				}
				this.submit();
			},
			submit(){
				let _this = this;
				let parms = Object.assign({},{orderId:_this.orderId},_this.parms)
				this.$http.request({
					url:this.$api.SubmitInvoice,
					data:parms,
					method:'POST'
				}).then(res => {
					if(res.errno == '0'){
						uni.navigateBack({
							
						})
					}else{
						this.$pop.msg(res.errmsg)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.invoice-wrapper {
		.top-border {
			height: 1px;
			width: 100%;
			background: #ccc;
			position: fixed;
			top: 0;
			left: 0;
		}

		.wrapper-content {
			.hd {
				padding: 10upx 0;
				margin: 0 30upx;
				border-bottom: 1px solid #555555;

				.item {
					height: 50upx;

					.lf {
						font-weight: 600;
						width: 140upx;
					}

					.rf {
						&.red{
							color:red;
						}
					}
				}
			}

			.bd {
				padding: 0 30upx;

				.item {
					height: 60upx;

					.lf {
						width: 170upx;
					}
					.rf{
						radio{
							transform: scale(0.8);
						}
					}
				}
				.input-content{
					height: 70upx;
					.lf {
						width: 170upx;
					}
					.rf-input{
						height: 54upx;
						border: 1px solid #ccc;
						padding-left: 6upx;
					}
				}
			}
		}
		.btn{
			height: 160upx;
			width: 100%;
			padding: 30upx;
			background-color: #fff;
			position: fixed;
			bottom: 0;
			left: 0;
		}
	}
</style>
