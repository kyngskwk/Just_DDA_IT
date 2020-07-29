<template>
  <v-form v-model="valid">
    <v-container>
      <v-row class="mx-2">
        <v-text-field v-model="comment" label="댓글을 적어주세요." required 
        @keypress.enter="commentInput"></v-text-field>
        <button class="mt-2 ml-2" :disabled="comment.length < 1">작성</button>
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