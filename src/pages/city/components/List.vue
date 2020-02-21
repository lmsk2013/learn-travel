<template>
  <!-- better-scroll要求必须有两层包裹滚动项
       ref用来获取dom元素以绑定滚动区域 -->
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
                 {{this.city}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hot"
               :key="item.id"
               @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item, key) of cities"
           :key="key"
           :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="city of item"
               :key="city.id"
               @click="handleCityClick(city.name)">
               {{city.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入better-scroll
import Bsrcoll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  computed: {
    // 利用mapState将state中的数据映射为计算属性
    ...mapState(['city'])
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    // 利用mapMutations将mutations映射为私有方法
    ...mapMutations(['changeCity'])
  },
  mounted () {
    // 在页面渲染时，初始化滚动对象
    this.scroll = new Bsrcoll(this.$refs.wrapper)
  },
  watch: {
    // 监听letter的变化，发生变化时，滚动到对应的element
    // $refs[key]获取到的是一个数组（可获取多个），取其第一个才是对应的元素
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    // 使得整个list区域位置固定，不能滚动，交由插件实现滚动效果
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
</style>
