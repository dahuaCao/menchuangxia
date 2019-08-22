<template>
	<view>
		<view class="pos-bg"></view>
		<view class="QR-code mb-flex mb-flex-center">
			<uni-qrcode  ref="qrcode" :val="val" :size="size" :unit="unit"  :icon="userInfo.avatar" :iconSize="iconsize" :lv="lv" :onval="onval" :loadMake="loadMake" :usingComponents="true" @result="qrR" />
		</view>
	</view>
</template>

<script>
	import uniQrcode from '@/components/uni-qrcode/uni-qrcode.vue'
	import {mapState} from 'vuex';
	export default {
		components:{
			uniQrcode
		},
		data() {
			return {
				val: '二维码', // 要生成的二维码值
				size: 300, // 二维码大小
				unit: 'upx', // 单位
				background: '#fff', // 背景色
				foreground: '#000', // 前景色
				pdground: '#32dbc6', // 角标色
				iconsize: 40, // 二维码图标大小
				lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
				onval: false, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
				src: '' // 二维码生成后的图片地址或base64
			}
		},
		methods: {
			qrR(){
				
			}
				
		},
		computed:{
			...mapState(['userInfo'])
		},
		mounted() {
			console.log(this.userInfo)
		}
	}
</script>

<style>
	.QR-code{
		padding: 20upx;
	}
</style>
