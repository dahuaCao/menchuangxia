<template>
	<view class="container">
		<view class="tt">
			<view class="pos">{{status}}</view>
			<view class="travel mb-flex mb-flex-center" @tap.stop="change">
				<view class="text">订单轨迹</view>
				<view class="icon iconfont iconbelow-s animation" :class="{active:isOpen}"></view>
			</view>
		</view>
		<view class="tc  animation" :style="{maxHeight:isOpen ? height : '0px'}">
			<block v-for="(item,index) in travel" :key="index">
				<view class="timeline-item" :class="{'timeline-first-item':index == 0,'timeline-last-item':((travel.length -1 != 0)&&index == (travel.length -1))}">
					<view class="timeline-item-divider"></view>
					<view class="timeline-item-content">
						<view>{{item.schedule}}</view>
						<view class="datetime">{{item.processTime}}</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			travel:{
				type:Array,
				default(){
					return []
				}
			},
			status:{
				type:String,
				default:'已预约'
			}
		},
		data() {
			return {
				isOpen: false,
				height: '700px',
			};
		},
		methods: {
			change() {
				this.isOpen = !this.isOpen;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.animation {
		transition: all .3s;
	}

	.container {
		width: 100%;
		
		.tt {
			width: 100%;
			height: 50upx;
			// background-color: #ccc;
			position: relative;

			.pos {
				position: absolute;
				left: 0;
				top: 10upx;
			}

			.travel {
				// height: 100%;

				.text {}

				.icon {
					font-size: 38upx;
					transform: rotate(0);
					transform-origin: center center;

					&.active {
						transform: rotate(-180deg);
					}
				}

				.sanjiao {
					width: 0;
					height: 0;
					border-right: 24upx solid transparent;
					border-left: 24upx solid transparent;
					border-bottom: 24upx solid red;
				}
			}
		}

		.tc {
			position: relative;
			width: 100%;
			overflow: hidden;
			.timeline-item {
				display: flex;
				flex-direction: row;
				position: relative;
				padding-bottom: 10upx;
				box-sizing: border-box;
				overflow: hidden;
				.timeline-item-divider {
					flex-shrink: 0;
					position: relative;
					width: 30upx;
					height: 30upx;
					top: 15upx;
					border-radius: 50%;
					background-color: #bbb;	
				}
				.timeline-item-content {
					padding-left: 20upx;
					.datetime {
						color: #FE0707;
					}
				}
			}
			
			.timeline-item-divider::before,
			.timeline-item-divider::after {
				position: absolute;
				left: 15upx;
				width: 1upx;
				height: 100vh;
				content: '';
				background: inherit;
			}

			.timeline-item-divider::before {
				bottom: 100%;
			}

			.timeline-item-divider::after {
				top: 100%;
			}


			.timeline-last-item .timeline-item-divider:after {
				display: none;
			}

			.timeline-first-item .timeline-item-divider:before {
				display: none;
			}
			.timeline-last-item .bottom-border::after {
				display: none;
			}


			/* 自定义节点颜色 */
			.timeline-first-item .timeline-item-divider {
				background-color: #FE0707;
			}
		}
	}
</style>
