import http from '../../modules/admin/http'

export default {
  findById: function (id) {
    return http.get('/dic/findById', {params: {dicId: id}}).then(function (response) {
      return response.data
    })
  },
  findItemById: function (id) {
    return http.get('/dic/findItemById', {params: {itemId: id}}).then(function (response) {
      return response.data
    })
  },
  saveOrUpdate: function (dictionary) {
    return http.post('/dic/saveOrUpdate', dictionary).then(function (response) {
      return response.data
    })
  },
  saveOrUpdateItem: function (dictionaryItem) {
    return http.post('/dic/saveOrUpdateItem', dictionaryItem).then(function (response) {
      return response.data
    })
  },
  delete: function (id) {
    return http.post('/dic/setDeleted', {dicId: id}).then(function (response) {
      return response.data
    })
  },
  setItemDeleted: function (id) {
    return http.post('/dic/setItemDeleted', {itemId: id}).then(function (response) {
      return response.data
    })
  },
  setDisabled: function (id) {
    return http.post('/dic/setDisabled', {dicId: id}).then(function (response) {
      return response.data
    })
  },
  setUndisbaled: function (id) {
    return http.post('/dic/setUndisbaled', {dicId: id}).then(function (response) {
      return response.data
    })
  },
  setItemDisbaled: function (itemId) {
    return http.post('/dic/setItemDisbaled', {itemId: itemId}).then(function (response) {
      return response.data
    })
  },
  setItemUndisbaled: function (itemId) {
    return http.post('/dic/setItemUndisbaled', {itemId: itemId}).then(function (response) {
      return response.data
    })
  }

}
