<template>
  <v-container>
      <h5>비밀번호 찾기</h5>
      <h5>이메일로 임시비밀번호를 발송해드립니다.</h5>
      <v-text-field
            v-model="userEmail"
            :rules="emailRules"
            label="이메일"
            required
          ></v-text-field>
      <v-btn class="mr-4" @click="submit">비밀번호 찾기</v-btn>
      <v-btn class="mr-4" @click="cancel">취소</v-btn>
  </v-container>
</template>

<script>
import axios from 'axios'


export default {
  name: 'FindPassword',
  data() {
    return {
      userEmail : ''
    }
  },
  methods: {
    submit() {
      axios.post('http://${state.address}:${this.$store.state.port}/findpassword', {
        userEmail : this.userEmail
      })
      .then(res=>{
        console.log(res)
      })
      .catch(res=>{
        console.log(res)
      })      
    }
  }
}
</script>

<style>

</style>