(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/orders/reservarOrderDetail/reservarOrderDetail"],{"216d":function(e,r,o){},2870:function(e,r,o){"use strict";var t=o("216d"),n=o.n(t);n.a},"2a76":function(e,r,o){"use strict";var t=function(){var e=this,r=e.$createElement,o=(e._self._c,e.__map(e.couPonList,function(r,o){var t=r.startTime.split(" "),n=r.endTime.split(" ");return{$orig:e.__get_orig(r),g0:t,g1:n}}));e.$mp.data=Object.assign({},{$root:{l0:o}})},n=[];o.d(r,"a",function(){return t}),o.d(r,"b",function(){return n})},6373:function(e,r,o){"use strict";o.r(r);var t=o("ca3a"),n=o.n(t);for(var i in t)"default"!==i&&function(e){o.d(r,e,function(){return t[e]})}(i);r["default"]=n.a},ca3a:function(e,r,o){"use strict";(function(e,t){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=function(){return o.e("components/caculPrice").then(o.bind(null,"475a"))},i={components:{CaculPrice:n},data:function(){return{orderType:1,orderInfo:"",erectorInfo:"",couPonList:"",showCouPon:!1,checkCoupon:!1,couponTitle:"点击选择优惠卷",couPonId:0}},onLoad:function(r){console.log(e(r," at pages\\orders\\reservarOrderDetail\\reservarOrderDetail.vue:196")),r.orderId&&(this.orderId=r.orderId),r.orderType&&(this.orderType=r.orderType,this.queryCoupon()),this.getDetail()},methods:{getDetail:function(){var e=this,r=this;this.$http.request({url:this.$api.Query_OrderDetail,data:{orderId:r.orderId},method:"POST"}).then(function(r){var o=r.data;e.orderInfo=o.orderInfo,e.erectorInfo=o.erectorInfo||""})},preImage:function(e){t.previewImage({urls:[e],success:function(){}})},queryCoupon:function(){var e=this,r=this;this.$http.request({url:this.$api.NeedCoupon,data:{orderId:r.orderId},method:"POST"}).then(function(r){e.couPonList=r.data})},chooseCoupon:function(){this.couPonList?this.showCouPon=!0:this.$pop.msg("暂无可用优惠卷!!!")},chooseAmount:function(e){if(e)this.$set(e,"checked",!0),this.checkCoupon=!1,this.couPonId=e.id,this.couponTitle=e.title;else{var r=this;this.checkCoupon=!0,this.couPonId=0,this.couponTitle="不使用优惠卷",this.couPonList.forEach(function(e){r.$set(e,"checked",!1)})}},noUseCoupon:function(){this.checkCoupon=!this.checkCoupon,this.checkCoupon&&(this.couponTitle="不使用优惠卷")},moveHandle:function(){},hideCoupon:function(){this.showCouPon=!1},pay:function(){console.log(e("zhifu"," at pages\\orders\\reservarOrderDetail\\reservarOrderDetail.vue:281"));var r=this;this.$http.request({url:this.$api.AppPrePay,data:{orderId:r.orderId,couPonId:r.couPonId},method:"POST"}).then(function(o){console.log(e("App预支付"," at pages\\orders\\reservarOrderDetail\\reservarOrderDetail.vue:312"));var t=JSON.stringify(o);r.payMent(t)})},payMent:function(r){console.log(e("APP 调用微信支付"," at pages\\orders\\reservarOrderDetail\\reservarOrderDetail.vue:352")),t.requestPayment({provider:"wxpay",orderInfo:r,success:function(r){console.log(e("success",r," at pages\\orders\\reservarOrderDetail\\reservarOrderDetail.vue:357")),t.showToast({title:"感谢您的赞助!"})},fail:function(r){console.log(e("fail",r," at pages\\orders\\reservarOrderDetail\\reservarOrderDetail.vue:363")),t.showModal({content:"支付失败,原因为: "+r.errMsg,showCancel:!1})},complete:function(){}})}},computed:{}};r.default=i}).call(this,o("0de9")["default"],o("6e42")["default"])},fe6c:function(e,r,o){"use strict";o.r(r);var t=o("2a76"),n=o("6373");for(var i in n)"default"!==i&&function(e){o.d(r,e,function(){return n[e]})}(i);o("2870");var s=o("2877"),a=Object(s["a"])(n["default"],t["a"],t["b"],!1,null,null,null);r["default"]=a.exports}},[["8c00","common/runtime","common/vendor"]]]);