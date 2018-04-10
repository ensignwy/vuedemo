<template>
	<div class="login-container">
		<el-form label-width="80px">
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
  export default {
    data () {
      return {
        msg: 'mock'
      }
    },
    created() {

    },
    methods:{
      login:function () {
        console.log('login')
        this.$router.push({ path: '/' })
      }
    }
  }
</script>


<style scoped>
.login-container{
  margin-top: 200px;
}
.el-form {
    width: 460px;
    margin: 0 auto;
}
</style>
