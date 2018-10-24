<template>
  <section id="three" >
    <div class="three_header">
      <div class="header_content">
          <span>
            <i class="iconfont icon-sousuo"></i>
          </span>
        <p>搜索商品, 共16861款好物</p>
      </div>
    </div>
    <div class="content_nav">
      <ul>
        <li>
          <p>推荐专区</p>
        </li>
        <li>
          <p>推荐专区</p>
        </li>
        <li>
          <p>推荐专区</p>
        </li>
        <li>
          <p>推荐专区</p>
        </li>
        <li>
          <p>推荐专区</p>
        </li>
        <li>
          <p>推荐专区</p>
        </li>
        <li>
          <p>推荐专区</p>
        </li>
        <li>
          <p>推荐专区</p>
        </li>
      </ul>
    </div>
    <div class="commodity">
      <div class="commodity_img">
        <img src="../images/14.jpg" alt="">
      </div>
      <ul>
        <li>
          <img src="../images/13.png" alt="">
          <div>
            <p>服装每满199减20</p>
          </div>
        </li>
        <li>
          <img src="../images/13.png" alt="">
          <div>
            <p>服装每满199减20</p>
          </div>
        </li>
        <li>
          <img src="../images/13.png" alt="">
          <div>
            <p>服装每满199减20</p>
          </div>
        </li>
        <li>
          <img src="../images/13.png" alt="">
          <div>
            <p>服装每满199减20</p>
          </div>
        </li>
        <li>
          <img src="../images/13.png" alt="">
          <div>
            <p>服装每满199减20</p>
          </div>
        </li>
        <li>
          <img src="../images/13.png" alt="">
          <div>
            <p>服装每满199减20</p>
          </div>
        </li>
        <li>
          <img src="../images/13.png" alt="">
          <div>
            <p>服装每满199减20</p>
          </div>
        </li>
        <li>
          <img src="../images/13.png" alt="">
          <div>
            <p>服装每满199减20</p>
          </div>
        </li>
        <li>
          <img src="../images/13.png" alt="">
          <div>
            <p>服装每满199减20</p>
          </div>
        </li>
      </ul>
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

  #three
    width: 100%
    height: 100%
    .three_header
      height: 95px
      display: flex
      align-items center
      justify-content center
      bottom-border-1px(#666)
      .header_content
        display flex
        align-items: center
        justify-content center
        width: 600px
        height: 60px
        border-radius 16px
        background: #ededed
        span
          .iconfont
            font-size 35px
            margin-right: 10px
        p
          font-size 32px
          height: 60px
          line-height 60px

    .content_nav
      width: 170px
      height: 100%
      position: fixed
      left: 0
      top:96px
      border-right 1px solid #666
      ul
        li
          width: 100%
          height: 80px
          text-align: center
          position: relative
          margin-top 30px
          p
            font-size: 30px
            color: #ab2b2b
            width: 100%
            height: 60px
            line-height 60px


    .commodity
      width: 540px
      height: 1120px
      margin-left: 170px

      padding-left: 20px
      padding-right 20px
      padding-top 20px
      padding-bottom 20px
      .commodity_img
        width: 100%
        margin-bottom 50px
        img
          width: 100%
          height: 230px

      ul
        clearFix()
        li
          width:160px
          height: 250px
          margin-right: 20px
          float left
          text-align: center
          div
            height: 100px
            text-align: center
            p
              font-size 27px
              height: 80px
</style>
