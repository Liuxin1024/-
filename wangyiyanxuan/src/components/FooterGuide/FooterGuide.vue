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

  .footer-x
    width 100%
    height 50px
    background: pink
    position fixed
    left 0
    bottom 0
    z-index 100
    display flex
    .footer-item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      text-align center
      color: #000
      &.on
        color #b4282d
      .foot-text
        font-size 14px


</style>
