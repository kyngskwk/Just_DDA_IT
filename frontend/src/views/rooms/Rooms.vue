<template>
  <div>
    <div class="d-flex justify-content-between">
      <h2>스터디 검색하기</h2>
      <router-link to='/rooms/create' class="btn btn-success">스터디 방 만들기</router-link>
    </div>
    <RoomSearch/>
    <RoomList/>
  </div>
</template>

<script>
import RoomSearch from '../../components/rooms/RoomSearch'
import RoomList from '../../components/rooms/RoomList'


export default {
  name: 'Rooms',
  components: {
    RoomSearch,
    RoomList
  }
}
</script>

<style>

</style>