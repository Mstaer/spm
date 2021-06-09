import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Fastclick from 'fastclick'
import Vuelazyload from 'vue-lazyload'
// import 'swiper/swiper-bundle.css'
import 'swiper/css/swiper.css'



Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Vuelazyload)

Fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

