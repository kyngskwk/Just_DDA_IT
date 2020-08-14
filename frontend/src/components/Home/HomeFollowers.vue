<template>
  <div class="icon-followers">
    <div>
      <p class="ddaiter mb-1 font_e font-weight-bold"><span class="font-weight-light">Today's</span> BEST DDAITER</p>
    </div>
    <horizontal-scroll>
      <a href="">

      </a>
    </horizontal-scroll>
  </div>
</template>

<script>
import axios from 'axios'
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'

export default {
  name: 'HomeFollowers',
  components: {
    HorizontalScroll
  },
  created() {
    axios.get(`http://${this.$store.state.address}:8080/feed/likeRanking`)
    .then(res => {
      console.log(res)
    })
  }
}
</script>

<style>
.ddaiter {
  color: #fd462e;
  text-align: center;
  font-size: 20px;
}
.icon-followers {
  height: 90px;
}
.icon-followers > i {
  margin: 0 10px;
}
#follower1 {
  color: greenyellow;
}
#follower2 {
  color:goldenrod;
}
#follower3 {
  color: cadetblue;
}
#follower4 {
  color: royalblue;
}
#follower5 {
  color: greenyellow;
}
#follower6 {
  color:goldenrod;
}
#follower7 {
  color: cadetblue;
}
#follower8 {
  color: royalblue;
}
#follower9 {
  color: royalblue;
}
#follower10 {
  color: greenyellow;
}
</style>
