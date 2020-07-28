<template>
  <div class="icon-followers">
    <i id="follower1" class="fas fa-user-circle fa-3x"></i>
    <i id="follower2" class="fas fa-user-circle fa-3x"></i>
    <i id="follower3" class="fas fa-user-circle fa-3x"></i>
    <i id="follower4" class="fas fa-user-circle fa-3x"></i>
    <i id="follower5" class="fas fa-user-circle fa-3x"></i>
  </div>
</template>

<script>
export default {
  name: 'HomeFollowers'
}
</script>

<style>
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
</style>
