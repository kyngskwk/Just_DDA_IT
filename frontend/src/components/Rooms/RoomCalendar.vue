<template>
  <div>
    <Calendar class="calendar" v-model="dates" mode="multiple"/>
  </div>
</template>

<script>
import Calendar from 'v-calendar/lib/components/calendar.umd'

export default {
  name: 'RoomSearch',
  components: {
    Calendar,
  },
  props: {
    dateForStudyrooms: {
      type: Object
    }
  },
  data() {
    return {
      dates: ['2020-08-12']
    }
  },
  created() {
    console.log('여기')
    console.log(this.dateForStudyrooms)
    for(var i=0; i < this.dateForStudyrooms.length; i++) {
      this.dates.push(this.dateForStudyrooms[i].todoDate)
    }
    console.log(this.dates)
  }
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
