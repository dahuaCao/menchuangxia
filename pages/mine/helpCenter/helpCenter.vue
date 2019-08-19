<template>
	<view class="wrapper mb-flex mb-flex-column">
		<view class="pos-bg"></view>
		<view class="content mb-flex mb-flex-column">
			<view class="c-tl mb-flex mb-flex-v-center">
				<block v-for="(item,index) in dataList" :key="index">
					<view class="tl-item mb-form-item" :class="{active:index == currentIndex}" @tap="changeT(index)">{{item}}</view>
				</block>
			</view>
			<view class="c-cc" ref="input">
				<view class="c-item"  v-show="currentIndex === 0">
					<uParse :content="article1" />
				</view>
				<view class="c-item" v-show="currentIndex === 1">
					<uParse :content="article2" />
				</view>
				<view class="c-item" v-show="currentIndex === 2">
					<uParse :content="article3" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uParse from '@/components/uParse/src/wxParse.vue'
	export default {
		components: {
			uParse
		},
		data() {
			return {
				dataList: ["常见问题", "保养手册", "服务流程"],
				currentIndex: 0,
				article1: '',
				article2: '',
				article3: ''
			};
		},
		onLoad() {
			this.getArticel();
		},
		methods: {
			changeT(index) {
				this.currentIndex = index;
				console.log(this.$refs.input)
				console.log(JSON.stringify(this.$refs.input))
			},
			getArticel() {
				this.$http.request({
					url: this.$api.HelpCenterList,
					method: 'POST'
				}).then(res => {
					let lists = res.data.list;
					this.article1 = lists[0].content;
					this.article2 = lists[1].content;
					this.article3 = lists[2].content;
				})
			}
		}
	}
</script>

<style lang="scss">
	@import url("../../../components/uParse/src/wxParse.css");

	page {
		height: 100%;
		width: 100%;
	}

	::-webkit-scrollbar {
		width: 0;
	}

	.wrapper {
		height: 100%;
	}

	.content {
		flex: 1;
		height: 0;
		padding: 0 30upx 30upx;

		.c-tl {
			height: 78upx;

			.tl-item {
				text-align: center;
				border-right: 1px solid #818181;

				&:last-child {
					border-color: transparent;
				}

				&.active {
					color: red;
				}
			}
		}

		.c-cc {
			flex: 1;
			height: 0;
			box-shadow: 0px 6upx 20upx 0px rgba(0, 0, 0, 0.09);
			overflow: scroll;
			scrollbar-face-color: red;
		}
	}
</style>
