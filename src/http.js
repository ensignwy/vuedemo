import axios from 'axios'
import config from './config'
import router from './router'

var http = axios.create({
  baseURL: config.APIRootUrl
})
// http.defaults.headers.common['JWT'] = localStorage.getItem('access_token') || ''

// Add a request interceptor
http.interceptors.request.use(function (config) {
  let token = localStorage.getItem('access_token') || sessionStorage.getItem('access_token')
  config.headers.common['Authorization'] = 'Bearer ' + token
  // _.extend(config.params, {JWT: token})
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// http response 拦截器
http.interceptors.response.use(
response => {
  return response
},
error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 返回 401 清除token信息并跳转到登录页面
        localStorage.removeItem('access_token')
        // router.push({path: '/login'})
        router.replace({
          path: '/login'
        })
    }
  }
  return Promise.reject(error.response.data)   // 返回接口返回的错误信息
})

export default http

