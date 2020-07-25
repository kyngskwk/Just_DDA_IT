import Vue from 'vue'
import Vcalendar from 'v-calendar'
import { setupCalendar } from 'v-calendar'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(Vcalendar, {
  componentPrefix: 'vc'
})

setupCalendar({
  componentPrefix: 'vc',
})