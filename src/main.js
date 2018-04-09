import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

Vue.config.productionTip = false

Vue.use(VueRouter)

/* eslint-disable no-new */

let routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller}
]

let router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

let app = new Vue({
  router
}).$mount('#app')
