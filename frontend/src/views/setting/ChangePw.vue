<template>
 <v-container fill-height style="max-width:350px; position:relative">
  <v-layout align-center row wrap>
    <v-flex xs12>
      <v-alert 
        :value="complete"
        type="success"
        outlined
        icon="mdi-cloud-alert"
        width="100%"
        style="position: absolute; top: 0%"
        dense
      >
        비밀번호가 변경되었습니다.
      </v-alert> 
      <v-alert 
        :value="passwordError"
        color="#fd462e"
        outlined
        icon="mdi-cloud-alert"
        width="100%"
        style="position: absolute; top: 0%"
        dense
      >
        비밀번호를 확인해주세요.
      </v-alert> 

      <v-toolbar flat>
        <v-toolbar-title class="font_k" style="font-weight: bold">비밀번호 변경</v-toolbar-title>
      </v-toolbar>
      <div class="pa-3">
        <v-text-field
          v-model="currentPassword"
          label="현재 비밀번호"
          color="#fd462e"
          type='password'
        ></v-text-field>
        <v-text-field
          v-model="newPassword"
          label="새 비밀번호"
          color="#fd462e"
          :hint="error.password"
          type='password'
        ></v-text-field>
        <v-text-field
          v-model="newPasswordConfirm"
          label="새 비밀번호 확인"
          color="#fd462e"
          :hint="error.passwordConfirm"
          type='password'
        ></v-text-field>

        <div class="d-flex justify-center mt-5">
          <v-btn class="mr-2" @click="cancel" rounded large outlined color="#fd462e" style="width:30%">취소</v-btn>
          <v-btn class="mr-2 px-3" @click="changePassword"  rounded dark large color="#fd462e" style="width:45%">비밀번호 변경</v-btn>
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
      complete: false,
      passwordError: false,

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
      this.checkFormConfirm()
    },
    "newPasswordConfirm": function(){
      this.checkPasswordConfirm()
      this.checkFormConfirm()
    },
    "complete": function(){
      setTimeout(() => {
        this.complete = false
      },3000)
    },
    "passwordError": function(){
      setTimeout(() => {
        this.passwordError = false
      },3000)
    }
  },
  methods: {
    cancel() {
      this.$router.push({name: 'Setting', UID: this.loginUID})
    },

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
      axios.post(`http://${this.$store.state.address}:8080/changePassword`, {
        UID: this.loginUID,
        currentPassword : this.currentPassword,
        newPassword: this.newPassword
      })
      .then( res => {
        console.log(res)
        this.complete = true
        this.passwordError = false
      })
      .catch( () => {
        // console.dir(res.data.data)
        this.passwordError = true
      })
    },
    checkFormConfirm () {
      let checkError = true
      Object.values(this.error).map(v => {
        if (v) {
          checkError = false
        }
      })
      this.isSubmit = checkError
      // 모든 값이 차있음 
      if(this.currentPassword && this.isSubmit) {
        this.isSubmit = true
      } else {
        this.isSubmit = false
      }
    }
  }
}
        // // 에러 확인 
        // let checkError = true
        // Object.values(this.error).map(v => {
        //   if (v) {
        //     checkError = false
        //   }
        // })
        // this.isSubmit = checkError
</script>

<style>

</style>
