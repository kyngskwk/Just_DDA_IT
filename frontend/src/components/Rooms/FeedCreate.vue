<template>
  <div class="container">
    <div v-if="isLogin">
      <v-btn class="mx-3 fixed-top backbtn" fab dark small color="#fd462e" @click="goBack">
        <v-icon dark>mdi-arrow-left</v-icon>
      </v-btn>
      <h3 class="c-title">오늘의 공부 인증하기</h3>
      <v-form ref="form" >
        <v-file-input show-size counter label="인증사진" :rules="rules" accept="image/png, image/jpeg, image/bmp" 
        outlined dense prepend-icon="mdi-camera" placeholder="오늘의 인증사진을 올려주세요." class="mt-8 rounded-xl" v-model="studyImage"></v-file-input>

        <v-textarea label="오늘의 공부 일기" class="mt-5 rounded-xl" outlined v-model="studyContent"></v-textarea>

        <v-subheader class="pl-0">오늘의 공부 만족도</v-subheader>
        <v-slider v-model="studyDegree" :thumb-size="24" thumb-label="always" color="#fd462e">
          <template v-slot:thumb-label="{ value }">
            {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
          </template>
        </v-slider>
      </v-form>
      <v-btn x-large color="#fd462e" class="submit rounded-xl" dark @click="submit"><v-icon left>mdi-upload</v-icon>LET'S DDAIT</v-btn>
    </div>
    <div v-if="!isLogin">
      <v-btn class="mx-2 fixed-top backbtn" fab dark small color="#fd462e" @click="goBack">
        <v-icon dark>mdi-arrow-left</v-icon>
      </v-btn>
    </div>
    <!--댓글 뒤로가기 알람-->
    <v-snackbar v-model="snackbar">
      작성중인 글이 있습니다.
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">취소하기</v-btn>
        <v-btn color="blue" text v-bind="attrs" @click="realback">뒤로가기</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FeedCreate',
  props: {
    roomId: {
      type: Number
    }
  },
  data () {
    return {
      UID: null,
      isLogin: false,
      rules: [
        value => !value || value.size < 16000000 || '사진 크기는 16 MB까지 가능해요!',
      ],
      studyDegree: 20,
      satisfactionEmojis: ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'],
      studyContent: '',
      studyImage: null,
      snackbar: false
    }
  },
  created() {
    if(localStorage.getItem('loginUID')){
      this.isLogin = true
      this.UID = localStorage.getItem('loginUID')
    } else if(sessionStorage.getItem('loginUID')) {
      this.isLogin = true
      this.UID = sessionStorage.getItem('loginUID')
    } else {
      this.isLogin = false
    }
  },
  methods: {
    submit() {
      const formData = new FormData();
      formData.append('uid',this.UID);
      formData.append('roomid',this.roomId);
      formData.append('studyContent',this.studyContent);
      formData.append('studyDegree',this.studyDegree);
      formData.append('studyImage',this.studyImage);

      console.log(this.UID)
      console.log(this.roomId)
      console.log(this.studyContent)
      console.log(this.studyDegree)
      console.log(this.studyImage)
      console.log(formData)

      axios.post(`http://${this.$store.state.address}:8080/feed/addFeed`, formData,{
        headers :{
          'Content-Type' : 'multipart/form-data'
        }
      })
      .then(response => {
        console.log(response)
        this.$router.push({name: 'RoomDetail', params: { roomId:this.roomId }})
      })
      .console.error(res=>{
        console.log(res)
      });
    }, 
    goBack() {
      // console.log(this.studyImage)
      if(this.studyImage != null || this.studyContent.length > 1){
        console.log(this.studyImage)
        this.snackbar = true
      }
      else {
      this.$router.push({name: 'RoomDetail', params: { roomId:this.roomId }})
      }
    },
    realback() {
      this.$router.push({name: 'RoomDetail', params: { roomId:this.roomId }})
    }
  }
}
</script>

<style scoped>
.backbtn {
  z-index: 8;
  position: fixed;
  top: 30px
}
h3 {
  text-align: center;
  margin-top: 10px;
  font-family: 'Black Han Sans', sans-serif;
  font-size: 30px;
  color: #fd462e;
}
.submit {
  width: 100%
}
</style>