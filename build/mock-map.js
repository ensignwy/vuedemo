/**
 * 而在vue-cli2.9.2版本和webpack3.6.0版本中，构建webpack项目中去除了dev-server.js和dev-client.js两个文件，
 * 所以通过其插件的api（devServer.before）来接口数据,现在在mock-map.js里写好api映射，在webpack.dev.conf.js里面直接调用
 */
'use strict'
let data = require('../mock')

module.exports = function (app) {
  app.get('/api/v1/user/current',function (req,res) {
    res.json(data.user)
  })
  app.get('/api/v1/user/getById',function (req,res) {
    res.json(data.user)
  })
  app.get('/api/v1/user/findAllUsers',function (req,res) {
    res.json(data.users)
  })
  app.get('/api/v1/menu/tree',function (req,res) {
    res.json(data.menus)
  })
  app.get('/api/v1/role/table',function (req,res) {
    res.json(data.roles)
  })
  app.get('/api/v1/role/get',function (req,res) {
    res.json(data.role)
  })
  app.get('/api/v1/authority/table',function (req,res) {
    res.json(data.authorities)
  })
  app.get('/api/v1/authority/findById',function (req,res) {
    res.json(data.authority)
  })
}

