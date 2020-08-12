<template>
  <v-app>
    <!-- navbar -->
    <div class="logo">
      <img src="../public/logo/ddaitlogo2.png" alt="" width="100px">
    </div>
    <!-- <v-app-bar>

    </v-app-bar> -->
    
    <!-- main -->
    <v-main>
      <router-view :key="$route.fullPath"/>
    </v-main>
    <v-container class="spacing-playground pa-6 mb-10" fluid>
    </v-container>

    <!-- bottom navigation -->
    <!-- <v-bottom-navigation v-model="bottomNav" fixed color="indigo">
      <v-btn to="/">
        <span>홈</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
      

      <v-btn to="/license" value="license">
       <span>자격증</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      로그인 되어있을 때 => 유저 페이지로 이동 -->
      <!-- <v-btn clss="mystudy rounded-circle" v-if="isLogin" :to="{name: 'MyStudy', params: { UID: loginUID}}" color="pink" absolute top fab> -->
        <!-- <span>MyStudy</span> -->
        <!-- <v-icon>mdi-map-marker</v-icon> -->
      <!-- </v-btn> -->
      <!-- 로그인 안되어있을 때 => 로그인 페이지로 이동 -->
      <!-- <v-btn class="mystudy rounded-circle" v-if="!isLogin" :to="{name: 'Login'}" color="pink" absolute top fab> -->
        <!-- <span width="64">마이스터디</span> -->
        <!-- <v-icon>mdi-map-marker</v-icon> -->
      <!-- </v-btn> -->
<!--       
      <v-btn to="/rooms">
       <span>스터디룸</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

      <v-btn :to="{name: 'Setting', params: {UID: loginUID}}">
        <span>설정</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

    </v-bottom-navigation>  -->
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

      <v-col v-if="isLogin" cols="2" class="text-center pl-0" >
        <router-link  :to="{name: 'MyStudy', params: { UID: loginUID}}" class="text-decoration-none">
          <v-btn class="pl-0 pr-0 rounded-circle mystudy" top absolute fab height="80px" style="box-shadow: 0px 0px 3px 0.4px rgb(241, 86, 65);">
           <img src="../public/logo/ddaitlogo5.png" alt="" width="40px">
          </v-btn>
        </router-link>
      </v-col>

      <v-col v-if="!isLogin" cols="2" class="text-center pl-0">
        <router-link :to="{name: 'Login'}" class="text-decoration-none" width="50px">
          <v-btn class="pl-0 pr-0 rounded-circle mystudy" top absolute fab height="80px" style="box-shadow: 0px 0px 3px 0.4px rgb(241, 86, 65);">
           <img src="../public/logo/ddaitlogo5.png" alt="" width="40px">
          </v-btn>
        </router-link>
      </v-col>

      <v-col class="text-center pl-0" cols="2">
        <router-link to="/rooms" class="text-decoration-none">
          <v-btn class="text-center">
           <span>스터디룸</span>
            <v-icon class="icon">mdi-folder-pound-outline</v-icon>
          </v-btn>
        </router-link>
      </v-col>

      <v-col cols="2" class="text-center pl-0">
        <router-link :to="{name: 'Setting', params: {UID: loginUID}}" class="text-decoration-none" col-2>
          <v-btn class="text-center">
           <span>설정</span>
            <v-icon class="icon">mdi-account-circle</v-icon>
          </v-btn>
        </router-link>
      </v-col>
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
  // 로그인 여부
  computed : {
    isLogin() {
      return this.$store.state.member.isLogin
    },
    loginUID() {
      return this.$store.state.member.loginUID
    },
  }
}
</script>

<style scoped>
.logo {
  text-align: center;
  margin: 20px 0 50px
}
/* .router-link-exact-active > v-btn > .icon{
  color:palevioletred;
} */
.v-btn--active > .v-btn__content > span {
  color:#ED3847
}
.v-btn--active > .v-btn__content > i {
  color:#ED3847
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