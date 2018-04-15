<template>
	<div class="test">
    <e-scroller :on-infinite="infinite"
                  :on-refresh="refresh"ref="my_scroller">
      <div style="height: 44px;"></div>
      <div v-for="(item, index) in items"
           class="row" :class="{'grey-bg': index % 2 == 0}">
        {{ item }}
      </div>
    </e-scroller>


	</div>
</template>

<script>
  export default {
    data () {
      return {
        items: []
      }
    },
    mounted() {
      for (let i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 10
    },
    methods: {
      refresh(done) {
        setTimeout(() => {
          let start = this.top - 1
          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          this.top = this.top - 10;
          done()
        }, 1500)
      },
      infinite(done) {
        if (this.bottom >= 30) {
          setTimeout(() => {
            done(true)
          }, 1500)
          return;
        }
        setTimeout(() => {
          let start = this.bottom + 1
          for (let i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }
          this.bottom = this.bottom + 10;
          setTimeout(() => {
            done()
          })
        }, 1500)
      }
    }
  }
</script>


<style scoped>
  * {
    box-sizing: border-box;
  }
  .plugin-name {
    margin: 0;
    padding-top: 60px;
    text-align: center;
    color: #666;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 10px;
  }
  .for-vue-js {
    text-align: center;
    color: #666;
    margin-bottom: 40px;
  }
  .plugin-name, .for-vue-js {
    font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
  }
  .row {
    display: block;
    width: 100%;
    height: 50px;
    padding: 10px 0 10px 15px;
    font-size: 16px;
    line-height: 30px;
    color: #444;
    background-color: #fff;
  }
  .grey-bg {
    background-color: #eee;
  }
  .arrow-right {
    width: 8px;
    height: 16px;
    float: right;
    margin-top: 7px;
    margin-right: 15px;
  }

</style>

