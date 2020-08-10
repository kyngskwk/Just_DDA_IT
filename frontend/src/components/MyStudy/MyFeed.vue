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
    hostID : {
      type: Number
    }
  },
  data() {
    return {
      // hostID: this.$route.params.UID, 
      feeds:[]
    }
  },
  components: {
    MyFeedListContent
  },
  created() {
    axios.get('http://localhost:8080/feed/getByUser', {
      userId: this.hostID
    })
    .then( res => {
      console.log(res)
    })
    .catch( res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>

</style>