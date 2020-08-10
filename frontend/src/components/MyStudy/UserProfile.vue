<template>
  <v-container>
      <div class="d-flex flex-row-reverse">
        <div class="thumbnail-wrapper">
          <img v-show="host.userThumbnail" class="thumbnail" :src="host.userThumbnail">
          <img v-show="!host.userThumbnail" class="thumbnail" src="../../../public/mystudy/userprofile/default.jpg">
        </div>
      </div>
    <div v-if="showProfile" class="my-5">
      <div class="d-flex justify-center align-center">
        <div>
        <h3 class="font-weight-bold" v-if="host.userContent != null ">{{ host.userContent }}</h3>
        <h3 class="font-weight-bold" v-if="host.userContent == null ">{{ host.userName }}님,</h3>
        <h3 class="font-weight-bold" v-if="host.userContent == null ">오늘도 JUST DDA IT!</h3>
        </div>
      </div>
      <div class="d-flex flex-row justify-space-between align-center">
        <div>{{ host.userName }}</div>
        <v-btn v-if="isSameUser" color="primary" fab small dark @click="editProfile">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
    </div>
    <!-- 프로필 수정 폼 -->
    <div v-if="!showProfile" class="d-flex flex-column justify-center align-center">
      <v-textarea
        solo
        auto-grow
        rows="2"
        v-model = host.userContent
        hint="오늘의 다짐을 입력해보세요!"
        style="width:100%"
      ></v-textarea>
      <div>
        <v-btn rounded @click="editProfile">취소</v-btn>
        <v-btn rounded color="primary" @click="editProfile(); saveContent()">확인</v-btn>
      </div>
    </div>

    <div class="d-flex flex-row justify-space-between align-center">
      <!-- 팔로우/팔로워/좋아요 -->
      <div class="follow d-flex mt-0">
        <!-- follower -->
        <v-dialog v-model="dialog1" fullscreen hide-overlay transition="dialog-bottom-transition">
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="text--primary mr-2"><div>{{ followerNum }} </div>팔로워</div> 
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
            <div v-bind="attrs" v-on="on" class="text--primary mr-2"><div>{{ followingNum }}</div>팔로잉</div>
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
      <v-btn v-if="!isSameUser && !followState" color="primary" @click="follow">follow</v-btn>
      <v-btn v-if="!isSameUser && followState" color="primary" @click="unfollow">unfollow</v-btn>
    </div>
    <!-- <v-btn v-if="isSameUser" @click="logout" small rounded>로그아웃</v-btn> -->
  </v-container>
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
        hostUID: this.$route.params.UID,
        clientUID: this.$store.state.member.loginUID,
        followState: false,
        followerList: null,
        followerNum: null,
        followingList: null,
        followingNum: null,  
        showProfile: true,
        // 팔로우
        dialog1: false,
        dialog2: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
    methods : {
      saveContent() {
        axios.post('http://localhost:8080/updateMyInfo', this.host)
        .then( res => {
          console.log(res) 
        })
        .catch( res => {
          console.log(res)
        })
      },
      ...mapActions(['logout']),
      editProfile() {
        this.showProfile = !this.showProfile
        // return this.$router.push({ name: 'Setting' })
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
    width: 15%;
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