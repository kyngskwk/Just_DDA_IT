<template>
  <div>
      <h3>유저프로필 컴포넌트</h3>
      <img :src="user.thumbnail" width="300px" height="200px">
      <h4>{{ user.username }}</h4>
      <h4>합격 자격증</h4>
      <ul>
        <li v-for="myLicense in myLicenses" :key="myLicense.pk">
          {{ myLicense }}
        </li>
      </ul>
      <p>팔로워 : {{ followingNums }} | 팔로잉 : 0 </p>
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
        "myLicenseIDs": [],
        "myLicenses" : [],
        "followerIDs" : [],
        "followingIDs" : [],
        "followerNums" : '',
        "followingNums" : ''
      }
    },
    created() {
      // 1. UID로 합격한 자격증 ID 가지고 오기

      axios.get('http://localhost:8080/mylicense.json', {
        // params: {
        //   "UID" : this.UID 
        // }
      })
      .then(res => {
        // UID에 해당하는 자격증 정보만 온다고 가정
        // console.log(res.data.data)
        const myLicenseIDs = res.data.data
        console.log(myLicenseIDs)
        for (var i=0; i<myLicenseIDs.length; i++) {
          this.myLicenseIDs.push(myLicenseIDs[i].licenseId);
        }
        console.log(this.myLicenseIDs)
      })

      // 2. 자격증 ID로 해당 자격증 이름 가지고 오기 -> computed로 바꾸기

      // for(var myLicenseID in this.myLicenseIDs) {
      //   axios.get('http://localhost:3000/license.json', {
      //     // params: {
      //     //   "licenseId" : myLicenseID  
      //     // }
      //   })
      //   // licenseId에 해당하는 자격증 가지고 온다고 가정
      //   .then(res => {
      //     console.log(res.data.data)
      //     // this.myLicense.push()
      //   })
      // }

      axios.get('http://localhost:3000/license.json')
      .then(res => {
        const myLicenseIDs = res.data.data
        // console.log(res.data.data)
        for (var i=0; i<myLicenseIDs.length; i++) {
          this.myLicenses.push(myLicenseIDs[i].licenseTitle);
        }
        console.log(this.myLicenses)
      })

      // 3. 팔로워 ID 
      // follower가 UID인 following ID 들고 오기  
      // axios.get('http://localhost:3000/follow.json', {
      //   params :{
      //     "follower" : this.UID 
      //   }
      // })
      // .then(res => {
        
      // })
      axios.get('http://localhost:3000/follow.json')
      .then(res => {
        console.log(res.data.data)
        const followingIDs = res.data.data
        for (var i=0; i<followingIDs.length; i++) {
          this.followingIDs.push(followingIDs[i].following)
        }
        // 팔로잉 수 
        this.followingNums = this.followingIDs.length
      })

      // 4. 팔로잉 ID
      // following이 UID인 follower ID 들고 오기  
      // axios.get('http://localhost:3000/follow.json', {
      //   params :{
      //     "following" : this.UID 
      //   }
      // })
      // .then(res => {
    }
}
</script>

<style>

</style>