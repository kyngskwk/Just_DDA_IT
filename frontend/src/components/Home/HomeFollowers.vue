<template>
  <div class="icon-followers pl-3" style="height:150px; background-color:#fff8f7;">
    <div>
      <p class="ddaiter mb-1 pt-2 font_e font-weight-bold"><span class="font-weight-light">Today's</span> BEST DDAITER</p>
    </div>
    <horizontal-scroll class="d-flex">
      <a v-for="feed in feeds" :key="feed.id" style="display:flex; flex-direction:column; 
      margin:0 auto; width:60px; margin:0 15px 0 0; text-decoration:none" @click="goFeed(feed)">
        <v-list-item-avatar width="60px" height="60px">
          <v-img v-if="feed.member.userThumbnail != null" :src="'data:' + member.imageType + ';base64,' + member.userThumbnail"></v-img>
          <v-img v-if="feed.member.userThumbnail == null" src="../../../public/profile/profile.png"></v-img>
        </v-list-item-avatar>
        <span class="text-center font_k rounded-xl mb-2" style="text-decoration:none; color:#fd462e; border:1px solid #fd462e">{{ feed.member.userName }}</span>
      </a>
    </horizontal-scroll>
    <v-dialog v-model="dialog" max-width="400" >
      <v-card class="pa-0 d-flex">
        <div class="feed-card" style="width:100%">
          <div class="thumb">
            <img :src="this.studyImage" class="card-img-top content" alt="..." style="min-height:100%">
          </div>
            <!--stamp찍기-->
            <img v-if="this.studyDegree <= 10" src="../../../public/feed/1.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 20" src="../../../public/feed/2.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 30" src="../../../public/feed/3.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 40" src="../../../public/feed/4.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 50" src="../../../public/feed/5.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 60" src="../../../public/feed/6.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 70" src="../../../public/feed/7.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 80" src="../../../public/feed/8.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 90" src="../../../public/feed/9.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 100" src="../../../public/feed/10.png" alt="" class="stampimg">
        
          <div class="card-body text-left">
            <p class="card-text"><span class="font-weight-bold feedname">{{ this.userName }}</span> {{ this.studyContent }}</p>
            <!--댓글 부분-->
          </div>
          <div class="card-footer d-flex justify-content-between">
            <small class="text-muted pt-2 pb-2">{{ this.feedDate }}</small>
            <v-btn class="text-muted border border-secondary rounded-xl" @click="dialog = false">닫기</v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'

export default {
  name: 'HomeFollowers',
  components: {
    HorizontalScroll
  },
  data() {
    return {
      feeds: [],
      dialog: false,
      userThumbnail: null,
      imageType: '',
      userName: '',
      studyDegree: '',
      likeList: [],
      studyContent: '',
      feedDate: ''
    }
  },
  created() {
    axios.get(`http://${this.$store.state.address}:8080/feed/likeRanking`)
    .then(res => {
      console.log(res)
      this.feeds = res.data.object
      this.userThumbnail = res.data.object.member.userThumbnail
    })
  },
  methods: {
    goFeed(feed) {
      this.dialog = true
      console.log(feed)
      this.imageType = feed.imageType,
      this.studyImage = 'data:' + feed.imageType + ';base64,' + feed.studyImage,
      this.userName = feed.member.userName,
      this.studyDegree = feed.studyDegree,
      this.studyContent = feed.studyContent
      var when = new Date(feed.registTime);
      var now = new Date();

      var gap = now.getTime() - when.getTime();
      if (gap < (1000*60)) {
        this.feedDate = Math.floor(gap / (1000)) + "초 전";
      } 
      else if (gap < (1000*60*60)) {
        this.feedDate = Math.floor(gap / (1000 * 60)) + "분 전";
      } 
      else if (gap < (1000*60*60*24)) {
        this.feedDate = Math.floor(gap / (1000 * 60 * 60)) + "시간 전";
      } 
      else {
        this.feedDate = Math.floor(gap / (1000 * 60 * 60 * 24)) + "일 전";
      }
    }
  }
}
</script>

<style>
.ddaiter {
  color: #fd462e;
  text-align: center;
  font-size: 20px;
}
.icon-followers {
  height: 90px;
}
.icon-followers > i {
  margin: 0 10px;
}
.thumb {
  position: relative;
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
.stampimg {
  width: 40%;
  position: absolute;
  z-index: 6;
  top:20px;
  right:20px;
}
</style>
