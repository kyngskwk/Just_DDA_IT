<template>
  <div class="card text-center">
    <div class="card-header">자격증 : {{ licenseTitle }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ room.roomTitle }}</h5>
      <p class="card-text">방장 : {{ captainName }}</p>
      <p class="card-text">{{ room.roomInfo }}</p>
      <p class="card-text hashtag">{{ hashtag }}</p>
      <a href="#" class="btn btn-primary">참여하기</a>
    </div>
    <div class="card-footer text-muted">
      {{ Dday }}
    </div>
  </div>
<!-- 
  <li>
    <div class="d-flex justify-content-between">
      <h5>{{ room.roomTitle }}</h5>
      <button class="btn btn-success">함께하기</button>
    </div>
    <div class="d-flex justify-content-between">
      <p></p>
      <p>{{ Dday }}</p>
    </div>
  </li> -->
</template>

<script>
import axios from 'axios'

export default {
  name: 'RoomListDetail',
  props: {
    room: {
      type: Object
    }
  },
  data() {
    return {
      'licenseTitle': '',
      'captainName': '',
      'hashtag': '',
      'Dday': ''
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

    axios.get('http://localhost:3000/license.json')
    .then(response => {
      // console.log(response)
      this.licenseTitle = response.data.data[this.room.licenseId]["licenseTitle"]
    })

    // captinID -> UID -> user name
    // axios.get('http://localhost:3000/member.json', {
    //   params :{
    //     UID: this.room.captinID
    //   }
    // }).then(response => {
    //   console.log(response)
    // })

    axios.get('http://localhost:3000/member.json')
    .then(response => {
      // console.log(response) // -> data.data.username
      this.captainName = response.data.data[this.room.captainId]["userName"]
    })

    for (var i=0; i<this.room.roomHashtag.length; i++){
      this.hashtag += '#' + this.room.roomHashtag[i] + ' '
    }
    
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