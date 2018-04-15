import Vue from 'vue'
import Router from 'vue-router'
// import AdminHome from '@/components/layout/SidebarLayout'
import AdminHome from '@/modules/admin/views/Home'
import NotFound from '@/components/layout/NotFound'
import Index from '@/modules/admin/views/Index'

Vue.use(Router)
let routes = [
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/',
    name: 'AdminHome',
    component: AdminHome,
    children: [
      {
        path: '/',
        component: Index
      }
    ]
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
