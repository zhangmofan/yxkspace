import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
 import {VueJsonp} from 'vue-jsonp'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$jsonp = VueJsonp

import {Carousel, CarouselItem } from 'element-ui';
 
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(VueJsonp)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
