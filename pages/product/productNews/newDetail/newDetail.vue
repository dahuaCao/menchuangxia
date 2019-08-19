<template>
	<view>
		<view class="padding-wrap">
			<uParse :content="article" @preview="preview" @navigate="navigate" />
		</view>
	</view>
</template>

<script>
	import uParse from '@/components/uParse/src/wxParse.vue'
	export default {
		components:{
			uParse
		},
		data() {
			return {
				article:''
			};
		},
		onLoad(options){
			let id = options.id;
			console.log(id)
			this.getDetail(id)
		},
		methods:{
			getDetail(id){
				this.$http.request({
					url:this.$api.newsCenterDetail,
					data:{
						id:id
					},
					method:'POST'
				}).then(data => {
					console.log("data: " + JSON.stringify(data));
					console.log(data.data.content)
					this.article = data.data.content;
				})
			},
			preview(src, e) {
				// do something
				console.log("src: " + src);
			},
			navigate(href, e) {
				// 如允许点击超链接跳转，则应该打开一个新页面，并传入href，由新页面内嵌webview组件负责显示该链接内容
				console.log("href: " + href);
				uni.showModal({
					content : "点击链接为：" + href,
					showCancel:false
				})
			}
		}
	}
</script>

<style>
@import url("../../../../components/uParse/src/wxParse.css");
.padding-wrap{
	padding: 0 30upx;
}
</style>
