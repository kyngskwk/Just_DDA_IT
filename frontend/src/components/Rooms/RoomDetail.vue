<template>
<div class="container">
  <div v-if="isLogin">
    <!--뒤로가기-->
    <v-btn class="mx-2 fixed-top backbtn" fab dark small color="primary" @click="goBack">
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>

    <!--참여하기, 나가기, 인증하기-->
    <v-btn class="text-center join" v-if="this.captainId != this.UID && this.in == false && this.curMembers != this.maxMembers" rounded color="pink" dark @click="studywith">같이하기</v-btn>
    <v-btn v-if="this.captainId == this.UID && this.in == true" class="text-center photo2" rounded color="primary" @click="feedcreate"><v-icon small color="white" class="mr-2">mdi-camera</v-icon>인증하기</v-btn>
    <div v-if="this.captainId != this.UID && this.in == true" class="exit d-flex justify-content-between">
      <v-btn class="text-center photo" rounded color="primary" @click="feedcreate"><v-icon small color="white" class="mr-2">mdi-camera</v-icon>인증하기</v-btn>
      <v-btn rounded color="pink goout" class="ml-2" @click="snackbar2 = true">
        <v-icon color="white">mdi-exit-to-app</v-icon>
      </v-btn>
    </div>
    <v-btn rounded v-if="this.captainId != this.UID && this.in == false && this.curMembers == this.maxMembers" class="text-center join blue-grey darken-1"  rounde dark>방이 다 찼어요 ㅠㅠ</v-btn>


    <!--수정하기-->
    <v-btn class="text-center join" v-if="this.captainId == this.UID && isupdate == true" rounded color="pink" dark @click="editroom">수정하기</v-btn>

    <!--나가기 모달-->
    <v-snackbar v-model="snackbar2">
      스터디방을 정말로 <br> 나가실꺼에요?
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar2 = false">취소하기</v-btn>
        <v-btn color="blue" text v-bind="attrs" @click="exitroom">나가기</v-btn>
      </template>
    </v-snackbar>

    <div class="card mt-5">
      <div class="card-header d-flex justify-content-between">
        <h5 class="mt-1">{{ licenseTitle }}</h5>

        <!--방장 삭제 수정 버튼-->
        <div v-if="this.captainId == this.UID">
          <v-btn v-if="isupdate == false" text icon color="blue" @click="isupdate = true">
            <v-icon>mdi-wrench</v-icon>
          </v-btn>
          <v-btn v-if="isupdate == false" text icon color="red" @click="snackbar=true">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <!-- <v-btn v-if="isupdate == true" text icon color="green" @click="editroom">
            <v-icon>mdi-checkbox-marked-circle</v-icon>
          </v-btn> -->
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

        <!--비밀방 수정-->
        <div v-if="isupdate == true">
          <div class="d-flex justify-content-between">
            <p class="pt-5">비밀방 설정</p>
            <v-switch v-model="isPrivate"></v-switch>
            <div style="width:60%" class="pt-3" v-if="isPrivate">
              <input v-if="isPrivate" v-model="roomPassword" type="text" class="form-control" style="width:100%">
              <small v-if="isPrivate" class="form-text text-muted" style="width:100%">비밀번호를 정해주세요.</small>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-between">
          <!--제목-->
          <h4 v-if="isupdate == false">{{ roomTitle }}</h4>
          <p class="text-danger" v-if="isPrivate && isupdate == false">🔐비밀방</p>
          <p class="text-primary" v-if="!isPrivate && isupdate == false">🔓공개방</p>
        </div>
        <div class="d-flex justify-content-between mt-3" v-if="isupdate == true">
          <p style="width:30%" class="pt-2 mr-2">방제목</p>
          <input v-model="roomTitle" type="text" class="form-control" >
        </div>

        

        <!--시험일 수정-->
        <div class="d-flex justify-content-end" v-if="isupdate == false">
          <button type="button" class="btn btn-success">
            시험일 : {{ testDate }} <span class="badge badge-light">{{ this.Dday }}</span>
          </button>
        </div>
        <div class="d-flex justify-content-between mt-3" v-if="isupdate == true">
          <p style="width:30%" class="pt-2 mr-2">시험일</p>
          <input v-model="testDate" type="text" class="form-control" >
        </div>

        <div class="d-flex justify-content-between mt-3"  v-if="isupdate == false">
          <p>방장</p>
          <p class="text-primary">{{ this.captainName }}</p>
        </div>

        <!--참여인원 수정-->
        <div class="d-flex justify-content-between"  v-if="isupdate == false">
          <p>참여인원</p>
          <p><span class="text-primary">{{ curMembers }}</span> / {{ maxMembers }}</p>
        </div>
        <div class="d-flex justify-content-between mt-3"  v-if="isupdate == true">
          <p style="width:30%" class="pt-2 mr-2">최대인원</p>
          <input v-model="maxMembers" type="text" class="form-control" >
        </div>

        <!--목표 수정-->
        <div class="d-flex justify-content-between" v-if="isupdate == false">
          <p>목표</p>
          <p class="roomGoal text-right">{{ this.roomGoal }}</p>
        </div>
        <div class="d-flex justify-content-between mt-3" v-if="isupdate == true">
          <p style="width:30%" class="pt-2 mr-2">목표</p>
          <input v-model="roomGoal" type="text" class="form-control">
        </div>

        <!--소개 수정-->
        <div class="d-flex justify-content-between" v-if="isupdate == false">
          <p>소개</p>
          <p class="roomInfo text-right">{{ this.roomInfo}}</p>
        </div>
        <div class="d-flex justify-content-between mt-3" v-if="isupdate == true">
          <p style="width:30%" class="pt-2 mr-2">소개</p>
          <input v-model="roomInfo" type="text" class="form-control" >
        </div>

        <div v-if="isupdate == false">
          <v-chip class="mt-2 mr-1 text-white" color="blue" v-for="tag in hashtags" :key="tag">
            {{ tag }}
          </v-chip>
        </div>

        <!--키워드 수정-->
        <div v-if="isupdate == true">
          <label for="hashtag" class="mt-5">검색 키워드</label>
          <v-combobox v-model="model" :filter="filter" :hide-no-data="!search"
            :items="items" :search-input.sync="search" hide-selected label="Search for an option"
            multiple small-chips solo>
            <template v-slot:no-data>
              <v-list-item>
                <span class="subheading">Create</span>
                <v-chip :color="`${colors[nonce - 1]} lighten-3`" label small >
                  {{ search }}
                </v-chip>
              </v-list-item>
            </template>
            <template v-slot:selection="{ attrs, item, parent, selected }">
              <v-chip v-if="item === Object(item)"  v-bind="attrs" :color="`${item.color} lighten-3`"
                :input-value="selected" label small>
                <span class="pr-2">
                  {{ item.text }}
                </span>
                <v-icon small @click="parent.selectItem(item)">X</v-icon>
              </v-chip>
            </template>
            <template v-slot:item="{ index, item }">
              <v-text-field
                v-if="editing === item"
                v-model="editing.text" autofocus flat
                background-color="transparent" hide-details solo @keyup.enter="edit(index, item)"></v-text-field>
              <v-chip v-else :color="`${item.color} lighten-3`" dark label small>
                {{ item.text }}
              </v-chip>
              <v-spacer></v-spacer>
              <v-list-item-action @click.stop>
                <v-btn icon @click.stop.prevent="edit(index, item)">
                  <v-icon>{{ editing !== item ? 'mdi-pencil' : 'mdi-check' }}</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
          </v-combobox>
        </div>

      </div>
    </div>
    <RoomCalendar class="mt-2"/>

    <!--오늘 할일, 공부 인증-->
    <div div v-if="isupdate == false" class="card text-center mt-5 mb-10">
      <div class="card-header d-flex justify-content-between pb-1 pt-2 px-0">
        <ul class="nav nav-tabs card-header-tabs pb-2">
          <li class="nav-item">
            <a class="nav-link" :class="{ active: isTodo }" @click="todoTab">오늘 할 일</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: isFeed }" @click="feedTab">공부 인증</a>
          </li>
        </ul>
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
      roomPassword: '',
      maxMembers: '',
      roomGoal: '',
      roomInfo: '',
      Dday: '',
      isTodo: true,
      isFeed: false,
      feeds: [],
      tab: null,
      snackbar: false,
      curMembers: '',
      in: false,
      snackbar2: false,
      isupdate: false,
      hashtags: [],

      activator: null,
      attah: null,
      colors: ['blue'],
      editing: null,
      index: -1,
      items: [
        { header: '키워드를 넣어주세요' },
        {
          text: '키워드',
          color: 'blue',
        },
      ],
      nonce: 1,
      menu: false,
      model: [],
      x: 0,
      search: null,
      y: 0,
    }
  },
  methods: {
    editroom() {
      this.hashtags = []

      if (this.isPrivate == false) {
        this.roomPassword = ''
      }

      for(var i=0; i<this.model.length; i++) {
        if(this.model[i])
        this.hashtags.push({"hashtag" : this.model[i]["text"]})
      }

      var content = {
        id: this.roomId,
        roomTitle: this.roomTitle,
        private: this.isPrivate,
        roomPassword: this.roomPassword,
        testDate: this.testDate,
        maxMembers: this.maxMembers,
        roomGoal: this.roomGoal,
        roomInfo: this.roomInfo,
        roomHashtag: this.hashtags
      }
      axios.post('http://localhost:8080/study/updateStudyroom', content)
      .then(response => {
        console.log(content)
        console.log(response)
        this.$router.go({name: 'RoomDetail', params: { roomId:content.id }})
      })
    },
    exitroom() {
      var member = {
        roomId: this.roomId,
        UID: this.UID
      }
      axios.post('http://localhost:8080/study/removeMember', member)
      .then(response => {
        console.log(response)
        axios.get('http://localhost:8080/study/getStudyroomDetail', {
          params: {
            roomId: this.roomId,
            UID: this.UID
          }
        }).then(response => {
          this.in = response.data.object.in
          this.curMembers = response.data.object.curMembers
        })
        this.snackbar2 = false
      })
    },
    studywith() {
      var member = {
        roomId: this.roomId,
        UID: this.UID
      }
      axios.post('http://localhost:8080/study/addMember', member)
      .then(response => {
        console.log(response)
        axios.get('http://localhost:8080/study/getStudyroomDetail', {
          params: {
            roomId: this.roomId,
            UID: this.UID
          }
        }).then(response => {
          this.in = response.data.object.in
          this.curMembers = response.data.object.curMembers
        })
      })
    },
    feedcreate() {
      this.$router.push({name: 'FeedCreate', params: { roomId:this.roomId }})
    },
    delRoom() {
      var member = {
        roomId: this.roomId,
        UID: this.UID
      }
      axios.post('http://localhost:8080/study/deleteStudyroom', member)
      .then(response => {
        console.log(response)
        this.$router.push('/rooms')
      })
    },
    goLogin(){
      this.$router.push('/accounts/login')
    },
    goBack() {
      this.$router.push('/rooms')
    },
    todoTab() {
      this.isTodo = true
      this.isFeed = false
    },
    feedTab() {
      this.isFeed = true
      this.isTodo = false
    },
    edit (index, item) {
      if (!this.editng) {
        this.editing = item
        this.index = index
      } else {
        this.editing = null
        this.index = -1
      }
    },
    filter (item, queryText, itemText) {
      if (item.header) return false

      const hasValue = val => val != null ? val : ''

      const text = hasValue(itemText)
      const query = hasValue(queryText)

      return text.toString()
        .toLowerCase()
        .indexOf(query.toString().toLowerCase()) > -1
    }
  },
  created() {
    console.log(this.roomId)
    axios.get('http://localhost:8080/study/getStudyroomDetail', {
      params: {
        roomId: this.roomId,
        UID: this.UID
      }
    })
    .then(response => {
      console.log(response) // data.data[roomId]
      // var aboutRoom = response.data.data[this.roomId]
      this.licenseTitle = response.data.object.licenseName
      this.roomTitle = response.data.object.roomTitle
      this.testDate = response.data.object.testDate
      this.captainId = response.data.object.captain.id
      this.captainName = response.data.object.captain.userName
      this.isPrivate = response.data.object.private
      this.roomPassword = response.data.object.roomPassword
      this.captainId = response.data.object.captain.id
      this.curMembers = response.data.object.curMembers
      this.maxMembers = response.data.object.maxMembers
      this.roomGoal = response.data.object.roomGoal
      this.roomInfo = response.data.object.roomInfo
      this.hashtags = response.data.object.hashtags
      this.in = response.data.object.in
      this.feeds = response.data.object.feeds

      var when = new Date(response.data.object.testDate);
      var now = new Date();

      var gap = now.getTime() - when.getTime();
      this.Dday ='D -' + Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;

      for(var i=0; i<this.hashtags.length; i++){
        this.model.push({
          text: this.hashtags[i],
          color: 'blue',
        })
      }
    })
  },
  watch: {
    model (val, prev) {
      if (val.length === prev.length) return

      this.model = val.map(v => {
        if (typeof v === 'string') {
          v = {
            text: v,
            color: this.colors[this.nonce - 1],
          }
          this.items.push(v)
          this.nonce++
        }
        return v
      })
    },
  }
}
</script>

<style scoped>
.backbtn {
  z-index: 8;
  position: fixed;
  top: 65px
}
.join {
  z-index: 8;
  position: fixed;
  bottom: 70px;
  width:94%;
}
.exit {
  z-index: 8;
  position: fixed;
  bottom: 70px;
  width:94%;
}
.photo2 {
  z-index: 8;
  position: fixed;
  bottom: 70px;
  width: 94%;
}
.photo {
  width: 79%;
}
.goout {
  width: 20%
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
.roomInfo {
  width: 80%;
}
.roomGoal {
  width: 80%;
}
</style>