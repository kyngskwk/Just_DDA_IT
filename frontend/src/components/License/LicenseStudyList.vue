<template>
  <div class="ncs-study-rooms">
    <h5>인기 스터디방</h5>
    <LicenseStudyListItem 
      v-for="licenseStudyItem in licenseStudyList"
      :key="licenseStudyItem.id"
      :licenseStudyItem="licenseStudyItem"
    />
  </div>
</template>

<script>
import axios from 'axios'
import LicenseStudyListItem from './LicenseStudyListItem.vue'
export default {
  name: 'LicenseStudyList',
  components: {
    LicenseStudyListItem
  },
  created: function() {
    axios.get('http://localhost:3000/userstudyrooms.json')
    .then(res => {
      this.licenseStudyList = res.data.data
    })
    .catch(err => console.log(err))
  },
  data () {
    return {
      licenseStudyList : {
        type: Object
      }
    }
  }
}
</script>

<style>
  .ncs-study-rooms {
    margin: 30px 0;
  }
</style>
