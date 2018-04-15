// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../../router/routerIndex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 've-ui/packages/theme/touch-screen-global.css'
import VeUI from 've-ui'

Vue.use(ElementUI)
Vue.use(VeUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
