<template>
  <div>
    <v-date-picker v-model="dates" multiple :landscape="landscape" :reactive="reactive" :fullWidth="fullWidth" @click:date="clickdate" mode="multiple"></v-date-picker>
    <v-dialog v-model="dialog" scrollable max-width="300px">
      <v-card>
        <v-chip class="ma-2" color="primary" v-for="content in this.modalcontent" :key="content">{{ content }}</v-chip>
        <v-card-actions class="d-flex justify-content-end mt-2">
          <v-btn color="red darken-3" fab small dark @click="modalClose"><v-icon>mdi-arrow-left-bold</v-icon></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'RoomSearch',
  props: {
    dateForStudyrooms: {
      type: Array
    },
    captainId: {
      type: Number
    }
  },
  data() {
    return {
      // 선택
      UID: this.$store.state.member.loginUID,
      dates: [],
      // 방장의 디폴트 값
      tododates: [],
      landscape: false,
      reactive: false,
      fullWidth: true,
      dialog: false,
      modalcontent: [],
    }
  },
  methods: {
    clickdate(date) {
      console.log(date)
      for(var idx=0; idx < this.dateForStudyrooms.length; idx++) {
        if(this.dateForStudyrooms[idx].todoDate == date) {
          this.modalcontent.push(this.dateForStudyrooms[idx].todoContent)
          console.log(this.modalcontent)
        }
      }
      if (this.modalcontent.length > 0) {
        this.dialog = true
      }
      this.dates = this.tododates
    },
    modalClose() {
      this.dialog = false
      this.modalcontent = '',
      this.dates = this.tododates
    }
  },
  created() {
    console.log(this.dateForStudyrooms)
    for(var i=0; i < this.dateForStudyrooms.length; i++) {
      this.tododates.push(this.dateForStudyrooms[i].todoDate)
    }
    this.dates = this.tododates
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
