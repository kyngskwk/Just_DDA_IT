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
    },
    feedId: {
      type: Number
    }
  },
  data() {
    return {
      userName: '',
      isUpdate: false,
      studyComment: '',
      id: null,
      UID: null
    }
  },
  methods: {
    edit() {
      this.isUpdate = true
    },
    update() {
      this.isUpdate = false
      var comment = {
        'id': this.id,
        'studyComment': this.studyComment,
      }
      // console.log(this.UID)
      // form.append('feedId', this.feedId);
      // form.append('studyComment', this.comment);
      console.log(comment)
      axios.post('http://localhost:8080/feed/updateComment', comment, {
        params: {
          'feedId': this.feedId,
          'UID': this.UID
        }
      })
      .then(response => {
        console.log(response)
      })
    }
  },
  created() {
    console.log(this.comment)
    this.studyComment = this.comment.studyComment
    this.userName = this.comment.member.userName
    this.id = this.comment.id
    this.UID = this.comment.member.id
    console.log(this.feedId)

    // axios.get('http://localhost:3000/member.json')
    // .then(response => {
    //   var alluser = response.data.data
    //   for(var i=0; i<alluser.length; i++) {
    //     if (alluser[i].UID == this.comment.UID){
    //       this.userName = alluser[i].userName
    //       break;
    //     }
    //   }
    // })
  }
}
</script>

<style scoped>

</style>