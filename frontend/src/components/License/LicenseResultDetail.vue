<template>
  <div>
    <h5 v-show="!isLicenseSelected">자격증을 선택하지 않으셨습니다.</h5>

    <div v-show="isLicenseSelected">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
      <h5>선택된 자격증은 {{ selectedLicense.licenseName }} 입니당</h5>
      <ul>
        <li>{{ selectedLicense.licenseCode }}</li>
        <li>{{ selectedLicense.licenseSeries }}</li>
        <li>{{ selectedLicense.ncsCategoryName1 }}</li>
        <li>{{ selectedLicense.ncsCategoryName2 }}</li>
      </ul>

      <LicenseReview :licenseInfo="selectedLicense"/>
    </div>
  </div>
</template>

<script>
import LicenseReview from "./LicenseReview.vue";

export default {
  name: "LicenseResultDetail",
  components: {
    LicenseReview,
  },
  mounted: function() {
    const licenseName = this.$store.state.license.selectedLicense
  },
  computed: {
    isLicenseSelected: function () {
      return isEmptyObject(this.selectedLicense);
    },
  },
  data: function () {
    return {
      isEmptyObject(params) {
        return Object.keys(params).length === 0 && params.constructor === Object;
      },
      selectedLicense: {
        type: Object
      },
      onReview: false,
    };
  },
};
</script>

<style>
</style>