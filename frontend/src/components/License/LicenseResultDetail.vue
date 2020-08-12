<template>
  <div>
    <!-- 자격증이 선택되지 않았다면 보이지 않음 -->
    <h5 v-show="isEmptyObject">자격증을 선택하지 않으셨습니다.</h5>

    <div v-show="!isEmptyObject">
      <!-- 선택한 자격증에 대한 대략적인 정보 -->
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
      <h5 class="text-center resultdetail-h5">선택하신 자격증은 {{ selectedLicense.licenseName }} 입니다.</h5>
      <ul>
        <li>자격증 등급: {{ selectedLicense.licenseSeriesName }}</li>
        <li>시행기관: {{ selectedLicenseInfo.implNm }}</li>
        <li>관련부처: {{ selectedLicenseInfo.instiNm }}</li>
      </ul>

      <!-- 유저가 가지고 있는 자격증들을 체크 가능 -->
      <div class="my-2">
        <v-btn :disabled="isTodo" @click="addTodo" class="mx-1" small>찜하기</v-btn>
        <v-btn :disabled="isDoing" @click="addDoing" class="mx-1" small color="primary">준비중!</v-btn>
        <v-btn :disabled="isPass" @click="addPass" class="mx-1" small color="error">이미있어요!</v-btn>
      </div>

      <!-- 자격증에 대한 상세정보 탭 -->
      <div class="d-flex align-center">
        <h5>상세정보</h5>
        <v-btn class="ml-2" small color="primary" @click="showDetails">보기</v-btn>
      </div>

      <ul v-show="isDetailsShown">
        <li class="mb-2">개요: {{ selectedLicenseInfo.summary }}</li>
        <li class="mb-2">수행직무: {{ selectedLicenseInfo.job }}</li>
        <li class="mb-2">출제경향: {{ selectedLicenseInfo.trend }}</li>
        <li class="mb-2">진로 및 전망: {{ selectedLicenseInfo.career }}</li>
      </ul>

      <LicenseResultHighchart1 />
      <LicenseResultHighchart2 />
      <LicenseReview :licenseInfo="selectedLicense" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LicenseReview from "./LicenseReview.vue";
import LicenseResultHighchart1 from "./LicenseResultHighchart1";
import LicenseResultHighchart2 from "./LicenseResultHighchart2";

export default {
  name: "LicenseResultDetail",
  components: {
    LicenseReview,
    LicenseResultHighchart1,
    LicenseResultHighchart2,
  },
  created: function () {
    window.scrollTo(0, 0);
  },
  mounted: function () {
    ////////////////////////////////////
    // selectedLicenseInfo에 해당자격증의 디테일을 넣음
    const licenseSeries = this.selectedLicense.licenseSeries;
    const LICENSE_SERIES_URL = `field_info_0${licenseSeries}_output.json`;
    axios
      .get("http://localhost:3000/license/" + LICENSE_SERIES_URL)
      .then((res) => {
        // console.log(res.data)
        for (var i = 0; i < res.data.length; i++) {
          var elem = res.data[i];
          // console.log(elem)
          if (elem.jmNm === this.selectedLicense.licenseName) {
            this.selectedLicenseInfo = elem;
            break;
          }
        }
      })
      .catch((err) => console.log(err.message));

    //////////////////////////////////////
    // 유저가 가지고 있는 라이센스 정보를 가져옴
    console.log('LicenseResultDetail Test!')
    axios.get(`http://${this.$store.state.address}:8080/license/getMyLicense`, {
        params: {
          UID: this.hostID,
        },
      })
      .then((res) => {
        const licenses = res.data.object;
        // 지금 자격증이 mylicense에 있는지 확인 => 버튼 비/활성화
        licenses.forEach((obj) => {
          // console.log('selectedLicenseCode', this.selectedLicense.licenseCode, 'obj license code', obj.license.licenseCode)
          if (this.selectedLicense.licenseCode === obj.license.licenseCode) {
            if (obj.licenseStatus === "todo") {
              this.isTodo = true;
            } else if (obj.licenseStatus === "doing") {
              this.isDoing = true;
            } else {
              this.isPass = true;
            }
          }
        });
      })
      .catch((res) => {
        console.log(res.message);
      });
  },
  computed: {
    isEmptyObject() {
      const params = this.selectedLicense;
      return Object.keys(params).length === 0 && params.constructor === Object;
    },
  },
  watch: {
    passLicenses: function () {
      this.$emit("cntPass", this.passLicenses.length);
    },
  },
  methods: {
    showDetails: function () {
      this.isDetailsShown = !this.isDetailsShown;
    },
    addTodo() {},
    addDoing() {},
    addPass() {},
  },
  data: function () {
    return {
      // 상세정보 보여주는 버튼
      isDetailsShown: false,

      // 유저에게서 자격증 취득 현황을 받아오기 위한 변수들
      hostID: 1,
      passLicenses: {
        type: Array,
      },
      todoLicenses: {
        type: Array,
      },
      isTodo: false,
      isDoing: false,
      isPass: false,

      // 선택된 자격증에 대한 정보
      selectedLicenseInfo: {
        type: Object,
      },
      selectedLicense: this.$store.state.license.selectedLicense,
    };
  },
};
</script>

<style scoped>
.resultdetail-h5 {
  color: #fd462e;
  font-family: "Black Han Sans", sans-serif;
}
</style>