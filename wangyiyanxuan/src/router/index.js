import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/Msite/msite.vue'
import HomePage from '../pages/HomePage/HomePage.vue'
import Order from '../pages/Order/order.vue'
import Profile from '../pages/Profile/profile.vue'
import KnowGoods from '../pages/KnowGoods/knowgoods.vue'
import Classify from '../pages/Classify/classify.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes:[  //配置多个 路由 是数组  里面的每一个对象都是一个路由
    {
      path:'/msite',
      component:MSite
    },
    {
      path:'/homepage',
      component:HomePage
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/KnowGoods',
      component:KnowGoods
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/classify',
      component:Classify
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})
