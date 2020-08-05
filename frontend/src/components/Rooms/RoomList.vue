<template>
  <ul>
    <RoomListDetail class="my-5" v-for="room in rooms" :key="room.roomId" :room="room"/>
  </ul>
</template>

<script>
import axios from 'axios'
import RoomListDetail from '../Rooms/RoomListDetail.vue'

export default {
  name: 'RoomList',
  components: {
    RoomListDetail
  },
  data() {
    return {
      rooms: []
    }
  },
  created() {
    axios.get('http://localhost:3000/studyroom.json')
    .then(response => {
      // console.log(response)
      this.rooms = response.data.data
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
</script>

<style scoped>
ul {
  padding: 0 0 0 0
}

</style>