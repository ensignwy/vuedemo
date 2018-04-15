<template>
  <sidebar-layout :menus="menus"></sidebar-layout>
</template>

<script>

  export default {
    data () {
      var menus = {
        'id': 0,
        'title': '根菜单',
        'code': 'root',
        'iconCls': '',
        'href': '',
        'parameters': '',
        'disabled': false,
        'parentMenu': null,
        'parentId': null,
        'level': 0,
        'sortNo': 0,
        'description': '根菜单',
        'children': [
          {
            'id': 134,
            'title': '首页',
            'code': 'index',
            'iconCls': 'fa fa-dashboard',
            'href': '/',
            'parameters': null,
            'disabled': false,
            'parentMenu': {
              'sortNo': 0,
              'parentId': -1,
              'treePath': null,
              'treeLevel': 0,
              'id': 0,
              'title': '根菜单',
              'code': 'root',
              'iconCls': '',
              'href': '',
              'parameters': '',
              'description': '根菜单',
              'disabled': false,
              'root': false
            },
            'parentId': null,
            'level': 0,
            'sortNo': 1,
            'description': null,
            'children': null,
            'checked': false
          },
          {
            'id': 51,
            'title': '菜单管理',
            'code': 'menu',
            'iconCls': 'fa fa-bars',
            'href': '/menu',
            'parameters': null,
            'disabled': false,
            'parentMenu': {
              'sortNo': 0,
              'parentId': -1,
              'treePath': null,
              'treeLevel': 0,
              'id': 0,
              'title': '根菜单',
              'code': 'root',
              'iconCls': '',
              'href': '',
              'parameters': '',
              'description': '根菜单',
              'disabled': false,
              'root': false
            },
            'parentId': null,
            'level': 0,
            'sortNo': 3,
            'description': null,
            'children': null,
            'checked': false
          },
          {
            'id': 61,
            'title': '用户权限',
            'code': 'user',
            'iconCls': 'fa icon-ic-authority',
            'href': '/user',
            'parameters': null,
            'disabled': false,
            'parentMenu': {
              'sortNo': 0,
              'parentId': -1,
              'treePath': null,
              'treeLevel': 0,
              'id': 0,
              'title': '根菜单',
              'code': 'root',
              'iconCls': '',
              'href': '',
              'parameters': '',
              'description': '根菜单',
              'disabled': false,
              'root': false
            },
            'parentId': null,
            'level': 0,
            'sortNo': 5,
            'description': null,
            'children': [
              {
                'id': 63,
                'title': '用户管理',
                'code': 'user',
                'iconCls': null,
                'href': '/user',
                'parameters': null,
                'disabled': false,
                'parentMenu': {
                  'sortNo': 5,
                  'parentId': 0,
                  'treePath': null,
                  'treeLevel': 0,
                  'id': 61,
                  'title': '用户权限',
                  'code': 'user',
                  'iconCls': 'fa icon-ic-authority',
                  'href': '/user',
                  'parameters': null,
                  'description': null,
                  'disabled': false,
                  'root': false
                },
                'parentId': null,
                'level': 0,
                'sortNo': 1,
                'description': null,
                'children': null,
                'checked': false
              },
              {
                'id': 68,
                'title': '角色管理',
                'code': 'role',
                'iconCls': '',
                'href': '/role',
                'parameters': null,
                'disabled': false,
                'parentMenu': {
                  'sortNo': 5,
                  'parentId': 0,
                  'treePath': null,
                  'treeLevel': 0,
                  'id': 61,
                  'title': '用户权限',
                  'code': 'user',
                  'iconCls': 'fa icon-ic-authority',
                  'href': '/user',
                  'parameters': null,
                  'description': null,
                  'disabled': false,
                  'root': false
                },
                'parentId': null,
                'level': 0,
                'sortNo': 2,
                'description': null,
                'children': null,
                'checked': false
              },
              {
                'id': 65,
                'title': '权限管理',
                'code': 'authority',
                'iconCls': null,
                'href': '/authority',
                'parameters': null,
                'disabled': false,
                'parentMenu': {
                  'sortNo': 5,
                  'parentId': 0,
                  'treePath': null,
                  'treeLevel': 0,
                  'id': 61,
                  'title': '用户权限',
                  'code': 'user',
                  'iconCls': 'fa icon-ic-authority',
                  'href': '/user',
                  'parameters': null,
                  'description': null,
                  'disabled': false,
                  'root': false
                },
                'parentId': null,
                'level': 0,
                'sortNo': 3,
                'description': null,
                'children': null,
                'checked': false
              },
              {
                'id': 96,
                'title': '用户组管理',
                'code': 'group',
                'iconCls': null,
                'href': '/group',
                'parameters': null,
                'disabled': false,
                'parentMenu': {
                  'sortNo': 5,
                  'parentId': 0,
                  'treePath': null,
                  'treeLevel': 0,
                  'id': 61,
                  'title': '用户权限',
                  'code': 'user',
                  'iconCls': 'fa icon-ic-authority',
                  'href': '/user',
                  'parameters': null,
                  'description': null,
                  'disabled': false,
                  'root': false
                },
                'parentId': null,
                'level': 0,
                'sortNo': 9999,
                'description': null,
                'children': null,
                'checked': false
              }
            ],
            'checked': false
          },
          {
            'id': 70,
            'title': '字典管理',
            'code': 'dic',
            'iconCls': 'fa icon-ic-dictionary',
            'href': null,
            'parameters': null,
            'disabled': false,
            'parentMenu': {
              'sortNo': 0,
              'parentId': -1,
              'treePath': null,
              'treeLevel': 0,
              'id': 0,
              'title': '根菜单',
              'code': 'root',
              'iconCls': '',
              'href': '',
              'parameters': '',
              'description': '根菜单',
              'disabled': false,
              'root': false
            },
            'parentId': null,
            'level': 0,
            'sortNo': 7,
            'description': null,
            'children': [
              {
                'id': 72,
                'title': '查看字典',
                'code': 'dic_list',
                'iconCls': null,
                'href': '/dictionary',
                'parameters': null,
                'disabled': false,
                'parentMenu': {
                  'sortNo': 7,
                  'parentId': 0,
                  'treePath': null,
                  'treeLevel': 0,
                  'id': 70,
                  'title': '字典管理',
                  'code': 'dic',
                  'iconCls': 'fa icon-ic-dictionary',
                  'href': null,
                  'parameters': null,
                  'description': null,
                  'disabled': false,
                  'root': false
                },
                'parentId': null,
                'level': 0,
                'sortNo': 2,
                'description': null,
                'children': null,
                'checked': false
              }
            ],
            'checked': false
          }
        ],
        'checked': false
      }
      return {
        msg: 'mock',
        menus: menus.children
      }
    },
    created () {
    },

  }
</script>

