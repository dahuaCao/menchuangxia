<template>
	<view class="feed-back">
		<view class="pos-bg"></view>
		<view class="feed-title mb-flex mb-flex-v-center">
			<view>嗨~您好，感谢使用门窗宝平台！</view>
		</view>
		<view class="type-opin">
			<view class="tit">意见类型</view>
			<view>
				<radio-group @change="radioChange" class="radio-group mb-flex">
					<label v-for="(item, index) in typeLists" :key="index" class="radio mb-flex">
						<view>
							<radio :value="item.type"  />
						</view>
						<view>{{item.name}}</view>
					</label>
				</radio-group>
			</view>
		</view>
		<view class="des">
			<view class="tit">
				具体情况描述
			</view>
			<textarea placeholder-style="color:#ccc" placeholder="请详细描述您的问题或建议(不超过300字~~)"  v-model="subParams.details" />
			</view>
		<view class="input-c">
			<view class="input-itm mb-flex mb-flex-v-center">
				<view class="lf">姓　　名</view>
				<input class="r-input mb-form-item" type="text" placeholder="请输入您的姓名" cursor-spacing="18" v-model="subParams.name">
			</view>
			<view class="input-itm mb-flex mb-flex-v-center">
				<view class="lf">联系方式</view>
				<input class="r-input mb-form-item"  placeholder="请输入您的手机号码" cursor-spacing="18" type="number" v-model="subParams.mobile">
			</view>
		</view>
		<view class="sub-btn">
			<button type="primary" @tap="checkParams">提 交</button>
		</view>
	</view>
</template>

<script>
	import Utils from '../../../common/utils.js';
	export default {
		data() {
			return {
				typeLists:[{name:'安装建议',type:1},{name:'售后服务',type:2},{name:'问题反馈',type:3}],
				subParams:{}
			}
		},
		methods: {
			radioChange(e){
				console.log(e)
				this.subParams.type = e.detail.value;
			},
			checkParams(){
				if(!this.subParams.type){
					this.$pop.msg('请选择意见提交类型');
					return;
				}
				if(!this.subParams.details){
					this.$pop.msg('请选择输入提交意见');
					return;
				}
				if(!this.subParams.name){
					this.$pop.msg('请输入联系人姓名!!');
					return;
				}
				if(!Utils.isMobile.test(this.subParams.mobile)){
					this.$pop.msg('请输入正确的电话号码!!');
					return;
				}
				this.submit();
			},
			submit(){
				this.$http.request({
					url:this.$api.SuggestionSub,
					data:this.subParams,
					method:'POST'
				}).then(res => {
					if(res.errno == '0'){
						uni.showModal({
							content:'意见提交成功!!!',
							showCancel:false,
							success(){
								uni.navigateBack({
									
								});
							}
						})
						
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.feed-back{
		font-size:40upx;
		.feed-title{
			height: 110upx;
			padding: 0 30upx;
			font-weight: 600;
			
		}
		.type-opin{
			padding:0 30upx;
			.tit{
				margin: 10upx 0;
			}
			.radio-group{
				.radio{
					radio{
						transform: scale(0.8);
					}
				}
			}
		}
		.des{
			padding:0 40upx;
			.tit{
				margin:14upx 0;
			}
			textarea{
				width: 100%;
				border: 1px solid #808080;
				// padding: 10upx;
				text-indent: 24upx;
			}
		}
		.input-c{
			margin-top: 30upx;
			padding: 0 30upx;
			.input-itm{
				height:90upx;
				.lf{
					width: 120upx;
					margin-right: 24upx;
				}
				.r-input{
					height: 60upx;
					border: 1px solid #2574EB;
					border-radius: 4px;
					margin-right: 10upx;
					width: 0;
					padding-left: 10upx;
				}
			}
		}
		.sub-btn{
			position: fixed;
			height: 160upx;
			width: 100%;
			bottom: 0;
			left: 0;
			padding:0 30upx;
			button{
				background: #2574EB;
			}
		}
	}
</style>
