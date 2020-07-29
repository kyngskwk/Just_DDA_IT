<template>
  <div>
    <div class="d-flex">
      <div class="thumbnail-wrapper">
        <img class="thumbnail" :src="host.userThumbnail">
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
      <v-btn v-if="!isSameUser" color="primary" @click="addfollower">follow</v-btn>
    </div>
    <!-- 팔로우/팔로워/좋아요 -->
    <div class="follow d-flex justify-content-around">
      <div>follower : {{ followingNums }} </div> |
      <div>following : 0 </div> | 
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
        "clientUID" : this.$store.state.member.loginUID,
        "followerNums" : '',
        "followingNums" : ''
      }
    },
    methods : {
      ...mapActions(['logout']),
      editProfile() {
        return this.$router.push({ name: 'Setting' })
      },
      addfollower() {
        // 호스트 유저의 팔로워에 추가 
        axios.post('http://localhost:8080/follow', {
          targetid: this.hostUID,
          uid: "1"
        })
        .then( function() {
          console.log();
        })
        .finally(function(){
          console.log(this.hostUID)
          console.log(this.clientUID)
        })
      }
    },
    computed : {
      isSameUser() {
        if (this.hostUID == this.clientUID) {
          return true
        } else {
          return false
        }
      },
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