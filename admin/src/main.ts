import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import './plugins/element'
import './plugins/avue'
import router from './router'
// 引入 vue-ele-form
import EleForm from 'vue-ele-form'
// 注册 vue-ele-form
Vue.use(EleForm)

Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
  // 接口根地址
  baseURL:'http://localhost:3000'
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
