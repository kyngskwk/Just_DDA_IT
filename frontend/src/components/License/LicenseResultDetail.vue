<template>
  <div>
    <h5>선택된 자격증은 {{ selectedLicense }} 입니당</h5>
  </div>
</template>

<script>
export default {
  name: 'LicenseResultDetail',
  data: function() {
    return {
      selectedLicense: this.$store.state.license.selectedLicense
    }
  }
}
</script>

<style>

</style>