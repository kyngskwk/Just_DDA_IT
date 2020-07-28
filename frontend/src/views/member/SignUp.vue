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
        <div class="error-text" v-if="error.email">{{error.email}}</div>
        <v-text-field
          v-model="signupData.userName"
          label="이름"
        ></v-text-field>
        <v-text-field
          v-model="signupData.password"
          label="비밀번호"
          type="password"
        ></v-text-field>
        <div class="error-text" v-if="error.password">{{error.password}}</div>
        <v-text-field
          v-model="passwordConfirm"
          label="비밀번호 확인"
          type="password"
        ></v-text-field>
        <div class="error-text" v-if="error.passwordConfirm">{{error.passwordConfirm}}</div>
      <div class="my-2">
        <v-btn block large color="primary" @click="signup(signupData)" :disabled="!isSubmit">회원가입</v-btn>

      </div>
    </div>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapActions } from "vuex"
import * as EmailValidator from "email-validator";
import PV from "password-validator";

export default {
  name: 'Signup',
  data() {
    return {
      signupData : {
        userEmail: null,
        userName: null,
        password: null,
      },
      passwordConfirm: null,
      passwordSchema: new PV(),
      error: {
        email: false,
        password: false,
        passwordConfirm: false
      },
      isSubmit: false
    }
  },
  created() {
    this.component = this;

    this.passwordSchema
      .is()
      .min(8)
      .is()
      .max(100)
      .has()
      .digits()
      .has()
      .letters()
  },
  watch: {
    'signupData.userEmail': function() {
      this.checkEmail()
      this.checkFormConfirm()

    },
    'signupData.password': function() {
      this.checkPassword()
      this.checkFormConfirm()

    },
    passwordConfirm: function() {
      this.checkPasswordConfirm()
      this.checkFormConfirm()
    },
    'signupData.userName' : function() {
      this.checkFormConfirm()
    }
  },
  methods: {
    ...mapActions(["signup"]),
    checkEmail() {
      if (this.signupData.userEmail.length >= 0 && !EmailValidator.validate(this.signupData.userEmail))
        this.error.email = "이메일 형식이 아닙니다."
      else this.error.email = false;
    },
    checkPassword () {
      if (
        this.signupData.password.length >= 0 &&
        !this.passwordSchema.validate(this.signupData.password)
      )
        this.error.password = "영문,숫자 포함 8 자리이상이어야 합니다."
      else this.error.password = false
    },
    checkPasswordConfirm () {
      if (this.passwordConfirm.length >= 0 &&
      this.signupData.password != this.passwordConfirm
      )
        this.error.passwordConfirm = "동일한 비밀번호를 입력하세요."
      else this.error.passwordConfirm = false
    },
    checkFormConfirm () {
      // 이메일, 비번 인풋값 에러 x 
      let checkError = true
      Object.values(this.error).map(v => {
        if (v) {
          checkError = false
        }
      })
      this.isSubmit = checkError
      // 모든 값이 차있음 
      if(this.isSubmit && this.signupData.userName && this.signupData.userEmail && this.signupData.password && this.passwordConfirm) {
        this.isSubmit = true
      } else {
        this.isSubmit = false
      }
    }
  }
}
</script>

<style scoped>

</style>