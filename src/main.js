// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import stores from './store'
import api from './api'
require("./app.sass")

Vue.use(iView)
Vue.use(Vuex)
Vue.use(api)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
