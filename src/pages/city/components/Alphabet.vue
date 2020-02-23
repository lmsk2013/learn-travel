<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    letters: Array
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  // updated钩子在页面数据被更新，同时页面被渲染之后，该钩子被执行
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    // 点击时向父组件抛出事件
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      // 设置一个timer，初始化为null
      // 如果timer已经存在，则清除前一次的延时
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 延时16毫秒执行，减少滑动事件执行的次数
      this.timer = setTimeout(() => {
        // 当字母表被拖动时（必须是touch开始后结束前）
        // 计算出当前位置距离A拖动了几个字母
        // 抛出对应事件以改变letter的值
        if (this.touchStatus) {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }
      }, 16)
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
