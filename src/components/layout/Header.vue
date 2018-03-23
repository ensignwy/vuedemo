<template>
  <div class="header">
    <div class="logo">后台管理系统</div>
    <div class="user-info">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <img src="" alt="">
          {{username}}
        </span>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return{

      }
    },
    computed:{

    }
  }
</script>
