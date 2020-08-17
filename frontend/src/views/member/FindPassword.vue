<template>
  <v-container fill-height style="max-width:350px">
     <v-layout align-center justify-center row wrap style="position: relative;">
       <v-flex xs12>
        <v-alert 
          :value="isError"
          color="#fd462e"
          outlined
          icon="mdi-cloud-alert"
          width="100%"
          style="position: absolute; top: 0%"
        >
          존재하지 않는 이메일입니다.
        </v-alert>

        <v-alert 
          :value="isSuccess"
          type="success"
          outlined
          icon="mdi-cloud-alert"
          width="100%"
          style="position: absolute; top: 0%"
        >
          임시 비밀번호가 발송되었습니다.
        </v-alert>

        <v-toolbar flat class="mb-5">
          <v-toolbar-title class="font_k" style="font-weight: bold">비밀번호 찾기</v-toolbar-title>
        </v-toolbar>

        <p class="font_k pl-3">이메일로 <span class="color_emp">임시 비밀번호</span>를 발송해드립니다.</p>
        <v-text-field
          class="px-2"
          v-model="userEmail"
          :rules="emailRules"
          filled
          rounded
          label="이메일"
          required
          color="#fd462e"
        ></v-text-field>
        <div class="d-flex justify-center mb-5">
          <v-btn class="mr-2" @click="cancel" rounded large outlined color="#fd462e" style="width:30%">취소</v-btn>
          <v-btn class="mr-2 px-3" @click="submit" rounded dark large color="#fd462e" style="width:45%">비밀번호 찾기</v-btn>
        </div>
        <div class="d-flex justify-center mb-16">
          <v-btn text class="mr-2 px-3" @click="cancel" rounded dark large color="#fd462e" style="width:45%">로그인 하러가기</v-btn>
        </div>

      </v-flex>
    </v-layout>  
  </v-container>
</template>

<script>
import axios from 'axios'


export default {
  name: 'FindPassword',
  data() {
    return {
      isLogin: false,
      userEmail : '',
      isError : false,
      isSuccess: false
    }
  },
  watch: {
    'isError': function(){
      setTimeout(()=>{
        this.isError=false
      },2000)
    },
    'isSuccess': function(){
      setTimeout(()=>{
        this.isSuccess=false
      },2000)
    },
    'isSend': function(){
      setTimeout(()=>{
        this.isSend=false
      },3000)
    }
  },
  methods: {
    submit() {
      axios.post('http://${state.address}:${this.$store.state.port}/findpassword', {
        userEmail : this.userEmail
      })
      .then(res=>{
        this.isSuccess = true
        this.isLogin = true
        console.log(res)
      })
      .catch(res=>{
        this.isError = true
        console.log(res)
      })      
    },
    cancel() {
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style>

</style>