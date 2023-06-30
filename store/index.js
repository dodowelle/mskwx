
import Vue from 'vue'
import Vuex from 'vuex'
import staticSideRoutes from '@/components/page-head/routes.js'
Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state: {//存放状态
		clickedNav: '', // 点击的一级导航
		activeItem: '', // 点击的二级导航
		sideRouter: []
	},
	getters: {
		getSideRouter: (state) => {
			return state.sideRouter
		} 
	},
	mutations: {
		setClickedNav(state, val) {
			state.clickedNav = val
		},
		setActiveItem(state,val) {
			state.activeItem = val;
		},
		setSideRouter(state) {
			for (let index = 0; index < ROUTES.length; index++) {
				const route = ROUTES[index];
				for (let index2 = 0; index2 < staticSideRoutes.length; index2++) {
					const loopRoute = staticSideRoutes[index2];
					const pHReg = `/${loopRoute.name}/`; 
					if(route.path && route.path.match(pHReg)) {
						if(loopRoute.children.filter(i => i.name === route.path).length === 0) {
							loopRoute.children.push(route)
						}
					}
				}
			}
			state.sideRouter = staticSideRoutes.slice(0)
		}
	},
	actions: {
		
	},
})
export default store
