<template>
  <div class="container">
    <div>
        <UserProfile :host="host"/>
        <v-tabs>
            <v-tab @click="mystudy" :class="{ active: isMyStudy }">마이스터디</v-tab>
            <v-tab @click="feed" :class="{ active: isFeed }">공부 일기</v-tab>
            <v-tab @click="mylicense" :class="{ active: isMyLicense }">자격증 현황</v-tab>
        </v-tabs>


        
        <StudyList :host="host" v-if="isMyStudy"/>
        <MyCalendar :host="host" v-if="isMyCalendar"/>
        <MyLicense :host="host" v-if="isMyLicense"/>
        <MyFeed :host="host" v-if="isFeed"/>
    </div>
  </div>
</template>

<script>
import UserProfile from '@/components/MyStudy/UserProfile.vue'
import StudyList from '@/components/MyStudy/StudyList.vue'
import MyLicense from '@/components/MyStudy/MyLicense.vue'
import MyCalendar from '@/components/MyStudy/MyCalendar.vue'
import MyFeed from '@/components/MyStudy/MyFeed.vue'
import axios from 'axios'
import { mapActions } from "vuex"

export default {
    name : "MyStudy",
    data() {
        return {
            hostUID: this.$route.params.UID, 
            // 호스트 유저 정보 
            host: {},
            isMyStudy: true,
            isFeed: false,
            isMyLicense: false,
            isMyCalendar: true
        }
    },
    mounted() {
        // hostUID를 이용해 유저 정보 받아오기
        axios.post('http://localhost:8080/getUser', {
            id: this.hostUID
        })
        .then(res => {
            console.log("getUser Success.");
            console.log(res.data)
            this.host = res.data.object
        })
        .catch( function(error) {
            // console.log(this.hostUID)
            console.log(error)
        })
        .finally(function(){
            console.log("getUser");
        })
    },
    components : {
        UserProfile,
        StudyList,
        MyLicense,
        MyCalendar,
        MyFeed
    },
    methods : {
        ...mapActions(["logout"]),
        mystudy () {
            this.isMyStudy = true
            this.isFeed = false
            this.isMyLicense = false
            this.isMyCalendar = true
        },
        feed () {
            this.isMyStudy = false
            this.isFeed = true
            this.isMyLicense = false
            this.isMyCalendar = false

        },
        mylicense () {
            this.isMyStudy = false
            this.isFeed = false
            this.isMyLicense = true
            this.isMyCalendar = false

        }
    }
}
</script>

<style>

</style>