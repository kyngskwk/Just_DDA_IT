<template>
  <div>
    <div class="d-flex">
      <div class="thumbnail-wrapper">
        <img v-show="host.userThumbnail" class="thumbnail" :src="host.userThumbnail">
        <img v-show="!host.userThumbnail" class="thumbnail" src="../../../public/mystudy/userprofile/default.jpg">
      </div>
      <div class="profile d-flex flex-column align-items-start justify-content-center w-100">
        <div class="font-weight-bold">{{ host.userName }}</div>
        <div>{{ host.userEmail }}</div>
        <div v-if="!edit">{{ host.userContent }}</div>
      </div>
      <div>
        <v-btn v-if="isSameUser" @click="logout" small rounded>로그아웃</v-btn>
        <v-btn v-if="isSameUser" color="primary" fab small dark @click="editProfile">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
      
      <v-btn v-if="!isSameUser && !followState" color="primary" @click="follow">follow</v-btn>
      <v-btn v-if="!isSameUser && followState" color="primary" @click="unfollow">unfollow</v-btn>
    </div>
    <!-- 팔로우/팔로워/좋아요 -->
    <div class="follow d-flex justify-content-around">
      <div>follower : {{ followerNum }} </div> |
      <div>following : {{ followingNum }} </div> | 
      <div>♥ 100</div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
    name : "UserProfile",
    props : {
      host: {
        type: Object
      }
    },
    data () {
      return {
        "hostUID": this.$route.params.UID,
<<<<<<< HEAD
        "clientUID" : this.$store.state.member.loginUID,
        "followState" : false,
        "followerList" : null,
        "followerNum" : null,
        "followingList" : null,
        "followingNum" : null,  
=======
        "clientUID" : '1', //this.$store.state.member.loginUID,
        "followState" : false,
        "followerNums" : '',
        "followingNums" : ''
>>>>>>> 5639d1af7be6821e97db2cb804505af6a45ed307
      }
    },
    methods : {
      ...mapActions(['logout']),
      editProfile() {
        return this.$router.push({ name: 'Setting' })
      },
      follow() {
<<<<<<< HEAD
        this.followState = true
=======
>>>>>>> 5639d1af7be6821e97db2cb804505af6a45ed307
        // 호스트 유저의 팔로워에 추가 git 
        axios.post('http://localhost:8080/follow', {
          targetid: this.hostUID,
          uid: this.clientUID
        })
        .then( function() {
<<<<<<< HEAD
        })
      },
      unfollow() {
        this.followState = false
=======
          this.followState=true;
          console.log();
        })
        .finally(function(){
          console.log(this.hostUID)
          console.log(this.clientUID)
        })
      },
      unfollow() {
>>>>>>> 5639d1af7be6821e97db2cb804505af6a45ed307
        axios.post('http://localhost:8080/unfollow', {
          targetid: this.hostUID,
          uid: this.clientUID
        })
        .then( function() {
<<<<<<< HEAD
        })
      }
    },
    created() {
      // 팔로우 여부 
      axios.post('http://localhost:8080/followstate', {
        targetid: this.hostUID,
        uid: this.clientUID
      })
      .then( res => {
        this.followState = res.data.object
        console.log('here')
        console.log(res.data)
      })
      .catch( res => {
        console.log(res)
      })
      axios.post('http://localhost:8080/getFollowing', {
        targetid: this.hostUID
      })
      .then ( res => {
        console.log('here@@@')
        console.log(res.data)
        this.followingList = res.data.object
        this.followingNum = res.data.object.length
      })
      axios.post('http://localhost:8080/getFollower', {
        targetid: this.hostUID
      })
      .then ( res => {
        console.log('here!!!')
        this.followerList = res.data.object
        this.followerNum = res.data.object.length
      })
    },
    computed : {
      isSameUser() {
        if (this.hostUID == this.clientUID) {
          return true
        } else {
          return false
        }
      }
    },
    watch: {
=======
          this.followState=false;
          console.log();
        })
        .finally(function(){
          console.log(this.hostUID)
          console.log(this.clientUID)
        })
      }
    },
    created() {
      // 팔로우 여부 
      axios.post('http://localhost:8080/followstate', {
        targetid: this.hostUID,
        uid: this.clientUID
      })
      .then( res => {
        this.followState = res.data.object
        console.log('here')
        console.log(res.data)
      })
      .catch( res => {
        console.log(res)
      })
      .finally(function(){
        console.log('followcheck().')
      })
      // 팔로워 리스트
      axios.post('http://localhost:8080/getFollower', {
        targetid: this.hostUID
      })
      .then ( res => {
        console.log('here!!!')
        console.log(res.data)
      }),
      axios.post('http://localhost:8080/getFollowing', {
        targetid: this.hostUID
      })
      .then ( res => {
        console.log('here@@@')
        console.log(res.data)
      })
    },
    computed : {
      isSameUser() {
        if (this.hostUID == this.clientUID) {
          return true
        } else {
          return false
        }
      },
>>>>>>> 5639d1af7be6821e97db2cb804505af6a45ed307
    }
}
</script>

<style>
  .thumbnail-wrapper {
    width: 50%;
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