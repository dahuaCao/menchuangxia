import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		myLocation:'襄阳',//初始位置，可以在首页选择更改
		userInfo:{},
		isLogin:false
	},
	mutations: {
		setLocation(state,location){
			state.myLocation = location;
		},
		login(state,userInfo){
			state.userInfo.avatar = userInfo.userInfo.avatar;
			state.userInfo.weixinAddress = userInfo.userInfo.weixinAddress;
			state.userInfo.nickname = userInfo.userInfo.nickname;
		},
		loginOut(){
			
		}
	},
	actions: {
		
	}
})

export default store
