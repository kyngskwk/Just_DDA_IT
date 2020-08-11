<template>
  <div class="icon-followers">
    <div>
      <p class="ddaiter mb-1">이번주의 열정 따이터</p>
    </div>
    <horizontal-scroll>
      <i id="follower1" class="fas fa-user-circle fa-3x mx-2"></i>
      <i id="follower2" class="fas fa-user-circle fa-3x mx-2"></i>
      <i id="follower3" class="fas fa-user-circle fa-3x mx-2"></i>
      <i id="follower4" class="fas fa-user-circle fa-3x mx-2"></i>
      <i id="follower5" class="fas fa-user-circle fa-3x mx-2"></i>
      <i id="follower6" class="fas fa-user-circle fa-3x mx-2"></i>
      <i id="follower7" class="fas fa-user-circle fa-3x mx-2"></i>
      <i id="follower8" class="fas fa-user-circle fa-3x mx-2"></i>
      <i id="follower9" class="fas fa-user-circle fa-3x mx-2"></i>
      <i id="follower10" class="fas fa-user-circle fa-3x mx-2"></i>
    </horizontal-scroll>
  </div>
</template>

<script>
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'

export default {
  name: 'HomeFollowers',
  components: {
    HorizontalScroll
  }
}
</script>

<style>
.ddaiter {
  font-family: 'Black Han Sans', sans-serif;
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
