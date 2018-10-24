<template>
    <section  id="one" class="on">
      <!--input-->
      <div class="content_input">
        <a href="javascript:;" class="content_a">
          <img src="../images/9.png" alt="">
        </a>
        <div class="content_text">
          <span class="content_span">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品, 共16864款好物</span>
          </span>
        </div>
      </div>
      <!--推荐-->
      <div class="wrapper">
        <ul class="wrapper-ul" :res="wrapper">
          <li v-for="(item,index) in data" :key="index">
            <a href="javascript:;">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <!--轮播图-->
      <Sildeshow/>
      <!--网易自营-->
      <div class="autoget">
        <div class="autoget_noe" v-for="(item,index) in home.policyDescList" :key="index">
          <img :src="item.icon" alt="" class="autoimg">
          <span>{{item.desc}}</span>
        </div>
      </div>
      <!--头部的品牌制造商-->
      <header class="header">
        <a href="javascript:;">品牌制造商直供
          <span>
          <i class="iconfont icon-right"></i>
        </span>
        </a>
      </header>
      <!--商品列表-->
      <div class="newPublish">
        <ul class="newPublish_list">
          <li class="newPublish_li" v-for="(tag,index) in home.tagList" :key="index">
            <img src="../images/11.png" alt="">
            <div class="newPublish-top">
              <h4>{{tag.name}}</h4>
              <div class="newPublish-span">
                <span>{{tag.floorPrice}}</span>
                <span>元起</span>
              </div>
              <i class="newPublish-icon"></i>
            </div>
          </li>
        </ul>
      </div>
      <!--新品首发-->
      <div class="newShop">
        <a href="javascript:;">
          <span>新品首发</span>
          <div class="newShop_span">
          <span>
            查看全部
            <span>
              <i class="iconfont icon-right"></i>
            </span>
          </span>
          </div>
        </a>
      </div>
      <!--右边固定的-->
      <span class="rightIcon">
        <i class="iconfont icon-weibo-copy"></i>
      </span>
    </section>
</template>
<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Sildeshow from '../../components/Slideshow/slideshow.vue'

  export default {

    data(){
      return{
      }
    },
    mounted(){
      //异步获取data 并保存到store 里
      this.$store.dispatch('getBanner',()=>{
        this.$nextTick(()=>{
          //轮播图 初始化列表显示之后执行
          setTimeout(()=>{
            new Swiper ('.swiper-container', {
              loop: true, // 循环模式选项

              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },

              // 如果需要滚动条
//          scrollbar: {
//            el: '.swiper-scrollbar',
//          },
            })
          },1000)
        })
      });
      //导航滑动
      let scroll = new BScroll('.wrapper',{click:true,scrollX:true})
      //导航的宽度
   /*   const wrapperUl = this.$refs.wrapper;
      for (var i = 0; i < wrapperUl.length; i++) {
        console.log('wrapperUl.length');

      }*/

    },
    components:{
      Sildeshow
    },
    computed:{
      ...mapState(['data','home','banner']),

    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  #one
    width 100%
    height: 100%
    position absolute
    left: 0
    right: 0
    display: none
    /*overflow hidden*/
    &.on
      display: block
      .content_input
        width: 100%
        height: 88px
        padding 16px 30px
        box-sizing border-box
        .content_a
          width 25%
          height: 58px
          float left
          display: flex
          align-items center
          img
            width: 160px
        .content_text
          display: flex
          width: 75%
          height: 56px
          float left
          border-radius 5px
          background: #ededed
          justify-content center
          align-items center
          .content_span
            i
              margin-right 5px
              font-size: 30px
            span
              font-size: 27px
              color: #666
      .wrapper
        width: 100%
        height: 60px
        .wrapper-ul
          width: 600%
          li
            float left
            display: flex
            justify-content:center
            align-items center
            width: 100px
            height 50px
            padding:0 30px
            a
              font-size 27px
              color #b4282d

      .swiper-container
        img
          width:100%
      .autoget
        width: 100%
        height: 50px
        display flex
        justify-content center
        align-items center
        /*padding:0 30px*/
        .autoget_noe
          flex 1
          float: left
          display: flex
          justify-content center
          align-items center
          font-size 24px
          .autoimg
            width: 32px
            margin-right 5px

      .header
        width: 100%
        height: 100px
        display: flex
        justify-content: center
        align-items center
        margin-top: 10px
        a
          font-size:35px
      .newPublish
        margin-bottom: 5px
        .newPublish_list
          position: relative
          margin 0 10px
          height: 480px
          overflow hidden
          .newPublish_li
            position: relative
            width: 350px
            height: 230px
            display: inline-block
            background: #f4f4f4
            margin-right 10px
            margin-bottom 10px
            img
              width:100%
            .newPublish-top
              position: absolute
              left: 0px
              top 0
              width: 100%
              padding-top: 5px
              padding-left: 10px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              h4
                font-size 30px
                color: #000
                margin-bottom 8px
              .newPublish-span
                font-size 26px
              .newPublish-icon
                background-image url("../images/17.png")
                background-repeat no-repeat
                width: 100%;
                height: 40px;
                display: block;
                margin-top 10px


      .newShop
        width: 100%
        height: 200px
        display: flex
        justify-content center
        align-items center
        margin-top 10px
        flex-direction column
        position relative
        a
          span
            position relative
            left 0
            top: 0
            font-size: 35px
            color: #8BA0B6
          .newShop_span
            margin-top: 5px
            background: #D8E5F1
      .rightIcon
        width: 90px
        height: 80px
        background: greenyellow;
        position fixed
        right: 0px
        top: 1000px
        border-top-left-radius 50%
        border-bottom-left-radius 50%
        .iconfont
          font-size 65px
          margin-left 18px
          line-height 80px
  </style>
