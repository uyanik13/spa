/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.dijitalreklam.org
==========================================================================================*/


import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'

Vue.use(Vuesax)


import VueQrcodeReader from "vue-qrcode-reader";

Vue.use(VueQrcodeReader);

// axios
//import axios from './axios.js'
//Vue.prototype.$http = axios

// API Calls
import './http/requests'


// Theme Configurations
import '../themeConfig.js'


import './plugins/index.js'


// ACL
import acl from './acl/acl'

// Globally Registered Components
import './globalComponents.js'


// Vue Router
import router from './router'


// Vuex Store
import store from './store/store'


// i18n
import i18n from './i18n/i18n'


// Vuexy Admin Filters
import './filters/filters'


// Clipboard
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)


// Tour
import VueTour from 'vue-tour'
Vue.use(VueTour)
require('vue-tour/dist/vue-tour.css')


// VeeValidate
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)


// Google Maps
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    // Add your API key here
    key: 'AIzaSyB4DDathvvwuwlwnUu7F4Sow3oU22y5T1Y',
    libraries: 'places' // This is required if you use the Auto complete plug-in
  }
})

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// Feather font icon
require('@assets/css/iconfont.css')

//import Echo from 'laravel-echo'

window.Pusher = require('pusher-js')

//console.log(process.env.MIX_PUSHER_APP_CLUSTER)
window.Pusher.logToConsole = false
window.pusher = new Pusher(process.env.MIX_PUSHER_APP_KEY, {
  authEndpoint: '/api/channels/authorize',
  broadcaster: 'pusher',
  key: process.env.MIX_PUSHER_APP_KEY,
  cluster: process.env.MIX_PUSHER_APP_CLUSTER,
  encrypted: true
})


// window.Echo = new Echo({
//   namespace: 'App.Events',
//   //host: window.location.protocol + '//' + window.location.hostname + ':8000',
//   broadcaster: 'pusher',
//   key: process.env.MIX_PUSHER_APP_KEY,
//   cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//   encrypted: false
// })

// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  acl,
  render: h => h(App)
}).$mount('#app')
