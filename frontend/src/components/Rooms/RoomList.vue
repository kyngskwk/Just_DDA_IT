<template>
<div>
  <div v-if="this.content.length != 0">
    <span class="pink--text">{{this.content[0].searchThing}}</span> 을 <span class="pink--text">{{this.content[0].category}}</span>(으)로 검색한 결과입니다.
  </div>
  <v-row>
    <RoomListDetail class="my-5" v-for="room in rooms" :key="room.id" :room="room"/>
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
<<<<<<< HEAD
    axios.get('http://i3a102.p.ssafy.io:8080/study/getAll')
=======
    console.log(this.isSearch)
    axios.get('http://localhost:8080/study/getAll')
>>>>>>> 5ab3ac852e7c213883e0b30fc424636d79169add
    .then(response => {
      // console.log(response)
      this.rooms = response.data.object
    })
    .catch((error) => {
      console.log(error);
    })
  },
  watch: {
    isSearch() {
      if (this.content[0].category == '키워드') {
        axios.get('http://localhost:8080/study/findStudyroomByHashtag', {
          params: {
            roomHashtag:this.content[0].searchThing
          }
        })
        .then(response => {
          console.log(response)
          this.rooms = response.data.object
          // this.$emit('search-end')
        })
      }
      else if (this.content[0].category == '자격증') {
        axios.get('http://localhost:8080/study/findStudyroomByLicense', {
          params: {
            licenseName:this.content[0].searchThing
          }
        })
        .then(response => {
          console.log(response)
          this.rooms = response.data.object
          // this.$emit('search-end')
        })
      }
      else {
        axios.get('http://localhost:8080/study/findStudyroomByCaptain', {
          params: {
            captainName:this.content[0].searchThing
          }
        })
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
}
</script>

<style scoped>
ul {
  padding: 0 0 0 0
}

</style>