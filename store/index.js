
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state: {//存放状态
		clickedNav: '', // 点击的一级导航
		activeItem: '', // 点击的二级导航
	},
	mutations: {
		setClickedNav(state, val) {
			state.clickedNav = val
		},
		setActiveItem(state,val) {
			state.activeItem = val;
		},
	},
	actions: {
		
	},
})
export default store
