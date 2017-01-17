import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import loadpageone from './loadpageone'
import loadpagetwo from './loadpagetwo'
import city from './city'

import 'common/css/common.css';
// import 'common/css/animate.css'
import 'common/js/common.js';

Vue.use(VueRouter)
// Vue.transition('bounce',{
//     enterClass:'bounceInLeft',
//     enterClass:'bounceOutRight'
// })

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: loadpageone },
  { path: '/module/loadpagetwo', component:loadpagetwo},
  { path: '*', component: city }
]


const router = new VueRouter({
    mode: 'history',
  routes // （缩写）相当于 routes: routes
})

new Vue({
    router,
    ...App
}).$mount('#container')
