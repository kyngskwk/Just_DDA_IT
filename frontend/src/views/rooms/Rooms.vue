<template>
  <div class="container">
    <!-- <div class="d-flex justify-content-between">
      <h2>스터디 검색하기</h2> -->
      <div class="d-flex justify-content-center mt-5">
        <h3>Study with DDA IT !</h3>
      </div>
      <div class="d-flex justify-content-end">
        <v-btn rounded color="pink" @click="createroom" dark class="mt-2" block><v-icon left>mdi-message-draw</v-icon>방만들기</v-btn>
      </div>
        <!-- <router-link to='/rooms/create' class="create-btn btn rounded-pill pink">스터디 방 만들기</router-link> -->
      
    <!-- </div> -->
    <div>
      <v-row class="mt-3 d-flex justify-content-between">
        <v-col cols="4" md="2">
          <v-select v-model="searchselect" :items="searchAvailable" label="카테고리"></v-select>
        </v-col>
        <v-col cols="8">
          <v-text-field v-model="searchThing" label="검색어를 입력하세요" @keypress.enter="search"></v-text-field>
        </v-col>
      </v-row>
    </div>
    <!-- <RoomSearch/> -->
    <RoomList :content="content" :isSearch="isSearch" @search-end="searchend"/>
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
  data() {
    return {
      isSearch: false,
      searchselect: '키워드',
      searchAvailable: [
        '키워드',
        '자격증',
        '방장'
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
</style>