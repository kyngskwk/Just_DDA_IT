<template>
  <v-app>

    <div class="logo">
      <img src="../public/logo/ddaitlogo2.png" alt="" width="100px">
    </div>

    
    <!-- main -->
    <v-main>
      <router-view :key="$route.fullPath"/>
    </v-main>
    <v-container class="spacing-playground pa-6" fluid>
    </v-container>

    <v-bottom-navigation fixed row  class="d-flex justify-content-between" color="#ED3847">
      <v-col cols="2" class="pl-0">
        <router-link to="/" class="text-decoration-none">
        <v-btn class="text-center">
          <span>홈</span>
          <v-icon class="icon">mdi-home</v-icon>
        </v-btn>
        </router-link>
      </v-col>

      <v-col cols="2" class="text-center pl-0">
        <router-link to="/license" class="text-decoration-none">
          <v-btn class="pl-0 pr-0">
            <span>자격증</span>
            <v-icon class="icon">mdi-card-account-details-outline</v-icon>
          </v-btn>
        </router-link>
      </v-col>  

      <!-- 마이스터디 -->
      <v-col cols="2" class="text-center pl-0">
        <v-btn @click="goMyStudy" class="pl-0 pr-0 rounded-circle mystudy" top absolute fab height="80px" style="box-shadow: 0px 0px 3px 0.4px rgb(241, 86, 65);">
          <img src="../public/logo/ddaitlogo5.png" alt="" width="40px">
        </v-btn>
      </v-col>
      
      <!-- <v-col v-if="isLogin" cols="2" class="text-center pl-0" >
        <router-link  :to="{name: 'MyStudy', params: { UID: loginUID}}" class="text-decoration-none">
          <v-btn class="pl-0 pr-0 rounded-circle mystudy" top absolute fab height="80px" style="box-shadow: 0px 0px 3px 0.4px rgb(241, 86, 65); ">
          <img src="../public/logo/ddaitlogo5.png" alt="" width="40px">
          </v-btn>
        </router-link>
      </v-col> -->

      <v-col class="text-center pl-0" cols="2">
        <router-link to="/rooms" class="text-decoration-none">
          <v-btn class="text-center">
           <span>스터디룸</span>
            <v-icon class="icon">mdi-folder-pound-outline</v-icon>
          </v-btn>
        </router-link>
      </v-col>

      <v-col cols="2" class="text-center pl-0">
        <v-btn @click="goSetting" class="text-center">
          <span>설정</span>
          <v-icon class="icon">mdi-account-circle</v-icon>
        </v-btn>
      </v-col>

    <!-- <v-col v-if="!isLogin" cols="2" class="text-center pl-0">
      <router-link :to="{name: 'Login'}" class="text-decoration-none" col-2>
        <v-btn class="text-center">
          <span>설정</span>
          <v-icon class="icon">mdi-account-circle</v-icon>
        </v-btn>
      </router-link>
    </v-col> -->
   
    </v-bottom-navigation>


  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      bottomNav: 1,
    }
  },
  methods: {
    goSetting() {
      // 로그인 여부 확인
      if(localStorage.getItem('loginUID')){
        this.isLogin = true
        this.loginUID = localStorage.getItem('loginUID')
      } else if(sessionStorage.getItem('loginUID')) {
        this.isLogin = true
        this.loginUID = sessionStorage.getItem('loginUID')
      } else {
        this.isLogin = false
      }
      // 로그인 여부에 따른 router 이동 
      if(this.isLogin) {
        this.$router.push({name: 'Setting', params: {UID: this.loginUID}})
      } else {
        this.$router.push({ name: 'Login' })
      }
    },
    goMyStudy() {
      // 로그인 여부 확인
      if(localStorage.getItem('loginUID')){
        this.isLogin = true
        this.loginUID = localStorage.getItem('loginUID')
      } else if(sessionStorage.getItem('loginUID')) {
        this.isLogin = true
        this.loginUID = sessionStorage.getItem('loginUID')
      } else {
        this.isLogin = false
      }
      // 로그인 여부에 따른 router 이동 
      if(this.isLogin) {
        this.$router.push({name: 'MyStudy', params: {UID: this.loginUID}})
      } else {
        this.$router.push({ name: 'Login' })
      }
    }
  }
}
</script>
<style src="@/assets/css/font.css"></style>
<style>
.logo {
  text-align: center;
  margin: 20px 0 50px
}
/* .router-link-exact-active > v-btn > .icon{
  color:palevioletred;
} */
.v-btn--active > .v-btn__content > span {
  color:rgb(237, 56, 71);
  text-decoration-color:rgb(237, 56, 71);
}
.v-btn--active > .v-btn__content > i {
  color:rgb(237, 56, 71);
}
.v-btn--active {
  background-color: white;
}
.mystudy {
  background: #ED3847;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ED3847, #f15641);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ED3847,#f15641); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>