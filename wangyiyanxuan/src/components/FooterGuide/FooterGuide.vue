<template>
    <div class="footer-x">
      <a href="javascript:;" class="footer-item" @click="goto('/msite')" :class="{on:$route.path==='/msite'}">
      <span>
        <i class="iconfont icon-home"></i>
      </span>
        <span class="foot-text">首页</span>
      </a>
      <a href="javascript:;" class="footer-item" @click="goto('/KnowGoods')" :class="{on:$route.path==='/KnowGoods'}">
      <span>
        <i class="iconfont icon-home"></i>
      </span>
        <span class="foot-text">识物</span>
      </a>
      <a href="javascript:;" class="footer-item" @click="goto('/classify')" :class="{on:$route.path==='/classify'}">
      <span>
        <i class="iconfont icon-home"></i>
      </span>
        <span class="foot-text">分类</span>
      </a>
      <a href="javascript:;" class="footer-item" @click="goto('/order')" :class="{on:$route.path==='/order'}">
      <span>
        <i class="iconfont icon-home"></i>
      </span>
        <span class="foot-text">购物车</span>
      </a>
      <a href="javascript:;" class="footer-item" @click="goto('/profile')" :class="{on:$route.path==='/profile'}">
      <span>
        <i class="iconfont icon-home"></i>
      </span>
        <span class="foot-text">个人</span>
      </a>
    </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods:{
      goto(path){
//        在这跳转路由 要借助 router 先得到
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .footer-x
    width: 100%
    height: 80px
    background: hotpink
    position: fixed
    left: 0px
    bottom 0px
    display flex
    z-index 3
    .footer-item
      flex 1
      display flex
      flex-direction column
      justify-content center
      align-items center
      &.actives
        color $mainColor
      .iconfont
        font-size: 45px
      .footer_text
        font-size: 25px

</style>
