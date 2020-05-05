import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import './plugins/element'
import './plugins/avue'
import router from './router'
// 引入 vue-ele-form
//import EleForm from 'vue-ele-form'
// 注册 vue-ele-form
//Vue.use(EleForm)
const http = axios.create({
  // 接口根地址
  baseURL: process.env.VUE_APP_API_URL
})
// avue上传用
Vue.prototype.$httpajax = http
// 平时请求接口用
Vue.prototype.$http = http
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
