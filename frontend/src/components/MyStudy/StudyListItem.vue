<template>
<a :href="'/rooms/' + myStudyRoom.id">
    <v-card class="mystudyrooms rounded-xl mr-3" @click="goRoomDetail">
      <v-list-item three-line>
        <v-list-item-content>
          <p class="overline mb-1 font_k">{{ myStudyRoom.licenseName }}</p>
          <h5 class="mb-1 font_l_k" style="color:#505050;">{{ myStudyRoom.roomTitle }}</h5>
          <div class="d-flex flex-row justify-space-between align-end pt-5">
            <v-list-item-subtitle class="font_e">D-day<br>{{ myStudyRoom.testDate }}</v-list-item-subtitle>
            <v-list-item-subtitle v-if="myStudyRoom.captain.id == hostID" class="text-end" style="color:#fd462e; font-weight:bold;">🙋🏻 방장</v-list-item-subtitle>
          </div>
        </v-list-item-content>
      </v-list-item>
      <v-btn @click="goRoomDetail">go</v-btn>
    </v-card>
</a>
</template>

<script>

export default {
  name: "StudyListItem",
  props: {
    myStudyRoom: {
      type: Object
    },
    hostID: {
      type: Number
    }
  },
  data () {
    return {
      licenseTitle : ''
    }
  },
  methods: {
    goRoomDetail() {
      console.log(this.myStudyRoom.id)    
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.mystudyrooms {
  width: 250px;
  height: 150px;
}
</style>