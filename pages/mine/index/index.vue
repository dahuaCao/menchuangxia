<template>
	<view class="mb-wrap">
		<view class="pos-bg"></view>
		<view class="personal-info mb-flex" @tap="erweima">
			<view class="info-lf mb-flex mb-form-item">
				<view class="info-img">
					<view v-if="userInfo.avatar" class="image">
						<image :src="userInfo.avatar" mode=""></image>
					</view>
					<view v-else class="icon iconfont icongerenzhongxinxuanzhong"></view>
				</view>
				<view class="info-c mb-flex mb-flex-column mb-form-item">
					<view class="name">{{userInfo.nickname?userInfo.nickname:'游客'}}</view>
					<view class="adr">地址:时代天街A楼B座</view>
				</view>
			</view>
			<view class="info-rf mb-flex">
				<view class="icon iconfont iconerweima"></view>
			</view>
		</view>
		<view class="list-content mb-flex mb-flex-column ">
			<navigator url="../coupons/coupons">
				<view class="list-cell mb-flex mb-flex-h-bt mb-flex-v-center">
					<view class="list-lf mb-flex mb-flex-v-center">
						<view class="icon iconfont iconyouhuiquan yhj"></view>
						<view class="">优惠卷</view>
					</view>
					<view class="lsit-rf">
						<view class="icon iconfont iconjiantou arrow"></view>
					</view>
				</view>
			</navigator>
			
			<navigator url="../address/addressManger/addressManger">
				<view class="list-cell mb-flex mb-flex-h-bt mb-flex-v-center">
					<view class="list-lf mb-flex mb-flex-v-center">
						<view class="icon iconfont icondizhi ad"></view>
						<view class="">地址管理</view>
					</view>
					<view class="lsit-rf">
						<view class="icon iconfont iconjiantou arrow"></view>
					</view>
				</view>
			</navigator>
			<navigator url="../helpCenter/helpCenter">
				<view class="list-cell mb-flex mb-flex-h-bt mb-flex-v-center">
					<view class="list-lf mb-flex mb-flex-v-center">
						<view class="icon iconfont iconbangzhuzhongxin hc"></view>
						<view class="">帮助中心</view>
					</view>
					<view class="lsit-rf">
						<view class="icon iconfont iconjiantou arrow"></view>
					</view>
				</view>
			</navigator>
			<navigator url="../suggestion/suggestion">
				<view class="list-cell mb-flex mb-flex-h-bt mb-flex-v-center">
					<view class="list-lf mb-flex mb-flex-v-center">
						<view class="icon iconfont iconyijianfankui yj-fg"></view>
						<view class="">意见反馈</view>
					</view>
					<view class="lsit-rf">
						<view class="icon iconfont iconjiantou arrow"></view>
					</view>
				</view>
			</navigator>
			
			<view class="list-cell mb-flex mb-flex-h-bt mb-flex-v-center">
				<view class="list-lf mb-flex mb-flex-v-center">
					<view class="icon iconfont iconshouyi- profit"></view>
					<view class="">我的收益</view>
				</view>
				<view class="lsit-rf">
					<view class="icon iconfont iconjiantou arrow"></view>
				</view>
			</view>
			<view class="list-cell mb-flex mb-flex-h-bt mb-flex-v-center">
				<view class="list-lf mb-flex mb-flex-v-center">
					<view class="icon iconfont iconyinhangqia c-manger"></view>
					<view class="c-card">银行卡管理</view>
				</view>
				<view class="lsit-rf">
					<view class="icon iconfont iconjiantou arrow"></view>
				</view>
			</view>
			<view class="list-cell mb-flex mb-flex-h-bt mb-flex-v-center">
				<view class="list-lf mb-flex mb-flex-v-center">
					<view class="icon iconfont iconicon_gengduoshezhi m-set"></view>
					<view class="">更多设置</view>
				</view>
				<view class="lsit-rf">
					<view class="icon iconfont iconjiantou arrow"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			...mapState(['userInfo'])
		},
		onLoad(){
			console.log(this.userInfo)
		},
		methods:{
			erweima(){
				uni.navigateTo({
					url:'../erweima/erweima'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #F5F5F5;
		font-size: 28upx;
	}
	.mb-wrap{
		background: #fff;
	}
	.personal-info{
		height: 196upx;
		padding: 24upx 28upx 0;
		.info-lf{
			.info-img{
				height: 138upx;
				width: 138upx;
				// background: chocolate;
				margin-right: 30upx;
				.image{
					image{
						height: 138upx;
						width: 138upx;
						border-radius: 100%;
					}	
				}
				.icon{
					font-size: 144upx;
					color: #2574EB;
				}
			}
			.info-c{
				padding-top: 10upx;
				line-height: 1.8;
				width: 0;
				.name{
					font-weight: 600;
				}
			}
		}
		.info-rf{
			width: 100upx;
			justify-content: flex-end;
			padding-top: 30upx;
			.icon{
				font-size: 76upx;
				color: #51595D;
			}
		}
	}
	.list-content{
		padding: 0 30upx 170upx;
		.list-cell{
			height: 100upx;
			border-bottom: 1px solid #CDCDCD;
			.list-lf{
				font-size: 32upx;
				.icon{
					font-size: 48upx;
					margin-right: 20upx;
				}
				.yhj{
					color: #D9220A;
				}
				.ad{
					color:#12B2A6;
				}
				.hc{
					color: #FF3030;
				}
				.yj-fg{
					color: #509FD8;
				}
				.profit{
					color: #F96400;
					// font-size: 56upx;
				}
				.c-manger{
					color: #16C7E4;
					font-size: 60upx;
					position: relative;
					left: -4upx;
					margin-right: 12upx;
				}
				
				.m-set{
					color: #2574EB;
				}
			}
			.lsit-rf{
				.arrow{
					font-size: 48upx;
					color:#333;
				}
			}
		}
	}
</style>
