<template>
  <div>
    <div class="d-flex flex-row align-items-center">
      <div class="thumbnail-wrapper">
        <img v-show="following.userThumbnail" class="thumbnail" :src="following.userThumbnail">
        <img v-show="!following.userThumbnail" class="thumbnail" src="../../../public/mystudy/userprofile/default.jpg" style="width:80px">
      </div>
      <div>{{ following.userName }}</div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'FollowingList',
  props: {
    following: {
      type: Object
    }
  }
}
</script>

<style>

</style>