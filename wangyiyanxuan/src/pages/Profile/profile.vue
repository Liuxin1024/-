<template>
  <section id="five" class="on">
    <header class="header">
        <span class="span">
          <i class="iconfont icon-home"></i>
          <span class="header_span">
          <i class="iconfont icon-home"></i>
          <i class="iconfont icon-home"></i>
        </span>
        </span>

      <img src="../images/9.png" alt="">
    </header>
    <div class="content">
      <img src="../images/16.png" alt="">
    </div>
    <div class="login">
      <div class="login_iphone">
          <span>
            <i class="iconfont icon-mobilephone_fill"></i>
          </span>
        <span>
            <p>手机号码登录</p>
          </span>
      </div>
      <div class="login_note">
         <span>
            <i class="iconfont icon-mobilephone_fill"></i>
          </span>
        <span>
            <p>邮箱账号登录</p>
          </span>
      </div>
      <div class="login_text">
        <a href="javascript:;">手机号快捷注册
          <i class="iconfont icon-right"></i>
        </a>
      </div>
    </div>
    <footer class="footer">
      <div>
          <span>
            <i class="iconfont icon-weixin"></i>
          </span>
        <span>微信</span>
      </div>
      <div>
          <span>
            <i class="iconfont icon-weixin"></i>
          </span>
        <span>微信</span>
      </div>
      <div>
          <span>
            <i class="iconfont icon-weixin"></i>
          </span>
        <span>微信</span>
      </div>
    </footer>
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
  #five
    width: 100%
    height: 100%
    position: relative
    .header
      height: 90px
      background: white
      position: relative
      img
        position: absolute
        left: 0
        right: 0
        top: 0
        bottom: 0
        margin auto
        width: 170px
      .span
        margin-left: 30px
        padding-top 10px
        display flex
        i
          font-size 65px
        .header_span
          margin-left: 480px

    .content
      width: 100%
      height: 500px
      background: white
      text-align: center
      line-height 500px
      img
        width: 230px

    .login
      width: 82%
      height: 380px
      background: burlywood
      padding-left: 70px
      padding-right: 70px
      .login_iphone
        width: 100%
        height: 100px
        background: #b4282d
        margin-bottom 20px
        border-radius 10px
        clearFix()
        display flex
        justify-content center
        align-items center
        span
          float: left
          text-align: center
          .iconfont
            font-size 55px
            color white
        p
          font-size 32px
          color white

      .login_note
        width: 100%
        height:100px
        background: white
        border 3px solid #b4282d
        border-radius 10px
        margin-bottom 50px
        clearFix()
        display flex
        justify-content center
        align-items center
        span
          float: left
          text-align: center
          .iconfont
            font-size 55px
            color #b4282d
        p
          font-size 32px
          color #b4282d
      .login_text
        width: 100%
        height: 30px
        background: white
        text-align: center
        line-height 30px
        font-size 30px
        i
          font-size 30px
    .footer
      position: absolute
      left: 0
      bottom: -210px
      background: white
      width: 100%
      height: 50px
      display: flex
      justify-content center
      div
        width: 150px
        display: inline-block
        text-align: center
        padding:0 10px
        border-right 1px solid #f9cd0b
        span
          line-height 40px
          font-size 30px
          i
            font-size 30px

</style>
