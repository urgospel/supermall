import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import {request} from "./network/request";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

request({
  url: '/home/multidata'
}).then(res =>{
  console.log(res);
})


// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   param: {
//     type: 'pop',
//     page: 2
//
//   },
//   method: 'get'
// }).then(res =>{
//   console.log(res);
// })
