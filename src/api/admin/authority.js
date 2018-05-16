import http from '../../modules/admin/http'

export default {
  getAuthorityBycode: function (code) {
    return http.get('/authority/findById', {params: {id: code}}).then(function (response) {
      return response.data
    })
  },
  update: function (create, authority) {
    if (create) {
      return http.post('/authority/add', authority).then(function (response) {
        return response.data
      })
    } else {
      return http.post('/authority/update', authority).then(function (response) {
        return response.data
      })
    }
  },
  deleteAuthority: function (code) {
    return http.get('/authority/deleteAuthority', {params: {code: code}}).then(function (response) {
      return response.data
    })
  }

}
