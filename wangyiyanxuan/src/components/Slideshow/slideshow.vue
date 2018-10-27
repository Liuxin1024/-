<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
        <img :src="item.picUrl" alt="">
      </div>
    </div>
    <!--如果需要分页器-->
    <div class="swiper-pagination"></div>

    <!--如果需要滚动条-->
    <div class="swiper-scrollbar"></div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
  export default {

    data () {
      return {}
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
    },
    computed:{
      ...mapState(['banner'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    img
      width:100%
</style>
