<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-text-field v-model="comment" label="댓글을 적어주세요." required></v-text-field>
        <v-btn class="mt-4 ml-2">작성하기</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
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
    }
  }
</script>

<script>
export default {
  

}
</script>

<style scoped>
</style>