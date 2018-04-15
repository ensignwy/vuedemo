<template>
  <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
    <!--菜单栏展开-->
    <el-menu class="el-menu-vertical-demo" router="true" text-color="#000" v-show="!collapsed">
      <template v-for="item in menus">
        <template v-if="item.children">
          <el-submenu :index="item.id">
            <template slot="title"><i class="el-icon-menu"></i><span>{{item.title}}</span></template>
            <el-menu-item v-for="(child,i) in item.children" :key="i" :index="child.id" route="/">
              <i class="el-icon-menu"></i>
              <span>{{child.title}}</span>
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.id" route="/">
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
          <div class="el-submenu__title" style="padding-left: 14px;" @mouseover="showMenu(index,true)"
               @mouseout="showMenu(index,false)"><i class="el-icon-menu"></i></div>
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
        <div style="padding-left: 14px;" class="el-submenu__title" @click="$router.push('/')"><i
          class="el-icon-menu"></i></div>
      </li>
</template>
</li>
</ul>
</aside>
</template>
<script>
  import Bus from './bus'
  import http from '../../http'

  export default {
    props: ['menus'],

    data () {

      return {
//        menus: menus.children,
        collapsed: false
      }
    },
    mounted: function () {
      // 在钩子函数中监听来自兄弟组件MainHeader的数据
      Bus.$on('collapsed', (e) => {
        this.collapsed = e
        console.log(e)
      })
    },
    created:function () {
      var vm = this
      http.get('../../static/menu.json').then(function (json) {
//        vm.menus = json.children
        console.log(json)
      })
    },
    methods: {
      showMenu: function (i, status) {
        this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none'
      }
    }
  }
</script>
<style scoped>
  aside {
    transition: all 0.3s ease 0s;
  }

  .menu-expanded {
    width: 206px;
    height: 100%;
    background-color: #F5F5F5;
    text-align: left;
  }

  .menu-collapsed {
    width: 50px;
    height: 100%;
    background-color: #F5F5F5;
    text-align: left;
  }

  .el-menu-vertical-demo .item {
    position: relative;
  }

  aside .el-menu {
    height: 100%;
  }

  aside .el-menu.submenu {
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

  .sidebar ul li {
    text-align: left;
  }

  .menu-expanded .el-menu {
    width: 100% !important;
  }

  .is-active {
    color: #3385FF;
  }


</style>
