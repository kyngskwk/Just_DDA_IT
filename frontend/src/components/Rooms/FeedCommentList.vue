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
      comments: []
    }
  },
  props: {
    feedId: {
      type: Number
    },
    loading: {
      type: Boolean
    }
  },
  watch: {
    loading(){
      axios.get('http://localhost:8080/feed/getCommentList', {
        params: {
          'feedId': this.feedId
        }
      })
      .then(response => {
        this.comments = response.data.object
      })
    }
  },
  created() {
    axios.get('http://localhost:8080/feed/getCommentList',{
      params: {
        'feedId': this.feedId
      }
    })
    .then(response => {
      console.log(response)
      console.log(response.data.object)
      this.comments = response.data.object
      // var commentall = response.data.data
      // for (var i=0; i<commentall.length; i++) {
      //   if (commentall[i].feedId == this.feedId) {
      //     this.comments.push(commentall[i])
      //   }
      // } 
    }) 
  }
}
</script>

<style scoped>
</style>
