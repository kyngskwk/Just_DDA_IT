<template>
<div>
  <v-card class="mt-5 mb-0 rounded-xl roomcard" style="width:100%">
    <div class="d-flex justify-content-between px-4 pt-2">
      <div class="overline toptitle">{{ licenseName }}</div>
      <div class="overline toptitle">{{ Dday }}</div>
    </div>
    <div class="headline mb-1 ml-4"><p class="roomtitle">{{ room.roomTitle }}</p></div>
    <v-list-item>
      <v-list-item-content class="pt-0 pb-0">
        <div class="d-flex justify-content-start pb-5" style="width:100%">
          <v-list-item-subtitle class="capdiv pt-2">
            <a @click="goProfile" class="capname">
              <v-list-item-avatar>
                <v-img v-if="this.userThumbnail != null" :src="'data:' + this.imagetype + ';base64,' + this.userThumbnail"></v-img>
                <v-img v-if="this.userThumbnail == null" src="../../../public/profile/profile.png"></v-img>
              </v-list-item-avatar>
              <span class="ml-0">{{ captainName }}</span>
            </a>
          </v-list-item-subtitle>
        </div>
        
        <div class="mb-2 mt-2">
          <v-chip class="mt-2 mr-1 hashtag" v-for="tag in hashtag" outlined :key="tag">
            {{ tag }}
          </v-chip>
        </div>
      </v-list-item-content>

      <v-card-actions class="pr-0 enterbtn flex-column">
        <v-list-item-subtitle v-if="this.maxMembers == 1" class="mb-3 text-end" style="width:100%"><span class="text-danger">개인방</span></v-list-item-subtitle>
        <v-list-item-subtitle v-if="this.curMembers != this.maxMembers" class="mb-3 text-end" style="width:100%"><span class="text-primary">{{curMembers }}</span> / {{ maxMembers }}</v-list-item-subtitle>
        <v-list-item-subtitle v-if="this.curMembers == this.maxMembers && this.maxMembers != 1" class="mb-3 text-end text-danger" style="width:100%"><span class="text-danger">{{ curMembers }}</span> / {{ maxMembers }}</v-list-item-subtitle>
        <v-btn v-if="!this.room.private" depressed class="rounded-xl mb-2 roombtn" style="background-color:#fd462e;" @click="goDetail">🔓둘러보기</v-btn>
        <v-btn v-if="this.room.private && this.UID != this.room.captain.id" depressed class="rounded-xl mb-2 roombtn" style="background-color:#fd462e;" @click="goPassword">🔐비밀방</v-btn>
        <v-btn v-if="this.room.private && this.UID == this.room.captain.id" depressed class="rounded-xl mb-2 roombtn" style="background-color:#fd462e;" @click="goDetail">🔐비밀방</v-btn>
      </v-card-actions>

<!-- 
      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar> --> 
    </v-list-item>
  
    

    <!--비밀번호 모달-->
    <v-dialog v-model="dialog" width="500">
      <v-card class="rounded-xl">
        <v-card-title class="headline text-white" style="background-color:#fd462e">
          <p class="font_k ma-0 mb-1">비밀번호를 적어주세요.</p>
        </v-card-title>

        <v-card-text class="mt-3 pb-1">

          <v-alert type="error" v-if="this.pwerror == true" class="my-7 font_k">비밀번호가 틀렸습니다.</v-alert>

          <p class="font-k">이 방은 비밀방입니다. <br> 방장이 지정한 비밀번호를 적어주세요.</p>
          <v-text-field class="mt-3 font_k" v-model="inputPW" outlined :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'" name="input-10-1"
            label="비밀번호" counter @click:append="show1 = !show1"></v-text-field>        
          </v-card-text>

        <v-divider class="mt-0"></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#fd462e" class="rounded-xl mb-2" style="border:1px solid #fd462e" outlined text @click="dialog = false">취소하기</v-btn>
          <v-btn style="background-color:#fd462e" class="rounded-xl mb-2 text-white" text @click="pwconfirm">들어가기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-card>
</div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'RoomListDetail',
  props: {
    room: {
      type: Object
    }
  },
  data() {
    return {
      UID: null,
      isLogin: false,
      licenseName: this.room.licenseName,
      imagetype: this.room.captain.imageType,
      userThumbnail: this.room.captain.userThumbnail,
      captainName: this.room.captain.userName,
      hashtag: this.room.roomHashtag,
      Dday: '',
      dialog: false,
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: 'Password',
      inputPW: '',
      pwerror: false,
      curMembers: this.room.curMembers,
      maxMembers: this.room.maxMembers
    }
  },
  methods: {
    goProfile() {
      this.$router.push({name: 'MyStudy', params: { UID:this.room.captain.id }})
    },
    goDetail() {
      this.$router.push({name: 'RoomDetail', params: { roomId:this.room.id }})
    },
    goPassword() {
      this.dialog = true
    },
    pwconfirm() {
      if (this.inputPW == this.room.roomPassword) {
        this.$router.push({name: 'RoomDetail', params: { roomId:this.room.id }})
      } else {
        this.pwerror = true
      }
    }
  },
  created() {
    if(localStorage.getItem('loginUID')){
      this.isLogin = true
      this.UID = localStorage.getItem('loginUID')
    } else if(sessionStorage.getItem('loginUID')) {
      this.isLogin = true
      this.UID = sessionStorage.getItem('loginUID')
    } else {
      this.isLogin = false
    }
    var testDate = new Date(this.room.testDate);
    var now = new Date();

    var gap = now.getTime() - testDate.getTime();
    if (gap > 0) {
      this.Dday ='D + ' + Math.floor(gap / (1000 * 60 * 60 * 24));
    }
    else if (gap > -1) {
      this.Dday ='D - Day';
    }
    else {
      this.Dday ='D -' + Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
    }
  }
}
</script>

<style scoped>
.capdiv {
  position: absolute;
  top: -20px;
  left: 0px;
}
.capdiv > a {
  position: relative;
  top:0px;
}
.roomcard {
  background-color:#fffbfb;
}
/* 마우스 오버시 백그라운드 흐리게 */
.roomcard:hover {
  background-color:#ffedeb;
}

.media-body {
    margin: auto 0;
}

.hashtag {
  border:1px solid #fd462e ;
  color: #fd462e ;
}
.capname {
  color:#fd462e ;
}
.roombtn {
  color: white;
}
.roomtitle {
  font-family: 'Black Han Sans', sans-serif;
  font-size: 30px;
  color:#505050;
}
.toptitle {
  color:#8d8d8d ;
}
</style>