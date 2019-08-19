import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		myLocation:'襄阳',//初始位置，可以在首页选择更改
	},
	mutations: {
		setLocation(state,location){
			state.myLocation = location;
		}
	},
	actions: {
		
	}
})

export default store
