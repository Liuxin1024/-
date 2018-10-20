import Vue from 'vue'
import App from './App.vue'
// Vue.config.productionTip = false
import router from './router'
new Vue({
  el: '#app',
  render: h => h(App),
  // components: { App },
  // template: '<App/>',
  router
})
