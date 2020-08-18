<template>
  <div class="container mt-5">
    <!--뒤로가기-->
    <v-btn class="ml-3 fixed-top backbtn" fab dark small style="background-color:#fd462e" @click="goBack">
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>

    <!--뒤로가기 배너-->
    <v-snackbar v-model="snackbar">
      작성중인 글이 있습니다.
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">취소하기</v-btn>
        <v-btn color="blue" text v-bind="attrs" @click="realBack">뒤로가기</v-btn>
      </template>
    </v-snackbar>

    <div v-if="isLogin">
      <h2 class="text-center font_l_k">스터디 룸 만들기</h2>
      <form class="create-form">
        <div class="form-group">
          <label for="roomTitle" class="font_k">스터디 룸 이름</label>
          <input type="text" class="form-control roomTitle rounded-xl font_k" id="roomTitle" v-model="studyroom.roomTitle" required>
          <small class="form-text text-muted font_k">스터디 룸 이름을 정해주세요.</small>
        </div>
        <div class="form-group">
          <label for="licenseId" class="font_k">자격증 이름</label>
          <v-autocomplete v-model="selected2" :items="licenseitems" color="#fd462e" class="pt-0 font_k"></v-autocomplete>
          <!-- <select multiple class="form-control" v-model="selected2" :items="items" required>
            <option v-for="license in licenseArray" :key="license.id" class="font_k">{{ license.licenseName }}</option>
          </select> -->
          <small class="form-text text-muted font_k">공부할 자격증을 선택해주세요.</small>
          
          <p v-if="this.selected2 != ''"><span class="text-danger">{{ selected2 }}</span>이(가) 선택되었습니다.</p>
        </div>
        <div class="form-group">
          <label for="testDate" class="font_k">시험 날짜</label>
          <input type="date" class="form-control testDate rounded-xl font_k" id="testDate" v-model="studyroom.testDate" required>
          <small class="form-text text-muted">자격증 시험 날짜 YYYY-MM-DD 형식으로 적어주세요.<br> ex) 2020-07-12 </small>
        </div>
        <div class="custom-control custom-switch form-group">
          <input type="checkbox" class="custom-control-input rounded-xl" id="isPrivate" v-model="studyroom.isPrivate" @checked="changePrivate">
          <label class="custom-control-label isPrivate font_k" for="isPrivate">비밀방으로 설정하기</label>
        </div>
        <div class="form-group" v-show="this.studyroom.isPrivate">
          <label for="roomPassword" class="font_k">비밀 번호</label>
          <input type="password" class="form-control roomPassword rounded-xl font_k" id="roomPassword" v-model="studyroom.roomPassword">
          <small class="form-text text-muted font_k">비밀번호를 설정해주세요.</small>
        </div>
        <div>

          <!--일정 관리-->
          <label for="calendar" class="font_k">일정</label>
          <div style="width: 100%">
            <v-date-picker class="rounded-xl" color="#fd462e" v-model="dates" multiple :landscape="landscape" :reactive="reactive" :fullWidth="fullWidth" @click:date="clickdate" mode="multiple"></v-date-picker>
            <v-dialog v-model="dialog" persistent max-width="290">
              <v-card class="pa-3">
                <div class="headline mb-5 text-center">ADD Todo</div>
                <v-form>
                  <v-text-field class="font_k" v-model="todoDate" type="date" outlined :counter="10" label="날짜를 정해주세요." required></v-text-field>
                  <v-text-field class="font_k" v-model="todoContent" outlined :counter="30" label="할일을 적어주세요" required></v-text-field>
                </v-form>
                <v-spacer></v-spacer>
                <v-card-actions class="d-flex justify-content-between">
                  <v-btn color="#fd462e" fab outlined small dark @click="modalClose">닫기</v-btn>
                  <v-btn color="#fd462e" fab small dark @click="modalSave">저장</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>

          <div class="">
            <v-card v-scroll.self="onScroll" class="overflow-y-auto rounded-xl" max-height="170">
              <v-text v-model="this.todothings">
                  <v-chip v-for="todo in this.todothings" :key="todo" class="ma-2" color="#fd462e">
                    <span class="badge badge-light mr-2 font_k rounded-xl">{{ todo.todoDate }}</span>
                    <!-- <v-chip left class="blue darken-4">{{ todo.todoDate }}</v-chip> -->
                    <span class="text-white font_k">{{ todo.todoContent }}</span>
                    <v-avatar right @click="deltodo(todo)"><v-icon color="white">mdi-close-circle</v-icon></v-avatar>
                  </v-chip>
              </v-text>
            </v-card>
          </div>

        </div>
        <div class="form-group mt-3">
          <div class="custom-control custom-switch form-group">
            <input type="checkbox" class="custom-control-input" id="isAlone" v-model="isAlone">
            <label class="custom-control-label isAlone font_k" for="isAlone">개인방으로 설정하기</label>
          </div>
          <div v-if="isAlone == false">
            <label for="roomHashtag" class="font_k">참여인원</label>
            <input type="number" class="form-control maxMembers rounded-xl font_k" v-model="studyroom.maxMembers">
            <small class="form-text text-muted font_k">최대 참여인원을 정해주세요. 숫자로 적어주세요. ex) 20</small>
          </div>
        </div>        
        <div class="form-group">
          <label for="roomHashtag" class="font_k">목표 한마디</label>
          <input type="text" class="form-control roomGoal rounded-xl font_k" v-model="studyroom.roomGoal">
          <small class="form-text text-muted font_k">목표 한마디를 적어주세요.</small>      
        </div>
        <div class="form-group">
          <label for="roomInfo" class="font_k">스터디 룸 소개글</label>
          <textarea class="form-control rounded-xl font_k" id="roomInfo" 
          placeholder="자신의 스터디 룸에 대해 간단한 소개글이나 공부 계획을 적어주세요. ex) 정처기 2주완성" v-model="studyroom.roomInfo" required></textarea>
        </div>

        <!--해시태그 박스-->
        <div>
          <label for="hashtag" class="font_k">검색 키워드</label>
          <v-combobox v-model="model" :filter="filter" :hide-no-data="!search"
            :items="items" :search-input.sync="search" hide-selected label="Search for an option"
            multiple small-chips solo class="rounded-xl font_k">
            <template v-slot:no-data>
              <v-list-item>
                <span class="subheading mr-2">키워드</span>
                <v-chip color="#ffa89c" small class="font_k text-white">
                  {{ search }}
                </v-chip>
              </v-list-item>
            </template>
            <template v-slot:selection="{ attrs, item, parent, selected }">
              <v-chip v-if="item === Object(item)"  v-bind="attrs" color="#fd462e" class="text-white"
                :input-value="selected" small>
                <span class="pr-2 text-white font_k">
                  {{ item.text }}
                </span>
                <v-icon small @click="parent.selectItem(item)" white right>mdi-close-circle</v-icon>
              </v-chip>
            </template>
            <template v-slot:item="{ index, item }">
              <v-text-field
                v-if="editing === item"
                v-model="editing.text" autofocus flat
                background-color="transparent" hide-details solo @keyup.enter="edit(index, item)"></v-text-field>
              <v-chip v-else color="#ffa89c" small class="font_k text-white">
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
      <button class="btn submit-btn mt-10 mb-10 font_k rounded-xl text-white" style="background-color:#fd462e" @click="submit">스터디 룸 만들기</button>
    </div>
    <div v-if="!isLogin" class="notLogin text-center px-5 pt-10">
      <span style="color: #fd462e;">
        <i class="far fa-check-circle fa-3x"></i>
      </span>
      <h5 class="font_k mt-5 mb-10" style="font-weight:bold">로그인이 필요한 서비스입니다 !</h5>
      <v-btn @click="$router.push({name: 'Home'})" rounded outlined block color="#fd462e">메인화면</v-btn>
      <v-btn @click="$router.push({name: 'Login'})" rounded dark block color="#fd462e" class="mt-2">로그인</v-btn>
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
      fullWidth: true,
      isLogin: false,
      loginUID: null,
      studyroom: {
        captinId: null,
        roomTitle: '',
        testDate: '',
        licenseCode: '',
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
      selected2: [],
      content: '',
      todothings: [],
      dateall: [],
      isAlone: false,
      licenseitems: [],
      

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
  // computed: {
  //   isLogin() {
  //     return localStorage.getItem('isLogin')
	// 	}
  // },
  methods: {
    onScroll () {
      this.scrollInvoked++
    },
    goBack() {
      if(this.studyroom.roomTitle.length >= 1 ||  this.studyroom.dateForStudyroom.length >= 1 || this.studyroom.licenseCode >= 1
      || this.studyroom.roomGoal.length >= 1 || this.studyroom.roomInfo.length >= 1 || this.studyroom.maxMembers >= 1 ){
        this.snackbar = true
      }
      else {
        this.$router.go(-1)
      }
    },
    realBack() {
      this.$router.go(-1)
    },
    submit() {
      // 비밀번호 초기화
      if (this.studyroom.isPrivate == false) {
        this.studyroom.roomPassword = ''
      } 
      // 개인방 설정
      if (this.isAlone == true) {
        this.studyroom.maxMembers = 1
      }
      // 해시태그 처리
      for(var i=0; i<this.model.length; i++) {
        if(this.model[i])
        this.studyroom.roomHashtag.push({"hashtag" : this.model[i]["text"]})
      }
      // 일정 처리
      this.studyroom.dateForStudyroom = this.todothings
      console.log(this.studyroom)
      axios.post(`http://${this.$store.state.address}:8080/study/createStudyroom`, this.studyroom)
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
    if(localStorage.getItem('loginUID')){
      this.isLogin = true
      this.loginUID = localStorage.getItem('loginUID')
    } else if(sessionStorage.getItem('loginUID')) {
      this.isLogin = true
      this.loginUID = sessionStorage.getItem('loginUID')
    } else {
      this.isLogin = false
    }
    console.log(this.loginUID)
    this.studyroom.captinId = this.loginUID

    axios.get(`http://${this.$store.state.address}:8080/license/getAll`)
    .then(response => {
      this.licenseArray = response.data.object
      for(var i=0; i<response.data.object.length; i++){
        this.licenseitems.push(response.data.object[i].licenseName)
      }
    })
  },
  watch: {
    selected2() {
      for(var idx=0; idx<this.licenseArray.length; idx++) {
        if(this.licenseArray[idx].licenseName == this.selected2) {
          this.studyroom.licenseCode = this.licenseArray[idx].licenseCode
        }
      }
    },
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
h2 {
  color:#fd462e;
}
.backbtn {
  z-index: 8;
  position: fixed;
  top: 30px
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