<template>
  <div class="ncs-study-rooms container">
    <div class="blue-grey lighten-4 text-center">
      <h3>{{ StudyListMessage }}</h3>
    </div>
    <HomeStudyListItem
      v-for="homeStudyItem in homeStudyList"
      :key="homeStudyItem.id"
      :homeStudyItem="homeStudyItem"
    />

    <div id="bottomSensor"></div>
    <div class="end-block text-center blue-grey--text lighten-2">페이지의 끝. 추후 인피티니 스크롤 추가예정</div>
  </div>
</template>

<script>
import axios from "axios";
import HomeStudyListItem from "./HomeStudyListItem.vue"
export default {
  name: "HomeStudyList",
  components: {
    HomeStudyListItem,
  },
  props: {
    StudyListMessage: {
      type: String,
    },
  },
  created: function () {
    axios
      .get("http://localhost:3000/userstudyrooms.json")
      .then((res) => {
        this.homeStudyList = res.data.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    // 추가로 스터디룸 불러옴
    getStudyRooms: function () {
      axios.get('http://localhost:3000/studyroom.json')
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
      homeStudyList: {
        type: Array,
      },
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