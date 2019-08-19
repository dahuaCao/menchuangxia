<template>
	<view>
		<view class="pos-bg"></view>
		<view class="content">
			<block v-for="(item,index) in list" :key="index">
				<view class="item mb-flex">
					<view class="item-img">
						
					</view>
					<view class="item-content mb-flex mb-flex-column mb-flex-h-bt">
						<view class="title">
                            蒙毅铝合金高档隔热隔音窗防潮MY-112-90
                        </view>
						<view class="c-des">
							<view class="price">588-988</view>
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
				list:[2,2,3,4,7,8]
			};
		}
	}
</script>

<style lang="scss">
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
	} 
   .content{
	   font-size: 28upx;
	   .item{
		   padding: 24upx 30upx;
		   height: 285upx;
		   box-sizing: border-box;
		   .item-img{
			   height: 235upx;
			   width: 250upx;
			   background: moccasin;
			   margin-right: 30upx;
		   }
		   .item-content{
			   flex: 1;
			   width: 0;
			   .title{
				   line-height: 32upx;
			   }
			   .c-des{
				  .price{
					  font-size: 32upx;
					  font-weight: 600;
					  color: #FF0000;
				  }
				   .des{
					   color:#838383;
					   font-size: 18upx;
					   .des-item{
						   &:nth-child(2){
							   margin: 0 16upx;
						   }
					   }
				   }
			   }
		   }
	   }
   }
</style>
