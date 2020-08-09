<template>
<div>
  <div v-if="this.content.length != 0">
    <span class="pink--text">{{this.content[0].searchThing}}</span> 을 <span class="pink--text">{{this.content[0].category}}</span>(으)로 검색한 결과입니다.
  </div>
  <v-row>
    <RoomListDetail class="my-5" v-for="room in rooms" :key="room.roomId" :room="room"/>
  </v-row>
</div>
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
      rooms: [],
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
      console.log(this.content)
      axios.get('http://localhost:8080/study/getAll')
      .then(response => {
        console.log(response)
        this.rooms = response.data.object
        this.$emit('search-end')
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