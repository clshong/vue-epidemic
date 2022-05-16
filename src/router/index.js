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
  },
  {
    path: '/travel',
    name: 'travel',
    component:() =>import('../views/Travel/Travel'),
  },
  {
    path: '/selectcity',
    name: 'selectcity',
    component:() =>import('../views/SelectCity/SelectCity'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router