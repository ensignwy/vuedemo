<template>
  <div class="login-container">

    {{msg}}
    {{content}}
  </div>
</template>

<script>
//  import {testMockRequest} from 'services/test.js';
  export default {
    data () {
      return {
        msg: 'mock'
      }
    },
    created() {

    },

  }
</script>

<style scoped>
  .login-container{

  }
  .el-form {
    width: 460px;
    margin: 0 auto;
  }
</style>
