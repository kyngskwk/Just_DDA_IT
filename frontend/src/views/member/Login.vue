<template>
<v-container fill-height style="max-width:350px">
  <v-layout align-center row wrap>
    <v-flex xs12>
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
      <div class="my-2">
        <v-btn block large color="primary" dark @click="login(loginData)">로그인</v-btn>
      </div>
    </div>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  name: 'Login',
  data() {
    return {
      loginData : {
        userEmail : null,
        password : null,
      }
    }
  },
  // 로그인 상태 가지고 오기
  computed: {
    ...mapState(["isLogin", "isLoginError"])
  },
  // 로그인 
  methods: {
    ...mapActions(["login"]),
  }
}
</script>

<style>

</style>