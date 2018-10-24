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
    <!--<div class="swiper-container" id="swiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../images/1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../images/2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../images/3.jpg" alt="">
        </div>
      </div>
      &lt;!&ndash; 如果需要分页器 &ndash;&gt;
      <div class="swiper-pagination"></div>

      &lt;!&ndash; 如果需要导航按钮 &ndash;&gt;
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      &lt;!&ndash; 如果需要滚动条 &ndash;&gt;
      <div class="swiper-scrollbar"></div>
    </div>-->
    <!--滑动-->
    <div class="wrapper">
      <ul>
        <a href="javascript:;" class="content">
          <div class="content_top">
            <div class="content_text">358篇文章</div>
            <img src="../images/1.jpg" alt="" class="content_img">
          </div>
          <div class="content_bottom">严选推荐</div>
        </a>
        <a href="javascript:;" class="content">
          <div class="content_top">
            <div class="content_text">358篇文章</div>
            <img src="../images/1.jpg" alt="" class="content_img">
          </div>
          <div class="content_bottom">严选推荐</div>
        </a>
        <a href="javascript:;" class="content">
          <div class="content_top">
            <div class="content_text">358篇文章</div>
            <img src="../images/1.jpg" alt="" class="content_img">
          </div>
          <div class="content_bottom">严选推荐</div>
        </a>
        <a href="javascript:;" class="content">
          <div class="content_top">
            <div class="content_text">358篇文章</div>
            <img src="../images/1.jpg" alt="" class="content_img">
          </div>
          <div class="content_bottom">严选推荐</div>
        </a>
      </ul>

    </div>
    <!--主体内容-->
    <div class="content_wrapper">
      <div class="content">
        <div class="recommend">
          <p>为你推荐</p>
        </div>
        <div class="imgcontent">
          <img src="../images/12.jpg" alt="">
        </div>
        <div class="content-footer">

        </div>
      </div>
    </div>

  </section>
</template>
<script>
  export default {
    data () {
      return {}
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
    //width: 100%
    //height: 200px
    //background: white
      clearFix()
      ul
        width: 200%
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
            font-size: 28px
            text-align: center

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
          height: 50px
</style>
