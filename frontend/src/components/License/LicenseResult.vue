<template>
  <div>
      <h1>검색 결과</h1>
      <span>{{ keyword }}</span>
      <h3>선택하신 키워드는</h3>
      <ul>
        <li>대분류: {{ field1 }}</li>
        <li>중분류: {{ field2 }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'LicenseResult',
  methods: {

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
