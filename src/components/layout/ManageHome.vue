<template>
  <div class="wrapper">
    <!--父组件向子组件传递数据collapsed-->
    <main-header></main-header>
    <div class="content-wrapper">
      <main-sidebar></main-sidebar>
      <div class="content">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  import MainHeader from './MainHeader'
  import MainSidebar from './MainSidebar'
  export default{
    data(){
      return {
      }
    },
    components: {
      MainHeader,
      MainSidebar
    }
  }
</script>
<style scoped>
  .wrapper{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
  .wrapper .content-wrapper{
    position: absolute;
    top: 50px;
    bottom: 0;
    width: 100%;
  }
  .wrapper .content-wrapper .content{
    position: absolute;
    top: 0;
    bottom: 0;
    left:206px;
    right: 0;
    padding: 10px;
    text-align: left;
  }

</style>
