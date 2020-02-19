<template>
  <div class="warpper">
    <swiper :options="swiperOption" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for="item of list" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          bulletActiveClass: 'bullet-active'
        },
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .warpper >>> .bullet-active
      opacity: 1
      background: #fff
  .warpper
    overflow : hidden
    width : 100%
    height : 0
    padding-bottom : 30.48%
    // 利用以上代码实现保持图片宽高比为31.25
    background : #eee
    .swiper-img
      width : 100%
</style>
