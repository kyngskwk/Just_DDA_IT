<template>
<div class="mb-10">
  <div v-if="this.content.length != 0">
    <span class="pink--text">{{this.content[0].searchThing}}</span> 을 <span class="pink--text">{{this.content[0].category}}</span>(으)로 검색한 결과입니다.
  </div>
  <v-row class="background">
    <div v-if="this.content.length != 0 && this.content[0].category == '이름'">
      <UserListItem/>
    </div>
    <div v-else>
      <RoomListDetail class="my-5" v-for="room in rooms" :key="room.id" :room="room"/>
    </div>
  </v-row>
</div>
</template>

<script>
import axios from 'axios'
import RoomListDetail from '../Rooms/RoomListDetail.vue'
import UserListItem from '../Rooms/UserListItem.vue'

export default {
  name: 'RoomList',
  components: {
    RoomListDetail,
    UserListItem
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
    axios.get(`http://${this.$store.state.address}:8080/study/getAll`)
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
        axios.get(`http://${this.$store.state.address}:8080/study/findStudyroomByHashtag`, {
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
        axios.get(`http://${this.$store.state.address}:8080/study/findStudyroomByLicense`, {
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
      else if (this.content[0].category == '방장') {
        axios.get(`http://${this.$store.state.address}:8080/study/findStudyroomByCaptain`, {
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
      else {
        axios.get(`http://${this.$store.state.address}:8080/study/searchMembers`, {
          params: {
            name:this.content[0].searchThing
          }
        })
        .then(response => {
          console.log(response)
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