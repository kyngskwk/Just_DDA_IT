<template>
<div>
  <div class="card">
    <div class="card-header">
      {{ licenseTitle }}
    </div>
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h4>{{ roomTitle }}</h4>
        <p class="text-danger" v-if="isPrivate">🔐비밀방</p>
        <p class="text-primary" v-else>🔓공개방</p>
      </div>
      <div class="d-flex justify-content-between">
        <button type="button" class="btn btn-success">
          시험일 : {{ testDate}} <span class="badge badge-light">{{ this.Dday }}</span>
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
  <div class="card text-center mt-5">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link" href="#" :class="{ active: isTodo }" @click="todoTab">오늘 할 일</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" :class="{ active: isFeed }" @click="feedTab">공부 인증</a>
        </li>
      </ul>
    </div>
    <div class="card-body" v-if="isTodo">
      <h5>TO DO</h5>
    </div>
    <div class="card-body feed-group" v-else>
      <RoomFeedList :feeds="feeds" :roomId="roomId"/>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import RoomFeedList from '../Rooms//RoomFeedList.vue'


export default {
  name: 'RoomdDetail',
  props: {
    roomId: {
        type: String,
    }
  },
  components: {
    RoomFeedList
  },
  data() {
    return {
      roomTitle: '',
      testDate: '',
      licenseTitle: '',
      captainName: '',
      isPrivate: '',
      maxMembers: '',
      roomGoal: '',
      roomInfo: '',
      Dday: '',
      isTodo: true,
      isFeed: false,
      feeds: []
    }
  },
  methods: {
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
    // room Id -> room 데이터
    // axios.get('http://localhost:3000/studyroom.json', {
    //   params :{
    //     roomId: roomId
    //   }
    // }).then(response => {
    //   console.log(response)
    // })
    axios.get('http://localhost:3000/studyroom.json')
    .then(response => {
      // console.log(response) // data.data[roomId]
      var aboutRoom = response.data.data[this.roomId]
      this.roomTitle = aboutRoom.roomTitle
      this.testDate = aboutRoom.testDate
      this.isPrivate = aboutRoom.isPrivate
      this.maxMembers = aboutRoom.maxMembers
      this.roomGoal = aboutRoom.roomGoal
      this.roomInfo = aboutRoom.roomInfo
      var when = new Date(aboutRoom.testDate);
      var now = new Date();

      var gap = now.getTime() - when.getTime();
      this.Dday ='D -' + Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;

      axios.get('http://localhost:3000/license.json')
      .then(response => {
        // console.log(response)
        this.licenseTitle = response.data.data[this.roomId]["licenseTitle"]
      })

      axios.get('http://localhost:3000/member.json')
      .then(response => {
        // console.log(response) // -> data.data.username
        this.captainName = response.data.data[aboutRoom.captainId]["userName"]
      })
    })

    axios.get('http://localhost:3000/feed.json')
    .then(response => {
      // console.log(response) // -> data.data.studyImage
      this.feeds = response.data.data
      console.log(this.feeds)
    })
  }
}
</script>

<style scoped>
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

</style>