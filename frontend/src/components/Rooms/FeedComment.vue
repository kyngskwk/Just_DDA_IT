<template>
  <div>
    <FeedCommentList :feedId="feedId"/>
    <FeedCommentInput/>
  </div>
</template>

<script>
import FeedCommentList from '../Rooms/FeedCommentList.vue'
import FeedCommentInput from '../Rooms/FeedCommentInput.vue'

export default {
  name: 'FeedComment',
  components: {
    FeedCommentList,
    FeedCommentInput
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