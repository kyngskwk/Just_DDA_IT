<template>
  <div>
  </div>
</template>

<script>
import axios from "axios"


export default {
  name: "EditProfile",
  data(){
    return{
       loginUID : this.$route.params.UID,
       host: {}
    }
  },
  created() {
    // UID로 유저 정보 받아오기
    axios.post("http://localhost:8080/getUser", {
      id: this.loginUID
    })
    .then(res => {
        console.log("getUser Success.")
        // console.log(res.data)
        this.host = res.data.object
    })
    .catch( function(error) {
        // console.log(this.hostUID)
        console.log(error)
    })
  }
}
</script>

<style>

</style>