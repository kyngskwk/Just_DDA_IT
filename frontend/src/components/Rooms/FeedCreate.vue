<template>
  <div class="container">
    <div v-if="isLogin">
      <v-btn class="mx-2 fixed-top backbtn" fab dark small color="primary" @click="goBack">
        <v-icon dark>mdi-arrow-left</v-icon>
      </v-btn>
      <h3>오늘의 공부 인증하기</h3>
        <v-form ref="form">
          <v-file-input  show-size counter label="인증사진" :rules="rules" accept="image/png, image/jpeg, image/bmp" 
          outlined dense prepend-icon="mdi-camera" placeholder="오늘의 인증사진을 올려주세요." class="mt-8"></v-file-input>
          
          <v-textarea label="오늘의 공부 일기" class="mt-5" outlined v-model="studyContent"></v-textarea>

          <v-subheader class="pl-0 ">오늘의 공부 만족도</v-subheader>
          <v-slider v-model="studyDegree" :thumb-size="24" thumb-label="always">
          <template v-slot:thumb-label="{ value }">
            {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
          </template>
        </v-slider>
        </v-form>
    </div>
    <div v-if="!isLogin">
      <v-btn class="mx-2 fixed-top backbtn" fab dark small color="primary" @click="goBack">
        <v-icon dark>mdi-arrow-left</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedCreate',
  props: {
    roomId: {
      type: Number
    }
  },
  data () {
    return {
      UID: this.$store.state.member.loginUID,
      rules: [
        value => !value || value.size < 16000000 || '사진 크기는 16 MB까지 가능해요!',
      ],
      studyDegree: 20,
      satisfactionEmojis: ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'],
      studyContent: '',
      studyImage: ''
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.member.isLogin
		}
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  }
}
</script>

<style scoped>
.backbtn {
  z-index: 8;
  position: fixed;
  top: 65px
}
h3 {
  margin-top: 70px
}
</style>