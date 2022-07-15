import Vue from 'vue'
import App from './App.vue'
import {
  Button
} from 'element-ui';
import router from './router'

Vue.config.productionTip = false

Vue.component('el-button', Button)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')