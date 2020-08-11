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
      <h5>상세정보</h5>
      <ul>
        <li class="mb-2">개요: {{ selectedLicenseInfo.summary }}</li>
        <li class="mb-2">수행직무: {{ selectedLicenseInfo.job }}</li>
        <li class="mb-2">출제경향: {{ selectedLicenseInfo.trend }}</li>
        <li class="mb-2">진로 및 전망: {{ selectedLicenseInfo.career }}</li>
      </ul>

      <highcharts :options="chartOptions"></highcharts>


      <LicenseReview :licenseInfo="selectedLicense" />
    </div>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
import VariablePie from 'highcharts/modules/variable-pie'
import {Chart} from 'highcharts-vue'
import axios from 'axios'
import LicenseReview from "./LicenseReview.vue";

VariablePie(Highcharts)

export default {
  name: "LicenseResultDetail",
  components: {
    LicenseReview,
    highcharts: Chart
  },
  created: function() {

  },
  mounted: function () {
    ////////////////////////////////////
    // selectedLicenseInfo에 해당자격증의 디테일을 넣음
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

    //////////////////////////////////////
    // 유저가 가지고 있는 라이센스 정보를 가져옴
      console.log('created start')
      axios.get('http://localhost:8080/license/getMyLicense', {
      params: {
        UID: this.hostID
      }
    })
    .then(res => {
      const licenses = res.data.object
      // 지금 자격증이 mylicense에 있는지 확인 => 버튼 비/활성화
      licenses.forEach( obj => {
        console.log('selectedLicenseCode', this.selectedLicense.licenseCode, 'obj license code', obj.license.licenseCode)
        if(this.selectedLicense.licenseCode === obj.license.licenseCode) {
          if(obj.licenseStatus === 'todo'){
            this.isTodo = true
          } else if(obj.licenseStatus === 'doing') {
            this.isDoing = true
          } else {
            this.isPass = true
          }
        }
      })
    })
    .catch( res => {console.log(res.message)})

  },
  computed: {
    isEmptyObject() {
      const params = this.selectedLicense
      return Object.keys(params).length === 0 && params.constructor === Object;
    },
  },
  watch: {
    'passLicenses': function(){
      this.$emit("cntPass", this.passLicenses.length)
    }
  },
  methods: {
    addTodo() {
      
    },
    addDoing() {

    },
    addPass() {

    }
  },
  data: function () {
    return {
      // 유저에게서 자격증 취득 현황을 받아오기 위한 변수들
      hostID: 1,
      passLicenses: {
        type: Array
      },
      todoLicenses: {
        type: Array
      },
      isTodo: false,
      isDoing: false,
      isPass: false,

      // 선택된 자격증에 대한 정보
      selectedLicenseInfo: {
        type: Object
      },
      selectedLicense: this.$store.state.license.selectedLicense,
      
      chartOptions: {
        chart: {
          type: 'variablepie'
        },
        title: {
          text: '아시나요? 합격자의 68퍼센트는 대학생 때 이자격증을 취득했습니다.'
        },
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            '전체 수험생 중 비율: <b>{point.y} % </b><br/> ' +
            '응시자 수: <b>{point.z}</b><br/>'
        },
        series: [{
          minPointSize: 10,
          innerSize: '20%',
          zMin: 0,
          name: 'countries',
          data: [{
              name: '미상',
              y: 6,
              z: 92
            }, {
              name: '전문대 재학',
              y: 8,
              z: 55
            }, {
              name: '전문대 졸업',
              y: 13,
              z: 124
            }, {
              name: '대학 재학',
              y: 58,
              z: 188
            }, {
              name: '대학 졸업',
              y: 21,
              z: 137
            }, {
              name: '기타',
              y: 4,
              z: 21
            }
          ]
        }]   
      }
    };
  },
};
</script>

<style scoped>
#container {
	height: 500px;
}

.highcharts-figure, .highcharts-data-table table {
  min-width: 320px; 
  max-width: 700px;
  margin: 1em auto;
}

.highcharts-data-table table {
	font-family: Verdana, sans-serif;
	border-collapse: collapse;
	border: 1px solid #EBEBEB;
	margin: 10px auto;
	text-align: center;
	width: 100%;
	max-width: 500px;
}
.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}
.highcharts-data-table th {
	font-weight: 600;
  padding: 0.5em;
}
.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
  padding: 0.5em;
}
.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}
.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>