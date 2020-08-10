<template>

  <a class="card col-4 feed-card" @click="goFeedDetail">
    <img :src="this.studyImage" class="card-img img-thumbnail feed-img border-0 rounded-0 ">
    <div class="card-img-overlay">
      <h5 class="card-title"> </h5>
    </div>
  </a>

</template>

<script>
export default {
  name: 'MyFeedListContent',
  props: {
    feed: {
      type: Object
    }
  },
  data() {
    return {
      studyImage: ''
    }
  },
  methods: {
    goFeedDetail() {
      this.$router.push({name: 'FeedDetail', params: { roomId:this.feed.studyroom.id, feedId:this.feed.id }})
    }
  },
  created() {
     this.studyImage = "data:"+this.feed.imageType+";base64," + this.feed.studyImage
  }
}
</script>

<style>
.feed-card {
  padding:0 0 0 0
}
.feed-img {
 padding: 0 0 0 0;
}
</style>