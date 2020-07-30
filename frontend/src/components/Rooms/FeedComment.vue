<template>
  <div>
    <FeedCommentList :feedId="feedId" :loading="loading"/>
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
    },
    loading: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
</style>