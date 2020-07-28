<template>
  <div>
      {{ }}
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
    <StudyList :user="user" v-if="isMyStudy"/>
    <MuLicense :user="user" v-if="isMyLicense"/>
    <MyFeed :user="user" v-if="isFeed"/>

  </div>
</template>

<script>
import UserProfile from '@/components/MyStudy/UserProfile.vue'
import StudyList from '@/components/MyStudy/StudyList.vue'
import MuLicense from '@/components/MyStudy/MyLicense.vue'
import MyFeed from '@/components/MyStudy/MyFeed.vue'
import axios from 'axios'

export default {
    name : "MyStudy",
    data() {
        return {
            // 페이지 주인
            UID: '',
            // 현재 유저
            loggedInUID : 0,
            user: {},
            isMyStudy: true,
            isFeed: false,
            isMyLicense: false,
        }
    },
    // url에서 파라미터 전달 받기 
    mounted() {
        this.UID = this.$route.params.UID
        console.log(this.UID)
        // UID를 이용해 유저 정보 받아오기
        if (this.UID) {
            axios.get('http://localhost:3000/member.json')
            .then(res => {
                this.user = res.data.data[0]
                console.log(this.user)
            })
        } 
    },
    components : {
        UserProfile,
        StudyList,
        MuLicense,
        MyFeed
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