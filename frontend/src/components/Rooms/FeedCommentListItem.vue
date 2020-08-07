<template>
<div class="px-2">
  <v-divider class="my-2"></v-divider>
  <v-list-item-content class="pa-0" v-if="!isUpdate">
    <v-list-item-title class="d-flex justify-content-between c-set">
      <a @click="goProfile" class="pt-2">{{ userName }}</a>
      <div v-if="this.UID == this.nowUID">
        <v-btn tile icon color="primary" @click="edit">
          <v-icon small>mdi-pencil</v-icon>
        </v-btn>
        <v-btn tile icon @click.stop="snackbar = true">
          <v-icon small>mdi-close-circle</v-icon>
        </v-btn>
      </div>
    </v-list-item-title>
    <div class="d-flex justify-content-between">
      <p class="mb-0 studyComment">{{ this.studyComment }}</p>
    </div>
  </v-list-item-content>

  <v-list-item-content class="pa-0" v-if="isUpdate">
    <div class="d-flex justify-space-between">
      <textarea class="form-control" v-model="studyComment"></textarea>
      <v-btn class="ml-2" tile icon color="success" @click="update">
        <v-icon>mdi-checkbox-marked-circle</v-icon>
      </v-btn>
    </div>
  </v-list-item-content>

  <!--댓글 삭제 스낵바-->
  <v-snackbar v-model="snackbar"> 댓글을 정말로 삭제할까요?
    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">취소하기</v-btn>
      <v-btn color="blue" text v-bind="attrs" @click="del">삭제하기</v-btn>
    </template>
  </v-snackbar>
</div>
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
      commentcontent:'',
      commentUID: '',
      userName: '',
      isUpdate: false,
      studyComment: '',
      id: null,
      UID: null, // comment주인의 uid
      nowUID: null,
      snackbar: false,
      threeLine: true,
    }
  },
  methods: {
    goProfile() {
      this.$router.push({name: 'MyStudy', params: { UID:this.commentUID }})
    },
    del() {
      console.log(this.id)
      this.snackbar = false
      var comment = {
        'id': this.id,
      }
      axios.post('http://i3a102.p.ssafy.io:8080/feed/deleteComment', comment)
      .then(response => {
        console.log(response)
      })
      this.$emit('deleteComment')
    },
    edit() {
      this.isUpdate = true
      // this.studyComment = this.comment.studyComment
    },
    update() {
      var comment = {
        'id': this.id,
        'studyComment': this.studyComment,
      }
      // console.log(this.UID)
      // form.append('feedId', this.feedId);
      // form.append('studyComment', this.comment);
      // console.log(comment)
      axios.post('http://i3a102.p.ssafy.io:8080/feed/updateComment', comment, {
        params: {
          'feedId': this.feedId,
          'UID': this.UID
        }
      })
      .then(response => {
        console.log(response.data.object.studyComment)
        this.studyComment = response.data.object.studyComment
      })
      this.isUpdate = false

    }
  },
  created() {
    console.log(this.comment)
    this.studyComment = this.comment.studyComment
    this.userName = this.comment.member.userName
    this.commentUID = this.comment.member.id
    this.id = this.comment.id
    this.UID = this.comment.member.id
    this.nowUID = this.$store.state.member.loginUID
    console.log(this.feedId)
    // console.log('여기')
    // console.log(this.UID)


    // axios.get('http://i3a102.p.ssafy.io/member.json')
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
.c-set {
  height: 36px;
}
</style>