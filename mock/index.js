/**
 * 数据生成器有很多，比较出名的有 faker ,chance ,mockjs 等，其中最为强大的非 faker 莫属，
 * 不但拥有几乎全部常用的数据格式，而且还有中英德法等多种语言的数据。
 * 但是在实际测试中发现，faker 对中文数据的支持还是以西方文字为基础，并不能很好的模拟中文。
 * 相比较Mock对中文的支持比较好，所以选择了Mock
 */
let Mock = require('mockjs')
let Random = Mock.Random
let menus = {
  "id": 0,
  "title": "根菜单",
  "shortName": null,
  "code": "root",
  "iconCls": "",
  "href": "",
  "parameters": "",
  "disabled": false,
  "parentMenu": null,
  "parentId": null,
  "level": 0,
  "sortNo": 0,
  "description": "根菜单",
  "children": [
    {
      "id": 134,
      "title": "首页",
      "shortName": null,
      "code": "index",
      "iconCls": "fa fa-dashboard",
      "href": "/",
      "parameters": null,
      "disabled": false,
      "parentMenu": {
        "sortNo": 0,
        "parentId": -1,
        "treePath": "0",
        "treeLevel": 0,
        "id": 0,
        "title": "根菜单",
        "shortName": null,
        "code": "root",
        "iconCls": "",
        "href": "",
        "parameters": "",
        "description": "根菜单",
        "disabled": false,
        "root": false
      },
      "parentId": null,
      "level": 1,
      "sortNo": 1,
      "description": null,
      "children": null,
      "checked": false
    },
    {
      "id": 51,
      "title": "菜单管理",
      "shortName": null,
      "code": "menu",
      "iconCls": "fa fa-bars",
      "href": "/menu",
      "parameters": null,
      "disabled": false,
      "parentMenu": {
        "sortNo": 0,
        "parentId": -1,
        "treePath": "0",
        "treeLevel": 0,
        "id": 0,
        "title": "根菜单",
        "shortName": null,
        "code": "root",
        "iconCls": "",
        "href": "",
        "parameters": "",
        "description": "根菜单",
        "disabled": false,
        "root": false
      },
      "parentId": null,
      "level": 1,
      "sortNo": 3,
      "description": null,
      "children": null,
      "checked": false
    },
    {
      "id": 61,
      "title": "用户权限",
      "shortName": null,
      "code": "user",
      "iconCls": "fa icon-ic-authority",
      "href": "/user",
      "parameters": null,
      "disabled": false,
      "parentMenu": {
        "sortNo": 0,
        "parentId": -1,
        "treePath": "0",
        "treeLevel": 0,
        "id": 0,
        "title": "根菜单",
        "shortName": null,
        "code": "root",
        "iconCls": "",
        "href": "",
        "parameters": "",
        "description": "根菜单",
        "disabled": false,
        "root": false
      },
      "parentId": null,
      "level": 1,
      "sortNo": 5,
      "description": null,
      "children": [
        {
          "id": 63,
          "title": "用户管理",
          "shortName": null,
          "code": "user",
          "iconCls": null,
          "href": "/user",
          "parameters": null,
          "disabled": false,
          "parentMenu": {
            "sortNo": 5,
            "parentId": 0,
            "treePath": "0,61",
            "treeLevel": 1,
            "id": 61,
            "title": "用户权限",
            "shortName": null,
            "code": "user",
            "iconCls": "fa icon-ic-authority",
            "href": "/user",
            "parameters": null,
            "description": null,
            "disabled": false,
            "root": false
          },
          "parentId": null,
          "level": 2,
          "sortNo": 1,
          "description": null,
          "children": null,
          "checked": false
        },
        {
          "id": 68,
          "title": "角色管理",
          "shortName": null,
          "code": "role",
          "iconCls": "",
          "href": "/role",
          "parameters": null,
          "disabled": false,
          "parentMenu": {
            "sortNo": 5,
            "parentId": 0,
            "treePath": "0,61",
            "treeLevel": 1,
            "id": 61,
            "title": "用户权限",
            "shortName": null,
            "code": "user",
            "iconCls": "fa icon-ic-authority",
            "href": "/user",
            "parameters": null,
            "description": null,
            "disabled": false,
            "root": false
          },
          "parentId": null,
          "level": 2,
          "sortNo": 2,
          "description": null,
          "children": null,
          "checked": false
        },
        {
          "id": 65,
          "title": "权限管理",
          "shortName": null,
          "code": "authority",
          "iconCls": null,
          "href": "/authority",
          "parameters": null,
          "disabled": false,
          "parentMenu": {
            "sortNo": 5,
            "parentId": 0,
            "treePath": "0,61",
            "treeLevel": 1,
            "id": 61,
            "title": "用户权限",
            "shortName": null,
            "code": "user",
            "iconCls": "fa icon-ic-authority",
            "href": "/user",
            "parameters": null,
            "description": null,
            "disabled": false,
            "root": false
          },
          "parentId": null,
          "level": 2,
          "sortNo": 3,
          "description": null,
          "children": null,
          "checked": false
        },
        {
          "id": 96,
          "title": "用户组管理",
          "shortName": null,
          "code": "group",
          "iconCls": null,
          "href": "/group",
          "parameters": null,
          "disabled": false,
          "parentMenu": {
            "sortNo": 5,
            "parentId": 0,
            "treePath": "0,61",
            "treeLevel": 1,
            "id": 61,
            "title": "用户权限",
            "shortName": null,
            "code": "user",
            "iconCls": "fa icon-ic-authority",
            "href": "/user",
            "parameters": null,
            "description": null,
            "disabled": false,
            "root": false
          },
          "parentId": null,
          "level": 2,
          "sortNo": 9999,
          "description": null,
          "children": null,
          "checked": false
        }
      ],
      "checked": false
    },
    {
      "id": 70,
      "title": "字典管理",
      "shortName": null,
      "code": "dic",
      "iconCls": "fa icon-ic-dictionary",
      "href": null,
      "parameters": null,
      "disabled": false,
      "parentMenu": {
        "sortNo": 0,
        "parentId": -1,
        "treePath": "0",
        "treeLevel": 0,
        "id": 0,
        "title": "根菜单",
        "shortName": null,
        "code": "root",
        "iconCls": "",
        "href": "",
        "parameters": "",
        "description": "根菜单",
        "disabled": false,
        "root": false
      },
      "parentId": null,
      "level": 1,
      "sortNo": 7,
      "description": null,
      "children": [
        {
          "id": 72,
          "title": "查看字典",
          "shortName": null,
          "code": "dic_list",
          "iconCls": null,
          "href": "/dictionary",
          "parameters": null,
          "disabled": false,
          "parentMenu": {
            "sortNo": 7,
            "parentId": 0,
            "treePath": "0,70",
            "treeLevel": 1,
            "id": 70,
            "title": "字典管理",
            "shortName": null,
            "code": "dic",
            "iconCls": "fa icon-ic-dictionary",
            "href": null,
            "parameters": null,
            "description": null,
            "disabled": false,
            "root": false
          },
          "parentId": null,
          "level": 2,
          "sortNo": 2,
          "description": null,
          "children": null,
          "checked": false
        }
      ],
      "checked": false
    }
  ],
  "checked": false
}

// 用户数据
let user = Mock.mock({
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    "login": Random.word(),
    "password": "123",
    "firstName": Random.clast(),
    "lastName": Random.cfirst(),
    "email": Random.email(),
    "activated": true,
    "langKey": null,
    "imageUrl": null,
    "resetDate": null,
    "roles": [
      {
        "code": Random.word(),
        "name": Random.cword(),
        "description": Random.cword(10)
      }
    ]
})
let userList = []
for (let i = 0; i < 10; i++) {
  userList.push( Mock.mock({
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    "login": Random.word(),
    "password": "123",
    "firstName": Random.clast(),
    "lastName": Random.cfirst(),
    "email": Random.email(),
    "activated": true,
    "langKey": null,
    "imageUrl": null,
    "resetDate": null,
    "roles": [
      {
        "code": Random.word(),
        "name": Random.cword(),
        "description": Random.cword(10)
      }
    ]
  }))
}
let users = {
  "draw": 1,
  "recordsTotal": 10,
  "recordsFiltered": 10,
  'data': userList
}
// 角色
let roles = {
  "draw": 1,
  "recordsTotal": 10,
  "recordsFiltered": 10,
  "data": [
    {
      "code": "66",
      "name": "66",
      "description": "66"
    },
    {
      "code": "normal",
      "name": "普通用户",
      "description": "普通用户"
    },
    {
      "code": "ADMIN",
      "name": "管理员权限",
      "description": "管理员权限"
    },
    {
      "code": "SUPERMAN",
      "name": "超级管理员",
      "description": "超级管理员"
    }
  ],
  "error": null
}
let role = {
  "code": "ADMIN",
  "name": "管理员权限",
  "description": "管理员权限"
}
// 权限
let authorities = {
  "draw": 1,
  "recordsTotal": 8,
  "recordsFiltered": 8,
  "data": [
    {
      "code": "dictionary:add",
      "name": "新增字典",
      "category": null,
      "description": "新增字典",
      "url": null
    },
    {
      "code": "user:add",
      "name": "新增用户",
      "category": null,
      "description": "新增用户",
      "url": null
    },
    {
      "code": "role:create",
      "name": "新增角色",
      "category": null,
      "description": "新增角色",
      "url": null
    }
  ],
  "error": null
}
let authority = {
  "code": "role:create",
  "name": "新增角色",
  "category": null,
  "description": "新增角色",
  "url": null
}
let userRoleAssoc = [{"id": 1184, "roleCode": "SUPERMAN", "uid": 1}]
module.exports = {
  'menus': menus,
  'users': users,
  'user': user,
  'roles': roles,
  'role': role,
  'authorities': authorities,
  'authority': authority,
  'userRoleAssoc': userRoleAssoc
}
