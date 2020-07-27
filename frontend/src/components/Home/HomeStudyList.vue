<template>
  <div class="ncs-study-rooms">
    <div class="blue-grey lighten-4 text-center">
      <h3>{{ StudyListMessage }}</h3>
    </div>
    <HomeStudyListItem 
      v-for="homeStudyItem in homeStudyList"
      :key="homeStudyItem.id"
      :homeStudyItem="homeStudyItem"
    />
  </div>
</template>

<script>
import axios from 'axios'
import HomeStudyListItem from './HomeStudyListItem.vue'
export default {
  name: 'HomeStudyList',
  components: {
    HomeStudyListItem
  },
  props: {
    StudyListMessage: {
      type: String
    }
  },
  created: function() {
    axios.get('http://localhost:3000/userstudyrooms.json')
    .then(res => {
      this.homeStudyList = res.data.data
    })
    .catch(err => console.log(err))
  },
  data: function() {
    return {
      homeStudyList : {
        type: Array
      }
    }
  }
}
</script>

<style>
.ncs-study-rooms {
    margin: 10px 0;
  }
</style>
