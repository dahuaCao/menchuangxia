let webUrl = 'https://www.xyzcwl.com/api/';
// let webUrl = 'http://192.168.31.195:8081/api/';
export default {
	UploadImgOne: webUrl + 'upload/uploadOneFile', //图片单张上传
	UploadImgMulty: webUrl + 'upload/uploadMultiFile', //图片多张上传
	
	AuthLoginByWeixin: webUrl + 'auth/login_by_weixin', //微信登录
	GetYzCode: webUrl + 'auth/regCaptcha', //手机登了验证码获取
	AuthLoginByMobile: webUrl + 'auth/login_by_sms', //微信登录

	HomePicture: webUrl + 'home/picture', //首页广告位图片

	HelpCenterList: webUrl + 'helpCenter/list', //帮助中心list接口
	newsCenterList: webUrl + 'newsCenter/list', //行业资讯列表查询
	newsCenterDetail: webUrl + 'newsCenter/detail', //行业资讯列表查询

	AddressSave: webUrl + 'address/add', //个人地址详情保存
	AddressList: webUrl + 'address/list', //个人收货地址列表
	AddressDetail: webUrl + 'address/getById', //收货地址详情
	AddressUpdate: webUrl + 'address/update', //保存收货地址
	AddressDelete: webUrl + 'address/delete', //删除收货地址
	
	CatalogList: webUrl + 'goods/goodsCategory', //产品中心
	CatalogCurrent: webUrl + 'goods/list', //产品中心列表
	GoodsDetail: webUrl + 'goods/goodsDetail', //产品详情
	GoodsParams: webUrl + 'goods/goodsParams', //产品详情参数查询
	AddCart: webUrl + 'cart/add', //商品添加购物车

	CartLists: webUrl + 'cart/index', //购物车列表
	CartDelete: webUrl + 'cart/delete', //购物车列表单项删除

	AppointOrders: webUrl + 'cart/bespeak', //预约下单(确认订单接口)
	BookOrder: webUrl + 'order/placeOrder', //预约下单(生成预约订单)
	
	CouponList: webUrl + 'coupon/list', //优惠卷列表查询
	NeedCoupon: webUrl + 'order/availableCoupon', //订单付款可用优惠卷查询
	
	
	
	WeixinPay: webUrl + 'order/prepay', //微信预支付接口
	AppPrePay: webUrl + 'order/androidPrepay', //APP预支付接口
	PayNotify: webUrl + 'order/frontPayNotify', //微信支付成功后通知后台

	aboutOrders: webUrl + 'order/entryMyOrderCenter', //total订单查询
	queryMyOrder: webUrl + 'order/queryMyOrder', //订单查询接口
	Query_OrderDetail: webUrl + 'order/queryOrderDetail', //订单详情查询接口
	Cancel_Order: webUrl + 'order/cancelOrder', //订单删除接口
	
	OrderAppraise: webUrl + 'order/doOrderAppraise', //订单评价接口
	
	UploadPicture: webUrl + 'upload/uploadPicture', //图片批量上传接口
	
	SuggestionSub: webUrl + 'suggestion/submit', //意见反馈接口
	ComplaintOrders: webUrl + 'order/writeOrderComplaint', //订单投诉详情查询
	ComplaintSubOrders: webUrl + 'order/doOrderComplaint', //订单投诉提交
	
	ApplyInvoice: webUrl + 'order/applyInvoice', //开票信息查询
	SubmitInvoice: webUrl + 'order/submitApplyInvoice', //开票信息提交

}
