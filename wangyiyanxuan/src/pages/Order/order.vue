<template>
  <section id="four" >
    <header class="header">
      <span>购物车</span>
      <div class="header_right">
        <span>领劵</span>
      </div>
    </header>
    <ul class="list">
      <li>
          <span>
            <span>
              <i class="iconfont icon-like_fill"></i>
            </span>
            <p>30天无忧退货</p>
          </span>
      </li>
      <li>
          <span>
            <span>
              <i class="iconfont icon-like_fill"></i>
            </span>
            <p>30天无忧退货</p>
          </span>
      </li>
      <li>
          <span>
            <span>
              <i class="iconfont icon-like_fill"></i>
            </span>
            <p>30天无忧退货</p>
          </span>
      </li>
    </ul>
    <div class="content">
      <div class="content_middle">
        <img src="../images/15.png" alt="">
        <div>去添点什么吧~~~</div>
        <p>登录</p>
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

  #four
    width: 100%
    height: 100%
    position relative
    .header
      height:100px
      text-align: center
      line-height 100px
      padding-right 20px
      padding-left: 20px
      position: relative
      span
        font-size 42px
      .header_right
        position: absolute
        right 40px
        top: 0px
        width: 100px
        height:100px
        span
          font-size 30px
          color: #B4282D
    .list
      width: 100%
      height: 80px
      display: flex
      top-border-1px(#666)
      li
        display: flex
        flex: 1
        justify-content center
        align-items center
        span
          display flex
        .iconfont
          font-size 22px
          height: 28px;
          line-height: 30px;
        p
          width: 100%
          font-size 28px
          flex-direction column

    .content
      width: 100%
      height: 100%
      position: relative
      .content_middle
        position: relative
        left 0
        right:  0
        top 340px
        bottom 270px
        margin auto
        width: 100%
        height: 300px
        text-align: center
        img
          width: 260px
        div
          text-align: center
          width: 100%
          height:50px
          font-size: 27px
          margin-bottom 50px
        p
          width: 65%;
          height: 90px;
          margin: auto;
          text-align: center;
          font-size: 39px;
          line-height: 2;
          background-color: #b4282d;
          /*color white*/
          border-radius 12px

</style>
