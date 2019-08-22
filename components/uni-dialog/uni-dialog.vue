<template>
	<view class="dialog-mask" v-show="isShow">
		<view class="wrapper-d" :animation="animationData" v-show="isShow" >
			<view class="title">
				温馨提示
				<uni-icon type="guanbi" size="54" class="closed" @click="closed"></uni-icon>
			</view>
			<view class="content">
				<view class="content-info">
					<slot name="content"></slot>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '../uni-icon/uni-icon.vue';
	export default {
		components: {
			uniIcon
		},
		name: 'uni-dialog',
		data() {
			return {
				isShow: true,
				animationData: {}
			};
		},
		methods: {
			closed() {
				console.log(123)
				// this.isShow = false;
				this.showOrCloseDialog();
			},
			showOrCloseDialog(type) {
				let animation = uni.createAnimation({
					duration: 200, //动画时长
					timingFunction: "linear", //线性
				})
				this.animation = animation
				animation.opacity(0).rotateX(-100).step();
				this.animationData = animation.export()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dialog-mask {
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0);
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;

		.wrapper-d {
			width: 622upx;
			height: 630upx;
			background: #fff;
			box-shadow: 0px 0px 20upx 0px rgba(0, 0, 0, 0.27);
			font-size: 40upx;
			color: red;

			.title {
				height: 80upx;
				border-bottom: 1px solid #ccc;
				text-align: center;
				line-height: 80upx;
				position: relative;

				.closed {
					position: absolute;
					right: 0;
					top: 0;
				}
			}

			.content {
				padding: 0 40upx;

				.content-info {
					text-indent: 40upx;
				}
			}
		}

	}
</style>
