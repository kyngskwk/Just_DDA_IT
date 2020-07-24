<template>
  <div>
    <div class="d-flex">
      <div class="thumbnail-wrapper">
        <img class="thumbnail" :src="user.userThumbnail">
      </div>
      <div class="profile d-flex flex-column align-items-start justify-content-center w-100">
        <div class="font-weight-bold">{{ user.userName }}</div>
        <div>{{ user.userEmail }}</div>
        <div v-if="!edit">{{ user.userContent }}</div>
        <div v-if="edit" style="width: 100%;">
          <div class="input-group">
            <textarea class="form-control" aria-label="With textarea" v-model="content"></textarea>
          </div>
          <button class="btn btn-primary" @click="saveProfile">저장</button>
          <button class="btn btn-primary" @click="closeEdit">취소</button>
        </div>
        <button class="btn btn-secondary" @click="editProfile" v-if="!edit">프로필 편집</button>
        <button class="btn btn-secondary">follow</button>
      </div>
    </div>
    <div class="follow d-flex justify-content-around">
      <div>follower : {{ followingNums }} </div> |
      <div>following : 0 </div> | 
      <div>♥ 100</div>
    </div>
    <hr>
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
        "followerIDs" : [],
        "followingIDs" : [],
        "followerNums" : '',
        "followingNums" : ''
      }
    },
    created() {

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
        this.content = this.user.userContent
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