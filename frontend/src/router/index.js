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
<<<<<<< HEAD
import NcsResult from '../components/License/NcsResult.vue'


=======
import LicenseResult from '../components/License/LicenseResult.vue'
>>>>>>> c3b9d8a4b582978b9824e6f20826b419a56e406e
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
