<template>
  <section id="two"  >
    <!--头部-->
    <header class="header">
       <span>
         <i class="iconfont icon-home"></i>
       </span>
      <div class="header_right">
        <img src="../images/9.png" alt="">
        <span class="header_span">
            <i class="iconfont icon-sousuo"></i>
            <i class="iconfont icon-gouwuche2"></i>
          </span>
      </div>
    </header>
    <!--轮播图-->
    <Sildeshow/>
    <!--滑动-->
    <div class="wrapper" style="overflow-x: hidden">
      <ul>
        <a href="javascript:;" class="content" v-for="(item,index) in detail.column" :key="index">
          <div class="content_top">
            <div class="content_text">{{item.articleCount}}</div>
            <img :src="item.picUrl" alt="" class="content_img">
          </div>
          <div class="content_bottom">{{item.title}}</div>
        </a>
      </ul>

    </div>
    <!--主体内容-->
    <div class="content_wrapper" v-if="detail.recommendOne">
      <div class="content">
        <div class="recommend">
          <p>为你推荐</p>
        </div>
        <div class="imgcontent">
          <img :src="detail.recommendOne.picUrl" alt="">
        </div>
        <div class="content-footer">
          <div class="text-content">
            <div class="text-left">
              <span class="text-span">{{detail.recommendOne.title}}</span>
            </div>
            <div class="text-right">
              <span>{{detail.recommendOne.priceInfo}}</span>
              <span>元起</span>
            </div>

          </div>
          <div class="good-shop">
            <span>{{detail.recommendOne.subTitle}}</span>
          </div>
        </div>
      </div>
    </div>
<div class="wuyong">

</div>
  </section>
</template>
<script>
  import Sildeshow from '../../components/Slideshow/slideshow.vue'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {}
    },
    components:{
      Sildeshow
    },
    mounted(){
      new BScroll('.wrapper',{scrollX:true,scrollY:false,click:true})
    },
    computed:{
      ...mapState(['detail'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'

  #two
    width 100%
    height: 100%
    clearFix()
    .header
      width: 100%
      height 90px
      background: #d8e5f1
      padding 18px
      box-sizing border-box
      clearFix()
      span
        float: left
        i
          font-size 60px
      .header_right
        float: right
        width: 80%
        img
          float left
          height: 55px
          margin-top: 5px
          margin-left: 100px
        .header_span
          .icon-sousuo
            margin-left: 120px
          .icon-gouwuche2
            margin-left: 20px

    .wrapper
      width: 100%
      height: 200px
      clearFix()
      overflow hidden
      ul
        width: 230%
        padding: 10px
        clearFix()
        .content
          float: left
          width: 170px
          height:200px
          display: block
          margin-right 20px
          position relative
          .content_top
            width: 100%
            height: 150px
            margin-bottom: 10px
            .content_text
              position: absolute
              right: 0
              top: 0
              font-size 24px
            .content_img
              width: 100%
              height: 150px
          .content_bottom
            width: 100%
            font-size: 23px
            text-align: center
            color: #000

    .content_wrapper
      padding: 20px 20px
      .content
        .recommend
          width: 100%
          height: 100px
          p
            text-align: center
            line-height 100px
            font-size 35px

        .imgcontent
          width: 100%
          height: 370px
          img
            width: 100%
            height: 370px
            border-radius 30px
        .content-footer
          width: 100%
          height: 200px
          padding: 10px
          .text-content
            height: 60px
            line-height 60px
            margin-bottom 10px
            .text-left
              float left
              .text-span
                font-size 35px
                color: #000
            .text-right
              float right
              margin-right 10px
              span
                font-size 38px
                color: red

          .good-shop
            height: 40px
            font-size 30px
            color: #000
    .wuyong
      width: 100%
      height: 1000px
      background: white
</style>
