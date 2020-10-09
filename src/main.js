import Vue from 'vue'
import App from './App.vue'

var Fragment = require('vue-fragment')
Vue.use(Fragment.Plugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
