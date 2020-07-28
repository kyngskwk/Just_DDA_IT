<template>
<v-container fill-height style="max-width:350px">
  <v-layout align-center row wrap>
    <v-flex xs12>
      <v-toolbar flat>
        <v-toolbar-title>회원가입</v-toolbar-title>
      </v-toolbar>
      <div class="pa-3">
        <v-text-field
          v-model="signupData.userEmail"
          label="이메일"
        ></v-text-field>
        <v-text-field
          v-model="signupData.userName"
          label="이름"
        ></v-text-field>
        <v-text-field
          v-model="signupData.password"
          label="비밀번호"
          type="password"
        ></v-text-field>
        <v-text-field
          v-model="signupData.passwordConfirm"
          label="비밀번호 확인"
          type="password"
        ></v-text-field>
      <div class="my-2">
        <v-btn block large color="primary" dark @click="signup(signupData)">회원가입</v-btn>
      </div>
    </div>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: 'SignUp',
  data() {
    return {
      signupData : {
        userEmail: null,
        userName: null,
        password: null
      },
      passwordConfirm: null
    }
  },
  methods: {
    ...mapActions(["signup"]),
  }
}
</script>

<style>

</style>