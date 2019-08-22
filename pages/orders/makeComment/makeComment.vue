<template>
	<view>
		<view class="pos-bg"></view>
		<view class="comment">
			<view class="title">请为此次服务打分</view>
			<view class="co-bd">
				<block v-for="(item,index) in evaluatItems" :key="index">
					<view class="item mb-flex">
						<view class="lf">{{item.title}}</view>
						<view class="rf">
							<uni-rate :data-item="item" :item="item.type" @change="changeValue"></uni-rate>
						</view>
					</view>
				</block>
			</view>
			<view class="textarea mb-flex">
				<textarea placeholder="安装效果不错吧，分享你的购买心得吧~最多140字" maxlength="140" cursor-spacing="40" v-model="textValue" />
				</view>
			<view class="pic">
				<image-upload title="添加图片分享(最多4张)" :upImgConfig="upImgBasic" @onUpImg="getPic" @onImgDel="delImgInfo" ref="uImage"></image-upload>
			</view>
		</view>
		<view class="btn">
			<button type="primary" @tap="upImage">发 布</button>
		</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	import imageUpload from '@/components/image-upload/image-upload.vue';
	import Utils from '@/common/utils.js'
	export default {
		components:{
			uniRate,
			imageUpload
		},
		data() {
			return {
				evaluatItems:[
					{title:'产品质量',type:1},
					{title:'师傅服务态度',type:2},
					{title:'客服服务态度',type:3},
				],
				upImgArr:[],
				textValue:'',
				upImgBasic:{
					// 后端图片接口地址
					basicConfig: {
						// url: 'https://p.dns06.net.cn/index.php?m=Api&c=index&a=upload',
						url: 'https://www.xyzcwl.com/api/upload/uploadPicture'
					},
					// 图片数量
					maxCount:4,
					autoUpload:false
				},
				productAppraise:5,
				erectorAppraise:5,
				platformAppraise:5	
			}
		},
		onLoad(option){
			if(option.orderId){
				console.log(option.orderId)
				this.orderId = option.orderId;
			}
		},
		methods: {
			delImgInfo(res){
				console.log(res)
			},
			changeValue(e){
				console.log(e)
				switch(e.type){
					case '1':
						this.productAppraise = e.value;
						break;
					case '2':
						this.erectorAppraise = e.value;
						break;
					case '3':
						this.platformAppraise = e.value;
						break;
				}
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
					this.submit();
				}else{
					console.log('上传失败')
				}
			},
			
			upImage:Utils.debounce(function(){
				this.$refs.uImage.upLoadImages(this.upImgBasic)
			},1000),
			submit(){
				let _this = this;
				this.$http.request({
					url:this.$api.OrderAppraise,
					data:{
						appraiseDescribe:_this.textValue,
						orderId:_this.orderId,
						picture:_this.upImgArr.join(','),
						erectorAppraise:_this.erectorAppraise,
						platformAppraise:_this.platformAppraise,
						productAppraise:_this.productAppraise	
					},
					method:'POST'
				}).then(res => {
					console.log(res)
					if(res.errno == 0){
						uni.navigateBack({
							
						});
					}
				})
			},
			
		}
	}
</script>

<style lang="scss">
	.comment{
		padding-bottom:180upx;
		.title{
			height: 100upx;
			text-align: center;
			line-height: 100upx;
			font-size: 36upx;
		}
		.co-bd{
			.item{
				.lf{
					width: 35%;
					text-align: right;
					margin:18upx 20upx 18upx 0;
				}
				
			}
		}
		.textarea{
			padding:0 30upx;
			margin:40upx 0 20upx;
			textarea{
				flex: 1;
				height: 140upx;
				border: 1px solid #777;
				padding: 10upx;
			}	
		}
		.pic{
			padding: 0 30upx;
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
</style>
