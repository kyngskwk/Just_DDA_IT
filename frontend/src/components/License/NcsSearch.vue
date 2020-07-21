<template>
  <div class="license-search-bar">
    <label for="license-title">자격증 검색하기   </label>
    <input v-model="keyword" type="text" id="license-title" @keyup:enter="searchKeyword">
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
      console.log(this.keyword)
    }
  }
}
</script>

<style>
.license-search-bar > label {
  padding: 4px;
}
</style>