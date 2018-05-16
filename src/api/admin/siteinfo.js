import http from '../../modules/admin/http'

export default {
  get: function () {
    return http.get('/site').then(function (response) {
      return response.data
    })
  }

}
