import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Communication from '@/pages/Communication'
import GetData from '@/pages/GetData'
import Tantan from '@/pages/Tantan'

Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
