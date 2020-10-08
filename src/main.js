import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA2GfLlUI00BG7TN9BJNYdnNmEZdXBH3ck',
    libraries: 'places'
  }
})

axios.defaults.headers = {
  token: localStorage.getItem('token')
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
