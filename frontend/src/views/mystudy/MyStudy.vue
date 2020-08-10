<template>
  <div class="container">
    <UserProfile :host="host"/>
    <!-- 컴퍼넌트 메뉴 -->
    <div v-if="!isMyLicense && !isFeed && !isPlanner">
        <v-row dense>
            <v-col cols="6">
                <v-card class="pa-1" outlined tile>
                    <v-card-title>D-DAY</v-card-title>
                </v-card>
                <v-card @click="myPlanner" class="pa-1 mt-2" tile>
                    <v-card-title>플래너</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card class="pa-1" outlined tile >
                    <v-card-title class="pa-1">TODO</v-card-title>
                    <v-radio-group v-model="radios" :mandatory="false">
                        <v-radio label="Radio 1" value="radio-1"></v-radio>
                        <v-radio label="Radio 2" value="radio-2"></v-radio>
                    </v-radio-group>
                </v-card>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col cols="12">
                <v-card color="#F5F5F5" class="pa-1" outlined tile>
                    <StudyList/>    
                </v-card>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col cols="6">
                <v-card @click="myFeed" class="pa-1" tile>
                    <v-card-title>공부 일기</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card @click="myLicense" class="pa-1" tile >
                    <v-card-title class="pa-1">나의 자격증</v-card-title>
                    <div class="d-flex flex-column justify-center align-center">
                        <div class="d-flex flex-row">
                            <p class="mr-3">todo</p>
                            <h5>{{ todoCnt }}</h5>
                        </div>
                        <div class="d-flex flex-row">
                            <p class="mr-3">doing</p>
                            <h5>{{ doingCnt }}</h5>
                        </div>
                        <div class="d-flex flex-row">
                            <p class="mr-3">pass</p>
                            <h5>{{ passCnt }}</h5>
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
    <MyLicense :hostID="this.hostID" v-show="isMyLicense" @cntTodo="cntTodo" @cntDoing="cntDoing" @cntPass="cntPass"/>
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
            // 
            // 호스트 유저 정보 
            host: {},
            isMyStudy: true,
            isFeed: false,
            isMyLicense: false,
            isPlanner: false,
            
            todoCnt: 0,
            doingCnt: 0,
            passCnt: 0
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