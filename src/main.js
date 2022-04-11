import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './router/index.js'

import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  router,
  pinia,
  render: h => h(App)  
})
