import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'

import Vue from 'vue'
import IonicVue from '@ionic/vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(IonicVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
