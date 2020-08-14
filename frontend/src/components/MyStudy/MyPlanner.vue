<template>
  <div>
    <!--뒤로가기-->
    <v-btn class="ml-3 fixed-top backbtn" fab dark small color="#fd462e" @click="goBack">
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>
    <v-date-picker v-model="dates" class="mt-3 rounded-xl" multiple :landscape="landscape" :reactive="reactive" :fullWidth="fullWidth" @click:date="clickdate" mode="multiple" color="#fd462e"></v-date-picker>
      <v-dialog v-model="dialog" scrollable max-width="250px">
        <v-card class="text-center">
          <div class="headline mb-1 mt-3">Todo List</div>
          <v-chip class="ma-2" outlined color="#fd462e" v-for="content in this.modalcontent" :key="content" >
            <v-icon left class="contentchip">mdi-checkbox-marked-circle</v-icon>
            {{ content }}
          </v-chip>
          <v-card-actions class="d-flex justify-content-end pa-0 mt-4">
            <v-btn color="#fd462e" class="text-white" block @click="modalClose">닫기</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </div>
</template>

<script>
// import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import axios from 'axios'

export default {
  name: 'RoomSearch',
  components: {
    // DatePicker
  },
  data() {
    return {
      dates: [],
      tododates: [],
      todothings: [],
      landscape: false,
      reactive: false,
      fullWidth: true,
      dialog: false,
      modalcontent: [],
    }
  },
  methods: {
    goBack() {
      this.$emit('goBack')
    },
    clickdate(date) {
      console.log(date)
      this.modalcontent = []
      for(var idx=0; idx < this.todothings.length; idx++) {
        if(this.todothings[idx].todoDate == date) {
          this.modalcontent.push(this.todothings[idx].todoContent)
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
      this.dates = this.tododates
      this.modalcontent = []
    },
  },
  created() {
    axios.get(`http://${this.$store.state.address}:8080/study/getAllMyTodo`, {
      params: {
        UID: this.$store.state.member.loginUID
      }
    })
    .then(res => {
      console.log(res)
      var todos = res.data.object
      for(var idx = 0; idx < todos.length; idx++){
        this.tododates.push(todos[idx].dateForStudyroom.todoDate)
        this.todothings.push({"todoDate" : todos[idx].dateForStudyroom.todoDate, "todoContent" : todos[idx].dateForStudyroom.todoContent})
      }
      this.dates = this.tododates
    })
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