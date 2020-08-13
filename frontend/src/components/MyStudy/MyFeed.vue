<template>
  <div class="card-group row px-3">
    <MyFeedListContent 
      v-for="feed in feeds" 
      :key="feed.roomId" 
      :feed="feed"/>
  </div>
</template>

<script>
import axios from 'axios'
import MyFeedListContent from '../MyStudy/MyFeedListContent.vue'

export default {
  name: 'MyFeed',
  props : {
    hostID : {
      type: Number
    }
  },
  data() {
    return {
      feeds: {}
    }
  },
  components: {
    MyFeedListContent
  },
  created() {
    // 피드 데이터 받아오기
    axios.get('http://localhost:8080/feed/getByUser', {
      params:{
        userId: this.hostID
      }
    })
    .then( res => {
      // console.log(res.data.object)
      // console.log(res.data.object[0].studyroom.license.licenseName)
      this.feeds = res.data.object
      console.log(this.feeds)
    })
    .catch( res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>

</style>