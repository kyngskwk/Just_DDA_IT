<template>
<v-container fill-height style="max-width:350px">
  <v-layout align-center justify-center row wrap style="position: relative;">
    <v-flex xs12>
      <v-alert 
        :value="isLoginError"
        color="#fd462e"
        outlined
        icon="mdi-cloud-alert"
        width="100%"
        style="position: absolute; top: 0%"
      >
        이메일과 비밀번호를 확인해주세요.
      </v-alert>
      <v-toolbar flat>
        <v-toolbar-title class="font_k" style="font-weight: bold">로그인</v-toolbar-title>
      </v-toolbar>
      <div class="pa-3">
        <v-text-field
          v-model="loginData.userEmail"
          label="이메일"
        ></v-text-field>
        <v-text-field
          v-model="loginData.password"
          label="비밀번호"
          type="password"
        ></v-text-field>
        <div>
          <!-- <label class="mr-5">
            <input v-model="autoLogin" type="checkbox"/>
            <span>자동 로그인</span>
          </label> -->
          <!-- {{ loginData.autoLogin }} -->
          <input type="checkbox" id="checkbox" v-model="loginData.autoLogin">
          <label for="checkbox" class="ml-2 font_k">자동로그인</label>
          <!-- <label>
            <input v-model="isSaveEmail" type="checkbox"/>
            <span>아이디 저장</span>
          </label> -->
        </div>
        <div class="my-2">
          <v-btn rounded block large color="#fd462e" class="font_k" dark @click="login(loginData)">로그인</v-btn>
        </div>
        <div>
          <div class="text-center d-flex justify-content-center">
            <a href="http://localhost:3000/accounts/findPassword" class="text-decoration-none font_k my-2">비밀번호를 잊으셨나요?</a> 
          </div>
          <div class="text-center d-flex justify-content-center">
            <span class="font_k">계정이 없으신가요?</span>
            <a href="http://localhost:3000/accounts/signup" class="ml-3 text-decoration-none font_k">회원가입</a>
          </div>
        </div>
        <hr>
      </div>
    </v-flex>
  </v-layout>  
</v-container>
</template>

<script>
import { mapActions } from "vuex"
// import axios from 'axios'

export default {
  name: 'Login',
  components: {
  },
  data() {
    return {
      loginData : {
        userEmail : null,
        password : null,
        isSaveEmail: false,
        autoLogin: false,
      }
    }
  },

  // 로그인 상태 가지고 오기
  computed: {
    isLoginError() {
      return this.$store.state.member.isLoginError
    }
    // ...mapState(["isLogin", "isLoginError"])
  },
  // 로그인 
  methods: {
    ...mapActions(["login"]),
    signup() {
      this.$router.push({name: 'Signup'})
    },
    onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
  }
}
</script>

<style scoped>
</style>