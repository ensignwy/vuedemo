<template>
  <div class="login-container">
    <el-form label-width="80px" class="el-form">
      <el-form-item label="用户名">
        <el-input v-model="username"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="password"/>
      </el-form-item>
      <el-button type="primary" @click="login">登陆</el-button>
    </el-form>

  </div>
</template>

<script>
  import authApi from '@/api/admin/auth'
  import siteinfoApi from '@/api/admin/siteinfo'

  export default {
    data() {
      return {
        username: 'admin',
        password: 'thoth123',
        site: {},
        error: false
      }
    },
    mounted() {
      siteinfoApi.get().then(data => {
        this.site = data
      });
    },
    methods: {
      login: function () {
        let vm = this


        let username = vm.username
        let password = vm.password
        let rememberMe = true

        authApi.login(username, password, rememberMe).then(res => {
          vm.$cookie.set('access_token', res.data.id_token, {expires: 7})
          localStorage.setItem('access_token', res.data.id_token)
          vm.$router.push({path: '/'})
        }).catch(err => {
          if (err.response) {
            if (err.response.status === 401) {
              this.error = true
            }
          } else {
          }
          this.error = true
        })
      }
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  @deep: ~'>>>';
  .login-container{
    margin-top: 200px;
  }
  .el-form {
    width: 460px;
    margin: 0 auto;
    text-align: center;
  }

</style>
