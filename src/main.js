import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

Vue.config.productionTip = false

Vue.use(VueRouter)

/* eslint-disable no-new */

let routes = [
  {path: '/', component: App},
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  {path: '/seller', component: seller}
]

let router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

new Vue({
  el: '#app',
  router
})
