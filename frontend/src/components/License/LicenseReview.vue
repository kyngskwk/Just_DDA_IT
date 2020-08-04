<template>
  <div>
    <h1>여기부터 자격증 리뷰 컴포넌트!</h1>
    <v-switch v-model="switch1" :label="`Switch 1: ${switch1.toString()}`"></v-switch>
  </div>
</template>

<script>
export default {
  name: 'LicenseReview'
};
</script>

<style>
</style>