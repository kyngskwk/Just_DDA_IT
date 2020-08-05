<template>
  <v-card class="mx-auto" max-width="360" outlined>
    <v-list-item>
      <v-list-item-content>
        <div class="overline mb-4">{{ licenseName }}</div>
        <v-list-item-title class="headline mb-1">{{ room.roomTitle }}</v-list-item-title>
        <v-list-item-subtitle>방장 : {{ captainName }}</v-list-item-subtitle>
        <div>
          <v-chip class="mt-2 mr-1 text-white" color="blue lighten-3" v-for="tag in hashtag" :key="tag">
            {{ tag }}
          </v-chip>
        </div>
        <!-- <v-list-item-subtitle class="hashtag">{{ hashtag }}</v-list-item-subtitle> -->
        <v-list-item-subtitle color="danger">{{ Dday }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn v-if="this.room.Private" depressed color="primary" @click="goDetail">🔓둘러보기</v-btn>
      <v-btn v-if="!this.room.Private" depressed color="primary" @click="goDetail">🔐비밀방</v-btn>
    </v-card-actions>
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
      Dday: ''
    }
  },
  methods: {
    goDetail() {
      this.$router.push({name: 'RoomDetail', params: { roomId:this.room.roomId }})
    }
  },
  created() {
    var testDate = new Date(this.room.testDate);
    var now = new Date();

    var gap = now.getTime() - testDate.getTime();
    this.Dday ='D -' + Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;

    // license Id -> 이름 
    // axios.get('http://localhost:3000/license.json', {
    //   params :{
    //     licenseId: this.room.licenseId
    //   }
    // }).then(response => {
    //   console.log(response)
    // })

    // axios.get('http://localhost:3000/license.json')
    // .then(response => {
    //   // console.log(response)
    //   this.licenseTitle = response.data.data[this.room.licenseId]["licenseTitle"]
    // })

    // captinID -> UID -> user name
    // axios.get('http://localhost:3000/member.json', {
    //   params :{
    //     UID: this.room.captinID
    //   }
    // }).then(response => {
    //   console.log(response)
    // })

    // axios.get('http://localhost:3000/member.json')
    // .then(response => {
    //   // console.log(response) // -> data.data.username
    //   this.captainName = response.data.data[this.room.captainId]["userName"]
    // })

    // for (var i=0; i<this.room.roomHashtag.length; i++){
    //   this.hashtag += '#' + this.room.roomHashtag[i] + ' '
    // }
    
  }
}
</script>

<style scoped>
li {
    display: flex;
    cursor: pointer;
}

/* 마우스 오버시 백그라운드 흐리게 */
li:hover {
    background-color: #eee;
}

.media-body {
    margin: auto 0;
}

.hashtag {
  font-weight: bold;
  color: #037bff
}
</style>