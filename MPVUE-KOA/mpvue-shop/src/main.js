import Vue from 'vue'
import App from './App'
import store from './store/index.js'
// 将store挂在到全局
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
