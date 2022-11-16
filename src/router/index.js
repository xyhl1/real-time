import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/index.vue'
import Login from '@/views/login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { requireAuth: true} // 添加该字段，表示进入这个路由是需要登录的 },
  },
  {
    path:'/',
    name:'login',
    component:Login
  }
]

const router = new VueRouter({
  routes,
  // mode:'hash'
})

export default router
