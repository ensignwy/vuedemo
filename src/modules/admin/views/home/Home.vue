<template>
  <sidebar-layout :header-props="headerProps" :menus="menus"></sidebar-layout>
</template>

<script>
  import menuApi from '@/api/admin/menu'
  import userApi from '@/api/admin/user'

  export default {
    data() {
      return {
        menus: [],
        headerProps: {
          username: 'ensign',
          name: '后台管理系统',
          shortName: 'Admin'
        }
      }
    },
    mounted() {
      menuApi.tree().then(json => {
        if (json){
          this.menus = json.children
        }
      })

      // 获取当前用户
      userApi.getCurrentUser().then(json => {
        debugger
        if (json){
          let username = json.lastName + json.firstName
          this.headerProps.username = username
        }

      })

    },

  }
</script>

