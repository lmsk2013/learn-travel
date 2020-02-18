<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom"
          v-for="item of recommendList"
          :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: '//imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg',
        title: '济南-三亚5日自由行',
        desc: '含往返机票（含税）+4晚住宿'
      }, {
        id: '0002',
        imgUrl: '//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
        title: '济南-丽江5日自由行',
        desc: '含往返飞机票+4晚住宿'
      }, {
        id: '0003',
        imgUrl: '//imgs.qunarzz.com/p/p19/1809/b9/2a3d362aabcbb02.jpg_256x160_28907832.jpg',
        title: '济南-重庆4天跟团游',
        desc: '含往返机票+3晚住宿'
      }, {
        id: '0004',
        imgUrl: '//imgs.qunarzz.com/p/p27/201302/28/d14185ac8a47f6f993835fbb.jpg_256x160_c2ab9336.jpg',
        title: '济南-张家界4天跟团游',
        desc: '含往返飞机票(含税)+3晚住宿'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      float 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .1rem
        color #fff
        border-radius .06rem
</style>
