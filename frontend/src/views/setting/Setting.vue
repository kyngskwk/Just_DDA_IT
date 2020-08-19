<template>
  <v-container>
    <div>
      <p class="settingtitle mb-5"><span>SETTING</span></p>
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
      <v-card @click="logoutDialog = true" flat height="40px" class="d-flex flex-row justify-space-between align-center">
        <div class="pl-3">로그아웃</div>
        <i class="fas fa-angle-right pr-3"></i>    
      </v-card>
      <hr>
      <v-card @click="memoutDialog = true" flat height="40px" class="d-flex flex-row justify-space-between align-center">
        <div class="pl-3">회원탈퇴</div>
        <i class="fas fa-angle-right pr-3"></i>    
      </v-card>
    </div>

    <!-- Logout Modal -->
    <v-dialog v-model="logoutDialog" width="500">
      <v-card class="rounded-xl">
        <v-card-title class="headline text-white" style="background-color:#fd462e">
          <p class="font_k ma-0 mb-1">로그아웃</p>
        </v-card-title>

        <v-card-text class="mt-5 pb-1">
          <p class="font-k" style="font-color:#505050">로그아웃 하시겠습니까?</p>       
        </v-card-text>

        <v-divider class="mt-0 mb-0"></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#fd462e" class="rounded-xl mb-2" style="border:1px solid #fd462e" outlined text @click="logoutDialog = false">취소하기</v-btn>
          <v-btn style="background-color:#fd462e" class="rounded-xl mb-2 text-white" text @click="logout(); logoutDialog = false">로그아웃</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
<!-- 
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
    </div> -->

    <!-- withdrawal Modal -->
    <v-dialog v-model="memoutDialog" width="500">
      <v-card class="rounded-xl">
        <v-card-title class="headline text-white" style="background-color:#fd462e">
          <p class="font_k ma-0 mb-1">회원탈퇴</p>
        </v-card-title>

        <v-card-text class="mt-5 pb-1">
          <p class="font-k" style="font-color:#505050">회원탈퇴 하시겠습니까?</p>       
        </v-card-text>

        <v-divider class="mt-0 mb-0"></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#fd462e" class="rounded-xl mb-2" style="border:1px solid #fd462e" outlined text @click="memoutDialog = false">취소하기</v-btn>
          <v-btn style="background-color:#fd462e" class="rounded-xl mb-2 text-white" text @click="withdrawal">탈퇴하기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- <div class="modal fade" id="checkWithdraw" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
    </div> -->
    <v-snackbar v-model="snackBar">
      로그아웃 되었습니다.
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="gologin">닫기</v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="snackBar2">
      회원 탈퇴가 완료되었습니다.
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="gologin">닫기</v-btn>
      </template>
    </v-snackbar>
    
  </v-container>
</template>

<script>
// import { mapActions } from "vuex"
import axios from "axios"

export default {
  name: "Setting",
  data() {
    return{
      snackBar: false,
      snackBar2: false,
      loginUID : this.$route.params.UID,
      logoutDialog: false,
      memoutDialog: false
    }
  },
  watch: {
    'snackBar': function() {
      setTimeout(() => {
        this.snackBar = false
      }, 2000)
    },
    'snackBar2': function() {
      setTimeout(() => {
        this.snackBar = false
      }, 2000)
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.snackBar = true
    },
    gologin() {
      this.$router.push({ name: 'Login' })
    },
    // ...mapActions(["logout"]),
    editProfile(){
      this.$router.push({ name: "EditProfile", params: this.loginUID })
    },
    changePw(){
      this.$router.push({ name: "ChangePw", params: this.loginUID })
    },
    withdrawal(){
      this.memoutDialog = false
      axios.post(`http://${this.$store.state.address}:8080/withdrawal`, {
        id: this.loginUID
      })
      .then( res => {
        console.log(res)
        // 로그아웃
        this.$store.dispatch('logout')
        this.snackBar2 = true
        // 알람창
        // 홈으로 이동 
        // this.$router.push({name: "Home"})
      })
      .catch( res => {
        console.log(res)
      })
    }
    
  }
}
</script>

<style>
.settingtitle {
  color: #fd462e;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  margin: 0 4px;
  font-weight: 800;
  margin: 0 0 20px 10px;
}


</style>
