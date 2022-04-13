import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'echarts'
import ECharts from 'vue-echarts'
console.log(ECharts)
Vue.component('v-chart',ECharts)
Vue.config.productionTip = false
import 'normalize.css'
Vue.prototype.$newapp=new Vue()
let newapp=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
