<template>
  <header class="header">
    <div class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">{{collapsed?'':'后台管理系统'}}</div>
    <div class="tools" @click.prevent="collapse">
      <i class="el-icon-minus"></i>
    </div>
    <div class="user-info">
      <el-dropdown trigger="hover">
        <span class="el-dropdown-link">
          <img class="user-logo" src="../../../static/images/1.jpg" alt="">
          你好,{{username}}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native>修改密码</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
  import Bus from './bus'
  export default {
    data () {
      return {
        name: 'ensign',
      }
    },
    computed: {
      username () {
        let username = localStorage.getItem('username')
        return username ? username : this.name
      }
    },
    methods: {
      // 退出登录
      logout: function () {
        var vm = this
        this.$confirm('确认退出吗？', '提示', {
          // type: 'warning'
        }).then(() => {
          localStorage.removeItem('user')
          vm.$router.push('/login')
        }).catch(() => {

        })

      },
      // 折叠导航栏
      collapse:function () {
        this.collapsed = !this.collapsed
        // 触发事件，传递数据
        Bus.$emit('collapsed',this.collapsed)
      }
    }
  }
</script>
<style scoped>
  .header {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #fff;
    background-color: #3385FF;
  }

  .header .logo {
    float: left;
    text-align: center;
  }

  .user-info {
    float: right;
    padding-right: 50px;
  }

  .user-logo {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .user-info .el-dropdown-link {
    position: relative;
    display: inline-block;
    cursor: pointer;
    color: #fff;
  }
  .tools{
    float: left;
    width: 50px;
    cursor: pointer;
  }
  /*左侧aside折叠后的宽度*/
  .logo-collapse-width{
    width: 60px;
  }
  /*左侧aside展开的宽度*/
  .logo-width{
    width: 206px;
  }
  /*菜单折叠和展开*/
  .menu-collapsed{
    width: 60px;
  }
  .menu-expended{
    width: 206px;
  }

  /**/
</style>
