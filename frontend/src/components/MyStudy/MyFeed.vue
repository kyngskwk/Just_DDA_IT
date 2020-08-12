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
<<<<<<< HEAD
    console.log(this.user)
    axios.get('http://i3a102.p.ssafy.io/feed.json')
    .then(response => {
      // console.log(response) // -> data.data.studyImage
      var results = response.data.data
      for (var i = 0; i < results.length; i++) {
        if(results[i].userId == 0){
          this.feeds.push(results[i])
        }
=======
    // 피드 데이터 받아오기
    axios.get('http://localhost:8080/feed/getByUser', {
      params:{
        userId: this.hostID
>>>>>>> 5ab3ac852e7c213883e0b30fc424636d79169add
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