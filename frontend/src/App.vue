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
      <router-view :key="$route.fullPath"/>
    </v-main>
    <v-container class="spacing-playground pa-6 mb-10" fluid>
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

      <!-- 로그인 되어있을 때 => 유저 페이지로 이동 -->
      <v-btn v-if="isLogin" :to="{name: 'MyStudy', params: { UID: loginUID}}">
        <span>MyStudy</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      <!-- 로그인 안되어있을 때 => 로그인 페이지로 이동 -->
      <v-btn v-if="!isLogin" :to="{name: 'Login'}">
        <span>MyStudy</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      
      <v-btn to="/rooms">
       <span>Rooms</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      
      <v-btn :to="{name: 'Setting', params: {UID: loginUID}}">
        <span>Setting</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  // 로그인 여부
  computed : {
    isLogin() {
      return this.$store.state.member.isLogin
    },
    loginUID() {
      return this.$store.state.member.loginUID
    }
  }
}
</script>
