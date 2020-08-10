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
          <a @click="goProfile"><p class="text-primary">{{ this.captainName }}</p></a>
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

    <!--일정관리-->
    <div class="d-flex justify-content-end mt-3" v-if="this.captainId == this.UID">
      <v-btn v-if="this.captainId == this.UID && this.calupdate==false" rounded color="primary" dark @click="calendarupdate"><v-icon left>mdi-calendar-plus</v-icon>수정하기</v-btn>
      <v-btn v-if="this.captainId == this.UID && this.calupdate==true" rounded color="red" dark @click="calendarremove" class="mr-2"><v-icon left>mdi-calendar-remove</v-icon>전체삭제</v-btn>
      <v-btn v-if="this.captainId == this.UID && this.calupdate==true" rounded color="primary" dark @click="calendarsave"><v-icon left>mdi-calendar-check</v-icon>수정완료</v-btn>
    </div>
    <v-date-picker v-model="dates" class="mt-3" multiple :landscape="landscape" :reactive="reactive" :fullWidth="fullWidth" @click:date="clickdate" mode="multiple"></v-date-picker>
    <v-dialog v-model="dialog" scrollable max-width="300px">
      <v-card>
        <v-chip class="ma-2 light-blue darken-2" label text-color="white" v-for="content in this.modalcontent" :key="content" >
          <v-icon left color="white" class="contentchip">mdi-label</v-icon>
          {{ content }}
        </v-chip>
        <v-card-actions class="d-flex justify-content-end pa-0">
          <v-btn icon color="red darken-3" @click="modalClose"><v-icon>mdi-close-circle</v-icon></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--일정 수정-->
    <v-dialog v-model="editdialog" persistent max-width="290">
      <v-card class="pa-3">
        <v-form>
          <v-text-field v-model="todoDate" :counter="10" label="날짜를 정해주세요." required></v-text-field>
          <v-text-field v-model="todoContent" :counter="30" label="할일을 적어주세요" required></v-text-field>
        </v-form>
        <v-spacer></v-spacer>
        <v-card-actions class="d-flex justify-content-between mt-2">
          <!-- <v-btn color="red darken-3" @click="modalClose"></v-btn> -->
          <v-btn color="red darken-3" fab small dark @click="editmodalClose"><v-icon>mdi-arrow-left-bold</v-icon></v-btn>
          <!-- <v-btn color="indigo darken-3" @click="modalSave">저장하기</v-btn> -->
          <v-btn color="primary" fab small dark @click="editmodalSave"><v-icon>mdi-pencil</v-icon></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <div v-if="this.calupdate == true">
      <v-card v-scroll.self="onScroll" class="overflow-y-auto" max-height="170">
        <v-text v-model="this.todothings">
            <v-chip v-for="todo in this.todothings" :key="todo" class="ma-2 indigo darken-1">
              <span class="badge badge-light mr-2">{{ todo.todoDate }}</span>
              <!-- <v-chip left class="blue darken-4">{{ todo.todoDate }}</v-chip> -->
              <span class="text-white">{{ todo.todoContent }}</span>
              <v-avatar right @click="deltodo(todo)"><v-icon color="white">mdi-close-circle</v-icon></v-avatar>
            </v-chip>
        </v-text>
      </v-card>
    </div>

    <!-- <RoomCalendar class="mt-2" :dateForStudyrooms="dateForStudyrooms" :captainId="captainId"/> -->

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
      <!--컴포넌트-->
      <TodoList v-if="isTodo" :todaythings="todaythings"/>
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
// import RoomCalendar from '../Rooms/RoomCalendar.vue'
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
    // RoomCalendar,
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
      dateForStudyrooms: [],
      calupdate: false,

      // 선택값
      dates: [],
      // 방장의 디폴트 값
      tododates: [],
      landscape: false,
      reactive: false,
      fullWidth: true,
      dialog: false,
      modalcontent: [],

      // 일정 관리
      todothings: [],
      todoDate:'',
      todoContent: '',
      editdialog: false,
      dateall: [],
      
      //오늘의 todo
      todaythings: [],

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
    goProfile() {
      this.$router.push({name: 'MyStudy', params: { UID:this.captainId }})
    },
    // 일정 관리
    clickdate(date) {
      console.log(date)
      this.modalcontent = []
      if(this.calupdate == false){
        for(var idx=0; idx < this.dateForStudyrooms.length; idx++) {
          if(this.dateForStudyrooms[idx].todoDate == date) {
            this.modalcontent.push(this.dateForStudyrooms[idx].todoContent)
            console.log(this.modalcontent)
          }
        }
        if (this.modalcontent.length > 0) {
          this.dialog = true
        }
        this.dates = this.tododates
      }
      else{
        this.todoDate = date
        this.editdialog = true
      }
    },
    modalClose() {
      this.dialog = false
      this.dates = this.tododates
      this.modalcontent = []
    },
    // 일정 수정
    calendarupdate() {
      this.calupdate = true
    },
    calendarremove() {
      this.todothings = []
      this.dates = []
      this.dateall = []
    },
    calendarsave() {
      this.calupdate = false
      this.editdialog = false
      var content = {
        id: this.roomId,
        dateForStudyrooms: this.todothings
      }
      console.log(content)
      axios.post('http://localhost:8080/study/updateDate', content)
      .then(response => {
        console.log(response)
        this.$router.go({name: 'RoomDetail', params: { roomId: this.roomId }})
      })
    },
    editmodalClose() {
      this.todoContent = ''
      this.editdialog = false
      this.dates = this.dateall
    },
    editmodalSave() {
      if (this.todoContent != '') {
        this.editdialog = false
        this.todothings.push({"todoDate" : this.todoDate, "todoContent" : this.todoContent})
        this.dateall.push(this.todoDate)
        this.dates = this.dateall
        this.todoContent = ''
        console.log(this.todothings)
      }
    },
    deltodo(todo) {
      // todothings 에서 삭제
      const idx = this.todothings.indexOf(todo)
      if (idx > -1) this.todothings.splice(idx, 1)
      const i = this.dateall.indexOf(todo.todoDate)
      this.dateall.splice(i, 1)
      console.log(this.dateall)
      this.dates = this.dateall
    },
    // 방 수정
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
    // 방 나가기
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
    // 같이 하기
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
    // 피드 작성
    feedcreate() {
      this.$router.push({name: 'FeedCreate', params: { roomId:this.roomId }})
    },
    // 방 폭파
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
    // 로그인 유무
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
    // 해시태그 기능 (수정)
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
      this.dateForStudyrooms = response.data.object.dateForStudyrooms
      for(var idx = 0; idx < this.dateForStudyrooms.length; idx++){
        this.tododates.push(this.dateForStudyrooms[idx].todoDate)
        this.dateall.push(this.dateForStudyrooms[idx].todoDate)
        this.todothings.push({"todoDate" : this.dateForStudyrooms[idx].todoDate, "todoContent" : this.dateForStudyrooms[idx].todoContent})
      }
      this.dates = this.tododates

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

          // 형식 바꾸는 거
      function leadingZeros(n, digits) {
        var zero = '';
        n = n.toString();

        if (n.length < digits) {
          for (var k = 0; k < digits - n.length; k++)
            zero += '0';
        }
        return zero + n;
      }

      // 형식 바꾸는거
      var nowtime = 
        leadingZeros(now.getFullYear(), 4) + '-' +
        leadingZeros(now.getMonth() + 1, 2) + '-' +
        leadingZeros(now.getDate(), 2);

      // console.log(nowtime)
      for(var p=0; p < this.dateForStudyrooms.length; p++) {
        if (this.dateForStudyrooms[p].todoDate == nowtime) {
          this.todaythings.push(this.dateForStudyrooms[p])
          // this.tasks.push({isChecked: this.dateForStudyrooms[i].isChecked, text: this.dateForStudyrooms[i].todoContent})
        }
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