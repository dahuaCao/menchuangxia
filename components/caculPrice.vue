<template>
	<view>
		<view>{{price}}.00元</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				price:0
			};
		},
		created() {
			let totalPrice = 0;
			this.item.priceDetail&&this.item.priceDetail.prices.forEach(function(item) {
				totalPrice += item.value * item.count;
				if (item.attach) {
					if (item.count > item.attach.control.value) {
						totalPrice += item.attach.attachGt.value
					} else {
						totalPrice += item.attach.attachLte.value
					}
				}
			})
			this.price = totalPrice;
		}
	}
</script>
