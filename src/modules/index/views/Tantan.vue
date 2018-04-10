<template>
  <div class="c-container">
    <div class="stackone">
      <ul class="stack">
        <li class="stack-item" style="transform: translate3d(0px, 0px, 0px);opacity: 1;z-index: 10;"><img src="/static/images/1.png" alt="01"></li>
        <li class="stack-item" style="transform: translate3d(0px, 0px, -60px);opacity: 1;z-index: 9"><img src="/static/images/2.png" alt="02"></li>
        <li class="stack-item" style="transform: translate3d(0px, 0px, -120px);opacity: 1;z-index: 8"><img src="/static/images/3.png" alt="03"></li>
      </ul>
    </div>
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
        this.$router.push({ path: '/communication' })
      }
    }
  }
</script>


<style scoped>
  .c-container{
    display:flex;/*Flex布局*/
    display: -webkit-flex; /* Safari */
    align-items:center;/*指定垂直居中*/
    justify-content:center;/*指定水平居中*/
    height: 100%;
  }
  .stackone {
    height: 320px;
    width: 320px;
    margin: 50px;
    position: relative;
  }
  .stackone img{
    width: 100%;
    height: 100%;
  }

  .stack {
    width: 100%;
    height: 100%;
    position: relative;
    perspective: 1000px; /*子元素视距*/
    perspective-origin: 50% 150%; /*子元素透视位置*/
    -webkit-perspective: 1000px;
    -webkit-perspective-origin: 50% 150%;
    margin: 0;
    padding: 0;
  }
  .stack-item{
    background: #fff;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    text-align: center;
    overflow: hidden;
    position: absolute;
    list-style: none;
  }
  .stack-item img {
    width: 100%;
    display: block;
    pointer-events: none;
  }
</style>
