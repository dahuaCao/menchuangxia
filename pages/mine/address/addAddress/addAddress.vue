<template>
	<view>
		<view class="pos-bg"></view>
		<view class="content-ad">
			<view class="row mb-flex mb-flex-v-center">
				<view class="tit">收货人</view>
				<view class="input-c mb-form-item mb-flex mb-flex-v-center">
					<input type="text" placeholder="收货人姓名" v-model="addressData.name" />
				</view>
			</view>
			<view class="row mb-flex mb-flex-v-center">
				<view class="tit">联系方式</view>
				<view class="input-c mb-form-item mb-flex mb-flex-v-center">
					<input type="text" placeholder="请输入您的手机号码" v-model="addressData.mobile" />
				</view>
			</view>
			<view class="row mb-flex mb-flex-v-center">
				<view class="tit">收货地址</view>
				<view class="input-c mb-form-item mb-flex mb-flex-v-center">
					<input type="text" placeholder="点击选择收货地址" disabled @tap="chooseLocation" :value="addressData.addressName" />
					<view class="icon iconfont icondingwei pos"></view>
				</view>
			</view>
			<view class="row mb-flex mb-flex-v-center">
				<view class="tit">门牌号</view>
				<view class="input-c mb-form-item mb-flex mb-flex-v-center">
					<input type="text" placeholder="详细地址:例如 16号楼B201" cursor-spacing="20" v-model="addressData.doorplate" />
				</view>
			</view>
			<view class="row mb-flex mb-flex-v-center mb-flex-h-bt">
				<view class="tit">默认地址</view>
				<switch :checked="!addressData.isDefault" color="#999" @change="switchChange" />
			</view>
			<view v-if="addressId" class="del-ad" hover-class="opt" @tap="delAddresss(addressId)">删除收货地址</view>
		</view>
		<view class="bt-c mb-flex">
			<view class="cancel mb-form-item" hover-class="opt" @tap="cancelAddress">取消</view>
			<view class="affirm mb-form-item" hover-class="opt" @tap="saveAddress">确认</view>
		</view>
	</view>
</template>

<script>
	import Utils from '@/common/utils.js'
	export default {
		data() {
			return {
				addressData: {
					name: '',
					mobile: '',
					addressName: '',
					detailAddress: '',
					doorplate: '',
					isDefault: 1,// 0 默认地址  1 非默认
					latitude: '',
					longitude: '',

				},
				addressId: ''
			};
		},
		onLoad(options) {
			console.log(options)
			if(options.addressId){
				this.addressId = options.addressId;
				this.getDetail();
			}
		},
		methods: {
			chooseLocation() {
				uni.chooseLocation({
					success: (data) => {
						this.addressData.addressName = data.name;
						this.addressData.detailAddress = data.address;
						this.addressData.latitude = data.latitude;
						this.addressData.longitude = data.longitude;
					}
				})
			},
			switchChange(e) {
				this.addressData.isDefault = e.detail?0:1;
			},
			cancelAddress() {
				uni.navigateBack();
			},
			saveAddress() {
				let data = this.addressData;
				if (!data.name) {
					this.$pop.msg('请填写收货人姓名');
					return;
				}
				if (!Utils.isMobile.test(data.mobile)) {
					this.$pop.msg('请输入正确的手机号码');
					return;
				}
				if (!data.addressName) {
					this.$pop.msg('请在地图选择所在位置');
					return;
				}
				if (!data.doorplate) {
					this.$pop.msg('请填写门牌号信息');
					return;
				}
				let url = '';
				if(this.addressId){
					data = Object.assign({},data,{id:this.addressId})
					url = this.$api.AddressUpdate;
				}else{
					url = this.$api.AddressSave;
				}
				this.$http.request({
					url:url,
					data:data,
					method:'POST'
				}).then(data =>{
					if(data.errno == '0'){
						console.log('jinlail ')
						uni.navigateBack();
					}
				})
			},
			delAddresss(id){
				uni.showModal({
					content:"确定删除地址?",
					success:res =>{
						console.log(res)
						if(res.confirm){
							this.$http.request({
								url:this.$api.AddressDelete,
								data:{
									id:id
								},
								method:'POST'
							}).then(res =>{
								console.log(res)
								this.$pop.msg(res.errmsg)
							})
						}
					}
				})
				
			},
			getDetail(){
				this.$http.request({
					url:this.$api.AddressDetail,
					data:{
						id:this.addressId
					},
					method:'POST'
				}).then(res => {
					
					let data = res.data;
					this.addressData.name = data.name;
					this.addressData.mobile = data.mobile;
					this.addressData.addressName = data.addressName;
					this.addressData.detailAddress = data.detailAddress;
					this.addressData.doorplate = data.doorplate;
					this.addressData.isDefault = data.isDefault;
					this.addressData.latitude = data.latitude;
					this.addressData.longitude = data.longitude;
				})
			}
		}
	}
</script>

<style lang="scss">
	.opt {
		opacity: .5;
	}

	.content-ad {
		padding-top: 20upx;
		font-size: 32upx;

		.row {
			min-height: 90upx;
			padding: 0 30upx;

			&.text-ad {
				padding: 16upx 30upx;
			}

			.tit {
				width: 160upx;
			}

			.input-c {
				min-height: 60upx;
				border: 2upx solid #2574EB;
				border-radius: 6upx;
				width: 0;
				position: relative;

				input {
					padding-left: 6upx;
					width: 100%;
				}

				textarea {
					padding-left: 6upx;
				}

				.pos {
					position: absolute;
					right: 20upx;
					top: 4upx;
					font-size: 48upx;
					color: #A9A9A9;
				}
			}

			.areas {
				height: 60upx;

				.area-item {
					height: 60upx;
					width: 0;
					border: 2upx solid #2574EB;
					border-radius: 6upx;
					text-align: center;
					line-height: 60upx;
					color: #A9A9A9;

					&:nth-child(2) {
						margin: 0 16upx;
					}
				}
			}
		}

		.del-ad {
			padding: 0 30upx;
			height: 80upx;
			line-height: 80upx;
			color: #FF0000;
			box-shadow: 0upx 4upx 8upx 0upx rgba(30, 30, 25, 0.19);
		}

	}

	.bt-c {
		height: 80upx;
		width: 100%;
		line-height: 80upx;
		text-align: center;
		position: absolute;
		bottom: 0;
		left: 0;

		.cancel {
			background: #E8EBF1;
		}

		.affirm {
			background: #2574EB;
			color: #fff;
		}
	}
</style>
