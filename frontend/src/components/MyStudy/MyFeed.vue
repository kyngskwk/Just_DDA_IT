<template>
  <div class="card-group row px-3">
    <!--뒤로가기-->
    <v-btn class="ml-3 fixed-top backbtn" fab dark small color="#fd462e" @click="goBack">
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>
    <MyFeedListContent 
      v-for="feed in feeds" 
      :key="feed.roomId" 
      :feed="feed"/>
  </div>
</template>

<script>
import axios from 'axios'
import MyFeedListContent from '../MyStudy/MyFeedListContent.vue'

export default {
  name: 'MyFeed',
  props : {
    hostID : {
      type: Number
    }
  },
  data() {
    return {
      feeds: {}
    }
  },
  components: {
    MyFeedListContent
  },
  methods: {
    goBack() {
      this.$emit('goBack')
    },
  },
  created() {
    // 피드 데이터 받아오기
    axios.get(`http://${this.$store.state.address}:8080/feed/getByUser`, {
      params:{
        userId: this.hostID
      }
    })
    .then( res => {
      console.log('피드')
      console.log(res.data)
      // console.log(res.data.object[0].studyroom.license.licenseName)
      this.feeds = res.data.object
      console.log(this.feeds)
    })
    .catch( res => {
      console.log(res)
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
</style>