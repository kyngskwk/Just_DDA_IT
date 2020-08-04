<template>
  <div class="container">
    <div>
        <UserProfile :host="host"/>
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
                    <v-card-title>참여중인 스터디</v-card-title>
                    <StudyList/>    
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
        <MyLicense :host="host" v-if="isMyLicense"/>
        <MyFeed :host="host" v-if="isFeed"/>
    </div>
  </div>
</template>

<script>
import UserProfile from '@/components/MyStudy/UserProfile.vue'
import StudyList from '@/components/MyStudy/StudyList.vue'
import MyLicense from '@/components/MyStudy/MyLicense.vue'
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
        MyFeed
    },
    methods : {
        myPlanner(){
            this.$router.push({name:"MyPlanner", params: this.hostUID })
        },
        ...mapActions(["logout"]),
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