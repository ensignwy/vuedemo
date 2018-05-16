import http from '../../modules/admin/http'

export default {
  tree: function () {
    return http.get('/group/tree').then(function (response) {
      return response.data
    })
  },
  getGroupUsers: function (code) {
    return http.get('/group/getGroupUsers', {params: {code: code}}).then(function (response) {
      return response.data
    })
  },
  delete: function (group) {
    return http.post('/group/deleteOrNot', group).then(function (response) {
      return response.data
    })
  },
  saveOrUpdate: function (group) {
    return http.post('/group/saveOrUpdate', group).then(function (response) {
      return response.data
    })
  },
  assignUserToGroup: function (assoc) {
    return http.post('/group/assignUserToGroup', assoc).then(function (response) {
      return response.data
    })
  }

}
