<template>
  <div>
    <h5 v-show="!isEmptyObject(selectedLicense)">자격증을 선택하지 않으셨습니다.</h5>

    <div v-show="isEmptyObject(selectedLicense)">
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
  },
  computed: {
  },
  methods: {
    isEmptyObject(params) {
        return Object.keys(params).length === 0 && params.constructor === Object;
      },
  },
  data: function () {
    return {
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