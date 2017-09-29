import Vue from 'vue'
import App from './App.vue'
import Main from './layouts/Main.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAChH_aAUGkHTjv7ko0xEd4FFKtET59SHY',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuetify)


var router = new VueRouter({
  routes: [
    { path: '/', component: Main },
    { path: '/:param_id', component: Main },
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
