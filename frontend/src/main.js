import Vue from 'vue'
// import Vcalendar from 'v-calendar'
// import { setupCalendar } from 'v-calendar'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import HighchartsVue from 'highcharts-vue'
import scrollMonitor from 'scrollmonitor'
import Carousel3d from 'vue-carousel-3d'

// To use vue-carousel globally
Vue.use(Carousel3d)
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