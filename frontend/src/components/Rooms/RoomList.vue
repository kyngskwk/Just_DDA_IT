<template>
<div class="mb-10">
  <div v-if="this.content.length != 0">
    <span class="pink--text">{{this.content[0].searchThing}}</span> 을 <span class="pink--text">{{this.content[0].category}}</span>(으)로 검색한 결과입니다.
  </div>
  <v-row class="d-flex justify-content-center px-3">
    <div v-if="this.content.length != 0 && this.content[0].category == '이름'" style="width:900px">
      <UserListItem :members="members"/>
    </div>
    <div v-else style="width:900px">
      <RoomListDetail class="my-5 mr-3" v-for="room in rooms" :key="room.id" :room="room" style="width: 100%"/>
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
      members: []
    }
  },
  props: {
    roomset: {
      type: Array
    },
    fromroom: {
      type: Boolean
    },
    isSearch: {
      type: Boolean
    },
    content: {
      type: Array
    }
  },
  created() {
    if (this.fromroom == true) {
      this.rooms = this.roomset
      console.log('결과')
      console.log(this.rooms)
    } 
    else {
      // console.log(this.isSearch)
      axios.get(`http://${this.$store.state.address}:8080/study/getAll`)
      .then(response => {
        // console.log(response)
        this.rooms = response.data.object
      })
      .catch((error) => {
        console.log(error);
      })
    }
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
          this.members = response.data.object
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