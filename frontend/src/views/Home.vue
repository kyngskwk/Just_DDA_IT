<template>
  <div class="home">
    <div class="home-navbar">
      <div class="d-flex justify-end">
        <a class="mr-4">로그인상태변경</a>
        <a class="mr-4 position-right" href="#">로그인</a>
      </div>
      <h1 class="text-center">자격증 따자</h1>

    </div>
    <hr class="m-0">
    <HomeFollowers />
    <hr class="m-0">
    <HomeBanner />
    <HomeStudyList />


  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from '../components/Home/HomeBanner.vue'
import HomeFollowers from '../components/Home/HomeFollowers.vue'
import HomeStudyList from '../components/Home/HomeStudyList.vue'
export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeFollowers,
    HomeStudyList
  }
}
</script>

<style scoped>
  
</style>
