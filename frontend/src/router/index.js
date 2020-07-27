import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import License from '../views/License.vue'
import MyStudy from '../views/MyStudy.vue'
import Rooms from '../views/Rooms.vue'
import Setting from '../views/Setting.vue'
import Login from '../views/member/Login.vue'
import SignUp from '../views/member/SignUp.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/license',
    name: 'License',
    component: License
  },
  {
    path: '/mystudy',
    name: 'MyStudy',
    component: MyStudy
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/accounts/signup',
    name: 'SignUp',
    component: SignUp
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
