<template>
  <v-app>
    <!-- navbar -->
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>
    
    <!-- main -->
    <v-main>
      <router-view />
    </v-main>
    <v-container class="spacing-playground pa-6 mb-10" fluid>
      <v-main>
        <router-view />
      </v-main>
    </v-container>

    <!-- bottom navigation -->
    <v-bottom-navigation
    v-model="bottomNav"
    fixed
    >
      <v-btn to="/">
        <span>Home</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn to="/license">
       <span>License</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn :to="{name: 'MyStudy', params: { UID: loginUID}}">
        <span>MyStudy</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      
      <v-btn to="/rooms">
       <span>Rooms</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      
      <v-btn to="/setting">
        <span>Setting</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'App',
  computed: {
    ...mapState(["isLogin", "loginUID"])
  }
  // methods : {
  //   // 로그인 
  //   // 토큰 값 쿠키에 저장
  //   setCookie (token) {
  //     this.$cookies.set('auth-token', token)
  //     this.isLoggedIn = true
  //   },
  //   // 회원 정보 서버에 보내서 토큰 값(auth-token:~)받기 
  //   login(loginData) {
  //     axios.post('https://localhost8000/login', loginData)
  //     .then( res => {
  //       console.log(res.data.auth-token)
  //       this.setCookie(res.data.auth-token)
  //       this.$router.push({name: Home})
  //     })
  //   },

  //   // 로그아웃
  //   logout() {
  //     // 토큰 값 변수에 저장
  //     const requestHeaders = {
  //       headers: {
  //         'Authorization' : `Token ${this.$cookies.get('auth-token')}`
  //       }
  //     }
  //     axios.get('https://localhost8000/logout', null, requestHeaders)
  //     .then ( res => {
  //       console.log(res)
  //       this.$cookies.remove('auth-token')
  //       this.isLoggedIn = false
  //       this.$router.push({name: Home})
  //     })
  //   },

  //   //회원가입
  //   signup(signupData) {
  //     axios.post('https://localhost8000/join', signupData)
  //     .then(res => {
  //       this.setCookie(res.data.auth-token)
  //       this.$router.push({name: Home})
  //     })
  //   }
  // },
  // // 쿠키에 값 있으면 로그인 유지 
  // mounted () {
  //   if (this.$cookies.isKey('auth-token')){
  //     this.isLoggedIn = true
  //   } else {
  //     this.isLoggedIn = false
  //   }
  // },

};
</script>
