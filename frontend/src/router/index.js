import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import License from '../views/License.vue'
import MyStudy from '../views/MyStudy.vue'
import Rooms from '../views/rooms/Rooms.vue'
import RoomCreate from '../views/rooms/RoomCreate.vue'
import RoomDetail from '../components/Rooms/RoomDetail.vue'
import FeedDetail from '../components/Rooms/FeedDetail.vue'
import Setting from '../views/Setting.vue'
import Login from '../views/member/Login.vue'
import Signup from '../views/member/Signup.vue'
import SignupComplete from '../views/member/SignupComplete.vue'

import LicenseResult from '../components/License/LicenseResult.vue'
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
    path: '/mystudy/:UID',
    name: 'MyStudy',
    component: MyStudy
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms
  },
  {
    path: '/rooms/create',
    name: 'RoomCreate',
    component: RoomCreate
  },
  {
    path: '/rooms/:roomId',
    name: 'RoomDetail',
    component: RoomDetail,
    props: true
  },
  {
    path: '/rooms/:roomId/:feedId',
    name: 'FeedDetail',
    component: FeedDetail,
    props: true
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
    name: 'Signup',
    component: Signup
  },
  {
    path: '/accounts/SignupComplete',
    name: 'SignupComplete',
    component: SignupComplete
  },
  {
    path: '/license/result',
    name: 'LicenseResult',
    component: LicenseResult
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
