// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import store from './store'//載入vuex
import Vue from 'vue'
import axios1 from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'

Vue.use(VueAxios, axios1)
Vue.config.productionTip = false
//Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//讓所有vue都能存取
  components: { App },
  template: '<App/>'
})
