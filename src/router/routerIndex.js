import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/index/views/Home'
import Login from '@/modules/index/views/Login'
import Communication from '@/modules/index/views/Communication'
import GetData from '@/modules/index/views/GetData'
import Tantan from '@/modules/index/views/Tantan'
import NotFound from '@/components/layout/NotFound'
import LoadMore from '@/modules/index/views/LoadMore'

Vue.use(Router)
let routes = [
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/communication',
    name: 'Communication',
    component: Communication
  },
  {
    path: '/getData',
    name: 'GetData',
    component: GetData
  },
  {
    path: '/tantan',
    name: 'Tantan',
    component: Tantan
  },
  {
    path: '/loadmore',
    name: 'LoadMore',
    component: LoadMore
  }
]
const router = new Router({
  history: true,
  routes: routes
})
// router.beforeEach((to, from, next) => {
//   if (to.matched.length === 0) { // 如果未匹配到路由
//     from.name ? next({name: from.name}) : next('/notfound') // 如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
//   } else {
//     next() // 如果匹配到正确跳转
//   }
// })

export default router
