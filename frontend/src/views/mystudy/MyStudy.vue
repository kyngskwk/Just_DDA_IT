<template>
  <div class="container">
    <UserProfile :host="host" :thumbnail="thumbnail"/>
    <!-- 컴퍼넌트 메뉴 -->
    <div v-if="!isMyLicense && !isFeed && !isPlanner">
        <v-row dense>
            <v-col cols="6">
                <v-card class="pa-1 rounded-xl" outlined tile rounded style="border-width: 0.1rem;">
                    <div class="d-flex flex-row justify-center align-center m-3">
                        <p class="font_e m-0" style="font-weight: bold; color:#fd462e;">D - <span>{{ dday }}</span></p>
                        <p class="font_k m-0 pl-3" style="font-weight: 900;"> {{ licenseName }}</p>
                    </div>
                </v-card>
                <v-card @click="myPlanner" class="pa-1 mt-2 rounded-xl d-flex justify-center" tile style="background-color:#fffbfb;">
                    <v-card-title>📆</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card class="pa-1 rounded-xl" outlined tile style="border-width: 0.1rem; ">
                    <p class="pa-1 font_k d-flex justify-center" style="font-weight: bold;">Todo</p>
                    <v-radio-group v-model="radios" :mandatory="false">
                        <v-radio label="Radio 1" value="radio-1"></v-radio>
                        <v-radio label="Radio 2" value="radio-2"></v-radio>
                    </v-radio-group>
                </v-card>
            </v-col>
        </v-row>
        <!-- 스터디방 -->
        <v-row dense>
            <v-col cols="12">
                <v-card color="#F5F5F5" class="pa-1 rounded-xl" outlined tile>
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
                            <h5 class="font_k" style="color:#fd462e; font-weight:bold;">{{ todoCnt }}</h5>
                        </div>
                        <div class="d-flex flex-row">
                            <p class="mr-3 font_e">doing</p>
                            <h5 class="font_k" style="color:#fd462e; font-weight:bold;">{{ doingCnt }}</h5>
                        </div>
                        <div class="d-flex flex-row">
                            <p class="mr-3 font_e">pass</p>
                            <h5 class="font_k" style="color:#fd462e; font-weight:bold;">{{ passCnt }}</h5>
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
    <MyLicense :hostID="this.hostID" v-show="isMyLicense" @cntTodo="cntTodo" @cntDoing="cntDoing" @cntPass="cntPass" @doingLicenses="calcDday"/>
    <MyFeed :hostID="this.hostID" v-if="isFeed"/>
    <MyPlanner :hostID="this.hostID" v-if="isPlanner"/>
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
            dday: null
            
        }
    },
    mounted() {
        // hostUID를 이용해 유저 정보 받아오기
        axios.post('http://localhost:8080/getUser', {
            id: this.hostID
        })
        .then(res => {
            // console.log("getUser Success.")
            // console.log(res.data)
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
    },
    components : {
        UserProfile,
        StudyList,
        MyLicense,
        MyFeed,
        MyPlanner
    },
    methods : {
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

<style>

</style>