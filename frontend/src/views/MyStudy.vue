<template>
  <div>
      <v-btn @click="logout">로그아웃</v-btn>
    <div>
        <UserProfile :user="user"/>
        <v-tabs>
            <v-tab @click="mystudy" :class="{ active: isMyStudy }">마이스터디</v-tab>
            <v-tab @click="feed" :class="{ active: isFeed }">공부 일기</v-tab>
            <v-tab @click="mylicense" :class="{ active: isMyLicense }">자격증 현황</v-tab>
        </v-tabs>
        <StudyList :user="user" v-if="isMyStudy"/>
        <MyCalendar :user="user" v-if="isMyCalendar"/>
        <MyLicense :user="user" v-if="isMyLicense"/>
        <MyFeed :user="user" v-if="isFeed"/>
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
            hostUID: null,
            user: {},
            isMyStudy: true,
            isFeed: false,
            isMyLicense: false,
            isMyCalendar: true
        }
    },
    // 현재 유저 id
    computed: {
        loginUID() {
            return this.$store.state.member.loginUID
        }
    },
    // hostUID 
    mounted() {
        this.hostUID = this.$route.params.UID
        // hostUID를 이용해 유저 정보 받아오기
        axios.get('http://localhost:3000/member.json')
        .then(res => {
            this.user = res.data.data[0]
            console.log(this.user)
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
        },
        feed () {
            this.isMyStudy = false
            this.isFeed = true
            this.isMyLicense = false
        },
        mylicense () {
            this.isMyStudy = false
            this.isFeed = false
            this.isMyLicense = true
        }
    }
}
</script>

<style>

</style>