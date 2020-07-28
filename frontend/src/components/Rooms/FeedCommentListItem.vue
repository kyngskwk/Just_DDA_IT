<template>
    <tr>
      <td style="width: 20%">{{ this.userName }}</td>
      <td v-if="!isUpdate">
        <div class="d-flex justify-space-between">
          <div>{{ this.comment.studyComment }}</div>
          <v-btn class="ml-2" tile outlined color="success" @click="edit">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </div>
      </td>
      <td v-if="isUpdate">
        <div class="d-flex justify-space-between">
          <textarea class="form-control" v-model="comment.studyComment"></textarea>
          <v-btn class="ml-2" tile outlined color="success" @click="update">
            <v-icon>mdi-checkbox-marked-circle</v-icon>
          </v-btn>
        </div>
       </td>
    </tr>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FeedCommentListItem',
  props: {
    comment: {
      type: Object
    }
  },
  data() {
    return {
      userName: '',
      isUpdate: false,
      studyComment: ''
    }
  },
  methods: {
    edit() {
      this.isUpdate = true
    },
    update() {
      this.isUpdate = false
    }
  },
  created() {
    this.studyComment = this.comment.studyComment

    axios.get('http://localhost:3000/member.json')
    .then(response => {
      var alluser = response.data.data
      for(var i=0; i<alluser.length; i++) {
        if (alluser[i].UID == this.comment.UID){
          this.userName = alluser[i].userName
          break;
        }
      }
    })
  }
}
</script>

<style scoped>

</style>