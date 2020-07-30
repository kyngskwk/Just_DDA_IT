<template>
  <div class="license-search-bar text-center">
    <v-input
      label="자격증 검색하기" 
      v-model="keyword" 
      id="license-title" 
      @keypress.enter="searchKeyword"
    >
    여기에 검색하세요
    </v-input>
    <button @click="searchKeyword">검색</button>
  </div>
</template>

<script>
export default {
  name: 'LicenseSearch',
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    searchKeyword() {
      this.$store.state.license.keyword = this.keyword
      this.$store.state.license.field1 = ''
      this.$store.state.license.field2 = ''
      this.$router.push('/license/result')
    }
  }
}
</script>

<style scoped>
.license-search-bar > label {
  padding: 4px;
}
</style>
