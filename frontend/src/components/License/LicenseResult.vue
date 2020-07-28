<template>
<div>
  <v-btn class="mx-2 mt-2 fixed-top backbtn" fab dark small color="primary" @click="goBack">
    <v-icon dark>mdi-arrow-left</v-icon>
  </v-btn>
  <div class="text-center">
      <h1 class="mb-4">검색 결과</h1>
      <span>{{ keyword }}</span>
      <h3>선택하신 키워드는</h3>
      <ul>
        <li>대분류: {{ field1 }}</li>
        <li>중분류: {{ field2 }}</li>
      </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'LicenseResult',
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
  data() {
    return {
      keyword: this.$store.state.license.keyword,
      field1: this.$store.state.license.field1,
      field2: this.$store.state.license.field2,
      licenseList: {
        type: Array
      }
    }
  }
}
</script>

<style>

</style>
