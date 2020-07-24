<template>
  <div>
    <div class="d-flex">
      <div class="thumbnail-wrapper">
        <img class="thumbnail" :src="user.userThumbnail">
      </div>
      <div class="profile d-flex flex-column align-items-start justify-content-center">
        <div class="font-weight-bold">{{ user.userName }}</div>
        <div>{{ user.userEmail }}</div>
        <div>{{ user.userContent }}</div>
        <div v-if="edit" style="width: 100%;">
          <div class="input-group">
            <textarea class="form-control" aria-label="With textarea" v-model="content"></textarea>
          </div>
          <button class="btn btn-primary" @click="saveProfile">저장</button>
          <button class="btn btn-primary" @click="closeEdit">취소</button>
        </div>
        <button class="btn btn-primary" @click="editProfile" v-if="!edit">프로필 편집</button>
      </div>
    </div>
    <div class="follow d-flex justify-content-around">
      <div>follower : {{ followingNums }} </div> |
      <div>following : 0 </div> | 
      <div>♥ 100</div>
    </div>
    <hr>
    



    <h4>합격 자격증</h4>
    <ul>
      <li v-for="myLicense in myLicenses" :key="myLicense.pk">
        {{ myLicense }}
      </li>
    </ul>
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
        "content": '',
        "edit": false,
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

      axios.get('http://localhost:3000/mylicense.json', {
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
    },
    methods : {
      editProfile () {
        this.edit = true
      },
      closeEdit () {
        this.edit = false
      },
      saveProfile () {
        // 서버에 profile 저장
        axios.post(''), {
          params: {
            userContent: this.content
          }
        }
      }
    }
}
</script>

<style>
  .thumbnail-wrapper {
    width: 25%;
  }

  .thumbnail {
    border-radius: 90%;
    max-width: 100%;
    height: auto;
  }

  .profile {
    margin-left: 50px;
  }

  .form-control {
    width: 100%;
  }

  .follow {
    margin-top: 20px;
  }
</style>