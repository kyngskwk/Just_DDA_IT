<template>
  <div>
      <h3>유저프로필 컴포넌트</h3>
      <img :src="user.thumbnail">
      <h4>{{ user.username }}</h4>
      <button><router-link to="/setting">프로필 편집</router-link></button>
  </div>
</template>

<script>

export default {
    name : "UserProfile",
    props : {
      user: {
        type: Object
      }
    },
    data () {
      return {
      }
    },
    methods : {

      
    }
}
</script>

<style>

</style>