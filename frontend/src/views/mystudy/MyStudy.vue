<template>
  <div class="container">
    <UserProfile :host="host" :thumbnail="thumbnail"/>
    <!-- 컴퍼넌트 메뉴 -->
    <div v-if="!isMyLicense && !isFeed && !isPlanner">
        <v-row dense>
            <v-col cols="6">
                <v-card class="pa-1 rounded-xl" outlined tile rounded style="border-width: 0.1rem;">
                    <div class="d-flex flex-row justify-center align-center m-3">
                        <p class="font_e m-0" style="font-weight: bold; color:#fd462e;">D - <span v-if="dday">{{ dday }}</span><span v-if="!dday">day</span></p>
                        <p class="font_k m-0 pl-3" style="font-weight: 900;"> {{ licenseName }}</p>
                    </div>
                </v-card>
                <v-card @click="myPlanner" class="pa-1 mt-2 rounded-xl d-flex justify-center" tile style="background-color:#fffbfb;">
                    <v-card-title>📆</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="6">
                <!-- Todolist -->
                <v-card class="p-1 rounded-xl" outlined tile style="border-width: 0.1rem; height:150px">
                    <p class="pt-1 mb-2 font_k d-flex justify-center" style="font-weight: bold;">Todo</p>
                    <!-- <v-checkbox class="font_k m-0" v-for="todo in todaythings" :key="todo.id" v-model="todo.checked"
                     value :label="todo.dateForStudyroom.todoContent" color="#fd462e" @click="checkedtodo(todo)"></v-checkbox> -->
                    <div v-for="todo in todaythings" :key="todo.id" class="ml-2">
                        <input type="checkbox" class="font_k" id="exampleCheck1" v-model="todo.checked" @click="checkedtodo(todo)">
                        <label class="font_k ml-2" :class="{'text-decoration-line-through': todo.checked, 'text--secondary':  todo.checked}" for="exampleCheck1">{{todo.dateForStudyroom.todoContent}}</label>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <!-- 스터디방 -->
        <v-row dense>
            <v-col cols="12">
                <v-card color="#F5F5F5" class="pa-1" outlined tile>
                    <StudyList :hostID="this.hostID"/>    
                </v-card>
            </v-col>
        </v-row>
        <!-- 피드 -->
        <v-row dense>
            <v-col cols="6">
                <v-card @click="myFeed" class="pa-1 rounded-xl d-flex justify-center" tile style="background-color:#fffbfb;">
                    <v-card-title class="font_k">📷</v-card-title>
                </v-card>
            </v-col>
            <!-- 나의 자격증 -->
            <v-col cols="6">
                <v-card @click="myLicense" class="pa-1 rounded-xl" tile style="background-color:#E0F2F1">
                    <v-card-title class="font_l_k d-flex justify-center">📚</v-card-title>
                    <div class="d-flex flex-column justify-center align-center">
                        <div class="d-flex flex-row">
                            <p class="mr-3 font_e">todo</p>
                            <h5 class="font_k" style="color:black; font-weight:bold;">{{ todoCnt }}</h5>
                        </div>
                        <div class="d-flex flex-row">
                            <p class="mr-3 font_e">doing</p>
                            <h5 class="font_k" style="color:black; font-weight:bold;">{{ doingCnt }}</h5>
                        </div>
                        <div class="d-flex flex-row">
                            <p class="mr-3 font_e">pass</p>
                            <h5 class="font_k" style="color:black; font-weight:bold;">{{ passCnt }}</h5>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <!-- <div class="d-flex flex-column align-content-space-around">
            <v-card outlined width="48%" height="10%">
                <v-card-title>D-day</v-card-title>
            </v-card>
            <v-card outlined width="48%">
                <v-card-title>플래너</v-card-title>
            </v-card>
        </div> -->
    </div>
    <MyLicense :hostID="this.hostID" v-show="isMyLicense" @cntTodo="cntTodo" @cntDoing="cntDoing" @cntPass="cntPass" @doingLicenses="calcDday" @goBack="goBack"/>
    <MyFeed :hostID="this.hostID" v-if="isFeed" @goBack="goBack"/>
    <MyPlanner :hostID="this.hostID" v-if="isPlanner" @goBack="goBack"/>
  </div>

</template>

<script>
import axios from 'axios'
import { mapActions } from "vuex"
// 컴포넌트
import UserProfile from '@/components/MyStudy/UserProfile.vue'
import StudyList from '@/components/MyStudy/StudyList.vue'
import MyLicense from '@/components/MyStudy/MyLicense.vue'
import MyFeed from '@/components/MyStudy/MyFeed.vue'
import MyPlanner from '@/components/MyStudy/MyPlanner.vue'

export default {
    name : "MyStudy",
    data() {
        return {
            nowUID: null,
            hostID: this.$route.params.UID, 
            // 호스트 유저 정보 
            host: {},
            isMyStudy: true,
            isFeed: false,
            isMyLicense: false,
            isPlanner: false,

            // 썸네일
            thumbnail: null,
            
            todoCnt: 0,
            doingCnt: 0,
            passCnt: 0,

            // 디데이
            licenseName: null,
            dday: null,
            
            //todolist
            checklist: [],
            todaythings: []
        }
    },
    mounted() {
        // hostUID를 이용해 유저 정보 받아오기
        axios.post(`http://${this.$store.state.address}:8080/getUser`, {
            id: this.hostID
        })
        .then(res => {
            // console.log("getUser Success.")
            console.log(res.data)
            this.host = res.data.object
            // 썸네일
            this.thumbnail = "data:"+this.host.imageType+";base64," + this.host.userThumbnail
        })
        .catch( function(error) {
            // console.log(this.hostUID)
            console.log(error)
        })
        .finally(function(){
            // console.log("getUser")
        })
        axios.get(`http://${this.$store.state.address}:8080/study/getAllMyTodo`, {
            params: {
                UID: this.hostID
            }
        })
        .then(response => {
        console.log('찐')
        console.log(response)
        this.checklist = response.data.object
        
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

        var now = new Date();

        var nowtime = 
        leadingZeros(now.getFullYear(), 4) + '-' +
        leadingZeros(now.getMonth() + 1, 2) + '-' +
        leadingZeros(now.getDate(), 2);

        // console.log(nowtime)
        for(var p=0; p < this.checklist.length; p++) {
          if (this.checklist[p].dateForStudyroom.todoDate == nowtime) {
            this.todaythings.push(this.checklist[p])
            // this.tasks.push({isChecked: this.dateForStudyrooms[i].isChecked, text: this.dateForStudyrooms[i].todoContent})
          }
        }
        console.log(this.todaythings)
      })
      .catch(res=>{
        console.log(res.response)
      }) 

    },
    components : {
        UserProfile,
        StudyList,
        MyLicense,
        MyFeed,
        MyPlanner
    },
    created() {
        if(localStorage.getItem('loginUID')){
        this.nowUID = localStorage.getItem('loginUID')
        } else if(sessionStorage.getItem('loginUID')) {
        this.nowUID = sessionStorage.getItem('loginUID')
        } 
    },
    methods : {
        checkedtodo(todo) {
            if (this.nowUID == this.hostID) {
            // console.log(todo)
                var content = {
                    id: todo.id
                }
                axios.post(`http://${this.$store.state.address}:8080/study/checkTodo`, content)
                .then(res => {
                    console.log(res)
                    axios.get(`http://${this.$store.state.address}:8080/study/getAllMyTodo`, {
                        params: {
                            UID: this.nowUID
                        }
                    })
                    .then(response => {
                        // console.log('찐')
                        console.log(response)
                        this.checklist = response.data.object
                        // console.log(this.checklist)
                        
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

                        var now = new Date();

                        var nowtime = 
                        leadingZeros(now.getFullYear(), 4) + '-' +
                        leadingZeros(now.getMonth() + 1, 2) + '-' +
                        leadingZeros(now.getDate(), 2);
                        
                        this.todaythings = []
                        // console.log(nowtime)
                        for(var p=0; p < this.checklist.length; p++) {
                            if (this.checklist[p].dateForStudyroom.todoDate == nowtime) {
                                this.todaythings.push(this.checklist[p])
                                // this.tasks.push({isChecked: this.dateForStudyrooms[i].isChecked, text: this.dateForStudyrooms[i].todoContent})
                            }
                        }
                        console.log(this.todaythings)
                    })
                    .catch(res=>{
                        console.log(res.response)
                    }) 
                })
            }

        },
        goBack() {
            this.isMyLicense = false
            this.isFeed = false
            this.isPlanner = false
        },
        calcDday(doingLicenses){
            var now = new Date()
            // console.log('정렬전')
            // console.log(doingLicenses)

            // 정렬
            var sorted = {}
            var a = []
            for(key in doingLicenses){
                // 지난 날짜 제외
                var date = new Date(key)
                if(now < date) {
                    a.push(key)
                }
            } 
            a.sort()
            for(var key=0;key<a.length;key++){
                sorted[a[key]] = doingLicenses[a[key]]
            }
            // console.log('정렬후')
            // console.log(a)
            // console.log(sorted)

            var date1 = new Date(a[0])
            var gap1 = now.getTime() - date1.getTime();
            gap1 = Math.floor(gap1 / (1000*60*60*24)) * -1;
            
            this.licenseName = sorted[a[0]]
            this.dday = gap1 
            // console.log(sorted[a[0]])
            // console.log(gap1)

        },
        cntTodo(n){
            this.todoCnt = n
        },
        cntDoing(n){
            this.doingCnt = n
        },
        cntPass(n){
            this.passCnt = n
        },
        
        myFeed(){
            this.isFeed = true
        },
        myPlanner(){
            this.isPlanner = true
        },
        myLicense(){
            this.isMyLicense = true
        },
        ...mapActions(["logout"]),
    }
}
</script>

<style scoped>
[type=checkbox]:checked+label:before {
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
}

</style>