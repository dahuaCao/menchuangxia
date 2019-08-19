import Vue from 'vue'
import store from './store'
import App from './App'
import request from './common/request.js'
import api from './common/api.js'


const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}

const prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}

Vue.prototype.$pop = {msg, json, prePage};
Vue.config.productionTip = false
Vue.prototype.$http = request;
Vue.prototype.$api = api
App.mpType = 'app'

Vue.prototype.$store = store
const app = new Vue({
    ...App
})
app.$mount()
