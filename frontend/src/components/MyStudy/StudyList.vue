<template>
  <div>
    <h3>참여한 스터디방</h3>
    <StudyListItem 
    v-for="myStudyRoom in myStudyRooms"
    :key="myStudyRoom.id"
    :myStudyRoom="myStudyRoom"
    />
  </div>
</template>

<script>
import axios from 'axios'
import StudyListItem from '@/components/MyStudy/StudyListItem.vue'

export default {
  name: "StudyList",
  props: {
    user: {
      type: Object
    }
  },
  data () {
    return {
      myStudyRooms : []
    }
  },
  components : {
      StudyListItem
  },
  created () {
    // UID -(GET)-> 유저가 속한 StudyRoomList
    axios.get('http://localhost:3000/userstudyrooms.json')
    .then( res => {
      this.myStudyRooms = res.data.data
      console.log(this.myStudyRooms)
    })
  }
}
</script>

<style>

</style>