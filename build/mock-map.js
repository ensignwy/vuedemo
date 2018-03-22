/**
 * 用express作为本地服务器，模拟数据
 */
'use strict'
const express = require ('express')
const app = express

// 开发mock地址
let HOST = 'http://localhost:8080'
let API_ROOT = '/api/v1'
let API_URL = HOST + API_ROOT

module.exports = function () {
  app.use(API_URL+'/menu',express.static('../mock/menu.json'))
  app.post(API_URL + '/api2', function (req, res) {
    res.send(require('../mock/db.json'))
  })
}

