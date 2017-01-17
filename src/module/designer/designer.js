import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Selectstyle from './Selectstyle'


import 'common/css/common.css';
import 'common/js/common.js';


Vue.use(VueRouter)
const routes = [
  { path: '*', component: Selectstyle }
]
const router = new VueRouter({
    // mode: 'history',
  routes // （缩写）相当于 routes: routes
})
new Vue({
    router,
    ...App
}).$mount('#app')
