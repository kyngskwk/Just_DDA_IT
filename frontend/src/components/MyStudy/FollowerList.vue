<template>
  <div>
    <div class="d-flex flex-row align-items-center mt-3">
      <div class="pl-3" @click="goprofile(follower)">
        <v-img class="thumbnail" v-if="follower.userThumbnail != null" :src="'data:' + follower.imageType + ';base64,' + follower.userThumbnail"></v-img>
        <img v-show="!follower.userThumbnail" class="thumbnail" src="../../../public/mystudy/userprofile/default.jpg">
      </div>
      <div class="mx-3 font_k" @click="goprofile(follower)">{{ follower.userName }}</div>
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
  },
  methods: {
    goprofile(follower) {
      this.$router.push({name: 'MyStudy', params: { UID:follower.id }})
    }
  }
}
</script>

<style scoped>
.thumbnail {
  object-fit: cover;
  border-radius: 90%;
  width: 70px;
  /* max-width: 100%; */
  height: 70px;
}
</style>