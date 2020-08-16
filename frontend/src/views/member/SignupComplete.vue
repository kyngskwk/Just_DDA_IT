<template>
  <v-container fill-height class="d-flex flex-column align-center mt-15" style="max-width:350px">
    <span style="color: #fd462e;">
      <i class="far fa-check-circle fa-3x"></i>
    </span>
    <h5 class="font_k mt-5" style="font-weight:bold">회원가입이 완료되었습니다!</h5>
    <div class="d-flex flex-column justify-center mt-10" style="width:80%">
      <v-btn @click="$router.push({name: 'Home'})" rounded outlined block color="#fd462e">메인화면</v-btn>
      <v-btn @click="$router.push({name: 'Login'})" rounded dark block color="#fd462e" class="mt-2">로그인</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'SignupComplete'
}
</script>

<style>

</style>