import axios from 'axios'
import config from './config'
import router from '../../router/routerAdmin'
import { Loading } from 'element-ui'

let http = axios.create({
  baseURL: config.API_ROOT
})

let loading
// http.defaults.headers.common['JWT'] = localStorage.getItem('access_token') || ''

// Add a request interceptor
http.interceptors.request.use(config => {
  // 打开遮罩层
  loading = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })

  let token = localStorage.getItem('access_token') || sessionStorage.getItem('access_token')
  config.headers.common['Authorization'] = 'Bearer ' + token
  // _.extend(config.params, {JWT: token})
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// http response 拦截器
http.interceptors.response.use(
  response => {
    loading.close()
    return response
  },
  error => {
    loading.close()
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          localStorage.removeItem('access_token')
          router.replace({
            path: '/login'
          })
      }
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  })

export default http
