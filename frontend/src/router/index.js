import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import License from '../views/License.vue'
// mystudy
import MyStudy from '../views/mystudy/MyStudy.vue'
import MyLicenseForm from '../views/mystudy/MyLicenseForm.vue'

import Rooms from '../views/rooms/Rooms.vue'
import RoomCreate from '../views/rooms/RoomCreate.vue'
import RoomDetail from '../components/Rooms/RoomDetail.vue'
import FeedCreate from '../components/Rooms/FeedCreate.vue'
import FeedDetail from '../components/Rooms/FeedDetail.vue'
import FeedUpdate from '../components/Rooms/FeedUpdate.vue'
// setting
import Setting from '../views/setting/Setting.vue'
import EditProfile from '../views/setting/EditProfile.vue'
import ChangePw from '../views/setting/ChangePw.vue'
// import Setting from '../views/setting/Setting.vue'

import Login from '../views/member/Login.vue'
import FindPassword from '../views/member/FindPassword.vue'
import Signup from '../views/member/Signup.vue'
import SignupComplete from '../views/member/SignupComplete.vue'

import LicenseResult from '../components/License/LicenseResult.vue'
import LicenseResultDetail from '../components/License/LicenseResultDetail.vue'

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
    path: '/mystudy/mylicenseform',
    name: 'MyLicenseForm',
    component: MyLicenseForm
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
    path: '/rooms/:roomId/create',
    name: 'FeedCreate',
    component: FeedCreate,
    props: true
  },
  {
    path: '/rooms/:roomId/:feedId',
    name: 'FeedDetail',
    component: FeedDetail,
    props: true
  },
  {
    path: '/rooms/:roomId/:feedId/edit',
    name: 'FeedUpdate',
    component: FeedUpdate,
    props: true
  },
  {
    path: '/setting/:UID',
    name: 'Setting',
    component: Setting
  },
  {
    path: '/setting/editprofile/:UID',
    name: 'EditProfile',
    component: EditProfile
  },
  {
    path: '/setting/changepassword/:UID',
    name: 'ChangePw',
    component: ChangePw
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/accounts/findPassword',
    name: 'FindPassword',
    component: FindPassword
  },
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/accounts/signupComplete',
    name: 'SignupComplete',
    component: SignupComplete
  },
  {
    path: '/license/result',
    name: 'LicenseResult',
    component: LicenseResult,
  },
  {
    path: '/license/result/detail',
    name: 'LicenseResultDetail',
    component: LicenseResultDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
