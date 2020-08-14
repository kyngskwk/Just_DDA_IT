<template>
  <div class="license">
    <p class="title mb-0"><span>DDA IT.</span>에서 자격증을 검색해보세요</p>
    <LicenseSearch />
    <LicenseBanner />
    <LicenseField />
  </div>
</template>

<script>
// @ is an alias to /src
import LicenseField from '../components/License/LicenseField.vue'
import LicenseSearch from '../components/License/LicenseSearch.vue'
import LicenseBanner from '../components/License/LicenseBanner.vue'

export default {
  name: 'License',
  components: {
    LicenseField,
    LicenseSearch,
    LicenseBanner,
  }, 
  data() {
    return {
    }
  }
}
</script>

<style>
.title {
  color: #fd462e;
  text-align: center;
  font-size: 20px;
}
.title > span {
  font-family: 'Roboto', sans-serif;
  margin: 0 4px;
  font-weight: 800;
}


</style>
