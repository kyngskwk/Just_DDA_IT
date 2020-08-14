<template>
  <div>
    <!-- 자격증이 선택되지 않았다면 보이지 않음 -->
    <h5 v-show="isEmptyObject">자격증을 선택하지 않으셨습니다.</h5>

    <div v-show="!isEmptyObject">
      <!-- 선택한 자격증에 대한 대략적인 정보 -->
      <h5 class="text-center resultdetail-h5">선택하신 자격증은 {{ selectedLicense.licenseName }} 입니다.</h5>
      <ul>
        <li>자격증 등급: {{ selectedLicense.licenseSeriesName }}</li>
        <li>시행기관: {{ selectedLicenseInfo.implNm }}</li>
        <li>관련부처: {{ selectedLicenseInfo.instiNm }}</li>
      </ul>

      <!-- 유저가 가지고 있는 자격증들을 체크 가능 -->
      <!-- 스낵바 -->
      <!-- 찜하기 -->
      <div class="d-flex justify-space-around">
        <div class="text-center ma-2">
          <v-btn v-if="!isTodo" @click="addTodo(); snackbar1=true" class="mx-1" small>찜하기</v-btn>
          <v-snackbar v-model="snackbar1">
            자격증 추가가 완료되었습니다.
            추가정보를 입력하시겠습니까?
            <template v-slot:action="{ attrs }">
              <v-btn color="pink" text v-bind="attrs" @click="snackbar1 = false">닫기</v-btn>
              <v-btn color="pink" text v-bind="attrs" @click="snackbar1 = false">확인</v-btn>
            </template>
          </v-snackbar>
        </div>
        <div class="text-center ma-2">
          <v-btn v-if="isTodo" @click="delTodo(); snackbar4=true" class="mx-1" small>찜취소</v-btn>
          <v-snackbar v-model="snackbar4">
            나의 자격증 목록에서 삭제되었습니다.
            <template v-slot:action="{ attrs }">
              <v-btn color="pink" text v-bind="attrs" @click="snackbar4 = false">확인</v-btn>
            </template>
          </v-snackbar>
        </div>


        <!-- 준비중 -->
        <div class="text-center ma-2">
          <v-btn v-if="!isDoing" @click="addDoing(); snackbar2=true" class="mx-1" small>준비중!</v-btn>
          <v-snackbar v-model="snackbar2">
            자격증 추가가 완료되었습니다.
            추가정보를 입력하시겠습니까?
            <template v-slot:action="{ attrs }">
              <v-btn color="pink" text v-bind="attrs" @click="snackbar2 = false">닫기</v-btn>
              <v-btn color="pink" text v-bind="attrs" @click="snackbar2 = false">확인</v-btn>
            </template>
          </v-snackbar>
        </div>
        <div class="text-center ma-2">
          <v-btn v-if="isDoing" @click="delDoing(); snackbar5=true" class="mx-1" small>준비중 취소</v-btn>
          <v-snackbar v-model="snackbar5">
            나의 자격증 목록에서 삭제되었습니다.
            <template v-slot:action="{ attrs }">
              <v-btn color="pink" text v-bind="attrs" @click="snackbar5 = false">확인</v-btn>
            </template>
          </v-snackbar>
        </div>


        <!-- 이미있어요 -->
        <div class="text-center ma-2">
          <v-btn v-if="!isPass" @click="addPass(); snackbar3=true" class="mx-1" small>이미있어요</v-btn>
          <v-snackbar v-model="snackbar3">
            자격증 추가가 완료되었습니다.
            추가정보를 입력하시겠습니까?
            <template v-slot:action="{ attrs }">
              <v-btn color="pink" text v-bind="attrs" @click="snackbar3 = false">닫기</v-btn>
              <v-btn color="pink" text v-bind="attrs" @click="snackbar3 = false">확인</v-btn>
            </template>
          </v-snackbar>
        </div>
        <div class="text-center ma-2">
          <v-btn v-if="isPass" @click="delPass(); snackbar6=true" class="mx-1" small>없는거같아요</v-btn>
          <v-snackbar v-model="snackbar6">
            나의 자격증 목록에서 삭제되었습니다.
            <template v-slot:action="{ attrs }">
              <v-btn color="pink" text v-bind="attrs" @click="snackbar6 = false">확인</v-btn>
            </template>
          </v-snackbar>
        </div>

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

      <LicenseResultHighchart1 v-if="isEmptyChart" :acq_list="acq_list" />
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
    // 스크롤 자동으로 올려주는 역할
    window.scrollTo(0, 0);

    ////////////////////////////////////
    // selectedLicenseInfo에 해당자격증의 디테일을 넣음
    const LICENSE_SERIES_URL = "field_info_all_output.json";
    axios
      .get(
        `http://${this.$store.state.address}:3000/license/` + LICENSE_SERIES_URL
      )
      .then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          var elem = res.data[i];
          if (elem.jmNm === this.selectedLicense.licenseName) {
            this.selectedLicenseInfo = elem;
            break;
          }
        }
      })
      .catch((err) => console.log(err.message));

    /////////////////////////////////////
    // 자격증에 대한 학력 정보를 가져옴
    // const license_code = this.selectedLicense.licenseCode;
    axios
      .get(
        //`http://${this.$store.state.address}:3000/license/license_acq_info_2019.json`
        `http://${this.$store.state.address}:8080/license/getDetail`,
        {
          paramse: {
            licenseTitle: this.selectedLicense.licenseName
          }
        }
      )
      .then((res) => {
        this.acq_info=res.data.object;
        // let r = res.data;
        // // 가져온 학력정보 중 해당 자격증에 대한 정보를 찾음
        // for (var i = 0; i < r.length; i++) {
        //   let jmCd = Number(r[i]["jmCd"]);
        //   if (license_code === jmCd) {
        //     console.log(r[i]);
        //     this.acq_info = r[i];
        //     break;
        //   }
        // }
      })
      .catch((err) => console.log(err.message));
  },
  mounted: function () {
    //////////////////////////////////////
    // 유저가 가지고 있는 라이센스 정보를 가져옴
    // console.log("LicenseResultDetail Test!");
    axios.get(`http://${this.$store.state.address}:8080/license/getMyLicense`, {
        params: {
          UID: this.hostID,
        },
      })
      .then((res) => {
        const licenses = res.data.object;
        // 지금 자격증이 mylicense에 있는지 확인 => 버튼 비/활성화
        // console.log(licenses)
        licenses.forEach((obj) => {
          // console.log('나의라이센스')
          if (this.selectedLicense.licenseCode === obj.license.licenseCode) {
            // console.log('이거')            
            if (obj.licenseStatus === "todo") {
              this.isTodo = true;
              this.myTodoId = obj.id
              // console.log('myTodoId')
              // console.log(this.myTodoId)
            } else if (obj.licenseStatus === "doing") {
              this.isDoing = true;
              this.myDoingId = obj.id
              // console.log('myDoingId')
              // console.log(this.myDoingId)
            } else {
              this.isPass = true;
              this.myPassId = obj.id
            }
          }
        });
      })
      .catch((res) => {
        console.log(res.message);
      });
  },
  computed: {
    isEmptyObject: function () {
      const params = this.selectedLicense;
      return Object.keys(params).length === 0 && params.constructor === Object;
    },
    isEmptyChart: function () {
      const param = this.acq_info;
      return Object.keys(param).length === 0 && param.constructor === Object;
    },
    acq_list: function () {
      const arr = this.acq_info.scholarInfo;
      let sum = 0;
      let result = [];
      for (var i = 0; i < arr.length; i++) {
        sum += Number(arr[i].accumAcquCnt);
      }
      for (i = 0; i < arr.length; i++) {
        let totalCount = Number(arr[i].accumAcquCnt);
        let euhistNm = arr[i].euhistNm;
        if (euhistNm === "미상") {
          continue;
        } else {
          result.push({
            name: euhistNm,
            y: (totalCount / sum) * 100,
            z: totalCount,
          });
        }
      }
      console.log(result);
      return result;
    },
  },
  watch: {
    passLicenses: function () {
      this.$emit("cntPass", this.passLicenses.length);
    },
    'isTodo': function () {
      axios.get(`http://${this.$store.state.address}:8080/license/getMyLicense`, {
        params: {
          UID: this.hostID,
        },
      })
      .then((res) => {
        const licenses = res.data.object;
        // console.log(licenses)
        licenses.forEach((obj) => {
          if (this.selectedLicense.licenseCode === obj.license.licenseCode) {
            if (obj.licenseStatus === "todo") {
              this.myTodoId = obj.id
            }
          }
        });
      })
      .catch((res) => {
        console.log(res.message);
      });
    },
    'isDoing': function () {
      axios.get(`http://${this.$store.state.address}:8080/license/getMyLicense`, {
        params: {
          UID: this.hostID,
        },
      })
      .then((res) => {
        const licenses = res.data.object;
        // console.log(licenses)
        licenses.forEach((obj) => {
          if (this.selectedLicense.licenseCode === obj.license.licenseCode) {
            if (obj.licenseStatus === "doing") {
              this.myDoingId = obj.id
            }
          }
        });
      })
      .catch((res) => {
        console.log(res.message);
      });
    },
    'isPass': function () {
      axios.get(`http://${this.$store.state.address}:8080/license/getMyLicense`, {
        params: {
          UID: this.hostID,
        },
      })
      .then((res) => {
        const licenses = res.data.object;
        // console.log(licenses)
        licenses.forEach((obj) => {
          if (this.selectedLicense.licenseCode === obj.license.licenseCode) {
            if (obj.licenseStatus === "pass") {
              this.myPassId = obj.id
            }
          }
        });
      })
      .catch((res) => {
        console.log(res.message);
      });
    }
  },
  methods: {
    showDetails: function () {
      this.isDetailsShown = !this.isDetailsShown;
    },
    addTodo() {
      // console.log("자격증 추가")
      axios
        .post("http://localhost:8080/license/addMyLicense", {
          uid: this.hostID,
          licenseCode: this.selectedLicense.licenseCode,
          licenseStatus: "todo",
        })
        .then((res) => {
          console.log(res);
          this.isTodo = !this.isTodo;
        })
        .catch((res) => {
          console.log(res.response);
        });
    },
    addDoing() {
      // console.log("자격증 추가")
      axios
        .post("http://localhost:8080/license/addMyLicense", {
          uid: this.hostID,
          licenseCode: this.selectedLicense.licenseCode,
          licenseStatus: "doing",
        })
        .then((res) => {
          this.isDoing = !this.isDoing;
          console.log(res);
        })
        .catch((res) => {
          console.log(res.response);
        });
    },
    addPass() {
      axios
        .post("http://localhost:8080/license/addMyLicense", {
          uid: this.hostID,
          licenseCode: this.selectedLicense.licenseCode,
          licenseStatus: "pass",
        })
        .then((res) => {
          this.isPass = !this.isPass;
          console.log(res);
        })
        .catch((res) => {
          console.log(res.response);
        });
    },
    delTodo() {
      axios.post("http://localhost:8080/license/deleteMyLicense", {
        id: this.myTodoId,
        uid: this.hostID,
        licenseCode: this.selectedLicense.licenseCode
      })
      .then (res => {
        console.log(res)
        this.isTodo = !this.isTodo
      }).catch( res => {
        console.log(res.response.data)
      })
    },
    delDoing() {
      axios.post("http://localhost:8080/license/deleteMyLicense", {
      id: this.myDoingId,
      uid: this.hostID,
      licenseCode: this.selectedLicense.licenseCode
      })
      .then ( res => {
        console.log(res)
        this.isDoing = !this.isDoing
      }).catch( res => {
        console.log(res.response.data)
      })
    },
    delPass() {
      axios.post("http://localhost:8080/license/deleteMyLicense", {
      id: this.myPassId,
      uid: this.hostID,
      licenseCode: this.selectedLicense.licenseCode
      })
      .then ( res => {
        console.log(res)
        this.isPass = !this.isPass
      }).catch( res => {
        console.log(res.response.data)
      })
    },
  },
  data: function () {
    return {
      myTodoId: null,
      myDoingId: null,
      myPassId: null,

      snackbar1: false,
      snackbar2: false,
      snackbar3: false,
      snackbar4: false,
      snackbar5: false,
      snackbar6: false,

      // 상세정보 보여주는 버튼
      isDetailsShown: false,

      // 유저에게서 자격증 취득 현황을 받아오기 위한 변수들
      hostID: this.$store.state.member.loginUID,
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
      acq_info: {
        type: Object,
      },
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