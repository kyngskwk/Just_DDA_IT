<template>
  <div>
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
}
</script>

<style scoped>
.calendar {
  width: 100%
}
.datepicker {
  width: 75%
}
</style>