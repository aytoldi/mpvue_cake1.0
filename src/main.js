import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import store from './vuex'
import App from './App'
import "../static/css/transfonter/stylesheet.css"
Vue.config.productionTip = false
App.mpType = 'app'
// 原型上插入vuex
Vue.prototype.$store = store
const app = new Vue({
  ...App,
  store
})
app.$mount()
