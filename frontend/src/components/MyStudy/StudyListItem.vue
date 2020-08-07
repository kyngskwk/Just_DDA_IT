<template>
  <div>
    <v-card class="mx-auto" max-width="344" outlined >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{ myStudyRoom.roomTitle }}</div>
        <v-list-item-title class="headline mb-1">{{ licenseTitle }}</v-list-item-title>
        <v-list-item-subtitle>{{ myStudyRoom.testDate }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-btn text>입장</v-btn>
    </v-card-actions>
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
    }
  },
  data () {
    return {
      licenseTitle : ''
    }
  },
  created () {
      // 자격증 ID => 자격증 한개 
      axios.get('http://i3a102.p.ssafy.io/onelicense.json')
      .then( res => {
        console.log(res.data.data[0].licenseTitle)
        this.licenseTitle = res.data.data[0].licenseTitle
      })
  }
}
</script>

<style>

</style>