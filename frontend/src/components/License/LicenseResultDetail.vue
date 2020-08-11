<template>
  <div>
    <!-- 자격증이 선택되지 않았다면 보이지 않음 -->
    <h5 v-show="isEmptyObject">자격증을 선택하지 않으셨습니다.</h5>

    <div v-show="!isEmptyObject">
      <!-- 선택한 자격증에 대한 대략적인 정보 -->
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
      <h5>선택된 자격증은 {{ selectedLicense.licenseName }} 입니당</h5>
      <ul>
        <li>자격증 등급: {{ selectedLicense.licenseSeriesName }}</li>
      </ul>

      <!-- 유저가 가지고 있는 자격증들을 체크 가능 -->
      <div class="my-2">
        <v-btn class="mx-1" small>찜하기</v-btn>
        <v-btn class="mx-1" small color="primary">준비중!</v-btn>
        <v-btn class="mx-1" small color="error">이미있어요!</v-btn>
      </div>
      
      <!-- 자격증에 대한 상세정보 탭 -->
      <h5>상세정보</h5>
      <ul>
        <li>진로 및 전망: {{ selectedLicenseInfo.career }}</li>
        <li>시행기관: {{ selectedLicenseInfo.implNm }}</li>
        <li>관련부처: {{ selectedLicenseInfo.instiNm }}</li>
        <li>수행직무: {{ selectedLicenseInfo.job }}</li>
        <li>개요: {{ selectedLicenseInfo.summary }}</li>
        <li>출제경향: {{ selectedLicenseInfo.trend }}</li>
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