import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
// import 'bootstrap' // Import js file
// import 'bootstrap/dist/css/bootstrap.min.css' // Import css file
Vue.config.productionTip = false

Vue.component('Loading', Loading)

Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
