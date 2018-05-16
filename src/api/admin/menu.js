import http from '../../modules/admin/http'

export default {
  tree: function (filterDisabled) {
    // filterDisabled = filterDisabled || true;
    return http.get('menu/tree', {
      params: {
        disabled: filterDisabled
      }
    }).then(function (response) {
      return response.data
    }).catch(function (error) {
      console.log(error)
    })
  },
  init: function () {
    return http.get('menu/init').then(function (response) {
      console.log(response.data)
    })
  },
  list: function () {
    return http.get('menu/list').then(function (response) {
      return response.data
    })
  },
  save: function (node) {
    return http.post('menu/save', node).then(function (response) {
      return response.data
    })
  },
  delete: function (node) {
    return http.post('menu/delete', node).then(function (response) {
      return response.data
    })
  },
  disable: function (id) {
    return http.post('menu/disable', {id: id}).then(function (response) {
      return response.data
    })
  },
  enable: function (id) {
    return http.post('menu/enable', {id: id}).then(function (response) {
      return response.data
    })
  },
  get: function (id, code) {

    return http.get('menu/get', {params: {id: id, code: code}}).then(function (res) {
      return res.data
    })
  },
  getByParent: function (parentCode, depth) {
    return http.get('menu/getByParent', {
      parentCode: parentCode,
      depth: depth
    }).then(function (res) {
      return res.data
    })
  },
  getFirstMenu: function (app) {
    app = app || window.DEFAULT_APP || 'admin'

    return this.tree(true, app).then(function (data) {
      let node = data.data
      while (node.children != null && node.children.length > 0) {
        node = node.children[0]
      }
      return node.href
    })
  }

}
