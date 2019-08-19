export default {
	isMobile: /^1[3|4|5|6|7|8][0-9]{9}$/, //判断手机号码正则
	debounce: function(handler, delay){
		let timer = null;
		return function() {
			let _this = this,
				_arg = arguments;
			clearTimeout(timer);
			timer = setTimeout(function() {
				handler.apply(_this, _arg)
			}, delay)
		}
	}
}
