<template>
  <div>
    <div class="d-flex flex-row align-items-center">
      <div class="thumbnail-wrapper">
        <img v-show="follower.userThumbnail" class="thumbnail" :src="follower.userThumbnail">
        <img v-show="!follower.userThumbnail" class="thumbnail" src="../../../public/mystudy/userprofile/default.jpg" style="width:80px">
      </div>
      <div>{{ follower.userName }}</div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'FollowerList',
  props: {
    follower: {
      type: Object
    }
  }
}
</script>

<style>

</style>