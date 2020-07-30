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
        <div>{{ host.userContent }}</div>
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
    <div class="follow d-flex">
      <i class="fas fa-user-friends mr-2"></i>
      <!-- follower -->
      <v-dialog v-model="dialog1" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" class="text--primary mr-2"><span class="font-weight-black">{{ followerNum }} </span>follower</div> 
        </template>
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog1 = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Follower</v-toolbar-title>
          </v-toolbar>
          <div>
            <FollowerList
              v-for="follower in followerList" 
              :key="follower.id"
              :follower="follower"
            />
          </div>
        </v-card>
      </v-dialog>
      <!-- following -->
      <v-dialog v-model="dialog2" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" class="text--primary mr-2"><span class="font-weight-black">{{ followingNum }} </span>following</div>
        </template>
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog2 = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Following</v-toolbar-title>
          </v-toolbar>
          <div>
            <FollowingList
              v-for="following in followingList" 
              :key="following.id"
              :following="following"
            />
          </div>
        </v-card>
      </v-dialog>
    </div>
    
  </div>
</template>


<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import FollowerList from '@/components/MyStudy/FollowerList.vue'
import FollowingList from '@/components/MyStudy/FollowingList.vue'

export default {
    name : "UserProfile",
    props : {
      host: {
        type: Object
      }
    },
    components : {
      FollowerList,
      FollowingList
    },
    data () {
      return {
        "hostUID": this.$route.params.UID,
        "clientUID" : this.$store.state.member.loginUID,
        "followState" : false,
        "followerList" : null,
        "followerNum" : null,
        "followingList" : null,
        "followingNum" : null,  

        "dialog1": false,
        "dialog2": false,
        "notifications": false,
        "sound": true,
        "widgets": false,
      }
    },
    methods : {
      ...mapActions(['logout']),
      editProfile() {
        return this.$router.push({ name: 'Setting' })
      },
      follow() {
        this.followState = true
        // 호스트 유저의 팔로워에 추가 git 
        axios.post('http://localhost:8080/follow', {
          targetid: this.hostUID,
          uid: this.clientUID
        })
        .then( res=> {
          console.log(res)
          axios.post('http://localhost:8080/getFollower', {
          targetid: this.hostUID
          })
          .then ( res => {
            console.log('후덜덜')
            console.log(this.followerList)
            this.followerList = res.data.object
            this.followerNum = res.data.object.length
          })
        })
        axios.post('http://localhost:8080/getFollower', {
        targetid: this.hostUID
        })
        .then ( res => {
          this.followerList = res.data.object
          this.followerNum = res.data.object.length
        })
      },
      unfollow() {
        this.followState = false
        axios.post('http://localhost:8080/unfollow', {
          targetid: this.hostUID,
          uid: this.clientUID
        })
        .then( res => {
          console.log(res)
          axios.post('http://localhost:8080/getFollower', {
          targetid: this.hostUID
          })
          .then ( res => {
            console.log(this.followerList)
            this.followerList = res.data.object
            this.followerNum = res.data.object.length
          })
        })
        axios.post('http://localhost:8080/getFollower', {
        targetid: this.hostUID
        })
        .then ( res => {
          this.followerList = res.data.object
          this.followerNum = res.data.object.length
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