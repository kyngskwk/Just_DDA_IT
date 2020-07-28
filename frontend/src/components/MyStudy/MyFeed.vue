<template>
  <div class="card-group row px-3">
    <MyFeedListContent v-for="feed in this.feeds" :key="feed.roomId" :feed="feed"/>
  </div>
</template>

<script>
import axios from 'axios'
import MyFeedListContent from '../MyStudy/MyFeedListContent.vue'

export default {
  name: 'MyFeed',
  props : {
    user : {
      type: Object
    }
  },
  data() {
    return {
      feeds:[]
    }
  },
  components: {
    MyFeedListContent
  },
  created() {
    console.log(this.user)
    axios.get('http://localhost:3000/feed.json')
    .then(response => {
      // console.log(response) // -> data.data.studyImage
      var results = response.data.data
      for (var i = 0; i < results.length; i++) {
        if(results[i].userId == 0){
          this.feeds.push(results[i])
        }
      }
    })
  }
}
</script>

<style scoped>

</style>