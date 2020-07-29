<template>
  <div>
    <FeedCommentList :feedId="feedId"/>
  
  </div>
</template>

<script>
import FeedCommentList from '../Rooms/FeedCommentList.vue'


export default {
  name: 'FeedComment',
  components: {
    FeedCommentList,
  },
  props: {
    feedId: {
      type: Number
    }
  }
}
</script>

<style scoped>
</style>