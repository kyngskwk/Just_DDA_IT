<template>
  <div>
    <div class="card text-center">
      <div class="card-header">자격증 : </div>
      <div class="card-body">
        <h5 class="card-title">{{ licenseStudyItem.roomTitle }}</h5>
        <p class="card-text">{{ licenseStudyItem.roomInfo }}</p>
        <p class="card-text hashtag">{{ licenseStudyItem.roomHashtag }}</p>
        <a href="#" class="btn btn-primary">참여하기</a>
      </div>
      <!-- <div class="card-footer text-muted">
        {{ Dday }}
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'LicenseStudyListItem',
  props: {
    licenseStudyItem: {
      type: Object
    }
  }
}
</script>

<style>

</style>
