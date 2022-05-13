import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

//引用公共的初始化文件
import './assets/css/base.css'
//引用js适应手机适配
// import './assets/js/phone'
// 引用vant库
import './plugins/vant'

//全局挂载echarts 
// import Echarts from 'echarts'
// Vue.prototype.$echarts = Echarts
import echarts from './plugins/echarts'
Vue.use(echarts);

// 全局挂载api
import api from './utils/api'
Vue.prototype.$api = api

//全局配置swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
