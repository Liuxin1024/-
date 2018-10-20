import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/Msite/msite.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[  //配置多个 路由 是数组  里面的每一个对象都是一个路由
    {
      path:'/msite',
      component:MSite
    },



    {
      path:'/',
      redirect:'/msite'
    }
  ]
})
