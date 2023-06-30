
import Vue from 'vue'
import uView from "uview";
import App from './App'
import {
  router,
	RouterMount
} from './router.js'
Vue.use(router)

import store from './store' // store 实现了一个简单的数据存储类，可以保存和获取 vuex

Vue.use(uView);

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})


//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
RouterMount(app, router, '#app')
// #endif

app.$mount()

