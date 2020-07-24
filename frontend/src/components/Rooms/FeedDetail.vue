<template>
<div class="d-flex justify-content-center">  
  <div class="card feed-card">
    <img :src="this.feed.studyImage" class="card-img-top" alt="...">
    <div class="card-body text-left">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">{{ this.feedDate }}</small>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FeedDetail',
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
      feedDate: ''
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
  }
}
</script>

<style scoped>
.feed-card {
  margin: 5px;
  padding: 0px;
}
</style>