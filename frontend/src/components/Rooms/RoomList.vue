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
  props: {
    isSearch: {
      type: Boolean
    },
    content: {
      type: Array
    }
  },
  created() {
    console.log(this.isSearch)
    axios.get('http://localhost:8080/study/getAll')
    .then(response => {
      console.log(response)
      this.rooms = response.data.object
    })
    .catch((error) => {
      console.log(error);
    })
  },
  watch: {
    isSearch() {
      console.log(this.isSearch)
      axios.get('http://localhost:8080/study/getAll')
      .then(response => {
        console.log(response)
        this.rooms = response.data.object
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>
ul {
  padding: 0 0 0 0
}

</style>