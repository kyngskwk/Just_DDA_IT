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
          :hostID="hostID"
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
    hostID: {
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
<<<<<<< HEAD
    axios.get('http://i3a102.p.ssafy.io/userstudyrooms.json')
=======
    axios.get('http://localhost:8080/study/getByUser', {
      params: {
        userId: this.hostID
      }
    })
>>>>>>> 5ab3ac852e7c213883e0b30fc424636d79169add
    .then( res => {
      this.myStudyRooms = res.data.object
      // console.log('스터디방')
      // console.log(res.data.object)
    })
    .catch( res => {
      // console.log('스터디방')
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