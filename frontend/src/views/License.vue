<template>
  <div class="license">
    <h1>자격증 찾기</h1>
    <NcsSearch />
    <h2 class="header-h2">국가직무능력표준(NCS)에 기반한 검색이 가능합니다</h2>
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
      ncsField: {
        field_number: '01',
        field_name: '농림 어업'
      }
    }
  }
}
</script>

<style>
  .header-h2 {
    margin: 20px 0;
  }
  .license-content > a {
    border: solid 1px black ;
  }
</style>
