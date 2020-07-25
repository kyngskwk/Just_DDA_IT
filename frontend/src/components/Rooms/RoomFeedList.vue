<template>
  <div class="card-group row px-3">
    <RoomFeedDetail v-for="feed in this.roomfeeds" :key="feed.roomId" :feed="feed"/>
  </div>
</template>

<script>
import RoomFeedDetail from '../Rooms/RoomFeedDetail.vue'

export default {
  name: 'RoomFeedList',
  props: {
    feeds: {
      type: Array
    },
    roomId: {
      type: String
    }
  },
  components: {
    RoomFeedDetail
  },
  data() {
    return {
      roomfeeds: []
    }
  },
  created() {
    for (var i=0; i < this.feeds.length ; i++){
      if (this.feeds[i].roomId == this.roomId){
        this.roomfeeds.push(this.feeds[i])
      }
    }
  }
}
</script>

<style scoped>

</style>