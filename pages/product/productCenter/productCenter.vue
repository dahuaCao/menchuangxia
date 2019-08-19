<template>
	<view class="container mb-flex mb-flex-column">
		<view class="pos-bg"></view>
		<view class="search-wrapper mb-flex mb-flex-center">
			<view class="search-content mb-flex mb-flex-v-center">
				<view class="icon iconfont iconsearch"></view>
				<view class="des mb-form-item">推拉门</view>
				<view class="icon iconfont iconguanbi"></view>
			</view>
		</view>
		<view class="page-body mb-form-item mb-flex">
			<scroll-view class="nav-left" scroll-y>
				<block v-for="(item,index) in categoryList" :key="index">
					<view class="nav-left-item" :class="{active:index == categoryActive }" @tap="categoryClickMain(index,item)">{{item.categoryName}}</view>
				</block>

			</scroll-view>
			<scroll-view class="nav-right mb-form-item" scroll-y>
				<block v-for="(item,index) in SubCategoryList" :key="index">
					<view class="nav-rt-item mb-flex mb-flex-column mb-flex-v-center" @tap="getLists(item.id)">
						<!-- <view class="img"></view> -->
						<image class="img" :src="item.picture" mode="aspectFill"></image>
						<view class="des">{{item.categoryName}}</view>
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categoryActive: 0,
				categoryList: [],
				SubCategoryList: []
			};
		},
		onLoad() {
			this.getCategory();
		},
		methods: {
			getCategory(id) {
				let data = {};
				if (id) {
					data = {
						categoryId: id
					}
				}
				this.$http.request({
					url: this.$api.CatalogList,
					data:data
				}).then(res => {
					let data = res.data;
					if(!this.categoryList.length){
						this.categoryList = data.categoryList;
					}
					this.SubCategoryList = data.currentSubCategoryList;
				})
			},
			categoryClickMain(index,item) {
				this.categoryActive = index;
				this.getCategory(item.id)

			},
			getLists(id){
				console.log(id)
				uni.navigateTo({
					url:"../productLists/productLists?id="+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		height: 100%;

		.search-wrapper {
			height: 140upx;

			.search-content {
				width: 640upx;
				height: 60upx;
				border: 1px solid #BDBDBD;
				border-radius: 30upx;
				padding-left: 20upx;
				color: #BDBDBD;

				.des {}
			}
		}

		.page-body {
			height: 0;

			.nav-left {
				height: 100%;
				width: 180upx;
				background: #F4F4F4;

				.nav-left-item {
					height: 80upx;
					line-height: 80upx;
					text-align: center;

					&.active {
						background: #fff;
						border-left: 8upx solid rosybrown;
						color: #2574EB;
					}
				}
			}

			.nav-right {
				width: 0;
				.nav-rt-item {
					width: 50%;
					float: left;
					.img {
						width: 250upx;
						height: 235upx;
						background: #fff;
					}
					.des {
						height: 80upx;
						line-height: 80upx;
						text-align: center;
					}
				}
			}
		}
	}
</style>
