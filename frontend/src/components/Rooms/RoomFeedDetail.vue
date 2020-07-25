<template>
  <a class="card col-4 feed-card" @click="goFeedDetail">
    <img :src="this.feed.studyImage" class="card-img img-thumbnail feed-img border-0 rounded-0 ">
    <div class="card-img-overlay">
      <h5 class="card-title"> </h5>
    </div>
  </a>
</template>

<script>
export default {
  name: 'RoomFeedDetail',
  props: {
    feed: {
      type: Object
    }
  },
  methods: {
    goFeedDetail() {
      this.$router.push({name: 'FeedDetail', params: { roomId:this.feed.roomId, feedId:this.feed.feedId }})
    }
  }
}
</script>

<style scoped>
.feed-card {
  padding:0 0 0 0
}
.feed-img {
 padding: 0 0 0 0;
}
</style>