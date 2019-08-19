<template>
	<view>
		<view class="pos-bg"></view>
		<view class="order-list mb-flex mb-flex-column">
			<navigator url="../reservatOrders/reservatOrders">
				<view class="list-item mb-flex mb-flex-v-center mb-flex-h-bt">
					<view class="mb-flex mb-flex-v-center">
						<view class="icon iconfont iconicon36 yuyue-icon"></view>
						<view class="diw">
							<view>已预约</view>
							<view class="qipao">{{total.reserved}}</view>
						</view>
					</view>
					<view class="icon iconfont iconjiantou arrow"></view>
				</view>
			</navigator>
			<navigator url="../reservatOrders/reservatOrders?orderType=2">
				<view class="list-item mb-flex mb-flex-v-center mb-flex-h-bt">
					<view class="mb-flex mb-flex-v-center">
						<view class="icon iconfont icondaifukuan dfk-icon"></view>
						<view class="diw">
							<view>待付款</view>
							<view class="qipao">{{total.waitPayOrder}}</view>
						</view>
					</view>
					<view class="icon iconfont iconjiantou arrow"></view>
				</view>
			</navigator>
			<navigator url="../reservatOrders/reservatOrders?orderType=3">
				<view class="list-item mb-flex mb-flex-v-center mb-flex-h-bt">
					<view class="mb-flex mb-flex-v-center">
						<view class="icon iconfont iconweixiu3 daz-icon"></view>
						<view class="diw">
							<view>待安装/待维修</view>
							<view class="qipao">{{total.waitInstallOrRepairOrder}}</view>
						</view>
					</view>
					<view class="icon iconfont iconjiantou arrow"></view>
				</view>
			</navigator>
			<navigator url="../reservatOrders/reservatOrders?orderType=4">
				<view class="list-item mb-flex mb-flex-v-center mb-flex-h-bt">
					<view class="mb-flex mb-flex-v-center">
						<view class="icon iconfont iconshouhou1 sh-icon"></view>
						<view class="diw">
							<view>待评价</view>
							<view class="qipao">{{total.waitAppraiseOrder}}</view>
						</view>
					</view>
					<view class="icon iconfont iconjiantou arrow"></view>
				</view>
			</navigator>
			<navigator url="../reservatOrders/reservatOrders?orderType=5">
				<view class="list-item mb-flex mb-flex-v-center mb-flex-h-bt">
					<view class="mb-flex mb-flex-v-center">
						<view class="icon iconfont iconwancheng ywc-icon"></view>
						<view class="diw">
							<view>已完成</view>
							<view class="qipao">{{total.completeOrder}}</view>
						</view>
					</view>
					<view class="icon iconfont iconjiantou arrow"></view>
				</view>
			</navigator>
			
			<!-- #ifdef APP-PLUS -->
			
			<!-- #endif -->
			
			
			<view class="list-item mb-flex mb-flex-v-center mb-flex-h-bt">
				<view class="mb-flex mb-flex-v-center">
					<view class="icon iconfont iconshouhou1 sh-icon"></view>
					<view class="diw">
						<view>售后订单</view>
						<view class="qipao">{{total.afterSaleServiceOrder}}</view>
					</view>
				</view>
				<view class="icon iconfont iconjiantou arrow"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				total:''
			};
		},
		onShow() {
			this.getTotal();
		},
		methods:{
			async getTotal(){
				let res = await this.$http.request({
					url:this.$api.aboutOrders,
					method:'POST'
				})
				this.total = res.data;
			}
		}
	}
</script>

<style lang="scss">
   page{
	   
   }
   .order-list{
	   padding: 0 30upx;
	   .list-item{
		   height: 100upx;
		   width: 100%;
		   border-bottom: 1px solid #B5B5B5;
		   .diw{
			   position: relative;
			   .qipao{
				   height: 28upx;
				   width: 28upx;
				   padding: 4upx;
				   background: #FF3045;
				   color:#fff;
				   border-radius: 100%;
				   position: absolute;
				   right: -30upx;
				   top:-4upx;
				   font-size: 16upx;
				   display: flex;
				   justify-content: center;
				   align-items: center;
			   }
		   }
		   .icon{
			   margin-right: 24upx;
		   }
		   .yuyue-icon{
			   font-size: 60upx;
			   color:#FFB106;
		   }
		   .dfk-icon{
			   font-size: 42upx;
			   color:#FF3045;
		   }
		   .daz-icon{
			   font-size: 56upx;
			   color:#3F78DB;
		   }
		   .ywc-icon{
			   font-size: 48upx;
			   color:#FF6D23;
		   }
		   .sh-icon{
			   font-size: 54upx;
			   color:#009944;
		   }
		   .arrow{
			   font-size: 60upx;
			   margin-right: -10upx;
			   color:#333;
		   }
	   }
   }
</style>
