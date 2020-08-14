<template>
  <div class="license">
    <p class="title mb-0"><span>DDA IT.</span>에서 자격증을 검색해보세요</p>
    <LicenseSearch />
    <LicenseBanner />
    <LicenseField />
    <LicenseStudyList />
  </div>
</template>

<script>
// @ is an alias to /src
import LicenseField from '../components/License/LicenseField.vue'
import LicenseSearch from '../components/License/LicenseSearch.vue'
import LicenseBanner from '../components/License/LicenseBanner.vue'
import LicenseStudyList from '../components/License/LicenseStudyList.vue'

export default {
  name: 'License',
  components: {
    LicenseField,
    LicenseSearch,
    LicenseBanner,
    LicenseStudyList
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
.license {
  background-color: #d3d3d3;
}

</style>
