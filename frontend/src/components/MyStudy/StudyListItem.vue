<template>
  <div>
    
    <div class="card text-center">
      <div class="card-header">자격증 : {{ licenseTitle }}</div>
      <div class="card-body">
        <h5 class="card-title">{{ myStudyRoom.roomTitle }}</h5>
        <p class="card-text">{{ myStudyRoom.roomInfo }}</p>
        <p class="card-text hashtag">{{ myStudyRoom.roomHashtag }}</p>
        <a href="#" class="btn btn-primary">참여하기</a>
      </div>
      <!-- <div class="card-footer text-muted">
        {{ Dday }}
      </div> -->
    </div>
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
      axios.get('http://localhost:3000/onelicense.json')
      .then( res => {
        console.log(res.data.data[0].licenseTitle)
        this.licenseTitle = res.data.data[0].licenseTitle
      })
  }
}
</script>

<style>

</style>