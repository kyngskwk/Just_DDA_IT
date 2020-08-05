<template>
<div class="container">
  <div v-if="isLogin">
    <v-btn class="mx-2 fixed-top backbtn" fab dark small color="primary" @click="goBack">
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>
    <div class="card mt-5">
      <div class="card-header d-flex justify-content-between">
        <h5 class="mt-1">{{ licenseTitle }}</h5>
        <!--방장 삭제 수정 버튼-->
        <div v-if="this.captainId == this.UID">
          <v-btn text icon color="blue">
            <v-icon>mdi-wrench</v-icon>
          </v-btn>
          <v-btn text icon color="red" @click="snackbar=true">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
        <!--삭제버튼 한번 더 알리기-->
        <v-snackbar v-model="snackbar">
          스터디방을 <br> 정말로 삭제할까요?
          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">취소</v-btn>
            <v-btn color="blue" text v-bind="attrs" @click="delRoom">삭제</v-btn>
          </template>
        </v-snackbar>
      </div>


      <!--스터디방 디테일-->
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h4>{{ roomTitle }}</h4>
          <p class="text-danger" v-if="isPrivate">🔐비밀방</p>
          <p class="text-primary" v-else>🔓공개방</p>
        </div>
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-success">
            시험일 : {{ testDate }} <span class="badge badge-light">{{ this.Dday }}</span>
          </button>
          <button class="btn btn-primary">참여!!</button>
        </div>
        <div class="d-flex justify-content-between mt-5">
          <p>방장</p>
          <p class="text-primary">{{ this.captainName }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p>참여인원</p>
          <p><span class="text-primary"> 12</span> / {{ maxMembers }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p>목표</p>
          <p>{{ this.roomGoal }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p>소개</p>
          <p>{{ this.roomInfo}}</p>
        </div>
      </div>
    </div>
  <RoomCalendar class="mt-2"/>
  <!--오늘 할일, 공부 인증-->
    <div class="card text-center mt-5">
      <div class="card-header d-flex justify-content-between pb-1 pt-2 px-0">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link" :class="{ active: isTodo }" @click="todoTab">오늘 할 일</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: isFeed }" @click="feedTab">공부 인증</a>
          </li>
        </ul>
        <v-btn color="blue-grey" file icon class="mr-4" @click="feedcreate">
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
      </div>
      <TodoList v-if="isTodo"/>
      <RoomFeedList :feeds="feeds" :roomId="roomId" v-if ="isFeed"/>
    </div>
  </div>
  <div v-if="!isLogin" class="notLogin text-center">
    <v-btn class="mx-2 fixed-top backbtn" fab dark small color="primary" @click="goBack">
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>
    <h5>로그인하러 바로가기</h5>
    <v-btn @click="goLogin" class="mt-5">로그인</v-btn>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import RoomFeedList from '../Rooms//RoomFeedList.vue'
import RoomCalendar from '../Rooms/RoomCalendar.vue'
import TodoList from '../Rooms/TodoList.vue'


export default {
  name: 'RoomdDetail',
  props: {
    roomId: {
        type: Number,
        required: true
    }
  },
  components: {
    RoomFeedList,
    RoomCalendar,
    TodoList,
  },
  computed: {
    isLogin() {
      return this.$store.state.member.isLogin
		}
  },
  data() {
    return {
      UID: this.$store.state.member.loginUID,
      roomTitle: '',
      testDate: '',
      licenseTitle: '',
      cpatinId: '',
      captainName: '',
      isPrivate: '',
      maxMembers: '',
      roomGoal: '',
      roomInfo: '',
      Dday: '',
      isTodo: true,
      isFeed: false,
      feeds: [],
      tab: null,
      snackbar: false
    }
  },
  methods: {
    feedcreate() {
      this.$router.push({name: 'FeedCreate', params: { roomId:this.roomId }})
    },
    delRoom() {

    },
    goLogin(){
      this.$router.push('/accounts/login')
    },
    goBack() {
      this.$router.go(-1)
    },
    todoTab() {
      this.isTodo = true
      this.isFeed = false
    },
    feedTab() {
      this.isFeed = true
      this.isTodo = false
    }
  },
  created() {
    console.log(this.roomId)
    // room Id -> room 데이터
    // axios.get('http://localhost:3000/studyroom.json', {
    //   params :{
    //     roomId: roomId
    //   }
    // }).then(response => {
    //   console.log(response)
    // })
    axios.get('http://localhost:8080/study/getStudyroomDetail', {
      params: {
        roomId: this.roomId,
        UID: this.UID
      }
    })
    .then(response => {
      console.log(response) // data.data[roomId]
      // var aboutRoom = response.data.data[this.roomId]
      this.roomTitle = response.data.object.roomTitle
      this.testDate = response.data.object.testDate
      this.isPrivate = response.data.object.private
      this.captainId = response.data.object.captain.id
      this.maxMembers = response.data.object.maxMembers
      this.roomGoal = response.data.object.roomGoal
      this.roomInfo = response.data.object.roomInfo

      var when = new Date(response.data.object.testDate);
      var now = new Date();

      var gap = now.getTime() - when.getTime();
      this.Dday ='D -' + Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;

      // axios.get('http://localhost:3000/license.json')
      // .then(response => {
      //   // console.log(response)
      //   this.licenseTitle = response.data.data[this.roomId]["licenseTitle"]
      // })

      // axios.get('http://localhost:3000/member.json')
      // .then(response => {
      //   // console.log(response) // -> data.data.username
      //   this.captainName = response.data.data[aboutRoom.captainId]["userName"]
      // })
    })

    // axios.get('http://localhost:3000/feed.json')
    // .then(response => {
    //   // console.log(response) // -> data.data.studyImage
    //   this.feeds = response.data.data
    //   console.log(this.feeds)
    // })
  }
}
</script>

<style scoped>
.backbtn {
  z-index: 8;
  position: fixed;
  top: 65px
}
.card {
  padding: 0 0 0 0;
  text-align: left;
}
p {
  margin: 0 0 5px 0 
}
.feed-group {
  padding: 0 0 0 0
}
.feed-card {
  margin: 0 0 0 0
}
.notLogin {
  margin-top: 250px
}
</style>