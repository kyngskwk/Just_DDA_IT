<template>
<div class="container">
  <div v-if="isLogin">
  <v-btn class="mx-2 fixed-top backbtn" fab dark small color="primary" @click="goBack">
    <v-icon dark>mdi-arrow-left</v-icon>
  </v-btn>
  <div class="d-flex justify-content-center">  
    <div class="card feed-card">
      <img :src="this.feed.studyImage" class="card-img-top" alt="...">
      <div class="card-body text-left">
        <div class="mb-2 d-flex">
          <div>
            <i v-if="color" class="fas fa-heart fa-lg like-button"  style="color:crimson" @click="likeColor"></i>
            <i v-else class="fas fa-heart fa-lg like-button"  @click="likeColor"></i>
          </div>
          <p class="ml-2"><span class="text-danger font-weight-bold">{{ name }}{{ this.feed.studyLike.length }}</span>명이 좋아합니다.</p>
        </div>
        <p class="card-text"><span class="font-weight-bold">{{ userName }}</span> {{ this.feed.studyContent }}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">{{ this.feedDate }}</small>
      </div>
    </div>
  </div>
  <FeedComment :feedId="feedId" :loading="loading"/>
  <div class="form-group mt-3">
    <label for="comment">댓글</label>
    <div class="d-flex justify-content-center">
      <input type="text" class="form-control commentinput" v-model="studyComment">
      <button class="btn btn-primary ml-3" @click="commentInput" :disabled="this.studyComment.length < 1">댓글</button>
    </div>
    <small class="form-text text-muted">댓글을 작성해 주세요.</small>
  </div>
  <v-snackbar v-model="snackbar">
    작성중인 댓글이 있습니다.
    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">취소하기</v-btn>
      <v-btn color="blue" text v-bind="attrs" @click="commentBack">뒤로가기</v-btn>
    </template>
  </v-snackbar>
  </div>
  <div v-if="!isLogin" class="notLogin text-center">
    <h5>로그인하러 바로가기</h5>
    <v-btn @click="goLogin" class="mt-5">로그인</v-btn>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import FeedComment from '../Rooms/FeedComment.vue'

export default {
  name: 'FeedDetail',
  components: {
    FeedComment
  },
  props: {
    roomId: {
      type: Number,
      required: true
    },
    feedId: {
      type: Number,
      required: true
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.member.isLogin
		}
  },
  data() {
    return {
      UID: '',
      feed:'',
      feedDate: '',
      userName: '',
      color: false,
      studyComment: '',
      snackbar: false,
      name: '',
      member: '',
      loading: false
    }
  },
methods: {
    goLogin(){
      this.$router.push('/accounts/login')
    },
    goBack() {
      if(this.studyComment.length >= 1){
        this.snackbar = true
      }
      else {
        this.$router.go(-1)
      }
    },
    commentBack(){
      this.snackbar = false
      this.$router.go(-1)
    },
    likeColor() {
      this.color = !this.color
      if(this.color===true){
        this.name = this.userName + "님 외"
      }else {
        this.name = ''
      }
    },
    commentInput() {
      var comment = {
        'studyComment': this.studyComment,
      }
      console.log(this.UID)
      // form.append('feedId', this.feedId);
      // form.append('studyComment', this.comment);
      console.log(comment)
      axios.post('http://localhost:8080/feed/addComment', comment, {
        params: {
          'feedId': this.feedId,
          'UID': this.UID
        }
      })
      .then(response => {
        console.log(response)
      })
      this.loading =! this.loading
      console.log(this.loading)
    }
  },
  created() {
    this.UID = this.$store.state.member.loginUID
    this.member = this.$store.state.member
    console.log("1",this.member)
    axios.get('http://localhost:3000/feed.json')
    .then(response => {
      for (var i=0;i<response.data.data.length;i++) {
        if(response.data.data[i].feedId == this.feedId) {
          this.feed = response.data.data[i]

          var when = new Date(this.feed.registTime);
          var now = new Date();

          var gap = now.getTime() - when.getTime();
          if (gap < (1000*60*60*24)) {
            this.feedDate = Math.floor(gap / (1000 * 60 * 60)) + "시간 전";
          } 
          else {
            this.feedDate = Math.floor(gap / (1000 * 60 * 60 * 24)) + "일 전";
          }
          break;
        }
      }
    })
    axios.get('http://localhost:3000/member.json')
    .then(response => {
      for (var i=0; i<response.data.data.length; i++) {
        if(response.data.data[i].UID == this.feed.userId) {
          this.userName = response.data.data[i].userName;
          break;
        }
      }
    })
  }
}
</script>

<style scoped>
.backbtn {
  z-index: 8;
  position: fixed;
  top: 65px
}
.feed-card {
  margin: 5px;
  padding: 0px;
}
.commentinput {
  width: 75%
}
.notLogin {
  margin-top: 250px
}
</style>