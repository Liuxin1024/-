import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './mock/mockServer'

import router from './router'

new Vue({
  el: '#app',
  render: h => h(App),
  // components: { App },
  // template: '<App/>',
  router,
  store
})
