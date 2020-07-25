<template>
    <tr>
      <td style="width: 20%">{{ this.userName }}</td>
      <td>{{ this.comment.studyComment }}</td>
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
      userName: ''
    }
  },
  created() {
    console.log(this.comment)
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