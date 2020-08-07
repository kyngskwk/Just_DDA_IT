<template>
<v-container fill-height style="max-width:350px">
  <v-layout align-center row wrap>
    <v-flex xs12>
      <v-alert 
        :value="isLoginError"
        type="error"
      >
        이메일과 비밀번호를 확인해주세요.
      </v-alert>
      <v-toolbar flat>
        <v-toolbar-title>로그인</v-toolbar-title>
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
          <label class="mr-5">
            <input v-model="autoLogin" type="checkbox"/>
            <span>자동 로그인</span>
          </label>
          <label>
            <input v-model="isSaveEmail" type="checkbox"/>
            <span>아이디 저장</span>
          </label>
        </div>
        <div class="my-2">
          <v-btn block large color="primary" dark @click="login(loginData)">로그인</v-btn>
        </div>
        <div>
          <div class="text-center d-flex justify-content-center">
            <a href="http://i3a102.p.ssafy.io/accounts/findPassword" class="text-decoration-none">비밀번호를 잊으셨나요?</a> 
          </div>
          <div class="text-center d-flex justify-content-center">
            <span>계정이 없으신가요?</span>
            <a href="http://i3a102.p.ssafy.io/accounts/signUP" class="ml-3 text-decoration-none">회원가입</a>
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