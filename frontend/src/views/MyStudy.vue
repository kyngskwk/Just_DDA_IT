<template>
  <div>
    <UserProfile :user="user"/>
    <div>
        <button @click="mystudy">마이스터디</button>
        <button @click="feed">공부 일기</button>
        <button @click="mylicense">자격증 현황</button>
    </div>
    <StudyList :user="user" v-if="isMyStudy"/>
  </div>
</template>

<script>
import UserProfile from '@/components/MyStudy/UserProfile.vue'
import StudyList from '@/components/MyStudy/StudyList.vue'
import axios from 'axios'

export default {
    name : "MyStudy",
    data() {
        return {
            user: {},
            isMyStudy: true,
            isFeed: false,
            isMyLicense: false
        }
    },
    created() {
        // 로그인한 유저 정보 받아오기
        axios.get('http://localhost:3000/member.json')
        .then(res => {
            this.user = res.data.data[0]
            console.log(this.user)
        })
    },
    components : {
        UserProfile,
        StudyList
    },
    methods : {
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