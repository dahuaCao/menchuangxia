<template>
	<view class="complain-wrapper">
		<view class="tp-border"></view>
		<view class="content">
			<view class="item mb-flex mb-flex-v-center">
				<view class="tit">
					订单编号:
				</view>
				<view class="cc mb-form-item mb-flex mb-flex-h-bt">
					<view class="l">
						{{datas.orderId}}
					</view>
					<view class="r status">
						{{datas.orderStatus}}
					</view>
				</view>
			</view>
			<view class="item mb-flex mb-flex-v-center">
				<view class="tit">
					商品金额:
				</view>
				<view class="cc mb-form-item mb-flex mb-flex-h-bt">
					<view class="l">
						¥{{datas.orderAmount}}
					</view>
				</view>
			</view>
			<view class="item mb-flex mb-flex-v-center">
				<view class="tit">
					完工时间:
				</view>
				<view class="cc mb-form-item mb-flex mb-flex-h-bt">
					<view class="l">
						{{datas.completeTime}}
					</view>
				</view>
			</view>
			<view class="item mb-flex mb-flex-v-center">
				<view class="tit">
					服务人员:
				</view>
				<view class="cc mb-form-item mb-flex mb-flex-h-bt">
					<view class="l">
						{{datas.erectorName}}
					</view>
				</view>
			</view>
			<view class="item mb-flex mb-flex-v-center">
				<view class="tit">
					联系电话:
				</view>
				<view class="cc mb-form-item mb-flex mb-flex-h-bt">
					<view class="l">
						{{datas.erectorPhone}}
					</view>
				</view>
			</view>
		</view>
		<view class="text-area">
			<view class="tit">投诉内容</view>
			<textarea placeholder="描述您要投诉的内容~最多300字" maxlength="300" cursor-spacing="40" v-model="textValue" />
		</view>
		<view class="pic-area">
			<image-upload title="添加图片(最多6张)" :upImgConfig="upImgBasic" @onUpImg="getPic" @onImgDel="delImgInfo" ref="uImage"></image-upload>
		</view>
		<view class="btn">
			<button type="primary" @tap="upImage">发 布</button>
		</view>
	</view>
</template>

<script>
	import imageUpload from '@/components/image-upload/image-upload.vue'
	import Utils from '@/common/utils.js'
	export default {
		components:{
			imageUpload
		},
		data() {
			let _this = this;
			return {
				datas:'',
				upImgBasic:{
					// 后端图片接口地址
					basicConfig: {
						url: _this.$api.UploadImgMulty
					},
					// 图片数量
					maxCount:6,
					autoUpload:false,
					multiply:true
				},
				upImgArr:[],
				uploadFinshed:false
			}
		},
		onLoad(option) {
			if(option.orderId){
				console.log(option.orderId)
				this.orderId = option.orderId;
			}
			this.getDetil();
		},
		methods: {
			getDetil(){
				let _this = this;
				this.$http.request({
					url:this.$api.ComplaintOrders,
					data:{
						orderId:_this.orderId
					},
					method:'POST'
				}).then(res => {
					if(res.errno == '0'){
						this.datas = res.data;
					}
				})
			},
			getPic(res){
				if(!res) return;
				let imgArr = [];
				
				res.forEach(function(item){
					if(item){
						imgArr.push(item)
					}
				})
				if(imgArr.length == res.length){
					console.log('上传完毕')
					this.upImgArr = imgArr;
					this.uploadFinshed = true;
					this.submit();
				}else{
					console.log('上传失败')
				}
			},
			upImage:Utils.debounce(function(){
				if(!this.uploadFinshed){
					this.$refs.uImage.upLoadImages(this.upImgBasic)
				}else{
					this.submit();
				}
				
			},1000),
			submit(){
				let _this = this;
				this.$http.request({
					url:this.$api.ComplaintSubOrders,
					data:{
						orderId:_this.orderId,
						complaintContent:_this.textValue,
						picture:_this.upImgArr.join(',')
					},
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
	.tp-border{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 2upx;
		background: #ccc;
	}
	.complain-wrapper{
		padding-top: 2upx;
		font-size:28upx;
		.content{
			padding: 10upx 30upx;
			.item{
				height:54upx;
				.tit{
					width: 140upx;
					font-weight: 550;
				}
				.cc{
					.status{
						color:#FE0707;
					}
				}
			}
		}
		.text-area{
			padding:10upx 30upx;
			.tit{
				margin: 10upx 0;
				font-weight: 600;
			}
			textarea{
				height: 160upx;
				width: 100%;
				border:1px solid #333333;
				text-indent: 20upx;
			}
		}	
		.pic-area{
			padding: 0 30upx 170upx 30upx;
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
