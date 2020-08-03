<template>
  <div class="container">
    <!-- <div class="d-flex justify-content-between">
      <h2>스터디 검색하기</h2> -->
      <div class="d-flex justify-content-between mt-5">
        <h3>스터디 룸</h3>
        <router-link to='/rooms/create' class="create-btn btn btn-success roomcreate">스터디 방 만들기</router-link>
      </div>
    <!-- </div> -->
    <RoomSearch/>
    <RoomList/>
  </div>
</template>

<script>
import RoomSearch from '../../components/Rooms/RoomSearch.vue'
import RoomList from '../../components/Rooms/RoomList.vue'


export default {
  name: 'Rooms',
  components: {
    RoomSearch,
    RoomList
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