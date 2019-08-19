<template>
	<view>
		<view class="pos-bg"></view>
		<view class="ad-content">
			<block v-for="(item,index) in list" :key="index">
				<view class="ad-cell mb-flex mb-flex-v-center" @tap="backPage(item.id)">
					<view class="ad-lf mb-flex mb-flex-column mb-form-item">
						<view class="lf-item mb-flex">
							<view class="item-l">{{item.name}}</view>
							<view class="item-r mb-form-item">{{item.mobile}}</view>
						</view>
						<view class="lf-item mb-flex">
							<view class="item-l default">{{item.isDefault?"":"默认"}}</view>
							<view class="item-r mb-form-item">{{item.detailAddress}}</view>
						</view>
					</view>
					<view class="ad-rf">
						<view class="edit mb-flex mb-flex-v-center" @tap.stop="AddOrUpdate(item.id)">编辑</view>
					</view>
				</view>
			</block>
		</view>
		<view class="bt-content">
			<button type="primary" class="custom-bt" @tap="AddOrUpdate">添加新地址</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			};
		},
		onShow() {
			this.getList();
		},
		methods:{
			AddOrUpdate(id){
				let url = "../addAddress/addAddress";
				if(typeof id == 'number'){
					url = "../addAddress/addAddress?addressId="+id;
				}
				uni.navigateTo({
					url:url
				})
			},
			backPage(id){
				console.log('返回页面')
				let pages = getCurrentPages();
				let prePage = pages[pages.length - 2];
				console.log(prePage.route)
				if(prePage.route == 'pages/shopCart/applyOrders/applyOrders'){
					try{
						uni.setStorageSync('addressId', id);
// 						uni.navigateTo({
// 							url:'/pages/shopCart/applyOrders/applyOrders'
// 						})
						uni.navigateBack();
					}catch(e){
						//TODO handle the exception
						console.log('地址缓存失败')
					}
				}
				
				// #ifdef APP-PLUS
				console.log(prePage.route)
				console.log("prePage: " + JSON.stringify(prePage.$getAppWebview()));
				// #endif
			},
			getList(){
				this.$http.request({
					url:this.$api.AddressList,
					method:'POST'
				}).then(data => {
					console.log(data)
					this.list = data.data || [];
				})
			}
		}
	}
</script>

<style lang="scss">
.ad-content{
	padding: 0 30upx 170upx;
	box-sizing: border-box;
	.ad-cell{
		height: 174upx;
		border-bottom: 1px solid #818181;
		.ad-lf{
			.lf-item {
				.item-l{
					width: 110upx;
					&:first-child{
						margin-bottom: 10upx;
					}
					&.default{
						color:green;
					}
				}
				.item-r{
					width: 0;
				}
			}
		}
		.ad-rf{
			width: 90upx;
			.edit{
				height: 54upx;
				border-left: 1px solid #CECECE;
				color:#CECECE;
				padding-left: 10upx;
				box-sizing: border-box;
				font-size: 32upx;
				
			}
		}
	}
}
.bt-content{
	height: 160upx;
	width: 100%;
	background: #fff;
	padding: 20upx 30upx 0;
	box-sizing: border-box;
	position: fixed;
	left: 0;
	bottom: 0;
	.custom-bt{
		background: #2574EB;
	}
}
</style>
