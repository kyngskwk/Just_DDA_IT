<template>
 <v-container fill-height style="max-width:350px">
  <v-layout align-center row wrap>
    <v-flex xs12>
      <!-- <v-alert 
        :value="isLoginError"
        type="error"
      >
        이메일과 비밀번호를 확인해주세요.
      </v-alert> -->
      <v-toolbar flat>
        <v-toolbar-title>비밀번호 변경</v-toolbar-title>
      </v-toolbar>
      <div class="pa-3">
        <v-text-field
          v-model="currentPassword"
          label="현재 비밀번호"
          type="password"
        ></v-text-field>
        <v-text-field
          v-model="newPassword"
          label="새 비밀번호"
          type="password"
        ></v-text-field>
        <div class="error-text" v-if="error.password">{{error.password}}</div>
        <v-text-field
          v-model="newPasswordConfirm"
          label="새 비밀번호 확인"
          type="password"
        ></v-text-field>
        <div class="error-text" v-if="error.passwordConfirm">{{error.passwordConfirm}}</div>
        <div class="my-2">
          <v-btn @click="changePassword" block large color="primary" dark >비밀번호 변경</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>  
</v-container>
</template>

<script>
import PV from "password-validator"
import axios from "axios"

export default {
  name: "ChangePw",
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
  data() {
    return{
      loginUID: this.$route.params.UID,
      currentPassword: null,
      newPassword: null,
      newPasswordConfirm: null,
      passwordSchema: new PV(),
      error: {
        password: false,
        passwordConfirm: false
      },
      isSubmit: false,
    }
  },
  watch: {
    "newPassword": function() {
      this.checkPassword()
    },
    "newPasswordConfirm": function(){
      this.checkPasswordConfirm()
    }
  },
  methods: {
    checkPassword() {
      if (
        this.newPassword.length >= 0 &&
        !this.passwordSchema.validate(this.newPassword)
      )
        this.error.password = "영문,숫자 포함 8 자리이상이어야 합니다."
      else this.error.password = false
    },
    checkPasswordConfirm() {
      if (this.newPasswordConfirm.length >= 0 &&
      this.newPassword != this.newPasswordConfirm
      )
        this.error.passwordConfirm = "동일한 비밀번호를 입력하세요."
      else this.error.passwordConfirm = false
    },
    changePassword() {
      // 현재 비밀번호 확인
      axios.post("http://localhost:8080/", {
        UID: this.loginUID,
        currentPassword: this.currentPassword
      })
      .then( function() {
        // 에러 확인 
        let checkError = true
        Object.values(this.error).map(v => {
          if (v) {
            checkError = false
          }
        })
        this.isSubmit = checkError
        if (this.isSubmit){
          axios.post("http://localhost:8080/", {

          })
          .then( function() {

          })
          .catch( function() {
            
          })
        } else {
          alert("새 비밀번호를 확인해주세요.")
        }
      })
      .catch( function() {
        alert("현재 비밀번호를 확인해주세요.")
      })
    }
  }
}
</script>

<style>

</style>