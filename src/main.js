import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
