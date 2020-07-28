<template>
  <div class="home">
    <div class="home-navbar">
      <div class="d-flex justify-end">
        <a class="mr-4" @click="changeUserState">로그인상태변경</a>
        <a v-show="isAuthenticated" class="mr-4 position-right" href="#">로그인</a>
        <a v-show="!isAuthenticated" class="mr-4 position-right" href="#">로그아웃</a>
      </div>
      <h1 class="text-center">자격증 따자</h1>

    </div>
    <hr class="m-0">
    <div>
      <span v-show="isAuthenticated" class="ml-4">당신의 팔로워</span>
      <span v-show="!isAuthenticated" class="ml-4">이번주 열정 스터디 멤버!</span>
    </div>
    <HomeFollowers />
    <hr class="m-0">
    <HomeBanner />
    <HomeStudyList :StudyListMessage="StudyListMessage" />


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
  },
  methods: {
    changeUserState: function() {
      this.isAuthenticated = !this.isAuthenticated
      if (this.isAuthenticated)
        this.StudyListMessage = "당신을 위한 추천 스터디방" 
      else
        this.StudyListMessage = "이번주 인기 스터디방"
    }
  },
  data: function() {
    return {
      isAuthenticated: false,
      StudyListMessage: "이번주의 인기 스터디방"
    }
  }
}
</script>

<style scoped>
  
</style>
