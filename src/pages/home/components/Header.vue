<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市经典/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // 利用mapState将state中的数据映射为计算属性
    ...mapState(['city'])
  }
}
// 1rem = html font-size = 50px(reset中设置的)
// 图片给的是2倍像素
// 像素数除100就是rem值
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color:#fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      margin-top: .12rem
      margin-left: .2rem
      height: .64rem
      line-height: .64rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      // 设置最小宽度不设置宽度使其可以自由伸展
      min-width: 1.04rem
      padding 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        font-size: .2rem
        margin-left: -.04rem
</style>
