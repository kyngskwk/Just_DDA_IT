<template>
  <div class="container mt-10">
    <!--뒤로가기-->
    <v-btn class="mx-2 fixed-top backbtn" fab dark small color="primary" @click="goBack">
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>

    <!--뒤로가기 배너-->
    <v-snackbar v-model="snackbar">
      작성중인 댓글이 있습니다.
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">취소하기</v-btn>
        <v-btn color="blue" text v-bind="attrs" @click="realBack">뒤로가기</v-btn>
      </template>
    </v-snackbar>

    <div v-if="isLogin">
      <h2>스터디 룸 만들기</h2>
      <form class="create-form">
        <div class="form-group">
          <label for="roomTitle">스터디 룸 이름</label>
          <input type="text" class="form-control roomTitle" id="roomTitle" v-model="studyroom.roomTitle" required>
          <small class="form-text text-muted">스터디 룸 이름을 정해주세요.</small>
        </div>
        <div class="form-group">
          <label for="licenseId">자격증 이름</label>
          <!-- <select multiple class="form-control" v-model="selected2" required>
            <option v-for="license in licenseArray" :key="license.id">{{ license.licenseName }}</option>
          </select> -->
          <small class="form-text text-muted">공부할 자격증을 선택해주세요.</small>
          <p v-if="this.selected2 != ''"><span class="text-primary">{{ selected2[0] }}</span>이(가) 선택되었습니다.</p>
        </div>
        <div class="form-group">
          <label for="testDate">시험 날짜</label>
          <input type="text" class="form-control testDate" id="testDate" v-model="studyroom.testDate" required>
          <small class="form-text text-muted">자격증 시험 날짜 YYYY-MM-DD 형식으로 적어주세요. ex) 2020-07-12 </small>
        </div>
        <div class="custom-control custom-switch form-group">
          <input type="checkbox" class="custom-control-input" id="isPrivate" v-model="studyroom.isPrivate" @checked="changePrivate">
          <label class="custom-control-label isPrivate" for="isPrivate">비밀방으로 설정하기</label>
        </div>
        <div class="form-group" v-show="this.studyroom.isPrivate">
          <label for="roomPassword">비밀 번호</label>
          <input type="password" class="form-control roomPassword" id="roomPassword" v-model="studyroom.roomPassword">
          <small class="form-text text-muted">비밀번호를 설정해주세요.</small>
        </div>
        <div>
          <!--일정 관리-->

          <label for="calendar">일정</label>
          <div>
            <v-date-picker v-model="dates" multiple :landscape="landscape" :reactive="reactive" @click:date="clickdate" mode="multiple"></v-date-picker>
            <v-dialog v-model="dialog" persistent max-width="290">
              <v-card class="pa-3">
                <v-form>
                  <v-text-field v-model="todoDate" :counter="10" label="날짜를 정해주세요." required></v-text-field>
                  <v-text-field v-model="todoContent" :counter="30" label="할일을 적어주세요" required></v-text-field>
                </v-form>
                <v-spacer></v-spacer>
                <v-card-actions class="d-flex justify-content-between mt-2">
                  <!-- <v-btn color="red darken-3" @click="modalClose"></v-btn> -->
                  <v-btn color="red darken-3" fab small dark @click="modalClose"><v-icon>mdi-arrow-left-bold</v-icon></v-btn>
                  <!-- <v-btn color="indigo darken-3" @click="modalSave">저장하기</v-btn> -->
                  <v-btn color="primary" fab small dark @click="modalSave"><v-icon>mdi-pencil</v-icon></v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>

          <div class="">
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

        </div>
        <div class="form-group mt-3">
          <label for="roomHashtag">참여인원</label>
          <input type="text" class="form-control maxMembers" v-model="studyroom.maxMembers">
          <small class="form-text text-muted">최대 참여인원을 정해주세요. 숫자로 적어주세요. ex) 20</small>
        </div>
        <div class="form-group">
          <label for="roomHashtag">목표 한마디</label>
          <input type="text" class="form-control roomGoal" v-model="studyroom.roomGoal">
          <small class="form-text text-muted">목표 한마디를 적어주세요.</small>      
        </div>
        <div class="form-group">
          <label for="roomInfo">스터디 룸 소개글</label>
          <textarea class="form-control" id="roomInfo" 
          placeholder="자신의 스터디 룸에 대해 간단한 소개글이나 공부 계획을 적어주세요. ex) 정처기 2주완성" v-model="studyroom.roomInfo" required></textarea>
        </div>

        <!--해시태그 박스-->
        <div>
          <label for="hashtag">검색 키워드</label>
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
      </form>
      <button class="btn btn-success submit-btn" @click="submit">스터디 룸 만들기</button>
    </div>
    <div v-if="!isLogin" class="notLogin text-center">
      <h5>로그인하러 바로가기</h5>
      <v-btn @click="goLogin" class="mt-5">로그인</v-btn>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RoomCreate',
  data() {
    return {
      snackbar: false,
      dates: new Date().toISOString().substr(0, 10),
      landscape: false,
      reactive: false,
      UID: this.$store.state.member.loginUID,
      studyroom: {
        captinId: this.$store.state.member.loginUID,
        roomTitle: '',
        testDate: '',
        licenseId: 2,
        isPrivate: false,
        roomPassword: '',
        dateForStudyroom: [],
        maxMembers: '',
        roomGoal: '',
        roomInfo: '',
        roomHashtag: [],
      },
      // inputHash: '',
      dialog: false,
      todoDate: '',
      todoContent: '',  
      licenseArray: '',
      selected2: '아무거나',
      content: '',
      todothings: [],
      dateall: [],

      // 해시태그
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
      model: [
        {
          text: '키워드',
          color: 'blue',
        },
      ],
      x: 0,
      search: null,
      y: 0,
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.member.isLogin
		}
  },
  methods: {
    onScroll () {
      this.scrollInvoked++
    },
    goBack() {
      if(this.studyroom.roomTitle.length >= 1 ||  this.studyroom.dateForStudyroom.length >= 1
      || this.studyroom.roomGoal.length >= 1 || this.studyroom.roomInfo.length >= 1){
        this.snackbar = true
      }
      else {
        this.$router.push('/rooms')
      }
    },
    realBack() {
      this.$router.push('/rooms')
    },
    submit() {
      // 비밀번호 초기화
      if (this.studyroom.isPrivate == false) {
        this.studyroom.roomPassword = ''
      }
      // 해시태그 처리
      for(var i=0; i<this.model.length; i++) {
        if(this.model[i])
        this.studyroom.roomHashtag.push({"hashtag" : this.model[i]["text"]})
      }
      // 일정 처리
      this.studyroom.dateForStudyroom = this.todothings
      axios.post('http://localhost:8080/study/createStudyroom', this.studyroom)
      .then(response => {
        console.log(response)
        console.log(this.studyroom)
        this.$router.push({name: 'Rooms'})
      }).catch(error => {
        console.log(error)
        this.model = []
        this.studyroom.roomHashtag = []
      })
      // console.log(this.studyroom)
      // this.model = []
      // this.studyroom.roomHashtag = []
    },
    // 일정 관련
    clickdate(event) {
      this.todoDate = event
      this.dialog = true
    },
    modalClose() {
      this.todoContent = ''
      this.dialog = false
      console.log(this.todothings.todoDate)
      this.dates = this.dateall
    },
    modalSave() {
      if (this.todoContent != '') {
        this.dialog = false
        this.todothings.push({"todoDate" : this.todoDate, "todoContent" : this.todoContent})
        console.log(this.todothings)
        this.dateall.push(this.todoDate)
        this.dates = this.dateall
        this.todoContent = ''
      }
    },
    // 일정 삭제하기
    deltodo(todo) {
      // todothings 에서 삭제
      const idx = this.todothings.indexOf(todo)
      if (idx > -1) this.todothings.splice(idx, 1)
      const i = this.dateall.indexOf(todo.todoDate)
      this.dateall.splice(i, 1)
      this.dates = this.dateall
    },
    changePrivate() {
      this.studyroom.isPrivate != this.studyroom.isPrivate
    },

    edit (index, item) {
      if (!this.editing) {
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
    },
  },
  created() {
    axios.get('http://localhost:8080/license/getAll')
    .then(response => {
      console.log(response.data.object)
      this.licenseArray = response.data.object
    })
  },
  watch: {
    // selected2() {
    //   for(var idx=0; idx<this.licenseArray.length; idx++) {
    //     if(this.licenseArray[idx].licenseName == this.selected2) {
    //       this.studyroom.licenseId = this.licenseArray[idx].id
    //     }
    //   }
    // },
    model (val, prev) {
      if (val.length === prev.length) return

      this.model = val.map(v => {
        if (typeof v === 'string') {
          v = { text: v, color: this.colors[0],}
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
.create-form {
  margin-top: 30px;
}
.form-group {
  text-align: left;
}
.submit-btn {
  width: 100%;
}
</style>