// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import 'lib-flexible/flexible'
import './assets/style/common.less'
import './assets/style/vars.less'

import HomeCard from './components/homeCard'

Vue.component(HomeCard.name, HomeCard)

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
}).$mount('#app')
