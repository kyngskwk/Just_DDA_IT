<template>
  <div class="ncs-study-rooms container mb-10">
    <div class="text-center font-weight-bold rounded-xl" style="color:#ffffff; background-color:#fd462e;">
      <h3 class="mt-1 font_e"><span class="font-weight-light pr-2">weekly</span>HOT DDAITER ROOM</h3>
    </div>
    <RoomListDetail
      v-for="room in rooms" 
      :key="room.id" 
      :room="room"/>
    <div id="bottomSensor"></div>
    <!-- <div class="end-block text-center blue-grey--text lighten-2">페이지의 끝. 추후 인피티니 스크롤 추가예정</div> -->
  </div>
</template>

<script>
import axios from "axios";
import RoomListDetail from "../Rooms/RoomListDetail.vue"
export default {
  name: "HomeStudyList",
  components: {
    RoomListDetail,
  },
  created: function () {
    axios.get(`http://${this.$store.state.address}:8080/study/hotRooms`)
    .then(response => {
      // console.log(response)
      this.rooms = response.data.object
    })
    .catch((error) => {
      console.log(error);
    })
  },
  methods: {
    // 추가로 스터디룸 불러옴
    getStudyRooms: function () {
      axios.get(`http://${this.$store.state.address}:8080/study/hotRooms`)
        .then(res => {
          console.log(res.data)
          /**
           * 여기에 차례대로 스터디방을 가져오는 로직 구현해야함. 백엔드와의 연동 필요
           * this.homeStudyList = [...this.homeStudyList, ...res.data]
           */
        })
        .catch(err => console.log(err.message))
    },
    // 바닥에 닿으면 추가로 가져오게 실행
    addScrollWatcher: function () {
      var scrollMonitor = require("scrollmonitor")
      const bottomSensor = document.querySelector("#bottomSensor");
      const watcher = scrollMonitor.create(bottomSensor);
      // watcher가 화면에 보이면, cb 하겠다.
      watcher.enterViewport(() => {
        console.log("___BOTTOM___");
        setTimeout(() => {
          this.getStudyRooms();
        }, 500);
      });
    },
  },
  data: function () {
    return {
      rooms: []
    };
  },
};
</script>

<style>
.ncs-study-rooms {
  margin: 10px 0;
}
.end-block {
  height: 120px;
}
</style>