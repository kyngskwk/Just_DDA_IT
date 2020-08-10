<template>
  <div>
    <h5 v-show="isEmptyObject">자격증을 선택하지 않으셨습니다.</h5>

    <div v-show="!isEmptyObject">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
      <h5>선택된 자격증은 {{ selectedLicense.licenseName }} 입니당</h5>
      <ul>
        <li>자격증 등급: {{ selectedLicense.licenseSeriesName }}</li>
        <li>대분류: {{ selectedLicense.ncsCategoryName1 }} // 중분류: {{ selectedLicense.ncsCategoryName2 }}</li>
      </ul>
      <h5>상세정보</h5>
      <ul>
        <li>{{ selectedLicenseInfo.career }}</li>
        <li>{{ selectedLicenseInfo.implNm }}</li>
        <li>{{ selectedLicenseInfo.instiNm }}</li>
        <li>{{ selectedLicenseInfo.job }}</li>
        <li>{{ selectedLicenseInfo.summary }}</li>
        <li>{{ selectedLicenseInfo.trend }}</li>
      </ul>

      <!-- <highcharts :options="chartOptions" /> -->
      <LicenseReview :licenseInfo="selectedLicense" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import LicenseReview from "./LicenseReview.vue";

export default {
  name: "LicenseResultDetail",
  components: {
    LicenseReview,
  },
  mounted: function () {
    const licenseSeries = this.selectedLicense.licenseSeries
    const LICENSE_SERIES_URL = `field_info_0${licenseSeries}_output.json`
    axios.get('http://localhost:3000/license/' + LICENSE_SERIES_URL)
      .then(res => {
        // console.log(res.data)
        for (var i = 0; i < res.data.length; i++) {
          var elem = res.data[i]
          // console.log(elem)
          if (elem.jmNm === this.selectedLicense.licenseName) {
            this.selectedLicenseInfo = elem
            break
          }
        }
        
      })
      .catch( err => console.log(err.message))
  },
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
      selectedLicenseInfo: {
        type: Object
      },
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