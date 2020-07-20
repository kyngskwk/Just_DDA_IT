<template>
  <div>
    <div class="d-flex justify-content-between">
      <h2>스터디 검색하기</h2>
      <RoomCreate/>
    </div>
    <RoomSearch/>
    <RoomList/>
  </div>
</template>

<script>
import RoomCreate from '../components/Rooms/RoomCreate.vue'
import RoomSearch from '../components/Rooms/RoomSearch'
import RoomList from '../components/Rooms/RoomList'

export default {
  name: 'Rooms',
  components: {
    RoomCreate,
    RoomSearch,
    RoomList
  }
}
</script>

<style>

</style>