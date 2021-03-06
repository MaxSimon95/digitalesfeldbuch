import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'

import Vue from 'vue'
import IonicVue from '@ionic/vue'
import App from './App'
import router from './router'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.use(IonicVue)
Vue.use(VueCookies)
VueCookies.config('7d')
//Vue.use(require('vue-babylonjs'));
import vb from 'vue-babylonjs';
Vue.use(vb);
import { plugin, Scene, Box, Cannon } from 'vue-babylonjs';
Vue.use(plugin, { components: { Scene, Box, Physics: Cannon } });
// set global cookie
VueCookies.set('theme', 'default')
VueCookies.set('hover-time', '1s')

// var PouchDB = require('pouchdb-browser').default // doesn'T work without '.default' despite documentation, solution found in some github issuetracker
// eslint-disable-next-line no-unused-vars
// var db = new PouchDB('digitales_feldbuch_database') // creates new database or opens existing one

// In the following lines: Dynamic Page Title adjustment (rather irrelevant for cordova apps, therefore commented out)

/*
// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  })
  // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next()
})
*/

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
