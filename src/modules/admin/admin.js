// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../../router/routerAdmin'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icomoon/style.css'
import '@/assets/css/admin-global.css'
import VeUI from 've-ui'
import VueCookie from 'vue-cookie'
import 'jquery'

Vue.use(ElementUI)
Vue.use(VeUI)
Vue.use(VueCookie)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
