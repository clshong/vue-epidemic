import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//引用公共的初始化文件
import './assets/css/base.css'
<<<<<<< HEAD

//引用js适应手机适配
import './assets/js/phone'
=======
//引用js适应手机适配
// import './assets/js/phone'
>>>>>>> 483d736 (疫情动态)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')