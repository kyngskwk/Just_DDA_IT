<template>
  <div>
    <h5>참여중인 스터디</h5>
    <horizontal-scroll>
      <div class="outer">
          <StudyListItem 
          mr-10
          v-for="myStudyRoom in myStudyRooms"
          :key="myStudyRoom.id"
          :myStudyRoom="myStudyRoom"
          />
      </div>
    </horizontal-scroll>
  </div>
</template>

<script>
import axios from 'axios'
import StudyListItem from '@/components/MyStudy/StudyListItem.vue'
// horizontal scroll
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'


export default {
  name: "StudyList",
  props: {
    hostId: {
      type: Number
    }
  },
  data () {
    return {
      myStudyRooms : []
    }
  },
  components : {
      StudyListItem,
      HorizontalScroll
  },
  created () {
    // UID -(GET)-> 유저가 속한 StudyRoomList
    axios.get('http://localhost:8080/study/getByUser', {
      params: {
        userId: this.hostId
      }
    })
    .then( res => {
      console.log('스터디방')
      console.log(res)
    })
    .catch( res => {
      console.log('스터디방')
      console.log(res)
    })
  }
}
</script>

<style scoped>
.horizontal-scroll {
    display: flex;
    width: 100%;
    height: 150px;
    border: solid 2px #2c3e50;
}
.outer {
    display: flex;
    flex: 1;
    width: 500px;
    height: 100%;
    margin-right: 10px;
    padding: 0 20px;
    flex-flow: row nowrap;
    align-items: center;
}
</style>