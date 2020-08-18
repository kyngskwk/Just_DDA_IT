<template>
  <div class="container">
    <!-- <div class="d-flex justify-content-between">
      <h2>스터디 검색하기</h2> -->
      <div class="d-flex justify-content-center mt-5">
        <h3 class="roomtitie"><span>STUDY with</span> DDA IT !</h3>
      </div>
      <div class="d-flex justify-content-end">
        <v-btn rounded @click="createroom" dark class="mt-2 create-btn" block><v-icon left>mdi-message-draw</v-icon>방만들기</v-btn>
      </div>
        <!-- <router-link to='/rooms/create' class="create-btn btn rounded-pill pink">스터디 방 만들기</router-link> -->
      
    <!-- </div> -->
    <div>
      <v-row class="mt-3 d-flex justify-content-between">
        <v-col cols="4" md="2" class="pb-0">
          <v-select v-model="searchselect" :items="searchAvailable" label="카테고리"></v-select>
        </v-col>
        <v-col cols="8" class="pb-0">
          <v-text-field v-model="searchThing" label="검색어를 입력하세요" @keypress.enter="search"></v-text-field>
        </v-col>
      </v-row>
    </div>
    <!-- <RoomSearch/> -->
    <RoomList :content="content" :isSearch="isSearch" :fromroom="fromroom" :roomset="roomset" @search-end="searchend"/>
  </div>
</template>

<script>
// import RoomSearch from '../../components/Rooms/RoomSearch.vue'
import RoomList from '../../components/Rooms/RoomList.vue'


export default {
  name: 'Rooms',
  components: {
    // RoomSearch,
    RoomList
  },
  created: function() {
    let obj = this.$attrs
    if ( Object.keys(obj).length !== 0) {
      this.searchselect = obj.searchselect
      this.searchThing = obj.searchThing
      this.search()
    }
  },
  methods: {
    createroom() {
      this.$router.push('/rooms/create')
    },
    search() {
      this.content = []
      this.isSearch =! this.isSearch
      this.content.push({'category':this.searchselect, 'searchThing':this.searchThing})
    },
    searchend() {
      this.searchThing = ''
    }
  },
  props: {
    fromroom: {
      type: Boolean
    },
    roomset: {
      type: Array
    }
  },
  data() {
    return {

      isSearch: false,
      searchselect: '키워드',
      searchAvailable: [
        '키워드',
        '자격증',
        '방장',
        '유저명'
      ],
      searchThing: '',
      content: []
    }
  }
}
</script>

<style scoped>
.create-btn {
  padding-top: 10px;
  text-decoration: none;
  color: white;
}
.roomtitie {
  color: #fd462e;
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  margin: 0 4px;
  font-weight: 800;
  margin: 0 0 20px 10px;
}
.roomtitie > span {
  color: #3c3c3c;
  font-weight: 200;
}
.create-btn {
  font-family: 'Nanum Gothic', sans-serif;
  background: #ED3847;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ED3847, #f15641);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ED3847,#f15641); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>