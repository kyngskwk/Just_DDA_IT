<template>
  <div>
    <!--뒤로가기-->
    <v-btn class="ml-3 fixed-top backbtn" fab dark small color="#fd462e" @click="goBack">
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>
    <Calendar class="calendar"/>
    <!-- <div class="mt-2 d-flex">
      <p class="m-2 keyline-light font-weight-bold"> 일정 선택 : </p> 
      <DatePicker class="datepicker"/>
    </div> -->
  </div>
</template>

<script>
import Calendar from 'v-calendar/lib/components/calendar.umd'
// import DatePicker from 'v-calendar/lib/components/date-picker.umd'

export default {
  name: 'RoomSearch',
  components: {
    Calendar,
    // DatePicker
  },
  methods: {
    goBack() {
      this.$emit('goBack')
    },
  }
}
</script>

<style scoped>
.backbtn {
  z-index: 8;
  position: fixed;
  top: 30px;
}
.calendar {
  width: 100%
}
.datepicker {
  width: 75%
}
</style>