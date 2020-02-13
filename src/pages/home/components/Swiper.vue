<template>
  <div class="warpper">
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          bulletActiveClass: 'bullet-active'
        },
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: '//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
      }, {
        id: '0002',
        imgUrl: '//imgs.qunarzz.com/vc/24/36/10/3fc94d042ae62de380581d4c98.jpg_92.jpg'
      }]
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
