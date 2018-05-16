import http from '../../modules/admin/http'

export default {
  getRoleByCode: function (code) {
    return http.get('/role/get', {params: {code: code}}).then(function (response) {
      return response.data
    })
  },
  getMenuByRole: function (code) {
    return http.get('/role/menu/all', {params: {role: code}}).then(function (response) {
      return response.data
    })
  },
  assignMenuToRole: function (assoc) {
    return http.post('/role/menu/assign', assoc).then(function (response) {
      return response.data
    })
  },
  saveRole: function (role) {
    return http.post('/role/save', role).then(function (response) {
      return response.data
    })
  },
  deleteRole: function (roleCode) {
    return http.post('/role/delete', {roleCode: roleCode}).then(function (response) {
      return response.data
    })
  },
  getAuthorityByCode: function (roleCode) {
    return http.get('/role/getRoleAuthorityAssocs', {params: {roleCode: roleCode}}).then(function (response) {
      return response.data
    })
  },
  assignAuthorityToRole: function (assoc) {
    return http.post('/role/editUserRoleAssoc', assoc).then(function (response) {
      return response.data
    })
  }

}
