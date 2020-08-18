<template>
  <div class="container">
    <div v-if="isLogin">
      <v-btn class="ml-3 fixed-top backbtn" fab dark small styel="background-color:#fd462e" @click="goBack">
        <v-icon dark>mdi-arrow-left</v-icon>
      </v-btn>
      <h3>인증 수정하기</h3>
      <v-form ref="form">
        <!-- <v-file-input  show-size counter label="인증사진" :rules="rules" accept="image/png, image/jpeg, image/bmp" 
        outlined dense prepend-icon="mdi-camera" placeholder="오늘의 인증사진을 올려주세요." class="mt-8" v-model="studyImage"></v-file-input> -->
        <div class="thumb">
          <img :src="this.Image" class="card-img-top content" alt="..." style="min-width:100%; min-height:100%">
        </div>


        <v-textarea label="오늘의 공부 일기" class="mt-5" outlined v-model="studyContent"></v-textarea>

        <v-subheader class="pl-0 ">오늘의 공부 만족도</v-subheader>
        <v-slider v-model="studyDegree" :thumb-size="24" thumb-label="always">
          <template v-slot:thumb-label="{ value }">
            {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
          </template>
        </v-slider>
      </v-form>
      <v-btn x-large color="primary" class="submit" dark @click="submit"><v-icon left>mdi-cloud-upload</v-icon>수정하기</v-btn>
    </div>
    <div v-if="!isLogin">
      <v-btn class="mx-2 fixed-top backbtn" fab dark small color="primary" @click="goBack">
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
  name: 'FeedUpdate',
  props: {
    roomId: {
      type: Number
    },
    feedId: {
      type: Number
    }
  },
  data () {
    return {
      UID: null,
      rules: [
        value => !value || value.size < 16000000 || '사진 크기는 16 MB까지 가능해요!',
      ],
      studyDegree:'',
      satisfactionEmojis: ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'],
      studyContent: '',
      Image: null,
      studyImage: null,
      snackbar: false
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.member.isLogin
		}
  },
  methods: {
    submit() {
      const formData = new FormData();
      formData.append('feedId',this.feedId);
      
      formData.append('studyContent',this.studyContent);
      formData.append('studyDegree',this.studyDegree);
      

      console.log(this.studyImage)
      console.log(formData)
      axios.post(`http://${this.$store.state.address}:8080/feed/editFeed`, formData,{
        headers :{
          'Content-Type' : 'multipart/form-data'
        }
      })
      .then(response => {
        console.log(response)
        this.$router.push({name:'FeedDetail'})
      })
      .console.error(res=>{
        console.log(res)
      });
    },
    goBack() {
      // console.log(this.studyImage)
      if(this.studyContent.length > 1){
        console.log(this.studyImage)
        this.snackbar = true
      }
      else {
      this.$router.push({name: 'FeedDetail'})
      }
    },
    realback() {
      this.$router.push({name: 'FeedDetail'})
    }
  },
  created() {
    if(localStorage.getItem('loginUID')){
      this.UID = localStorage.getItem('loginUID')
    } else if(sessionStorage.getItem('loginUID')) {
      this.UID = sessionStorage.getItem('loginUID')
    } 
    axios.get(`http://${this.$store.state.address}:8080/feed/getById`, {
      params: {
        'feedId': this.feedId
      }
    })
    .then(res => {
      console.log(res)
      this.imageType = res.data.object.imageType
      this.studyImage = res.data.object.studyImage
      this.Image = "data:"+this.imageType+";base64," + this.studyImage
      this.studyContent = res.data.object.studyContent
      this.studyDegree = res.data.object.studyDegree
    })
  }
}
</script>

<style scoped>
.thumb {
  position:relative;
  display: block;
  overflow: hidden;
  width: 100%;
}
.thumb:before {
  content: "";
  display: block;
  padding-top: 100%;
}
.content {
  position: absolute;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
}
.backbtn {
  z-index: 8;
  position: fixed;
  top: 30px
}
h3 {
  margin-top: 70px
}
.submit {
  width: 100%
}
</style>