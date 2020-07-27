<template>
  <div class="license">
    <h1 class="text-center m-2">자격증 찾기</h1>
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

</style>
