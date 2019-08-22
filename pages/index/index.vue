<template>
	<view class="content" @tap="showMask">
        <image class="logo" src="/static/logo.png"></image>
		<view>
            <text class="title">{{title}}</text>
        </view>
		<uni-dialog></uni-dialog>
	</view>
</template>

<script>
	import uniDialog from '@/components/uni-dialog/uni-dialog.vue'
	export default {
		components:{
			uniDialog
		},
		data() {
			return {
				title: 'Hello',
				content:"您好！感谢使用门窗宝平台，售后服务请下载门窗宝APP申请售后流程，如有疑问，请拨打客服热线4000-0000"
			}
		},
		onLoad() {

		},
		methods: {
			showMask(){
				
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
