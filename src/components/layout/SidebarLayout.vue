<template>
  <div class="wrapper">
    <!--父组件向子组件传递数据collapsed-->
    <main-header></main-header>
    <div class="content-wrapper">
      <main-sidebar></main-sidebar>
      <div class="content" :class="collapsed?'content-expanded':'content-collapsed'">
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
  import Bus from './bus'
  export default{
    data(){
      return {
        collapsed:false
      }
    },
    components: {
      MainHeader,
      MainSidebar
    },
    mounted:function () {
      // 在钩子函数中监听来自兄弟组件MainHeader的数据
      Bus.$on('collapsed',(e) => {
        this.collapsed = e
      })
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

    padding: 10px;
    text-align: left;
  }
  .content-collapsed{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 206px;
  }
  .content-expanded{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left:50px;
  }


</style>
