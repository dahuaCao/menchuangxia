<template>
	<view>
		<view class="pos-bg"></view>
		<view class="list-content">
			<block v-for="(list,index) in dataList" :key="index">
				<view class="list-item mb-flex" @tap="goDetail(list.id)">
					<view class="item-img item">
						<image :src="list.outparam1" mode="aspectFill" @error="handErr(index)"></image>
					</view>
					<view class="item-title item">{{list.title}}</view>
					<view class="item-time item">{{list.yearMonth}}</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import imageLoader from '@/components/imageLoader.vue'
	import imageSrc from 'static/preview.png'
	export default {
		components: {
			imageLoader
		},
		data() {
			return {
				lists: [1, 2, 3, 4],
				pagenum: 1, //初始页默认值为1
				dataList: []
			};
		},
		onLoad() {
			this.getList();
			console.log(imageSrc)
		},
		onReachBottom() {
			if (this.totalPage > this.pagenum) {
				this.pagenum += 1;
				this.getList();
			}
		},
		methods: {
			getList() {
				this.$http.request({
					url: this.$api.newsCenterList,
					data: {
						pageNum: this.pagenum
					},
					method: 'POST'
				}).then(res => {
					// console.log(JSON.stringify(res))
					let data = res.data;
					console.log("data: " + JSON.stringify(data));
					if (this.dataList.length > 0) {
						this.dataList = this.dataList.concat(data.list)
					} else {
						this.dataList = data.list;
					}
					this.totalPage = data.pages;

				})
			},
			handErr(item) {
				this.dataList[item].outparam1 = imageSrc;
			},
			goDetail(id) {
				console.log(id)
				uni.navigateTo({
					url: '../newDetail/newDetail?id='+id
				});
			}
		}
	}
</script>

<style lang="scss">
	page {}

	.list-content {

		// padding: 30upx;
		.list-item {
			padding: 30upx;

			.item {
				height: 100%;
			}

			.item-img {
				height: 126upx;
				width: 126upx;
				margin-right: 24upx;
			}

			.item-title {
				flex: 1;
				flex-shrink: 0;
			}

			.item-time {
				margin-left: 40upx;
			}
		}
	}
</style>
