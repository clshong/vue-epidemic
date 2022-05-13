import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/nucleic',
    name: 'nucleic',
    component: ()=>import('../views/Nucleic/index')
  },
  {
    path: '/area',
    name: 'area',
    component:() =>import('../views/Area/index')
  },
  {
    path: '/materials',
    name: 'materials',
    component:() =>import('../views/Materials/index')
  },
  {
    path: '/citys/:cityname',
    name: 'citys',
    component:() =>import('../views/Citys/citys'),
    props:true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router