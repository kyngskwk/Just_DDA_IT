<template>
  <div>
    <h5 v-show="isEmptyObject">자격증을 선택하지 않으셨습니다.</h5>

    <div v-show="!isEmptyObject">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
      <h5>선택된 자격증은 {{ selectedLicense.licenseName }} 입니당</h5>
      <ul>
        <li>{{ selectedLicense.licenseCode }}</li>
        <li>{{ selectedLicense.licenseSeries }}</li>
        <li>{{ selectedLicense.ncsCategoryName1 }}</li>
        <li>{{ selectedLicense.ncsCategoryName2 }}</li>
      </ul>

      <!-- <highcharts :options="chartOptions" /> -->
      <LicenseReview :licenseInfo="selectedLicense" />
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
  mounted: function () {},
  computed: {
    isEmptyObject() {
      const params = this.selectedLicense
      return Object.keys(params).length === 0 && params.constructor === Object;
    },
  },
  methods: {
    
  },
  data: function () {
    return {
      selectedLicense: this.$store.state.license.selectedLicense,
      chartOptions: {
        sertries: [
          {
            data: [1, 2, 3]
          }
        ]
      }
    };
  },
};
</script>

<style>
</style>