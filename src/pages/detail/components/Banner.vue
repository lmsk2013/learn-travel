<template>
  <div>
    <div class="banner"
         @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg"/>
      <div class="banner-info">
        <div class="banner-tittle">{{this.sightName}}</div>
        <div class="banner-number">
          1/{{this.gallaryImgs.length}}
          <span class="iconfont arrow-icon">&#xe6dd;</span>
        </div>
      </div>
    </div>
    <common-gallary
        :imgs="gallaryImgs"
        v-show="showGallary"
        @close="handleallaryClose"
        >
    </common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 防止抖动
  // 1.触发BFC
  // 2.不指定高度，通过下内边距保证图片长宽比
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left: 0
      right: 0
      bottom 0
      line-height .6rem
      color #fff
      font-size 14
      padding-bottom .14rem
      // 增加渐变加深效果
      background-image: linear-gradient(top,
        rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-tittle
        flex 1
        padding-left .4rem
        line-height .4rem
        height .4rem
      .banner-number
        padding 0 .4rem
        height .4rem
        line-height .4rem
        border-radius .2rem
</style>
