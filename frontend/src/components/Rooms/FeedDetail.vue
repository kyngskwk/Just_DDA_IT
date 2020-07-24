<template>
  <div>
    {{ this.feed.studyContent }}
    {{ this.feed.registTime }}
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
      feed:''
    }
  },
  created() {
   axios.get('http://localhost:3000/feed.json')
    .then(response => {
      for (var i=0;i<response.data.data.length;i++) {
        if(response.data.data[i].feedId == this.feedId) {
          this.feed = response.data.data[i]
          break;
        }
      }
    })
  }
}
</script>

<style scoped>
</style>