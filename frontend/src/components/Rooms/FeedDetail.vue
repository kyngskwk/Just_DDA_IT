<template>
<div>
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
      type: Number
    },
    feedId: {
      type: Number
    }
  },
  data() {
    return {
      feed:'',
      feedDate: '',
      userName: '',
      color: false
    }
  },
methods: {
    goBack() {
      this.$router.go(-1)
    },
    likeColor() {
      this.color = !this.color
    }
  },
  created() {
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
</style>