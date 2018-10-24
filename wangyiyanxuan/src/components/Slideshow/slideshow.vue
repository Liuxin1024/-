<template>
  <link rel="stylesheet" href="">
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

  export default {
    data () {
      return {}
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
