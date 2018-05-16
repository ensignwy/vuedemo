import _ from 'lodash'

export default {
  /**
   * 把服务端范围的树结构转化成前端 tree 插件适用的结构
   *
   * @param srcTree
   */
  convertTree: function (srcTree) {
    let menus = []
    if (srcTree === null) {
      return
    }
    if (_.isArray(srcTree)) {
      return srcTree
    } else {
      menus.push(srcTree)
      return menus
    }
  },
  getCheckedKeys: function (srcTree, keys = []) {
    let tree = this.convertTree(srcTree)
    tree.forEach((value, key) => {
      if (value.checked) {
        keys.push(value.id)
      }
      if (!_.isEmpty(value.children)) {
        this.getCheckedKeys(value.children, keys)
      }
    })
    return keys
  }

}
