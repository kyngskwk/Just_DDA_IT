<template>
  <div class="home">
    <div class="home-navbar d-flex justify-space-between align-center">
      <span content=""></span>
      <a class="mr-4" href="#">로그인</a>

    </div>
    <hr class="m-0">
    <HomeFollowers />
    <hr class="m-0">
    <HomeBanner />


  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '../components/Home/HomeBanner.vue'
import HomeFollowers from '../components/Home/HomeFollowers.vue'
export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeFollowers
  }
}
</script>

<style scoped>
  
</style>
