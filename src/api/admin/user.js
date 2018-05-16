import http from '../../modules/admin/http'

export default {
  getCurrentUser: function () {
    return http.get('/user/current').then(function (response) {
      return response.data
    })
  },
  // 获取所有用户，非datatables格式的
  getAllUser: function () {
    return http.get('/user/getAllUser').then(function (response) {
      return response.data
    })
  },
  getUserById: function (id) {
    return http.get('/user/getById', {params: {uid: id}}).then(function (response) {
      return response.data
    })
  },
  deleteUser: function (uid) {
    return http.post('/user/deleteById', {params: {uid: uid}}).then(function (response) {
      return response.data
    })
  },
  getRoleByUser: function (uid) {
    return http.get('/user/getUserRoleAssocs', {params: {uid: uid}}).then(function (response) {
      return response.data
    })
  },
  assignRoleToUser: function (assoc) {
    return http.post('/user/editUserRoleAssoc', assoc).then(function (response) {
      return response.data
    })
  },
  editUser: function (create, user) {
    if (create) {
      return http.post('/user/addUser', user).then(function (response) {
        return response.data
      })
    } else {
      return http.post('/user/editUser', user).then(function (response) {
        return response.data
      })
    }
  }

}
