<template>
  <div>
    <FeedCommentList :feedId="feedId"/>
<<<<<<< HEAD
  
=======
    <!-- <FeedCommentInput :feedId="feedId"/> -->
>>>>>>> 1e4c2deacdeba1aa0f6776a419722f0ceda00a17
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