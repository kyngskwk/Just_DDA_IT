<template>
<div class="col-4 thumb" cols="sm" >
  <a class="card feed-card content" @click="goFeedDetail">
    <img :src="this.studyImage" class="card-img img-thumbnail feed-img border-0 rounded-0 "  style="min-height:100%">
    <div class="card-img-overlay">
      <h5 class="card-title"> </h5>
    </div>
  </a>
</div>
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
.thumb {
  position:relative;
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
.feed-card {
  padding:0 0 0 0
}
.feed-img {
 padding: 0 0 0 0;
}
</style>