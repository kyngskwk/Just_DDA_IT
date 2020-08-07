<template>
  <v-row>
    <RoomListDetail class="my-5" v-for="room in rooms" :key="room.roomId" :room="room"/>
  </v-row>
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
    axios.get('http://i3a102.p.ssafy.io:8080/study/getAll')
    .then(response => {
      console.log(response)
      this.rooms = response.data.object
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