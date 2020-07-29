<template>
<div class="container">
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
          <p class="ml-2"><span class="text-danger font-weight-bold">{{ this.feed.studyLike.length }}</span>명이 좋아합니다.</p>
        </div>
        <p class="card-text"><span class="font-weight-bold">{{ userName }}</span> {{ this.feed.studyContent }}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">{{ this.feedDate }}</small>
      </div>
    </div>
  </div>
  <FeedComment :feedId="feedId"/>
  <div class="form-group mt-3">
    <label for="comment">댓글</label>
    <div class="d-flex justify-content-center">
      <input type="text" class="form-control commentinput" v-model="studyComment">
      <button class="btn btn-primary ml-3" @click="commentInput" :disabled="this.studyComment.length < 1">댓글작성</button>
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
  data() {
    return {
      UID: '',
      feed:'',
      feedDate: '',
      userName: '',
      color: false,
      studyComment: '',
      snackbar: false,
    }
  },
methods: {
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
    },
    commentInput() {
      var comment = {
        'studyComment': this.studyComment,
      }
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
    }
  },
  created() {
    this.UID = this.$store.state.member.loginUID
    // this.member = this.$store.state.member
    // console.log(this.member)
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
</style>