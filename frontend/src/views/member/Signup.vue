<template>
<v-container fill-height style="max-width:350px; position:relative">
  <v-layout align-center row wrap>
    <v-flex xs12> 
      <v-alert 
        :value="isEmailError"
        color="#fd462e"
        outlined
        icon="mdi-cloud-alert"
        width="100%"
        style="position: absolute; top: 0%"
        dense
      >
        이메일을 확인해주세요.
      </v-alert>     
      <v-alert 
        :value="emailExist"
        color="#fd462e"
        outlined
        icon="mdi-cloud-alert"
        width="100%"
        style="position: absolute; top: 0%"
        dense
      >
        이미 가입된 이메일입니다.
      </v-alert>  
      <v-alert 
        :value="wrongCode"
        color="#fd462e"
        outlined
        icon="mdi-cloud-alert"
        width="100%"
        style="position: absolute; top: 0%"
        dense
      >
        잘못된 인증번호입니다.
      </v-alert>  


      <v-alert 
        :value="emailSended"
        type="success"
        outlined
        icon="mdi-cloud-alert"
        width="100%"
        style="position: absolute; top: 0%"
        dense
      >
        인증번호가 전송되었습니다.
      </v-alert>     
      <v-alert 
        :value="isComplete"
        type="success"
        outlined
        icon="mdi-cloud-alert"
        width="100%"
        style="position: absolute; top: 0%"
        dense
      >
        이메일 인증이 완료되었습니다.
      </v-alert>     



      <v-toolbar flat class="d-flex mb-2">
        <v-toolbar-title class="font_k" style="font-weight: bold">회원가입</v-toolbar-title>
      </v-toolbar>

      <div class="px-3">
        <div class="d-flex align-center row py-0 px-3">
          <v-text-field
            v-model="signupData.userEmail"
            label="이메일"
            :hint="error.email"
            color="#fd462e"
          ></v-text-field>
          <v-btn :disabled="inActive" rounded @click="submit" class="ml-3 font_k" outlined color="#fd462e">인증받기</v-btn>
        </div>

        <!-- 인증 확인 폼 -->
        <div v-if="isSendEmail" class="d-flex align-center justify-center flex-row pt-2" style="width:80%">
          <v-text-field
            v-model="inputCode"
            label="인증번호"
            dense
            color="#fd462e"
          ></v-text-field>
          <v-btn @click="certify" class="ml-3" color="#fd462e" outlined rounded :disabled="emailComplete">인증하기</v-btn>        
        </div>

        <!-- <div class="error-text font_k" v-if="error.email">{{error.email}}</div> -->

        <v-text-field
          v-model="signupData.userName"
          label="이름"
          color="#fd462e"
          class="py-1 "
        ></v-text-field>

        <v-text-field
          v-model="signupData.password"
          label="비밀번호"
          class="py-1"
          color="#fd462e"
          :hint="error.password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          @click:append="show1 = !show1"
        ></v-text-field>

        <v-text-field
          v-model="passwordConfirm"
          label="비밀번호 확인"
          color="#fd462e"
          class="py-1"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          @click:append="show1 = !show1"
          :hint="error.passwordConfirm"
        ></v-text-field>

        <div class="d-flex justify-center mt-5">
          <v-btn class="mr-2" @click="cancel" rounded large outlined color="#fd462e" style="width:30%">취소</v-btn>
          <v-btn class="mr-2 px-3" @click="signup(signupData)" rounded dark large color="#fd462e" style="width:45%">회원가입</v-btn>
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
      show1: false,
      password: 'Password',
      // alert
      isEmailError: false,
      emailExist: false,
      emailSended: false,
      wrongCode: false,
      isComplete: false,

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
      inActive: false,
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
    'isEmailError': function() {
      setTimeout(() => {
        this.isEmailError = false
      },3000)
    },
    'emailExist': function() {
      setTimeout(() => {
        this.emailExist = false
      },3000)
    },
    'emailSended': function() {
      setTimeout(() => {
        this.emailSended = false
      },3000)
    },
    'isComplete': function() {
      setTimeout(() => {
        this.isComplete = false
      },3000)
    },
    'wrongCode': function() {
      setTimeout(() => {
        this.wrongCode = false
      },3000)
    },


    'inActive': function() {
      setTimeout(() => {
        this.inActive = false
      },3000)
    },
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
      // 이메일 형식 확인
      this.inActive = true
      if(this.signupData.userEmail == null || this.error.email){
        this.isEmailError = true
        this.isSendEmail = false
      } else {
        // 이메일 보내서 인증번호 메일 전송하기 
        axios.post(`http://${this.$store.state.address}:8080/checkemail`, {
          userEmail: this.signupData.userEmail
        })
        .then( res => {
          console.log(res)
          this.certifyCode = res.data.object
          this.emailSended = true
          this.isSendEmail = true
        })
        .catch( function() {
          this.emailExist = true
          console.log(this.emailExist)
        })
      }
      
    },
    certify() {
      // 인증번호 확인하기 
      if (this.certifyCode == this.inputCode){
        this.emailComplete = true
        this.isComplete = true
        this.inActive = true
        this.wrongCode = false
        // console.log('인증')
      } else {
        // 알람 띄우기 
        // console.log('인증 실패')
        this.wrongCode = true
        this.inActive = false
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
      var pattern1 = /[0-9]/; //숫자
      if (pattern1.test(this.signupData.password) == false) {
        this.error.password = "비밀번호에 숫자가 입력되지 않았습니다."
      }
      
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
    },
    cancel() {
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style scoped>

</style>