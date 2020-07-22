<template>
  <div class="license-search-bar">
    <label for="license-title">자격증 검색하기   </label>
    <input v-model="keyword" type="text" id="license-title" @keypress.enter="searchKeyword">
    <button @click="searchKeyword">검색</button>
  </div>
</template>

<script>
export default {
  name: 'NcsSearch',
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    searchKeyword() {
      this.$store.state.license.keyword = this.keyword
      this.$router.push('/license/result')
    }
  }
}
</script>

<style>
.license-search-bar > label {
  padding: 4px;
}
</style>