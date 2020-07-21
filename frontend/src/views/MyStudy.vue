<template>
  <div>
      <UserProfile :user="user"/>
  </div>
</template>

<script>
import UserProfile from '@/components/MyStudy/UserProfile.vue'
import axios from 'axios'

export default {
    name : "MyStudy",
    data() {
        return {
            user: {}
        }
    },
    created() {
        axios.get('http://localhost:3000/member.json')
        .then(res => {
            this.user = res.data.data[0]
            console.log(this.user)
        })
    },
    components : {
        UserProfile,
    }
}
</script>

<style>

</style>