<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';
	/* iconfont 自定义字体图标 */
	@import './common/mb-font.css';
	/*每个页面公共css */
	@import './common/mb-common.css';
	page{
		width: 100%;
		height: 100%;
	}
</style>
