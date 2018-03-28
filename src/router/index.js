import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Communication from '@/pages/Communication'
import GetData from '@/pages/GetData'
import Tantan from '@/pages/Tantan'
import AdminHome from '@/components/layout/ManageHome'
import NotFound from '@/components/layout/NotFound'
import Index from '@/pages/admin/Index'

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
    path: '/admin',
    name: 'AdminHome',
    component: AdminHome,
    children: [
      {
        path: '',
        component: Index
      }
    ]
  },
  // 将404页面配置在最后面，路由是按照顺序匹配的，以后面的为准
  {path: '/*', component: NotFound}
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
