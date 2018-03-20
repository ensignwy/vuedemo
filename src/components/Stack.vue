<template>
  <ul class="stack">
    <!--:style可以绑定对象的同时，也可以绑定数组和函数，这在遍历的时候很有用-->
    <li class="stack-item" v-for="(item,index) in pages" :style="[transform(index)]">
      <img :src="item.src" alt="">
    </li>
  </ul>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    // 组件现在接受一个
    // "prop"，类似于一个自定义特性。
    // 这个 prop 名为 pages,还申明了其类型和默认值
    props: {
      //pages包含基础的图片数据
      pages: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        basicdata: {
          currentPage: 0 //默认第一张图的序列
        },
        //组件临时数据
        temporaryData: {
          opacity: 1, //记录opacity
          zIndex: 10, //记录zIndex
          visible: 3 //记录默认显示堆叠数
        }
      }
    },

    methods: {
      //遍历样式
      transform: function (index) {
        if (index >= this.basicdata.currentPage) {
          let style = {}
          let visible = this.temporaryData.visible
          let perIndex = index - this.basicdata.currentPage
          //visible可见数量前滑块的样式
          if (index <= this.basicdata.currentPage + visible - 1) {
            style['opacity']='1'
            style['transform']='translate3d(0,0,'+ -1*perIndex*60+'px)'
            style['zIndex']=visible-index + this.basicdata.currentPage
          }else{
            style['transform']='translate3d(0,0,'+ -1*visible*60+'px)'
            style['zIndex']='-1'
          }
          return style
        }
      }
    }
  }
</script>
