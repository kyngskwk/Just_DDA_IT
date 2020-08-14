<template>
<v-container fill-height style="max-width:350px">
  <v-layout align-center row wrap>
    <v-flex xs12>      
      <v-toolbar flat>
        <v-toolbar-title>회원가입</v-toolbar-title>
      </v-toolbar>
      <div class="pa-3">
        <div class="d-flex align-center row pa-3">
          <v-text-field
            v-model="signupData.userEmail"
            label="이메일"
          ></v-text-field>
          <v-btn :disabled="inActive" @click="submit" class="ml-3" color="primary">인증받기</v-btn>
        </div>
        <!-- 인증 확인 폼 -->
        <div v-if="isSendEmail" class="d-flex align-center row pa-3">
          <v-text-field
            v-model="inputCode"
            label="인증번호를 입력하세요"
          ></v-text-field>
          <v-btn @click="certify" class="ml-3" color="primary" :disabled="emailComplete">인증하기</v-btn>        </div>

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
import axios from "axios"
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
      isSubmit: false,
      readyToCertify: false,
      isSendEmail: false,
      certifyCode: null,
      inputCode: null,
      emailComplete: false,
      inActive: false
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
    submit() {
      this.inActive = true
      // 이메일 보내서 인증번호 메일 전송하기 
      axios.post('http://${state.address}:8080/checkemail', {
        userEmail: this.signupData.userEmail
      })
      .then( res => {
        console.log(res)
        // certifyCode에 저장 
        this.certifyCode = res.data.object
        // 인증번호 입력 폼, 인증하기 버튼 생성
        this.isSendEmail = true
        // 알람보내기
        alert('인증번호가 전송되었습니다.')
        this.inActive = false
      })
      .catch( function() {
        // alert 띄우기 해당 이메일이 이미 가입되어있는경우
        alert('이미 가입된 이메일입니다.')
      })
    },
    certify() {
      // 인증번호 확인하기 
      if (this.certifyCode == this.inputCode){
        this.emailComplete = true
        alert('이메일 인증이 완료되었습니다.')
        this.inActive = true
        // console.log('인증')
      } else {
        // 알람 띄우기 
        // console.log('인증 실패')
        alert('인증번호를 확인해주세요')
      }
  
    },
    checkEmail() {
      if (this.signupData.userEmail.length >= 0 && !EmailValidator.validate(this.signupData.userEmail)){
        this.readyToCertify = false
        this.error.email = "이메일 형식이 아닙니다."
        }
      else {
        this.error.email = false
        this.readyToCertify = true
      }
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
      if(this.isSubmit && this.emailComplete && this.signupData.userName && this.signupData.userEmail && this.signupData.password && this.passwordConfirm) {
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