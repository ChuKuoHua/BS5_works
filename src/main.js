import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import $ from 'jquery';
import './assets/scss/all.scss'

Vue.config.productionTip = false
window.$ = $;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
