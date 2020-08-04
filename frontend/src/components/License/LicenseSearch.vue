<template>
  <div class="input-group mw-90">
    <input 
    v-model="keyword"
    type="text" 
    class="form-control" 
    placeholder="자격증 검색이 가능합니다"
    @keypress.enter="searchKeyword"
    >
    <div class="input-group-append">
      <button 
      class="btn btn-outline-secondary" 
      @click="searchKeyword" 
      type="button"
      >
        Button
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LicenseSearch',
  created: function() {
    this.keyword = ''
  },
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
      axios.get('http://localhost:8080/license/getByKeyword', {
        params: 
        {
          keyword: this.$store.state.license.keyword
        }
      })
      .then (res => {
        // console.log(res.data)
        const selectedLicenseList = res.data
        this.$store.state.license.selectedLicense = selectedLicenseList
        this.$router.push('/license/result')
      })
      .catch(err => console.log(err.message))
    }
  }
}
</script>

<style scoped>
.license-search-bar > label {
  padding: 4px;
}
</style>
