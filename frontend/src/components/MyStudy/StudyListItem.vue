<template>
  <div>
    <v-card class="mystudyrooms" outlined >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{ myStudyRoom.roomTitle }}</div>
        <v-list-item-title class="headline mb-1">{{ licenseTitle }}</v-list-item-title>
        <v-list-item-subtitle>D-day: {{ myStudyRoom.testDate }}</v-list-item-subtitle>
        <v-list-item-subtitle v-if="myStudyRoom.captain.id == hostID">방장</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  </div>
</template>

<script>
import axios from 'axios'

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
  created () {
      // 자격증 ID => 자격증 한개 
      axios.get('http://${this.$store.state.address}/onelicense.json')
      .then( res => {
        console.log(res.data.data[0].licenseTitle)
        this.licenseTitle = res.data.data[0].licenseTitle
      })
  }
}
</script>

<style>
.mystudyrooms {
  width: 250px;
  height: 150px;
}
</style>