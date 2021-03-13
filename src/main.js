import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Route from './routes.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
const myRouter =  new VueRouter({
  routes:Route,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router: myRouter,
}).$mount('#app')
