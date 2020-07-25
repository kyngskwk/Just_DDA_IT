import Vue from 'vue'
import Vcalendar from 'v-calendar'
import { setupCalendar } from 'v-calendar'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(Vcalendar, {
  componentPrefix: 'vc'
})

setupCalendar({
  componentPrefix: 'vc',
})