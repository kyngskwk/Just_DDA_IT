<template>
  <div>
    <!-- 자격증이 선택되지 않았다면 보이지 않음 -->
    <h5 v-show="isEmptyObject">자격증을 선택하지 않으셨습니다.</h5>

    <div v-show="!isEmptyObject" class="px-3">
      <!-- 선택한 자격증에 대한 대략적인 정보 -->
      <h5 class="text-center resultdetail-h5 font_k">
        선택하신 자격증은
        <span style="color:#fd462e" class="font-weight-bold">{{ selectedLicense.licenseName }}</span>입니다.
      </h5>
      <v-card class="rounded-xl mt-10 font_k">
        <div class="d-flex justify-content-between mx-3 pt-3">
          <v-chip outlined color="#fd462e">자격증 등급</v-chip>
          <div class="text-end mr-3 pt-1 font-weight-bold">{{ selectedLicense.licenseSeriesName }}</div>
        </div>
        <div class="d-flex justify-content-between mx-3 mt-2">
          <v-chip outlined color="#fd462e">시행기관</v-chip>
          <div class="text-end mr-3 pt-1 font-weight-bold">{{ selectedLicenseInfo.implNm }}</div>
        </div>
        <div class="d-flex justify-content-between mx-3 mt-2 pb-4">
          <v-chip outlined color="#fd462e">관련부처</v-chip>
          <div class="text-end mr-3 pt-1 font-weight-bold">{{ selectedLicenseInfo.instiNm }}</div>
        </div>

        <!-- 자격증에 대한 상세정보 탭 -->
        <v-btn v-show="!isDetailsShown" block class="rounded-xl" icon text color="#ffffff">
          <v-icon color="#fd462e" @click="showDetails">mdi-menu-down</v-icon>
        </v-btn>
        <v-btn
          v-show="isDetailsShown"
          block
          class="rounded-t-xl"
          text
          style="background-color:#ffedeb"
        >
          <v-icon color="#fd462e" @click="showDetails">mdi-menu-up</v-icon>
        </v-btn>
        <div v-show="isDetailsShown" class="font_k px-3 pb-5" style="background-color:#ffedeb">
          <v-chip outlined color="#fd462e" class="mb-3">개요</v-chip>
          <div color="#505050">{{ selectedLicenseInfo.summary }}</div>
          <br />
          <v-chip outlined color="#fd462e" class="mb-3">수행직무</v-chip>
          <div color="#505050">{{ selectedLicenseInfo.job }}</div>
          <br />
          <v-chip outlined color="#fd462e" class="mb-3">출제경향</v-chip>
          <div color="#505050">{{ selectedLicenseInfo.trend }}</div>
          <br />
          <v-chip outlined color="#fd462e" class="mb-3">진로 및 전망</v-chip>
          <div color="#505050">{{ selectedLicenseInfo.career }}</div>
        </div>
      </v-card>

      <v-btn
        class="license-result-detail mt-5 rounded-xl text-white font-k font-weigth-bold"
        block
        color="#fd462e"
        @click="searchRoomList"
      >관련 스터디방 보러가기</v-btn>

      <!-- 유저가 가지고 있는 자격증들을 체크 가능 -->
      <!-- 스낵바 -->
      <div v-show="isUserLogin" class="mt-3 px-3 mb-10">
        <v-row class="text-center">
          <div class="col-4 thumb" cols="sm" v-if="!isTodo">
            <a
              class="card feed-card content ma-2 rounded-xl font-k font-weigth-bold"
              v-if="!isTodo"
              block
              @click="addTodo(); snackbar1=true"
              style="background-color:#f5fff7; color:#505050; padding-top:25%"
            >
              <span style="font-size:25px">🌱</span>찜하기
            </a>
          </div>
          <div class="col-4 thumb" cols="sm" v-if="isTodo">
            <a
              class="card feed-card content ma-2 rounded-xl font-k font-weigth-bold"
              v-if="isTodo"
              @click="delTodo(); snackbar4=true"
              style="background-color:#f5fff7; color:#505050; padding-top:25%"
            >
              <span style="font-size:25px">🌱</span>찜취소
            </a>
          </div>
          <div class="col-4 thumb" cols="sm" v-if="!isDoing">
            <a
              class="card feed-card content ma-2 rounded-xl font-k font-weigth-bold"
              v-if="!isDoing"
              @click="addDoing(); snackbar2=true"
              style="background-color:#ecf1ff; color:#505050; padding-top:25%"
            >
              <span style="font-size:25px">🌿</span>준비중
            </a>
          </div>
          <div class="col-4 thumb" cols="sm" v-if="isDoing">
            <a
              class="card feed-card content ma-2 rounded-xl font-k font-weigth-bold"
              v-if="isDoing"
              @click="delDoing(); snackbar5=true"
              style="background-color:#ecf1ff; color:#505050; padding-top:25%"
            >
              <span style="font-size:25px">🌿</span>준비중 취소
            </a>
          </div>
          <div class="col-4 thumb" cols="sm" v-if="!isPass">
            <a
              class="card feed-card content ma-2 rounded-xl font-k font-weigth-bold"
              v-if="!isPass"
              @click="addPass(); snackbar3=true"
              style="background-color:#fff6f5; color:#505050; padding-top:25%"
            >
              <span style="font-size:25px">🌼</span>이미 있어요
            </a>
          </div>
          <div class="col-4 thumb" cols="sm" v-if="isPass">
            <a
              class="card feed-card content ma-2 rounded-xl font-k font-weigth-bold"
              v-if="isPass"
              @click="delPass(); snackbar6=true"
              style="background-color:#fff6f5; color:#505050; padding-top:25%"
            >
              <span style="font-size:25px">🌼</span>없는 것 같아요
            </a>
          </div>
        </v-row>

        <div class="d-flex justify-space-around">
          <!-- 찜하기 -->
          <div class="license-result-detail text-center ma-2">
            <!-- <v-btn v-if="!isTodo" @click="addTodo(); snackbar1=true" class="mx-1" small>찜하기</v-btn> -->
            <v-snackbar v-model="snackbar1">
              자격증 추가가 완료되었습니다.
              추가정보를 입력하시겠습니까?
              <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar1 = false">닫기</v-btn>
                <v-btn color="pink" text v-bind="attrs" @click="snackbar1 = false">확인</v-btn>
              </template>
            </v-snackbar>
          </div>
          <div class="license-result-detail text-center ma-2">
            <!-- <v-btn v-if="isTodo" @click="delTodo(); snackbar4=true" class="mx-1" small>찜취소</v-btn> -->
            <v-snackbar v-model="snackbar4">
              나의 자격증 목록에서 삭제되었습니다.
              <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar4 = false">확인</v-btn>
              </template>
            </v-snackbar>
          </div>

          <!-- 준비중 -->
          <div class="license-result-detail text-center ma-2">
            <!-- <v-btn v-if="!isDoing" @click="addDoing(); snackbar2=true" class="mx-1" small>준비중!</v-btn> -->
            <v-snackbar v-model="snackbar2">
              자격증 추가가 완료되었습니다.
              추가정보를 입력하시겠습니까?
              <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar2 = false">닫기</v-btn>
                <v-btn color="pink" text v-bind="attrs" @click="snackbar2 = false">확인</v-btn>
              </template>
            </v-snackbar>
          </div>
          <div class="license-result-detail text-center ma-2">
            <!-- <v-btn v-if="isDoing" @click="delDoing(); snackbar5=true" class="mx-1" small>준비중 취소</v-btn> -->
            <v-snackbar v-model="snackbar5">
              나의 자격증 목록에서 삭제되었습니다.
              <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar5 = false">확인</v-btn>
              </template>
            </v-snackbar>
          </div>

          <!-- 이미있어요 -->
          <div class="license-result-detail text-center ma-2">
            <!-- <v-btn v-if="!isPass" @click="addPass(); snackbar3=true" class="mx-1" small>이미있어요</v-btn> -->
            <v-snackbar v-model="snackbar3">
              자격증 추가가 완료되었습니다.
              추가정보를 입력하시겠습니까?
              <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar3 = false">닫기</v-btn>
                <v-btn color="pink" text v-bind="attrs" @click="snackbar3 = false">확인</v-btn>
              </template>
            </v-snackbar>
          </div>
          <div class="license-result-detail text-center ma-2">
            <!-- <v-btn v-if="isPass" @click="delPass(); snackbar6=true" class="mx-1" small>없는거같아요</v-btn> -->
            <v-snackbar v-model="snackbar6">
              나의 자격증 목록에서 삭제되었습니다.
              <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar6 = false">확인</v-btn>
              </template>
            </v-snackbar>
          </div>
        </div>
      </div>

      <!-- 자격증 관련 정보를 보여주는 탭 -->
      <v-card
        v-show="!isEmptyAllInfo"
        class="license-result-detail mt-1 rounded-xl text-white text-center font-k font-weigth-bold pa-1 mb-2"
        block
        color="#fd462e"
      >
        <h5 class="ml-2 pt-1 font-weight-bold">알고 계셨나요? 이 자격증을 딴 사람들은...</h5>
      </v-card>

      <v-card
        v-if="avgObject.count"
        class="license-card license-result-list font_k d-flex justify-content-between pa-2 ml-2 mb-2"
      >
        <div class="d-flex justify-content-start">
          <div
            class="ml-2 pt-1"
          >평균적으로 하루에 {{ avgObject.reviewAvgHours }}시간씩 {{ avgObject.reviewAvgDays }}일 공부했습니다.</div>
        </div>
      </v-card>

      <v-card
        v-if="rec.doingTotal"
        class="license-card license-result-list font_k d-flex justify-content-between pa-2 ml-2 mb-2"
      >
        <div class="d-flex justify-content-start">
          <div
            class="ml-2 pt-1"
          >{{ rec.doingTotal }}명은 {{ rec.doingLicense.licenseName }}을/를 공부하고 있습니다.</div>
        </div>
      </v-card>

      <v-card
        v-if="rec.passTotal"
        class="license-card license-result-list font_k d-flex justify-content-between pa-2 ml-2 mb-2"
      >
        <div class="d-flex justify-content-start">
          <div
            class="ml-2 pt-1"
          >{{ rec.passTotal }}명은 {{ rec.passLicense.licenseName }}을/를 보유하고 있습니다.</div>
        </div>
      </v-card>

      <v-card
        v-if="rec.todoTotal"
        class="license-card license-result-list font_k d-flex justify-content-between pa-2 ml-2 mb-2"
      >
        <div class="d-flex justify-content-start">
          <div
            class="ml-2 pt-1"
          >{{ rec.todoTotal }}명은 {{ rec.todoLicense.licenseName }}을/를 딸 생각이 있습니다.</div>
        </div>
      </v-card>

      <LicenseResultHighchart1 v-if="!isEmptyChart" :acq_list="acq_list" />
      <!-- <LicenseResultHighchart2 :avg_list="avg_list" :avgObject="avgObject"/> -->
      <LicenseReview :licenseInfo="selectedLicense" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LicenseReview from "./LicenseReview.vue";
import LicenseResultHighchart1 from "./LicenseResultHighchart1";
// import LicenseResultHighchart2 from "./LicenseResultHighchart2";

export default {
  name: "LicenseResultDetail",
  components: {
    LicenseReview,
    LicenseResultHighchart1,
    // LicenseResultHighchart2,
  },
  created: function () {
    // 스크롤 자동으로 올려주는 역할
    window.scrollTo(0, 0);

    // 로그인 정보 가져오는 함수
    if (localStorage.getItem("loginUID")) {
      this.isUserLogin = true;
      this.hostID = localStorage.getItem("loginUID");
    } else if (sessionStorage.getItem("loginUID")) {
      this.isUserLogin = true;
      this.hostID = sessionStorage.getItem("loginUID");
    } else {
      this.isUserLogin = false;
    }

    ////////////////////////////////////
    // selectedLicenseInfo에 해당자격증의 디테일을 넣음
    const LICENSE_SERIES_URL = "field_info_all_output.json";
    axios
      .get(
        `http://${this.$store.state.address}/license/` + LICENSE_SERIES_URL
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
    let origin = this.$store.state.license.license_acq_info;
    for (var i = 0; i < origin.length; i++) {
      if (origin[i].jmNm === this.selectedLicense.licenseName) {
        this.acq_info = origin[i];
        break;
      } else {
        this.acq_info = [];
      }
    }
    ///////////////////////////////
    // 이 자격증과 관련된 자격증 추천
    axios
      .get(`http://${this.$store.state.address}:8080/license/getAnalysis`, {
        params: {
          licenseCode: this.selectedLicense.licenseCode,
        },
      })
      .then((res) => {
        this.rec = res.data.object;
      })
      .catch((err) => console.log(err.message));

    ///////////////////////////////
    // 평균정보 가져오는 메서드
    axios
      .get(`http://${this.$store.state.address}:8080/license/getavgtime`, {
        params: {
          licenseCode: this.selectedLicense.licenseCode,
        },
      })
      .then((res) => {
        this.avgObject = res.data.object;
      })
      .catch((err) => console.log(err.message));
  },
  mounted: function () {
    //////////////////////////////////////
    // 유저가 가지고 있는 라이센스 정보를 가져옴
    // console.log("LicenseResultDetail Test!");
    axios
      .get(`http://${this.$store.state.address}:8080/license/getMyLicense`, {
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
              this.myTodoId = obj.id;
              // console.log('myTodoId')
              // console.log(this.myTodoId)
            } else if (obj.licenseStatus === "doing") {
              this.isDoing = true;
              this.myDoingId = obj.id;
              // console.log('myDoingId')
              // console.log(this.myDoingId)
            } else {
              this.isPass = true;
              this.myPassId = obj.id;
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
      return param.length === 0;
    },
    isEmptyAllInfo: function () {
      return this.isTodo && this.isEmptyChart && this.isDoing && this.isPass
    },
    acq_list: function () {
      if (this.acq_info.length === 0) {
        return [];
      }
      let arr = this.acq_info.scholarInfo;
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
      return result;
    },
  },
  watch: {
    passLicenses: function () {
      this.$emit("cntPass", this.passLicenses.length);
    },
    isTodo: function () {
      axios
        .get(`http://${this.$store.state.address}:8080/license/getMyLicense`, {
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
                this.myTodoId = obj.id;
              }
            }
          });
        })
        .catch((res) => {
          console.log(res.message);
        });
    },
    isDoing: function () {
      axios
        .get(`http://${this.$store.state.address}:8080/license/getMyLicense`, {
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
                this.myDoingId = obj.id;
              }
            }
          });
        })
        .catch((res) => {
          console.log(res.message);
        });
    },
    isPass: function () {
      axios
        .get(`http://${this.$store.state.address}:8080/license/getMyLicense`, {
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
                this.myPassId = obj.id;
              }
            }
          });
        })
        .catch((res) => {
          console.log(res.message);
        });
    },
  },
  methods: {
    showDetails: function () {
      this.isDetailsShown = !this.isDetailsShown;
    },
    // 버튼관련 메소드들
    addTodo() {
      // console.log("자격증 추가")
      axios
        .post(`http://${this.$store.state.address}:8080/license/addMyLicense`, {
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
        .post(`http://${this.$store.state.address}:8080/license/addMyLicense`, {
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
        .post(`http://${this.$store.state.address}:8080/license/addMyLicense`, {
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
      axios
        .post(
          `http://${this.$store.state.address}:8080/license/deleteMyLicense`,
          {
            id: this.myTodoId,
            uid: this.hostID,
            licenseCode: this.selectedLicense.licenseCode,
          }
        )
        .then((res) => {
          console.log(res);
          this.isTodo = !this.isTodo;
        })
        .catch((res) => {
          console.log(res.response.data);
        });
    },
    delDoing() {
      axios
        .post(
          `http://${this.$store.state.address}:8080/license/deleteMyLicense`,
          {
            id: this.myDoingId,
            uid: this.hostID,
            licenseCode: this.selectedLicense.licenseCode,
          }
        )
        .then((res) => {
          console.log(res);
          this.isDoing = !this.isDoing;
        })
        .catch((res) => {
          console.log(res.response.data);
        });
    },
    delPass() {
      axios
        .post(
          `http://${this.$store.state.address}:8080/license/deleteMyLicense`,
          {
            id: this.myPassId,
            uid: this.hostID,
            licenseCode: this.selectedLicense.licenseCode,
          }
        )
        .then((res) => {
          console.log(res);
          this.isPass = !this.isPass;
        })
        .catch((res) => {
          console.log(res.response.data);
        });
    },
    searchRoomList() {
      axios
        .get(
          `http://${this.$store.state.address}:8080/study/findStudyroomByLicense`,
          {
            params: {
              licenseName: this.selectedLicense.licenseName,
            },
          }
        )
        .then((response) => {
          console.log(response);
          var rooms = response.data.object;
          // this.$emit('search-end')

          this.$router.push({
            name: "Rooms",
            params: {
              fromroom: true,
              roomset: rooms,
              searchselect: "자격증",
              searchThing: this.selectedLicense.licenseName,
            },
          });
        });
    },
  },
  data: function () {
    return {
      // 평균정보 가져오기 위한 변수
      avgObject: {
        type: Object,
      },
      avgMent: [" 준비중입니다.", " 땄습니다.", " 을 따려고 합니다."],

      // 이 자격증과 관련된 자격증들을 추천하기 위한 변수
      rec: {
        type: String,
      },

      // 자격증 관련 버튼들
      isUserLogin: null,
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
      hostID: null,
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
.license-result-list {
  width: 100%;
  word-break: normal;
}
.resultdetail-h5 {
  color: #8f8f8f;
  font-size: 18px;
}
/* .license-result-detail {
  font-family: "Black Han Sans", sans-serif;
} */
.thumb {
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
}
.thumb:before {
  content: "";
  display: block;
  padding-top: 100%;
}
.content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: "Nanum Gothic", sans-serif;
}
.feed-card {
  padding: 0 0 0 0;
}
</style>