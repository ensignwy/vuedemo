<template>
  <ul class="stack">
    <!--:style可以绑定对象的同时，也可以绑定数组和函数，这在遍历的时候很有用-->
    <li class="stack-item" v-for="(item,index) in pages" :style="[transform(index)]"
    @touchstart.stop.capture="touchstart"
    @touchmove.stop.capture="touchmove"
    @touchend.stop.capture="touchend"
    @mousedown.stop.capture="touchstart"
    @mouseup.stop.capture="touchend"
    @mousemove.stop.capture="touchmove"
    @webkit-transition-end="onTransitionEnd"
    @transitionend="onTransitionEnd">
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
          poswidth: '', // 记录位移
          posheight: '', // 记录位移
          lastPosWidth: '', // 记录上次最终位移
          lastPosHeight: '', // 记录上次最终位移
          tracking: false, // 是否在滑动，防止多次操作，影响体验
          animation: false, // 首图是否启用动画效果，默认为否
          opacity: 1, // 记录首图透明度
          swipe: false // onTransition判定条件
        }
      }
    },

    methods: {
      // 非首页样式切换
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
    },
    // 首页样式切换
    transformIndex (index) {
      // 处理3D效果
      if (index === this.basicdata.currentPage) {
        let style = {}
        style['transform'] = 'translate3D(' + this.temporaryData.poswidth + 'px' + ',' + this.temporaryData.posheight + 'px' + ',0px)'
        style['opacity'] = 1
        style['zIndex'] = 10
        return style
      }
    },
    touchstart: function(e) {
      if (this.temporaryData.tracking) {
        return
      }
      // 是否为touch
      if (e.type === 'touchstart') {
        if (e.touches.length > 1) {
          this.temporaryData.tracking = false
          return
        } else {
          // 记录起始位置
          this.basicdata.start.t = new Date().getTime()
          this.basicdata.start.x = e.targetTouches[0].clientX
          this.basicdata.start.y = e.targetTouches[0].clientY
          this.basicdata.end.x = e.targetTouches[0].clientX
          this.basicdata.end.y = e.targetTouches[0].clientY
        }
      } else { // pc操作
        this.basicdata.start.t = new Date().getTime()
        this.basicdata.start.x = e.clientX
        this.basicdata.start.y = e.clientY
        this.basicdata.end.x = e.clientX
        this.basicdata.end.y = e.clientY
      }
      this.temporaryData.tracking = true
    },
    touchmove: function() {
      // 记录滑动位置
      if (this.temporaryData.tracking && !this.temporaryData.animation) {
        if (e.type === 'touchmove') {
          this.basicdata.end.x = e.targetTouches[0].clientX
          this.basicdata.end.y = e.targetTouches[0].clientY
        } else {
          this.basicdata.end.x = e.clientX
          this.basicdata.end.y = e.clientY
        }
        // 计算滑动值
        this.temporaryData.poswidth = this.basicdata.end.x - this.basicdata.start.x
        this.temporaryData.posheight = this.basicdata.end.y - this.basicdata.start.y
      }
    },
    touchend (e) {
      this.temporaryData.tracking = false
      this.temporaryData.animation = true
      // 滑动结束，触发判断
      // 简单判断滑动宽度超出100像素时触发滑出
      if (Math.abs(this.temporaryData.poswidth) >= 100) {
        // 最终位移简单设定为x轴200像素的偏移
        let ratio = Math.abs(this.temporaryData.posheight / this.temporaryData.poswidth)
        this.temporaryData.poswidth = this.temporaryData.poswidth >= 0 ? this.temporaryData.poswidth + 200 : this.temporaryData.poswidth - 200
        this.temporaryData.posheight = this.temporaryData.posheight >= 0 ? Math.abs(this.temporaryData.poswidth * ratio) : -Math.abs(this.temporaryData.poswidth * ratio)
        this.temporaryData.opacity = 0
      // 不满足条件则滑入
      } else {
        this.temporaryData.poswidth = 0
        this.temporaryData.posheight = 0
      }
    },
    onTransitionEnd (index) {
      // dom发生变化后，正在执行的动画滑动序列已经变为上一层
      if (this.temporaryData.swipe && index === this.basicdata.currentPage - 1) {
        this.temporaryData.animation = true
        this.temporaryData.lastPosWidth = 0
        this.temporaryData.lastPosHeight = 0
        this.temporaryData.swipe = false
      }
    },
  }
</script>
