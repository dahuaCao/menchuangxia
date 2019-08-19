<template>
	<view>
		<view class="pos-bg"></view>
		<view class="content">
			<block v-for="(item,index) in lists" :key="index">
				<view class="item mb-flex" @tap="goDetail(item.id)">
					<image class="item-img" :src="item.picture" mode="aspectFill"></image>
					<view class="item-content mb-flex mb-flex-column mb-flex-h-bt">
						<view class="title">{{item.title}}</view>
						<view class="c-des">
							<template v-if="Number(item.outparam1)">
								<view class="price">¥ {{item.outparam1}}-{{item.outparam2}}</view>
							</template>
							<template v-else>
								<view class="price">{{item.outparam1}}</view>
							</template>
							<view class="des mb-flex">
								<view class="des-item">月销</view>
								<view class="des-item">25笔</view>
								<view class="des-item">99%好评</view>
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [2, 2, 3, 4, 7, 8],
				lists: []
			};
		},
		onLoad(options) {
			console.log(options)
			this.getList(options.id)
		},
		methods: {
			getList(id) {
				this.$http.request({
					url: this.$api.CatalogCurrent,
					data: {
						categoryId: id
					}
				}).then(res => {
					console.log(123)
					console.log("res: " + JSON.stringify(res));
					let data = res.data;
					this.lists = data.records;
				})
			},
			goDetail(id){
				uni.navigateTo({
					url:"../productDetail/productDetail?id=" + id
				})
			}
		}
	}
</script>

<style lang="scss">
	/*隐藏滚动条*/
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	.content {
		font-size: 28upx;

		.item {
			padding: 24upx 30upx;
			height: 285upx;
			box-sizing: border-box;

			.item-img {
				height: 235upx;
				width: 250upx;
				background: moccasin;
				margin-right: 30upx;
			}

			.item-content {
				flex: 1;
				width: 0;

				.title {
					line-height: 32upx;
				}

				.c-des {
					.price {
						font-size: 32upx;
						font-weight: 600;
						color: #FF0000;
					}

					.des {
						color: #838383;
						font-size: 18upx;

						.des-item {
							&:nth-child(2) {
								margin: 0 16upx;
							}
						}
					}
				}
			}
		}
	}
</style>
