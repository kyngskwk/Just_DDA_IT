<template>
  <div>
    <Calendar class="calendar"/>
  </div>
</template>

<script>
import Calendar from 'v-calendar/lib/components/calendar.umd'

export default {
  name: 'RoomSearch',
  components: {
    Calendar,
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