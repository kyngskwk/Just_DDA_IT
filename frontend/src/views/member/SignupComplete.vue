<template>
  <v-container style="max-width:350px">
    <h4>회원가입이 완료되었습니다.</h4>
    <v-btn @click="$router.push({name: 'Home'})" block>메인화면</v-btn>
    <v-btn @click="$router.push({name: 'Login'})" block color="primary">로그인</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'SignupComplete'
}
</script>

<style>

</style>