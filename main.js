
import Vue from 'vue'
import App from './App'
import store from './store' // store 实现了一个简单的数据存储类，可以保存和获取 vuex
import uView from "uview";
Vue.config.productionTip = false

Vue.use(uView);
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()

