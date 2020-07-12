import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/post',
    children: [
      {
        path: '/post',
        name: 'post',
        component: () => import('../components/postpage/page.vue')
      }, {
        path: '/rent',
        name: 'rent',
        component: () => import('../components/rent/rentpage.vue')
      }
    ]
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../components/auth/auth.vue'),
    children: [
      {
        path: '/',
        name:'login',
        component:()=>import('../components/auth/login.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
