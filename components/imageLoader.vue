<template>
	<view>
		<template v-if="loadFlag">
			<image src="/static/preview.png" mode="aspectFill" :style="{height:uHeight,width:uWidth,borderRadius:radius+'px'}"></image>
		</template>
		<template>
			<image :class="[loadFlag?'before-load':'']" :src="originImage" mode="aspectFill" :style="{height:uHeight,width:uHeight,borderRadius:radius+'px'}" @load="imageLoad()"></image>
		</template>
	</view>
</template>

<script>
	export default {
		name: 'image-loader',
		props: {
			originImage: {
				type: String
			},
			height:{
				type:Number
			},
			width:{
				type:Number
			},
			radius:{
				type:Number,
				default: 0
			}
		},
		data() {
			return {
				loadFlag: true
			};
		},
		computed:{
			uWidth(){
				return uni.upx2px(this.width) + 'px';
			},
			uHeight(){
				return uni.upx2px(this.height) + 'px';
			}
		},
		methods:{
			imageLoad(){
				this.loadFlag = false;
			}
		}
	}
</script>

<style lang="scss">
	image {
		height: 100%;
		width: 100%;
		&.before-load {
			width: 0;
			height: 0;
			opacity: 0;
		}
	}
</style>
