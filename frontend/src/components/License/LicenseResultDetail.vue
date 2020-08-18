<template>
  <div>
    <!-- 자격증이 선택되지 않았다면 보이지 않음 -->
    <h5 v-show="isEmptyObject">자격증을 선택하지 않으셨습니다.</h5>

    <div v-show="!isEmptyObject" class="px-3">
      <!-- 선택한 자격증에 대한 대략적인 정보 -->
      <h5 class="text-center resultdetail-h5 font_k ">선택하신 자격증은 <span style="color:#fd462e" class="font-weight-bold">{{ selectedLicense.licenseName }}</span>입니다.</h5>
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
        <v-btn v-show="!isDetailsShown" block class="rounded-xl" icon text color="#ffffff"><v-icon color="#fd462e"  @click="showDetails">mdi-menu-down</v-icon></v-btn>
        <v-btn v-show="isDetailsShown" block class="rounded-t-xl" text style="background-color:#ffedeb"><v-icon color="#fd462e"  @click="showDetails">mdi-menu-up</v-icon></v-btn>
        <div v-show="isDetailsShown" class="font_k px-3 pb-5" style="background-color:#ffedeb">
          <v-chip outlined color="#fd462e" class="mb-3">개요</v-chip>
          <div color="#505050">{{ selectedLicenseInfo.summary }}</div>
          <br>
          <v-chip outlined color="#fd462e" class="mb-3">수행직무</v-chip>
          <div color="#505050">{{ selectedLicenseInfo.job }}</div>
          <br>
          <v-chip outlined color="#fd462e" class="mb-3">출제경향</v-chip>
          <div color="#505050">{{ selectedLicenseInfo.trend }}</div>
          <br>
          <v-chip outlined color="#fd462e" class="mb-3">진로 및 전망</v-chip>
          <div color="#505050">{{ selectedLicenseInfo.career }}</div>
        </div>
      </v-card>
      
      <v-btn class="license-result-detail mt-5 rounded-xl text-white font-k font-weigth-bold" block color="#fd462e" @click="searchRoomList">관련 스터디방 보러가기</v-btn>

      <!-- 유저가 가지고 있는 자격증들을 체크 가능 -->
      <!-- 스낵바 -->
      <div v-show="isUserLogin" class="mt-3 px-3 mb-10">
        <v-row class="text-center">
          <div class="col-4 thumb" cols="sm" v-if="!isTodo">
            <a class="card feed-card content ma-2 rounded-xl font-k font-weigth-bold" v-if="!isTodo" block @click="addTodo(); snackbar1=true" style="background-color:#f5fff7; color:#505050; padding-top:25%">
              <span style="font-size:25px">🌱</span>찜하기
            </a>
          </div>
          <div class="col-4 thumb" cols="sm" v-if="isTodo">
            <a class="card feed-card content ma-2 rounded-xl font-k font-weigth-bold" v-if="isTodo" @click="delTodo(); snackbar4=true" style="background-color:#f5fff7; color:#505050; padding-top:25%">
              <span style="font-size:25px">🌱</span>찜취소
            </a>
          </div>
          <div class="col-4 thumb" cols="sm" v-if="!isDoing"> 
            <a class="card feed-card content ma-2 rounded-xl font-k font-weigth-bold" v-if="!isDoing" @click="addDoing(); snackbar2=true" style="background-color:#ecf1ff; color:#505050; padding-top:25%">
              <span style="font-size:25px">🌿</span>준비중
            </a>
          </div>
          <div class="col-4 thumb" cols="sm" v-if="isDoing">
            <a class="card feed-card content ma-2 rounded-xl font-k font-weigth-bold" v-if="isDoing" @click="delDoing(); snackbar5=true" style="background-color:#ecf1ff; color:#505050; padding-top:25%">
              <span style="font-size:25px">🌿</span>준비중 취소
            </a>
          </div>
          <div class="col-4 thumb" cols="sm" v-if="!isPass">
            <a class="card feed-card content ma-2 rounded-xl font-k font-weigth-bold" v-if="!isPass" @click="addPass(); snackbar3=true" style="background-color:#fff6f5; color:#505050; padding-top:25%">
              <span style="font-size:25px">🌼</span>이미 있어요
            </a>
          </div>
          <div class="col-4 thumb" cols="sm" v-if="isPass">
            <a class="card feed-card content ma-2 rounded-xl font-k font-weigth-bold" v-if="isPass" @click="delPass(); snackbar6=true" style="background-color:#fff6f5; color:#505050; padding-top:25%">
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
              마이페이지에서 추가정보를 입력하세요.
              <template v-slot:action="{ attrs }">
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
              마이페이지에서 추가정보를 입력하세요.
              <template v-slot:action="{ attrs }">
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
              마이페이지에서 추가정보를 입력하세요.
              <template v-slot:action="{ attrs }">
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

      <!-- 자격증에 대한 상세정보 탭 -->
      <!-- <div class="d-flex justify-center">
        <h5 class="license-result-detail">상세 정보</h5>
      </div>
      
      <div class="d-flex justify-space-between">
        <v-btn v-show="isDetailsShown" class="ml-2 license-result-detail" small color="red" @click="showDetails">닫기</v-btn>
        <v-btn v-show="!isDetailsShown" class="ml-2 license-result-detail" small color="primary" @click="showDetails">정보 보기 </v-btn>
        <v-btn class="ml-2 license-result-detail" small color="primary" @click="searchRoomList">해당 자격증에 대한 스터디방 보기</v-btn>

      </div>

      <ul v-show="isDetailsShown">
        <li class="mb-2">개요: {{ selectedLicenseInfo.summary }}</li>
        <li class="mb-2">수행직무: {{ selectedLicenseInfo.job }}</li>
        <li class="mb-2">출제경향: {{ selectedLicenseInfo.trend }}</li>
        <li class="mb-2">진로 및 전망: {{ selectedLicenseInfo.career }}</li>
      </ul> -->

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
    // 로그인 정보 가져오는 함수
    if(localStorage.getItem('loginUID')){
      this.isUserLogin = true
      this.hostID = localStorage.getItem('loginUID')
    } else if(sessionStorage.getItem('loginUID')) {
      this.isUserLogin = true
      this.hostID = sessionStorage.getItem('loginUID')
    } else {
      this.isUserLogin = false
    }

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
          params: {
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
    ///////////////////////////////
    // 이 자격증과 관련된 자격증 추천
    axios.get(`http://${this.$store.state.address}:8080/license/getAnalysis`, {
      params: {
        licenseCode: this.selectedLicense.licenseCode
      }
    })
      .then(res => console.log(res))
      .catch( err => console.log(err.message))
      .finally(() => console.log(this.selectedLicense.licenseCode))

    ///////////////////////////////
    // 
    axios.get(`http://${this.$store.state.address}:8080/license/getavgtime`, {
      params: {
        licenseCode: this.selectedLicense.licenseCode
      }
    })
      .then(res => console.log(res))
      .catch( err => console.log(err.message))
      .finally(() => console.log(this.selectedLicense.licenseCode))
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
    goMylicense() {
      this.$router.push({name: 'MyStudy', params:{ UID: this.hostID }})
    },
    showDetails: function () {
      this.isDetailsShown = !this.isDetailsShown;
    },
    // 버튼관련 메소드들
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
    searchRoomList() {
      axios.get(`http://${this.$store.state.address}:8080/study/findStudyroomByLicense`, {
        params: {
          licenseName:this.selectedLicense.licenseName
        }
      })
      .then(response => {
        console.log(response)
        var rooms = response.data.object
        // this.$emit('search-end')

          this.$router.push({ name: 'Rooms', params: {
          fromroom: true,
          roomset: rooms,
          searchselect: '자격증', 
          searchThing: this.selectedLicense.licenseName
        }})
      })
    }
  },
  data: function () {
    return {
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
  }
};
</script>

<style scoped>
.resultdetail-h5 {
  color: #8f8f8f;
  font-size: 18px;
}
/* .license-result-detail {
  font-family: "Black Han Sans", sans-serif;
} */
.thumb {
  position:relative;
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
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: 'Nanum Gothic', sans-serif; 
}
.feed-card {
  padding:0 0 0 0
}
</style>