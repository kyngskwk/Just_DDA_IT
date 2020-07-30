<template>
  <v-simple-table class="mt-4">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">작성자</th>
          <th class="text-left">총 <span class="text-primary">{{ comments.length }}</span>개의 댓글</th>
        </tr>
      </thead>
      <tbody>
        <FeedCommentListItem v-for="comment in comments" :key="comment.feedId" :comment="comment" :feedId="feedId"/>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import axios from 'axios'
import FeedCommentListItem from '../Rooms/FeedCommentListItem.vue'

export default {
  name: 'FeedCommentList',
  components: {
    FeedCommentListItem
  },
  data () {
    return {
      comments: [],
      a: ''
    }
  },
  props: {
    feedId: {
      type: Number
    },
    onLoading: {
      type: Boolean
    }
  },
  watch: {
    onLoading() {
      axios.get('http://localhost:8080/feed/getCommentList', {
        params: {
          'feedId': this.feedId
        }
      })
      .then(response => {
        this.comments = response.data.object
      })
      console.log("로딩완료")
    }
  },
  created() {
    axios.get('http://localhost:8080/feed/getCommentList',{
      params: {
        'feedId': this.feedId
      }
    })
    .then(response => {
      // console.log(response)
      // console.log(response.data.object)
      this.comments = response.data.object
    }) 
  }
}
</script>

<style scoped>
</style>
