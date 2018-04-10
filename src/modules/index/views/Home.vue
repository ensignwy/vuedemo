<template>
  <section>
    <ul class="Menu1 clear">
      <li>
        <router-link to="login" class="el-button el-button-info">
          <span>登陆</span>
        </router-link>
      </li>
      <li>
        <router-link to="communication" class="el-button el-button-info">
          <span>跨组件通信</span>
        </router-link>
      </li>
      <li>
        <router-link to="getData" class="el-button el-button-info">
          <span>mock模拟数据</span>
        </router-link>
      </li>
      <li>
        <router-link to="tantan" class="el-button el-button-info">
          <span>探探层叠滑动</span>
        </router-link>
      </li>
      <li>
        <a href="javascript:void(0)" @click="toAdmin" class="el-button el-button-info">
          <span>后台管理</span>
        </a>

      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '登陆'
      }
    },
    methods: {
      toAdmin: function () {
        window.location = '/modules/admin.html'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    text-decoration: none;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {

    min-height: 80px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .Menu1 > li {
    float: left;
  }

  .Menu1 > li > a {
    display: block;
    width: 268px;
    height: 80px;
    margin: 20px;
    padding: 0 15px;
    line-height: 80px;
  }

  .h1-warp {
    padding-left: 2%;
    line-height: 80px;
    text-align: center;
  }

  .el-button-info {
    color: #fff;
    background-color: #50bfff;
    border-color: #50bfff;
  }
</style>
