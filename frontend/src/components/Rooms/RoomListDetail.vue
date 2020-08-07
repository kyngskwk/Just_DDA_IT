<template>
  <v-card class="mt-5 mb-0 mx-3 rounded-xl roomcard" style="width:100%">
    <div class="d-flex justify-content-between px-4 pt-2">
      <div class="overline">{{ licenseName }}</div>
      <div class="overline">{{ Dday }}</div>
    </div>
    <div class="headline mb-1 ml-4" style="">{{ room.roomTitle }}</div>
    <v-list-item>
      <v-list-item-content class="pt-0">
        <div class="d-flex justify-content-between" style="width:100%">
          <v-list-item-subtitle>방장 : {{ captainName }}</v-list-item-subtitle>
        </div>
        
        <div>
          <v-chip class="mt-2 mr-1 text-white" color="blue lighten-3" v-for="tag in hashtag" :key="tag">
            {{ tag }}
          </v-chip>
        </div>
        <!-- <v-list-item-subtitle class="hashtag">{{ hashtag }}</v-list-item-subtitle> -->
      </v-list-item-content>

      <v-card-actions class="pr-0 enterbtn flex-column">
        <v-list-item-subtitle v-if="this.curMembers != this.maxMembers" class="mb-3 text-end" style="width:100%"><span class="text-primary">{{ curMembers }}</span> / {{ maxMembers }}</v-list-item-subtitle>
        <v-list-item-subtitle v-else class="mb-3 text-end text-danger" style="width:100%"><span class="text-danger">{{ curMembers }}</span> / {{ maxMembers }}</v-list-item-subtitle>
        <v-btn v-if="!this.room.private" depressed color="indigo darken-2 text-white" class="rounded-xl mb-2" @click="goDetail">🔓둘러보기</v-btn>
        <v-btn v-if="this.room.private" depressed color="indigo darken-2 text-white" class="rounded-xl mb-2" @click="goPassword">🔐비밀방</v-btn>
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
      <v-card>
        <v-card-title class="headline blue lighten-2">
          비밀번호를 적어주세요.
        </v-card-title>

        <v-card-text class="mt-3 pb-1">

          <v-alert type="error" v-if="this.pwerror == true" class="my-7">비밀번호가 틀렸습니다.</v-alert>

          이 방은 비밀방입니다. <br> 방장이 지정한 비밀번호를 적어주세요.
          <v-text-field class="mt-3" v-model="inputPW" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'" name="input-10-1"
            label="비밀번호" counter @click:append="show1 = !show1"></v-text-field>        
          </v-card-text>

        <v-divider class="mt-0"></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="pink" text @click="dialog = false">취소하기</v-btn>
          <v-btn color="primary" text @click="pwconfirm">들어가기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-card>
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
      licenseName: this.room.licenseName,
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
    var testDate = new Date(this.room.testDate);
    var now = new Date();

    var gap = now.getTime() - testDate.getTime();
    this.Dday ='D -' + Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
  }
}
</script>

<style scoped>
/* 마우스 오버시 백그라운드 흐리게 */
.roomcard:hover {
    background-color:#eee;
}

.media-body {
    margin: auto 0;
}

.hashtag {
  font-weight: bold;
  color: #037bff
}

</style>