import axios from 'axios'
import http from '../../modules/admin/http'

export default {
  login: (username, password, rememberMe) => {
    let loginUrl = '/account/login'
    if (window.AUTH_PROTO === 'jwt') {
      loginUrl = '/api/v1/account/authenticate'
      return axios.post(loginUrl, {
        username: username,
        password: password
      })
    } else {
      return axios.post(loginUrl + '?username=' + username + '&password=' + password + '&rememberMe=' + rememberMe)
    }
  },
  fingerLogin: (msg) => {
    return http.post('/finger/login', msg).then(function (response) {
      return response.data
    })
  }
}
