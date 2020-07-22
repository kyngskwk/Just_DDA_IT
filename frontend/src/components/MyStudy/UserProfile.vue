<template>
  <div>
      <h3>유저프로필 컴포넌트</h3>
      <img :src="user.thumbnail" width="300px" height="200px">
      <h4>{{ user.username }}</h4>
      <ul>
        <li v-for="myLicense in myLicenses" :key="myLicense.liceseId">
          {{ myLicense.licenseId }}
        </li>
      </ul>
      <button><router-link to="/setting">프로필 편집</router-link></button>
  </div>
</template>


<script>
import axios from 'axios'

export default {
    name : "UserProfile",
    props : {
      user: {
        type: Object
      }
    },
    data () {
      return {
        "UID": this.user.UID,
        "myLicenses": []
      }
    },
    created() {
      axios.get('http://localhost:3000/mylicense.json', {
        // params: {
        //   "UID" : this.UID 
        // }
      })
      .then(res => {
        // UID에 해당하는 자격증 정보만 온다고 가정
        // console.log(res.data.data)
        this.myLicenses = res.data.data
        console.log(this.myLicenses[0].licenseId)
      })
    }
}
</script>

<style>

</style>