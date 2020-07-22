<template>
  <div class="license">
    <h1>자격증 찾기</h1>
    <NcsSearch />
    <NcsField1 />
  </div>
</template>

<script>
// @ is an alias to /src
import NcsField1 from '../components/License/NcsField1.vue'
import NcsSearch from '../components/License/NcsSearch.vue'

export default {
  name: 'License',
  components: {
    NcsField1,
    NcsSearch,
  }, 
  data() {
    return {
    }
  }
}
</script>

<style>

</style>
