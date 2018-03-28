<template>
  <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
    <!--菜单栏展开-->
    <el-menu class="el-menu-vertical-demo" router="true" text-color="#000" v-show="!collapsed">
      <template v-for="item in menus">
        <template v-if="item.children">
          <el-submenu :index="item.id">
            <template slot="title"><i class="el-icon-menu"></i><span>{{item.title}}</span></template>
            <el-menu-item v-for="(child,i) in item.children" :key="i" :index="child.id" route="/admin">
              <i class="el-icon-menu"></i>
              <span>{{child.title}}</span>
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.id" route="/admin">
            <i class="el-icon-menu"></i>
            <span>{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <!--菜单栏折叠-->
    <ul class="el-menu-vertical-demo" v-show="collapsed" ref="menuCollapsed">
      <li v-for="(item,index) in menus" class="el-submenu item">
        <template v-if="item.children">
          <div class="el-submenu__title" style="padding-left: 14px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i class="el-icon-menu"></i></div>
          <ul class="el-menu submenu" :class="'submenu-hook-'+index"
               @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
            <li class="el-menu-item" v-for="(child,i) in item.children" :key="i" :index="child.id"
                style="padding-left: 40px;" @click="$router.push('/')" :class="$route.path==child.href?'is-active':''">
              <i class="el-icon-menu"></i>
              <span>{{item.title}}</span>
            </li>
          </ul>
        </template>
        <template v-else>
          <li class="el-submenu" :index="item.id" :class="$route.path==item.href?'is-active':''">
            <div style="padding-left: 14px;" class="el-submenu__title" @click="$router.push('/')"><i class="el-icon-menu"></i></div>
          </li>
        </template>
      </li>
    </ul>
  </aside>
</template>
<script>
  import Bus from './bus'
  export default {

    data(){
      var menus={
        "id": 0,
        "title": "根菜单",
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
            "code": "index",
            "iconCls": "fa fa-dashboard",
            "href": "/",
            "parameters": null,
            "disabled": false,
            "parentMenu": {
              "sortNo": 0,
              "parentId": -1,
              "treePath": null,
              "treeLevel": 0,
              "id": 0,
              "title": "根菜单",
              "code": "root",
              "iconCls": "",
              "href": "",
              "parameters": "",
              "description": "根菜单",
              "disabled": false,
              "root": false
            },
            "parentId": null,
            "level": 0,
            "sortNo": 1,
            "description": null,
            "children": null,
            "checked": false
          },
          {
            "id": 51,
            "title": "菜单管理",
            "code": "menu",
            "iconCls": "fa fa-bars",
            "href": "/menu",
            "parameters": null,
            "disabled": false,
            "parentMenu": {
              "sortNo": 0,
              "parentId": -1,
              "treePath": null,
              "treeLevel": 0,
              "id": 0,
              "title": "根菜单",
              "code": "root",
              "iconCls": "",
              "href": "",
              "parameters": "",
              "description": "根菜单",
              "disabled": false,
              "root": false
            },
            "parentId": null,
            "level": 0,
            "sortNo": 3,
            "description": null,
            "children": null,
            "checked": false
          },
          {
            "id": 61,
            "title": "用户权限",
            "code": "user",
            "iconCls": "fa icon-ic-authority",
            "href": "/user",
            "parameters": null,
            "disabled": false,
            "parentMenu": {
              "sortNo": 0,
              "parentId": -1,
              "treePath": null,
              "treeLevel": 0,
              "id": 0,
              "title": "根菜单",
              "code": "root",
              "iconCls": "",
              "href": "",
              "parameters": "",
              "description": "根菜单",
              "disabled": false,
              "root": false
            },
            "parentId": null,
            "level": 0,
            "sortNo": 5,
            "description": null,
            "children": [
              {
                "id": 63,
                "title": "用户管理",
                "code": "user",
                "iconCls": null,
                "href": "/user",
                "parameters": null,
                "disabled": false,
                "parentMenu": {
                  "sortNo": 5,
                  "parentId": 0,
                  "treePath": null,
                  "treeLevel": 0,
                  "id": 61,
                  "title": "用户权限",
                  "code": "user",
                  "iconCls": "fa icon-ic-authority",
                  "href": "/user",
                  "parameters": null,
                  "description": null,
                  "disabled": false,
                  "root": false
                },
                "parentId": null,
                "level": 0,
                "sortNo": 1,
                "description": null,
                "children": null,
                "checked": false
              },
              {
                "id": 68,
                "title": "角色管理",
                "code": "role",
                "iconCls": "",
                "href": "/role",
                "parameters": null,
                "disabled": false,
                "parentMenu": {
                  "sortNo": 5,
                  "parentId": 0,
                  "treePath": null,
                  "treeLevel": 0,
                  "id": 61,
                  "title": "用户权限",
                  "code": "user",
                  "iconCls": "fa icon-ic-authority",
                  "href": "/user",
                  "parameters": null,
                  "description": null,
                  "disabled": false,
                  "root": false
                },
                "parentId": null,
                "level": 0,
                "sortNo": 2,
                "description": null,
                "children": null,
                "checked": false
              },
              {
                "id": 65,
                "title": "权限管理",
                "code": "authority",
                "iconCls": null,
                "href": "/authority",
                "parameters": null,
                "disabled": false,
                "parentMenu": {
                  "sortNo": 5,
                  "parentId": 0,
                  "treePath": null,
                  "treeLevel": 0,
                  "id": 61,
                  "title": "用户权限",
                  "code": "user",
                  "iconCls": "fa icon-ic-authority",
                  "href": "/user",
                  "parameters": null,
                  "description": null,
                  "disabled": false,
                  "root": false
                },
                "parentId": null,
                "level": 0,
                "sortNo": 3,
                "description": null,
                "children": null,
                "checked": false
              },
              {
                "id": 96,
                "title": "用户组管理",
                "code": "group",
                "iconCls": null,
                "href": "/group",
                "parameters": null,
                "disabled": false,
                "parentMenu": {
                  "sortNo": 5,
                  "parentId": 0,
                  "treePath": null,
                  "treeLevel": 0,
                  "id": 61,
                  "title": "用户权限",
                  "code": "user",
                  "iconCls": "fa icon-ic-authority",
                  "href": "/user",
                  "parameters": null,
                  "description": null,
                  "disabled": false,
                  "root": false
                },
                "parentId": null,
                "level": 0,
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
            "code": "dic",
            "iconCls": "fa icon-ic-dictionary",
            "href": null,
            "parameters": null,
            "disabled": false,
            "parentMenu": {
              "sortNo": 0,
              "parentId": -1,
              "treePath": null,
              "treeLevel": 0,
              "id": 0,
              "title": "根菜单",
              "code": "root",
              "iconCls": "",
              "href": "",
              "parameters": "",
              "description": "根菜单",
              "disabled": false,
              "root": false
            },
            "parentId": null,
            "level": 0,
            "sortNo": 7,
            "description": null,
            "children": [
              {
                "id": 72,
                "title": "查看字典",
                "code": "dic_list",
                "iconCls": null,
                "href": "/dictionary",
                "parameters": null,
                "disabled": false,
                "parentMenu": {
                  "sortNo": 7,
                  "parentId": 0,
                  "treePath": null,
                  "treeLevel": 0,
                  "id": 70,
                  "title": "字典管理",
                  "code": "dic",
                  "iconCls": "fa icon-ic-dictionary",
                  "href": null,
                  "parameters": null,
                  "description": null,
                  "disabled": false,
                  "root": false
                },
                "parentId": null,
                "level": 0,
                "sortNo": 2,
                "description": null,
                "children": null,
                "checked": false
              }
            ],
            "checked": false
          },
          {
            "id": 74,
            "title": "服务登记单管理",
            "code": "order",
            "iconCls": "fa icon-ic-ticket",
            "href": "",
            "parameters": null,
            "disabled": false,
            "parentMenu": {
              "sortNo": 0,
              "parentId": -1,
              "treePath": null,
              "treeLevel": 0,
              "id": 0,
              "title": "根菜单",
              "code": "root",
              "iconCls": "",
              "href": "",
              "parameters": "",
              "description": "根菜单",
              "disabled": false,
              "root": false
            },
            "parentId": null,
            "level": 0,
            "sortNo": 9,
            "description": null,
            "children": [
              {
                "id": 76,
                "title": "服务登记单",
                "code": "order_list",
                "iconCls": null,
                "href": "/order?orderType=1",
                "parameters": null,
                "disabled": false,
                "parentMenu": {
                  "sortNo": 9,
                  "parentId": 0,
                  "treePath": null,
                  "treeLevel": 0,
                  "id": 74,
                  "title": "服务登记单管理",
                  "code": "order",
                  "iconCls": "fa icon-ic-ticket",
                  "href": "",
                  "parameters": null,
                  "description": null,
                  "disabled": false,
                  "root": false
                },
                "parentId": null,
                "level": 0,
                "sortNo": 2,
                "description": null,
                "children": null,
                "checked": false
              },
              {
                "id": 88,
                "title": "服务登记单审核",
                "code": "order_audit",
                "iconCls": null,
                "href": "/order/audit?orderType=1",
                "parameters": null,
                "disabled": false,
                "parentMenu": {
                  "sortNo": 9,
                  "parentId": 0,
                  "treePath": null,
                  "treeLevel": 0,
                  "id": 74,
                  "title": "服务登记单管理",
                  "code": "order",
                  "iconCls": "fa icon-ic-ticket",
                  "href": "",
                  "parameters": null,
                  "description": null,
                  "disabled": false,
                  "root": false
                },
                "parentId": null,
                "level": 0,
                "sortNo": 9999,
                "description": null,
                "children": null,
                "checked": false
              }
            ],
            "checked": false
          },
          {
            "id": 100,
            "title": "联机单管理",
            "code": "online_manage",
            "iconCls": "fa icon-ic-ticket",
            "href": null,
            "parameters": null,
            "disabled": false,
            "parentMenu": {
              "sortNo": 0,
              "parentId": -1,
              "treePath": null,
              "treeLevel": 0,
              "id": 0,
              "title": "根菜单",
              "code": "root",
              "iconCls": "",
              "href": "",
              "parameters": "",
              "description": "根菜单",
              "disabled": false,
              "root": false
            },
            "parentId": null,
            "level": 0,
            "sortNo": 11,
            "description": null,
            "children": [
              {
                "id": 84,
                "title": "联机单",
                "code": "online",
                "iconCls": null,
                "href": "/order/online?orderType=2",
                "parameters": null,
                "disabled": false,
                "parentMenu": {
                  "sortNo": 11,
                  "parentId": 0,
                  "treePath": null,
                  "treeLevel": 0,
                  "id": 100,
                  "title": "联机单管理",
                  "code": "online_manage",
                  "iconCls": "fa icon-ic-ticket",
                  "href": null,
                  "parameters": null,
                  "description": null,
                  "disabled": false,
                  "root": false
                },
                "parentId": null,
                "level": 0,
                "sortNo": 9999,
                "description": null,
                "children": null,
                "checked": false
              },
              {
                "id": 94,
                "title": "联机单审核",
                "code": "online_audit1",
                "iconCls": null,
                "href": "/order/online/audit?orderType=2",
                "parameters": null,
                "disabled": false,
                "parentMenu": {
                  "sortNo": 11,
                  "parentId": 0,
                  "treePath": null,
                  "treeLevel": 0,
                  "id": 100,
                  "title": "联机单管理",
                  "code": "online_manage",
                  "iconCls": "fa icon-ic-ticket",
                  "href": null,
                  "parameters": null,
                  "description": null,
                  "disabled": false,
                  "root": false
                },
                "parentId": null,
                "level": 0,
                "sortNo": 9999,
                "description": null,
                "children": null,
                "checked": false
              }
            ],
            "checked": false
          },
          {
            "id": 127,
            "title": "回访单管理",
            "code": "revisit_ticket",
            "iconCls": "fa icon-ic-ticket",
            "href": null,
            "parameters": null,
            "disabled": false,
            "parentMenu": {
              "sortNo": 0,
              "parentId": -1,
              "treePath": null,
              "treeLevel": 0,
              "id": 0,
              "title": "根菜单",
              "code": "root",
              "iconCls": "",
              "href": "",
              "parameters": "",
              "description": "根菜单",
              "disabled": false,
              "root": false
            },
            "parentId": null,
            "level": 0,
            "sortNo": 12,
            "description": null,
            "children": [
              {
                "id": 131,
                "title": "我的回访单",
                "code": "my_revisit_list",
                "iconCls": null,
                "href": "/revisit",
                "parameters": null,
                "disabled": false,
                "parentMenu": {
                  "sortNo": 12,
                  "parentId": 0,
                  "treePath": null,
                  "treeLevel": 0,
                  "id": 127,
                  "title": "回访单管理",
                  "code": "revisit_ticket",
                  "iconCls": "fa icon-ic-ticket",
                  "href": null,
                  "parameters": null,
                  "description": null,
                  "disabled": false,
                  "root": false
                },
                "parentId": null,
                "level": 0,
                "sortNo": 9999,
                "description": null,
                "children": null,
                "checked": false
              },
              {
                "id": 129,
                "title": "回访单列表",
                "code": "revisit_ticket_list",
                "iconCls": null,
                "href": "/revisit/all?all=1",
                "parameters": null,
                "disabled": false,
                "parentMenu": {
                  "sortNo": 12,
                  "parentId": 0,
                  "treePath": null,
                  "treeLevel": 0,
                  "id": 127,
                  "title": "回访单管理",
                  "code": "revisit_ticket",
                  "iconCls": "fa icon-ic-ticket",
                  "href": null,
                  "parameters": null,
                  "description": null,
                  "disabled": false,
                  "root": false
                },
                "parentId": null,
                "level": 0,
                "sortNo": 9999,
                "description": null,
                "children": null,
                "checked": false
              }
            ],
            "checked": false
          },
          {
            "id": 78,
            "title": "FAQ管理",
            "code": "faq",
            "iconCls": "fa icon-ic-faq",
            "href": "/FAQ",
            "parameters": null,
            "disabled": false,
            "parentMenu": {
              "sortNo": 0,
              "parentId": -1,
              "treePath": null,
              "treeLevel": 0,
              "id": 0,
              "title": "根菜单",
              "code": "root",
              "iconCls": "",
              "href": "",
              "parameters": "",
              "description": "根菜单",
              "disabled": false,
              "root": false
            },
            "parentId": null,
            "level": 0,
            "sortNo": 13,
            "description": null,
            "children": [
              {
                "id": 81,
                "title": "查看FAQ",
                "code": "faq_list",
                "iconCls": null,
                "href": "/FAQ",
                "parameters": null,
                "disabled": false,
                "parentMenu": {
                  "sortNo": 13,
                  "parentId": 0,
                  "treePath": null,
                  "treeLevel": 0,
                  "id": 78,
                  "title": "FAQ管理",
                  "code": "faq",
                  "iconCls": "fa icon-ic-faq",
                  "href": "/FAQ",
                  "parameters": null,
                  "description": null,
                  "disabled": false,
                  "root": false
                },
                "parentId": null,
                "level": 0,
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

      return {
        menus:menus.children,
        collapsed:false
      }
    },
    mounted:function () {
      // 在钩子函数中监听来自兄弟组件MainHeader的数据
      Bus.$on('collapsed',(e) => {
        this.collapsed = e
        console.log(e)
      })
    },
    methods:{
      showMenu:function (i,status) {
        this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
      }
    }
  }
</script>
<style scoped>
  aside{
    transition:all 0.3s ease 0s;
  }
  .menu-expanded{
    width: 206px;
    height: 100%;
    background-color: #F5F5F5;
    text-align: left;
  }
  .menu-collapsed{
    width: 50px;
    height: 100%;
    background-color: #F5F5F5;
    text-align: left;
  }
  .el-menu-vertical-demo .item{
    position: relative;
  }
  aside .el-menu{
    height: 100%;
  }
  aside .el-menu.submenu{
    display: none;
    position: absolute;
    top: 0;
    left: 50px;
    z-index: 99999;
    height: auto;
    display: none;
    border: 1px solid #eee;
    background-color: #E4E8F1;
  }
  .sidebar ul li{
    text-align: left;
  }
  .menu-expanded .el-menu{
    width: 100% !important;
  }
  .is-active{
    color: #3385FF ;
  }


</style>
