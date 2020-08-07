<template>
    <v-list three-line>
      <v-subheader>총 <span class="text-primary">{{ comments.length }}</span> 개의 댓글</v-subheader>
      <FeedCommentListItem v-for="comment in comments" :key="comment.id" :comment="comment" :feedId="feedId" @deleteComment="deleteComment = true"/>
    </v-list>
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
      deleteComment: false
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
        // console.log("here")
        // console.log(this.response)
      })
      console.log("로딩완료")
    },
    deleteComment() {
      console.log('삭제완료')
      axios.get('http://localhost:8080/feed/getCommentList', {
        params: {
          'feedId': this.feedId
        }
      })
      .then(response => {
        this.comments = response.data.object
      })
      this.deleteComment = false
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
  },
  method: {

  }
}
</script>

<style scoped>
</style>
