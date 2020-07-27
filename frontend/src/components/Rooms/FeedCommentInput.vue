<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-text-field v-model="comment" label="댓글을 적어주세요." required 
        @keypress.enter="commentInput"></v-text-field>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios'

  export default {
    name: 'FeedCommentInput',
    props: {
      feedId: {
        type: Number
      }
    },
    data() {
      return {
        valid: false,
        comment: ''
      }
    },
    methods: {
      commentInput() {
        if(this.comment.trim()) {
          let form = new FormData()
          form.append('commentId', Date.now())
          form.append('feedId', this.feedId)
          form.append('UID', 1)
          form.append('studyComment', this.comment)

          axios.post('http://localhost:3000/comment.json', form)
          .then(response => {
            console.log(response)
        })
        }
      }
    }
  }
</script>

<script>
export default {
  name: 'FeedCommentInput',


}
</script>

<style scoped>
</style>