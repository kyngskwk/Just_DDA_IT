<template>
    <tr>
      <td style="width: 20%">{{ this.userName }}</td>
      <td v-if="!isUpdate">
        <div class="d-flex justify-space-between">
          <div>{{ this.comment.studyComment }}</div>
          <div v-if="this.UID == this.nowUID">
            <v-btn class="ml-2" tile outlined color="success" @click="edit">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn class="ml-2" tile outlined @click.stop="dialog = true">
              <v-icon>mdi-close-circle</v-icon>
            </v-btn>
            <v-dialog v-model="dialog" max-width="290">
              <v-card class="pt-3 pl-3">
                <v-card-text class="headline">댓글을 정말로 <br>삭제할까요?</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="pink" text @click="dialog = false" > 취소하기 </v-btn>
                  <v-btn color="blue" text @click="del" > 삭제하기 </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
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
      commentUID: '',
      userName: '',
      isUpdate: false,
      studyComment: '',
      id: null,
      UID: null, // comment주인의 uid
      nowUID: null,
      dialog: false
    }
  },
  methods: {
    del() {
      this.dialog = false
    },
    edit() {
      this.isUpdate = true
    },
    update() {
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
      this.isUpdate = false
    }
  },
  created() {
    console.log(this.comment)
    this.studyComment = this.comment.studyComment
    this.userName = this.comment.member.userName
    this.id = this.comment.id
    this.UID = this.comment.member.id
    this.nowUID = this.$store.state.member.loginUID
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