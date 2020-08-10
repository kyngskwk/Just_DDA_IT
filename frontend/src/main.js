import Vue from 'vue'
// import Vcalendar from 'v-calendar'
// import { setupCalendar } from 'v-calendar'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import HighchartsVue from 'highcharts-vue'
import scrollMonitor from 'scrollmonitor'

// To use highcharts-vue globally
Vue.use(HighchartsVue)
// To use scrollMonitor globally
Vue.use(scrollMonitor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// Vue.use(Vcalendar, {
//   componentPrefix: 'vc'
// })

// setupCalendar({
//   componentPrefix: 'vc',
// })