import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'
import './assets/style/main.scss'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/nprogress/nprogress.css'
import Toasted from 'vue-toasted'

Vue.use(Toasted)
Vue.config.productionTip = false
let options = {
  duration: 5000
}
Vue.toasted.register('my_app_error', options)
window.$ = window.jQuery = require('jquery')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
