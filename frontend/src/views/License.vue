<template>
  <div class="license">
    <h1>자격증 찾기</h1>
    <NcsSearch />
    <LicenseBanner />
    <NcsField />
  </div>
</template>

<script>
// @ is an alias to /src
import NcsField from '../components/License/NcsField.vue'
import NcsSearch from '../components/License/NcsSearch.vue'
import LicenseBanner from '../components/License/LicenseBanner.vue'

export default {
  name: 'License',
  components: {
    NcsField,
    NcsSearch,
    LicenseBanner
  }, 
  data() {
    return {
    }
  }
}
</script>

<style>

</style>
