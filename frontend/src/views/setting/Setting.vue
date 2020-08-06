<template>
  <v-container>
    <v-alert v-if="isCompleteWithdrawal" type="success" dismissible>회원 탈퇴가 완료되었습니다.</v-alert>
    <v-alert v-if="isCompleteLogout" type="success" dismissible>로그아웃이 완료되었습니다.</v-alert>
    <div>

      <h5 class="py-5 pl-3">Settings</h5>
      <v-card @click="editProfile" flat height="40px" class="d-flex flex-row justify-space-between align-center">
        <div class="pl-3">회원정보 수정</div>
        <i class="fas fa-angle-right pr-3"></i>
      </v-card>
      <hr>
      <v-card @click="changePw" flat height="40px" class="d-flex flex-row justify-space-between align-center">
        <div class="pl-3">비밀번호 변경</div>
        <i class="fas fa-angle-right pr-3"></i>    
      </v-card>
      <hr>
      <v-card flat height="40px" class="d-flex flex-row justify-space-between align-center">
        <div class="pl-3">내 계정 비공개</div>
        <v-switch v-model="switch1"></v-switch>
      </v-card>
      <hr>
      <v-card data-target="#checkLogout" data-toggle="modal" flat height="40px" class="d-flex flex-row justify-space-between align-center">
        <div class="pl-3">로그아웃</div>
        <i class="fas fa-angle-right pr-3"></i>    
      </v-card>
      <hr>
      <v-card data-target="#checkWithdraw" data-toggle="modal" flat height="40px" class="d-flex flex-row justify-space-between align-center">
        <div class="pl-3">회원탈퇴</div>
        <i class="fas fa-angle-right pr-3"></i>    
      </v-card>
    </div>

    <!-- Logout Modal -->
    <div class="modal fade" id="checkLogout" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            로그아웃
          </div>
          <div class="modal-body">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            로그아웃 하시겠습니까?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">취소</button>
            <button @click="logout" type="button" class="btn btn-primary" data-dismiss="modal">로그아웃</button>
          </div>
        </div>
      </div>
    </div>

    <!-- withdrawal Modal -->
    <div class="modal fade" id="checkWithdraw" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            회원 탈퇴
          </div>
          <div class="modal-body">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
             정말 탈퇴하시겠습니까?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">취소</button>
            <button @click="withdrawal" type="button" class="btn btn-primary" data-dismiss="modal">회원탈퇴</button>
          </div>
        </div>
      </div>
    </div>
    
  </v-container>
</template>

<script>
import { mapActions } from "vuex"
import axios from "axios"

export default {
  name: "Setting",
  data() {
    return{
      loginUID : this.$route.params.UID,
      isCompleteWithdrawal : false,
      isCompleteLogout : false
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('logout')
      this.isCompleteLogout = true
    },
    ...mapActions(["logout"]),
    editProfile(){
      this.$router.push({ name: "EditProfile", params: this.loginUID })
    },
    changePw(){
      this.$router.push({ name: "ChangePw", params: this.loginUID })
    },
    withdrawal(){
      axios.post("http://localhost:8080/withdrawal", {
        id: this.loginUID
      })
      .then( res => {
        console.log(res)
        // 로그아웃
        this.$store.dispatch('logout')
        // 알람창
        this.isCompleteWithdrawal = true
        // 홈으로 이동 
        // this.$router.push({name: "Home"})
      })
      .catch( res => {
        this.isCompleteWithdrawal = true
        console.log(res)
      })
    }
    
  }
}
</script>

<style>

</style>
