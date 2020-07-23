<template>
  <div>
    {{ myStudyRoom }}
  </div>
</template>

<script>
export default {
  name: "StudyListItem",
  props: {
    myStudyRoom: {
      type: Object
    }
  }
}
</script>

<style>

</style>