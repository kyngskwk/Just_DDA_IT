<template>
  <v-container>
    <v-chip outlined color="#fd462e" class="d-flex justify-content-center" block>
      <span>{{ host.userName }}</span><span class="text-secondary">님의 MY STUDY</span>
    </v-chip>
    <v-row dense class="mt-1">
    <v-col cols="3" class="mt-5">
      <img v-show="host.userThumbnail" class="thumbnail" :src="thumbnail">
      <img v-show="!host.userThumbnail" class="thumbnail" src="../../../public/mystudy/userprofile/default.jpg">
    </v-col>
    <v-col cols="9">
      <div class="d-flex flex-column justify-center ml-2">

        <v-card v-if="showProfile" class="mt-3 rounded-xl ml-3" flat>
          <p class="font-weight-light my-1 font_e text-start">
          How about your <span style="color:#fd462e; font-weight:800;">DDA IT ?</span></p>

          <p v-if="host.userContent != null" class="mb-1 font_k text-start">{{ host.userContent }}</p>
          <p v-if="host.userContent == null" class="mb-1 font_k text-start">오늘도 JUST DDA IT!</p>
          <div class="d-flex flex-row-reverse">
            <v-btn v-if="isSameUser" color="#505050" fab icon small dark @click="editProfile" class="mr-2 mb-1">
              <v-icon>mdi-pen</v-icon>
            </v-btn>
          </div>
        </v-card>
        <!-- 프로필 수정 폼 -->
        <div v-if="!showProfile" class="d-flex flex-column justify-center align-center">
          <v-textarea
            class="rounded-xl mt-3 font_k"
            solo
            auto-grow
            :counter="50"
            
            rows="2"
            v-model = host.userContent
            style="width:100%"
          ></v-textarea>
          <div>
            <v-btn rounded @click="editProfile" outlined color="#fd462e" class="font_k mr-2">취소</v-btn>
            <v-btn rounded dark color="#fd462e" class="font_k" @click="editProfile(); saveContent()">확인</v-btn>
          </div>
        </div>
      </div>
    </v-col>
    </v-row>
    

    <div class="d-flex flex-row justify-space-between align-center mt-3">
      <!-- 팔로우/팔로워/좋아요 -->
      <div class="follow d-flex mt-0">
        <!-- follower -->
        <v-dialog v-model="dialog1" fullscreen hide-overlay transition="dialog-bottom-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-chip v-bind="attrs" v-on="on" class="mr-2 font_k font-weight-bold" outlined color="#fd462e">팔로워
              <span class="badge badge-light ml-2 rounded-xl text-white" style="background-color:#fd462e">{{ followerNum }}</span>
            </v-chip>
            <!-- <div v-bind="attrs" v-on="on" class="text--primary mr-2 font_k font-weight-bold"><div>{{ followerNum }} </div> 팔로워</div>  -->
          </template>
          <v-card>
            <v-toolbar dark color="#fd462e">
              <v-btn icon dark @click="dialog1 = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title class="font_l_k">팔로워</v-toolbar-title>
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
            <v-chip v-bind="attrs" v-on="on" class="mr-2 font_k font-weight-bold" outlined color="#fd462e">팔로잉
              <span class="badge badge-light ml-2 rounded-xl text-white" style="background-color:#fd462e">{{ followingNum }}</span>
            </v-chip>
            <!-- <div v-bind="attrs" v-on="on" class="text--primary mr-2 font_k font-weight-bold"><div>{{ followingNum }}</div>팔로잉</div> -->
          </template>
          <v-card>
            <v-toolbar dark color="#fd462e">
              <v-btn icon dark @click="dialog2 = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title class="font_l_k">팔로잉</v-toolbar-title>
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
      <v-btn v-if="!isSameUser && !followState" class="rounded-xl text-white" color="#fd462e" @click="follow">follow</v-btn>
      <v-btn v-if="!isSameUser && followState" class="rounded-xl text-white" color="#fd462e" @click="unfollow">unfollow</v-btn>
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
      },
      thumbnail: {
        
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
        // 팔로우
        followState: false,
        followerList: null,
        followerNum: null,
        followingList: null,
        followingNum: null,  
        showProfile: true,
        dialog1: false,
        dialog2: false,
        notifications: false,
        sound: true,
        widgets: false
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
        // 호스트 유저의 팔로워에 추가 
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

  .thumbnail {
  border-radius: 90%;
  /* width: 30%; */
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