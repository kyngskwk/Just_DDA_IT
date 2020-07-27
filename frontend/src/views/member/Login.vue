<template>
  <div>
    <div>
      <input v-model="userEmail" type="text" placeholder="이메일">
    </div>
    <div>
      <input v-model="password" type="text" placeholder="비밀번호">
    </div>
    <button @click="login">로그인</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      LoginData : {
        userEmail : null,
        password : null,
      }
    }
  },
  methods: {
    login() {
      this.$emit('submit-login-data', this.LoginData)
    }
  }
}
</script>

<style>

</style>