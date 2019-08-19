<template>
	<view>
		<!-- #ifdef MP -->
		<view class="wrapper-s mb-flex mb-flex-v-center">
			<view class="location mb-flex mb-flex-v-center" @tap="selectArea">
				<view class="icon iconfont icondingwei"></view>
				<view class="">{{myLocation}}</view>
			</view>
			<view class="search mb-form-item mb-flex mb-flex-v-center">
				<view class="icon iconfont iconsearch"></view>
				<view class="">平开窗</view>
			</view>
		</view>
		<!-- #endif -->
		<view class="mb-content-body index-swiper">
			<swiper class="my-coustom-swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			 :duration="duration" :circular="circular">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="index-banner mb-flex">
			<block v-for="(item,index) in dataObj.top" :key="index">
				<view class="banner-item" @tap="goDetail(index)">
					<image :src="item.picture" mode="aspectFill"></image>
				</view>
			</block>
		</view>
		<view class="pos-bg"></view>
		<view class="process-track mb-flex mb-flex-column">
			<view class="title">购买流程</view>
		</view>
		<view class="pos-bg"></view>
		<view class="staff-style mb-flex mb-flex-h-bt">
			<view class="staff-item">
				<image src="http://pic23.nipic.com/20120830/9686992_180336646144_2.jpg" mode="aspectFill"></image>
			</view>
			<view class="staff-item"></view>
		</view>
		<view class="pos-bg"></view>
		<view class="navgator-index mb-flex mb-flex-v-center">

			<view class="nav-item mb-flex mb-flex-center">
				<view class="icon iconfont icondingdan icon-my"></view>
				<view>快捷下单</view>
			</view>
			<view class="nav-item mb-flex mb-flex-center">
				<view class="icon iconfont icondingdan icon-my"></view>
				<view>员工风采</view>
			</view>
			<navigator class="nav-item mb-flex mb-flex-center" url="../../product/productNews/newList/newList">
				<view class="mb-flex mb-flex-center">
					<view class="icon iconfont icondingdan icon-my"></view>
					<view>产品时讯</view>
				</view>
			</navigator>

		</view>
		<view class="b-advert mb-flex">
			<view class="advet-item">
				<image src="http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg" mode="aspectFill"></image>
			</view>
			<view class="advet-item">
				<image src="http://img.redocn.com/sheji/20141219/zhongguofengdaodeliyizhanbanzhijing_3744115.jpg" mode="aspectFill"></image>
			</view>
		</view>
		<view class="bt-link mb-flex mb-flex-center">
			<view>如有疑问,请拨打客服热线400-666888-01</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import imageLoader from '@/components/imageLoader.vue'
	export default {
		components: {
			imageLoader
		},
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: false,
				autoplay: true,
				interval: 5000,
				duration: 500,
				circular: true,
				dataObj: {}
			};
		},
		onNavigationBarButtonTap(){
			console.log(11122)
			this.selectArea();
		},
		onNavigationBarSearchInputClicked(){
			console.log(223)
			this.goDetail(1);
		},
		onLoad() {
			var _this = this;
			this.$http.request({
				url: _this.$api.HomePicture,
				method: 'POST'
			}).then(res => {
				console.log(res)
				this.dataObj = res.data;
			})
		},
		computed: {
			...mapState(['myLocation'])
		},
		methods: {
			goDetail(index) {
				console.log(1)
				let url = index == 1 ? "../../product/productCenter/productCenter" : '';
				uni.navigateTo({
					url: url
				})
			},
			selectArea() {
				uni.navigateTo({
					url: '../areaSelect/areaSelect'
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100%;
		// background: #ccc;
		font-size: 28upx;
	}

	::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
	}

	/* #ifdef MP */
	.wrapper-s {
		height: 100upx;
		width: 100%;
		background: linear-gradient(9deg, rgba(54, 203, 246, 1), rgba(85, 96, 242, 1));
		padding: 0 30upx;

		.location {
			margin-right: 10upx;
			color: #fff;

			.icon {
				font-size: 48upx;

			}
		}

		.search {
			height: 56upx;
			background: #fff;
			border-radius: 30upx;
			color: #878787;
			padding-left: 20upx;

			.icon {
				font-size: 36upx;
				font-weight: 600;
				margin-right: 18upx;
			}
		}
	}

	/* #endif */
	.index-swiper {
		height: 358upx;

		.my-coustom-swiper {
			height: 100%;

			.swiper-item {
				height: 100%;
			}
		}
	}

	.index-banner {
		height: 180upx;
		padding: 18upx 30upx;

		.banner-item {
			flex: 1;
			background: cyan;

			&:last-child {
				margin-left: 20upx;
			}

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.process-track {
		padding-top: 16upx;
		height: 174upx;

		.title {
			padding-left: 30upx;
		}
	}

	.staff-style {
		height: 248upx;
		padding: 20upx 30upx;

		.staff-item {
			flex: 1;
			border-radius: 10upx;
			background: yellow;

			&:first-child {
				margin-right: 20upx;
			}

			image {
				width: 100%;
				height: 100%;
				border-radius: 10upx;
			}
		}
	}

	.navgator-index {
		height: 88upx;
		padding: 20upx 0;

		.nav-item {
			flex: 1;
			height: 100%;

			.icon-my {
				font-size: 60upx;
				margin-right: 14upx;
				color: #ccc;
			}
		}
	}

	.b-advert {
		height: 304upx;
		padding: 10upx 30upx;

		.advet-item {
			flex: 1;
			height: 100%;

			&:first-child {
				margin-right: 18upx;
			}

			image {
				width: 100%;
				height: 100%;
				border-radius: 8upx;
			}

		}
	}

	.bt-link {
		height: 94upx;
		color: #45494D;
	}
</style>
