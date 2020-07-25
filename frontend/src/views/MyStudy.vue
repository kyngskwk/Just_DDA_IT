<template>
  <div>
    <UserProfile :user="user"/>
    <div class="fixed-top">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <button @click="mystudy" class="nav-link" :class="{ active: isMyStudy }">마이스터디</button>
            </li>
            <li class="nav-item">
                <button class="nav-link" @click="feed" :class="{ active: isFeed }">공부 일기</button>
            </li>
            <li class="nav-item">
                <button class="nav-link" @click="mylicense" :class="{ active: isMyLicense }">자격증 현황</button>
            </li>
        </ul>
    </div>
    <MyCalendar :user="user" v-if="isMyStudy"/>
    <StudyList :user="user" v-if="isMyStudy"/>
    <MyLicense :user="user" v-if="isMyLicense"/>
  </div>
</template>

<script>
import UserProfile from '@/components/MyStudy/UserProfile.vue'
import StudyList from '@/components/MyStudy/StudyList.vue'
import MyLicense from '@/components/MyStudy/MyLicense.vue'
import MyCalendar from '@/components/MyStudy/MyCalendar.vue'
import axios from 'axios'

export default {
    name : "MyStudy",
    data() {
        return {
            user: {},
            isMyStudy: true,
            isFeed: false,
            isMyLicense: false,
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
        StudyList,
        MyLicense,
        MyCalendar
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