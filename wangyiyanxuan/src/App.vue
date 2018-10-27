<template>
 <div>
   <router-view/>
   <FooterGuide/>
 </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

import {mapState} from 'vuex'
export default {

  components:{
    FooterGuide
  },
  mounted(){
    //异步获取data 并保存到store 里
    this.$store.dispatch('getData')
    this.$store.dispatch('getHome')
    this.$store.dispatch('getDetail')

  },
  computed:{
    ...mapState(['data','home','detail'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
