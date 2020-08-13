import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    address: 'localhost',
    license: {
      // LicenseField 에서 사용하는 변수들
      field1: {
        type: String
      },
      field2: {
        type: String
      },
      keyword: {
        type: String
      },
      licenses: {
        type: Array
      },
      ncs_fields: [
        {
          "ncsCategoryCode1": 23,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "목구조관리기술자",
                  "licenseSeries": "None",
                  "licenseSeriesName": "None",
                  "licenseCode": 9997
                },
                {
                  "licenseName": "목구조시공기술자",
                  "licenseSeries": "None",
                  "licenseSeriesName": "None",
                  "licenseCode": 9998
                },
                {
                  "licenseName": "가구제작산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2142
                },
                {
                  "licenseName": "피아노조율산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2551
                },
                {
                  "licenseName": "귀금속가공산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2760
                },
                {
                  "licenseName": "보석디자인산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2880
                },
                {
                  "licenseName": "보석감정산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2980
                },
                {
                  "licenseName": "귀금속가공기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3770
                },
                {
                  "licenseName": "석공예기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6792
                },
                {
                  "licenseName": "가구제작기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7140
                },
                {
                  "licenseName": "귀금속가공기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7460
                },
                {
                  "licenseName": "목공예기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7480
                },
                {
                  "licenseName": "보석가공기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7889
                },
                {
                  "licenseName": "도자공예기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7890
                },
                {
                  "licenseName": "피아노조율기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7917
                },
                {
                  "licenseName": "보석감정사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7980
                }
              ],
              "ncsCategoryName2": "목재 가구 공예",
              "ncsCategoryCode2": 232
            },
            {
              "licenses": [
                {
                  "licenseName": "인쇄기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1391
                },
                {
                  "licenseName": "인쇄산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2391
                },
                {
                  "licenseName": "전자출판기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6791
                },
                {
                  "licenseName": "인쇄기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7524
                },
                {
                  "licenseName": "사진기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7795
                }
              ],
              "ncsCategoryName2": "인쇄 사진",
              "ncsCategoryCode2": 231
            }
          ],
          "ncsCategoryName1": "인쇄 목재 가구 공예"
        },
        {
          "ncsCategoryCode1": 17,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "용접기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 11
                },
                {
                  "licenseName": "용접기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1022
                },
                {
                  "licenseName": "용접산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2026
                },
                {
                  "licenseName": "용접기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3100
                },
                {
                  "licenseName": "특수용접기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6222
                },
                {
                  "licenseName": "용접기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6223
                }
              ],
              "ncsCategoryName2": "용접",
              "ncsCategoryCode2": 174
            },
            {
              "licenses": [
                {
                  "licenseName": "금속제련기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 94
                },
                {
                  "licenseName": "금속재료기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 110
                },
                {
                  "licenseName": "금속가공기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 130
                },
                {
                  "licenseName": "세라믹기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 790
                },
                {
                  "licenseName": "금속재료기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1104
                },
                {
                  "licenseName": "금속재료산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2101
                },
                {
                  "licenseName": "재료조직평가산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2107
                },
                {
                  "licenseName": "금속재료기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3221
                },
                {
                  "licenseName": "제선기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3230
                },
                {
                  "licenseName": "제강기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3240
                },
                {
                  "licenseName": "압연기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3270
                },
                {
                  "licenseName": "축로기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6381
                },
                {
                  "licenseName": "열처리기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6420
                },
                {
                  "licenseName": "금속재료시험기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6490
                },
                {
                  "licenseName": "제선기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6500
                },
                {
                  "licenseName": "제강기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6515
                },
                {
                  "licenseName": "압연기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6543
                }
              ],
              "ncsCategoryName2": "금속 재료",
              "ncsCategoryCode2": 171
            },
            {
              "licenses": [
                {
                  "licenseName": "표면처리기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 120
                },
                {
                  "licenseName": "표면처리산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2106
                },
                {
                  "licenseName": "표면처리기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3210
                },
                {
                  "licenseName": "표면처리기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6480
                },
                {
                  "licenseName": "금속도장기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7450
                },
                {
                  "licenseName": "광고도장기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7888
                }
              ],
              "ncsCategoryName2": "도장 도금",
              "ncsCategoryCode2": 175
            },
            {
              "licenses": [
                {
                  "licenseName": "판금제관산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2012
                },
                {
                  "licenseName": "판금제관기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3095
                },
                {
                  "licenseName": "판금제관기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6175
                },
                {
                  "licenseName": "금속재창호기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7102
                },
                {
                  "licenseName": "플라스틱창호기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7103
                }
              ],
              "ncsCategoryName2": "판금 제관 새시",
              "ncsCategoryCode2": 172
            },
            {
              "licenses": [
                {
                  "licenseName": "주조산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2105
                },
                {
                  "licenseName": "주조기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3200
                },
                {
                  "licenseName": "주조기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6461
                },
                {
                  "licenseName": "원형기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6530
                }
              ],
              "ncsCategoryName2": "단조 주조",
              "ncsCategoryCode2": 173
            }
          ],
          "ncsCategoryName1": "재료"
        },
        {
          "ncsCategoryCode1": 16,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "금형기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 12
                },
                {
                  "licenseName": "사출금형설계기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1024
                },
                {
                  "licenseName": "프레스금형설계기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1025
                },
                {
                  "licenseName": "사출금형산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2028
                },
                {
                  "licenseName": "프레스금형산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2029
                },
                {
                  "licenseName": "금형제작기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3061
                },
                {
                  "licenseName": "금형기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6105
                }
              ],
              "ncsCategoryName2": "금형 공작기계",
              "ncsCategoryCode2": 167
            },
            {
              "licenses": [
                {
                  "licenseName": "차량기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 50
                },
                {
                  "licenseName": "그린전동자동차기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1027
                },
                {
                  "licenseName": "자동차정비기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1070
                },
                {
                  "licenseName": "자동차정비산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2070
                },
                {
                  "licenseName": "자동차정비기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3110
                },
                {
                  "licenseName": "자동차정비기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6281
                },
                {
                  "licenseName": "자동차차체수리기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6285
                },
                {
                  "licenseName": "자동차보수도장기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6836
                }
              ],
              "ncsCategoryName2": "자동차",
              "ncsCategoryCode2": 166
            },
            {
              "licenses": [
                {
                  "licenseName": "산업기계설비기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 60
                },
                {
                  "licenseName": "공조냉동기계기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 71
                },
                {
                  "licenseName": "건설기계기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 80
                },
                {
                  "licenseName": "농업기계기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1023
                },
                {
                  "licenseName": "건설기계설비기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1040
                },
                {
                  "licenseName": "건설기계정비기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1050
                },
                {
                  "licenseName": "궤도장비정비기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1051
                },
                {
                  "licenseName": "메카트로닉스기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1060
                },
                {
                  "licenseName": "승강기기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1555
                },
                {
                  "licenseName": "공조냉동기계기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1730
                },
                {
                  "licenseName": "설비보전기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1837
                },
                {
                  "licenseName": "농업기계산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2027
                },
                {
                  "licenseName": "생산자동화산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2034
                },
                {
                  "licenseName": "기계정비산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2035
                },
                {
                  "licenseName": "건설기계설비산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2040
                },
                {
                  "licenseName": "건설기계정비산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2050
                },
                {
                  "licenseName": "궤도장비정비산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2051
                },
                {
                  "licenseName": "승강기산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2395
                },
                {
                  "licenseName": "공조냉동기계산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2590
                },
                {
                  "licenseName": "전자부품장착산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2835
                },
                {
                  "licenseName": "건설기계정비기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3120
                },
                {
                  "licenseName": "반도체장비유지보수기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6033
                },
                {
                  "licenseName": "궤도장비정비기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6051
                },
                {
                  "licenseName": "건설기계정비기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6298
                },
                {
                  "licenseName": "농기계정비기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6300
                },
                {
                  "licenseName": "공조냉동기계기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6320
                },
                {
                  "licenseName": "생산자동화기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6415
                },
                {
                  "licenseName": "전자부품장착기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6835
                },
                {
                  "licenseName": "설비보전기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6837
                },
                {
                  "licenseName": "기계정비기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7121
                },
                {
                  "licenseName": "승강기기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7940
                }
              ],
              "ncsCategoryName2": "기계장비설비 설치",
              "ncsCategoryCode2": 162
            },
            {
              "licenses": [
                {
                  "licenseName": "조선기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 320
                },
                {
                  "licenseName": "조선기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1220
                },
                {
                  "licenseName": "조선산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2220
                },
                {
                  "licenseName": "전산응용조선제도기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6910
                },
                {
                  "licenseName": "선체건조기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6920
                },
                {
                  "licenseName": "동력기계정비기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6960
                }
              ],
              "ncsCategoryName2": "조선",
              "ncsCategoryCode2": 164
            },
            {
              "licenses": [
                {
                  "licenseName": "항공기체기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 360
                },
                {
                  "licenseName": "항공기관기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 370
                },
                {
                  "licenseName": "항공기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1240
                },
                {
                  "licenseName": "항공산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2230
                },
                {
                  "licenseName": "항공기체정비기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6291
                },
                {
                  "licenseName": "항공기관정비기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6292
                },
                {
                  "licenseName": "항공장비정비기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6293
                },
                {
                  "licenseName": "항공전자정비기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6294
                }
              ],
              "ncsCategoryName2": "항공",
              "ncsCategoryCode2": 165
            },
            {
              "licenses": [
                {
                  "licenseName": "철도차량기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 431
                },
                {
                  "licenseName": "철도차량기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1030
                },
                {
                  "licenseName": "철도차량산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2030
                },
                {
                  "licenseName": "철도차량정비기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3150
                },
                {
                  "licenseName": "철도차량정비기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6352
                }
              ],
              "ncsCategoryName2": "철도",
              "ncsCategoryCode2": 163
            },
            {
              "licenses": [
                {
                  "licenseName": "기계기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 872
                },
                {
                  "licenseName": "일반기계기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1021
                },
                {
                  "licenseName": "기계설계기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1080
                },
                {
                  "licenseName": "기계조립산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2011
                },
                {
                  "licenseName": "컴퓨터응용가공산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2025
                },
                {
                  "licenseName": "기계설계산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2031
                },
                {
                  "licenseName": "치공구설계산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2090
                },
                {
                  "licenseName": "정밀측정산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2104
                },
                {
                  "licenseName": "기계가공기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3021
                },
                {
                  "licenseName": "컴퓨터응용선반기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6012
                },
                {
                  "licenseName": "컴퓨터응용밀링기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6032
                },
                {
                  "licenseName": "연삭기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6040
                },
                {
                  "licenseName": "기계가공조립기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6042
                },
                {
                  "licenseName": "정밀측정기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6120
                },
                {
                  "licenseName": "전산응용기계제도기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6151
                },
                {
                  "licenseName": "공유압기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6251
                }
              ],
              "ncsCategoryName2": "기계제작",
              "ncsCategoryCode2": 161
            }
          ],
          "ncsCategoryName1": "기계"
        },
        {
          "ncsCategoryCode1": 18,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "화공기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 210
                },
                {
                  "licenseName": "화공기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1110
                },
                {
                  "licenseName": "화약류제조기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1130
                },
                {
                  "licenseName": "화학분석기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1563
                },
                {
                  "licenseName": "바이오화학제품제조기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1800
                },
                {
                  "licenseName": "화약류제조산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2120
                },
                {
                  "licenseName": "바이오화학제품제조산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2570
                },
                {
                  "licenseName": "화학분석기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6560
                }
              ],
              "ncsCategoryName2": "화공",
              "ncsCategoryCode2": 181
            },
            {
              "licenses": [
                {
                  "licenseName": "위험물산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2121
                },
                {
                  "licenseName": "위험물기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3360
                },
                {
                  "licenseName": "위험물기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6697
                }
              ],
              "ncsCategoryName2": "위험물",
              "ncsCategoryCode2": 182
            }
          ],
          "ncsCategoryName1": "화학"
        },
        {
          "ncsCategoryCode1": 20,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "발송배전기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 230
                },
                {
                  "licenseName": "전기응용기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 250
                },
                {
                  "licenseName": "철도신호기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 261
                },
                {
                  "licenseName": "전기철도기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 432
                },
                {
                  "licenseName": "건축전기설비기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 502
                },
                {
                  "licenseName": "전기기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1150
                },
                {
                  "licenseName": "전기공사기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1160
                },
                {
                  "licenseName": "철도신호기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1740
                },
                {
                  "licenseName": "전기철도기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1741
                },
                {
                  "licenseName": "전기철도산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2036
                },
                {
                  "licenseName": "전기산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2140
                },
                {
                  "licenseName": "전기공사산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2150
                },
                {
                  "licenseName": "철도신호산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2160
                },
                {
                  "licenseName": "전기기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3380
                },
                {
                  "licenseName": "철도전기신호기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6772
                },
                {
                  "licenseName": "전기기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7780
                }
              ],
              "ncsCategoryName2": "전기",
              "ncsCategoryCode2": 201
            },
            {
              "licenses": [
                {
                  "licenseName": "산업계측제어기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 270
                },
                {
                  "licenseName": "전자응용기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 301
                },
                {
                  "licenseName": "임베디드기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1121
                },
                {
                  "licenseName": "전자기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1170
                },
                {
                  "licenseName": "반도체설계기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1175
                },
                {
                  "licenseName": "의공기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1176
                },
                {
                  "licenseName": "로봇기구개발기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1177
                },
                {
                  "licenseName": "로봇소프트웨어개발기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1178
                },
                {
                  "licenseName": "로봇하드웨어개발기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1179
                },
                {
                  "licenseName": "전자계산기기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1321
                },
                {
                  "licenseName": "광학기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1513
                },
                {
                  "licenseName": "광학기기산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2108
                },
                {
                  "licenseName": "전자산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2170
                },
                {
                  "licenseName": "반도체설계산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2175
                },
                {
                  "licenseName": "의공산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2176
                },
                {
                  "licenseName": "3D프린터개발산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2177
                },
                {
                  "licenseName": "전자계산기제어산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2324
                },
                {
                  "licenseName": "전자기기기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3410
                },
                {
                  "licenseName": "의료전자기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6176
                },
                {
                  "licenseName": "전자캐드기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6785
                },
                {
                  "licenseName": "전자기기기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6790
                },
                {
                  "licenseName": "전자계산기기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6801
                },
                {
                  "licenseName": "광학기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7671
                },
                {
                  "licenseName": "3D프린터운용기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7785
                }
              ],
              "ncsCategoryName2": "전자",
              "ncsCategoryCode2": 202
            }
          ],
          "ncsCategoryName1": "전기 전자"
        },
        {
          "ncsCategoryCode1": 14,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "토질및기초기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 390
                },
                {
                  "licenseName": "토목구조기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 400
                },
                {
                  "licenseName": "항만및해안기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 410
                },
                {
                  "licenseName": "도로및공항기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 420
                },
                {
                  "licenseName": "철도기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 430
                },
                {
                  "licenseName": "수자원개발기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 451
                },
                {
                  "licenseName": "상하수도기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 460
                },
                {
                  "licenseName": "농어업토목기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 470
                },
                {
                  "licenseName": "토목시공기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 480
                },
                {
                  "licenseName": "토목품질시험기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 481
                },
                {
                  "licenseName": "측량및지형공간정보기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 680
                },
                {
                  "licenseName": "지적기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 690
                },
                {
                  "licenseName": "해양기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 700
                },
                {
                  "licenseName": "지질및지반기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 825
                },
                {
                  "licenseName": "콘크리트기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1048
                },
                {
                  "licenseName": "토목기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1250
                },
                {
                  "licenseName": "항로표지기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1351
                },
                {
                  "licenseName": "측량및지형공간정보기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1380
                },
                {
                  "licenseName": "지적기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1390
                },
                {
                  "licenseName": "해양환경기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1401
                },
                {
                  "licenseName": "해양자원개발기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1402
                },
                {
                  "licenseName": "해양공학기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1403
                },
                {
                  "licenseName": "응용지질기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1550
                },
                {
                  "licenseName": "건설재료시험기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1750
                },
                {
                  "licenseName": "철도토목기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1760
                },
                {
                  "licenseName": "콘크리트산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2048
                },
                {
                  "licenseName": "토목산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2240
                },
                {
                  "licenseName": "측량및지형공간정보산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2330
                },
                {
                  "licenseName": "지적산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2340
                },
                {
                  "licenseName": "해양조사산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2350
                },
                {
                  "licenseName": "항로표지산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2351
                },
                {
                  "licenseName": "잠수산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2521
                },
                {
                  "licenseName": "건설재료시험산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2600
                },
                {
                  "licenseName": "철도토목산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2610
                },
                {
                  "licenseName": "잠수기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3911
                },
                {
                  "licenseName": "항로표지기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6351
                },
                {
                  "licenseName": "측량기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6980
                },
                {
                  "licenseName": "석공기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6990
                },
                {
                  "licenseName": "철도토목기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7010
                },
                {
                  "licenseName": "콘크리트기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7020
                },
                {
                  "licenseName": "전산응용토목제도기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7072
                },
                {
                  "licenseName": "건설재료시험기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7132
                },
                {
                  "licenseName": "잠수기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7612
                },
                {
                  "licenseName": "지적기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7650
                },
                {
                  "licenseName": "도화기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7660
                },
                {
                  "licenseName": "항공사진기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7670
                },
                {
                  "licenseName": "지도제작기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7680
                }
              ],
              "ncsCategoryName2": "토목",
              "ncsCategoryCode2": 142
            },
            {
              "licenses": [
                {
                  "licenseName": "건축구조기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 490
                },
                {
                  "licenseName": "건축기계설비기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 501
                },
                {
                  "licenseName": "건축시공기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 510
                },
                {
                  "licenseName": "건축품질시험기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 511
                },
                {
                  "licenseName": "실내건축기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1282
                },
                {
                  "licenseName": "건축기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1630
                },
                {
                  "licenseName": "건축설비기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1632
                },
                {
                  "licenseName": "건축일반시공산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2251
                },
                {
                  "licenseName": "건축목공산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2253
                },
                {
                  "licenseName": "실내건축산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2282
                },
                {
                  "licenseName": "건축산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2530
                },
                {
                  "licenseName": "건축설비산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2531
                },
                {
                  "licenseName": "방수산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2630
                },
                {
                  "licenseName": "건축목재시공기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3611
                },
                {
                  "licenseName": "건축일반시공기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3621
                },
                {
                  "licenseName": "방수기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7030
                },
                {
                  "licenseName": "전산응용건축제도기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7061
                },
                {
                  "licenseName": "조적기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7070
                },
                {
                  "licenseName": "철근기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7080
                },
                {
                  "licenseName": "미장기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7110
                },
                {
                  "licenseName": "비계기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7120
                },
                {
                  "licenseName": "건축목공기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7130
                },
                {
                  "licenseName": "건축도장기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7150
                },
                {
                  "licenseName": "유리시공기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7151
                },
                {
                  "licenseName": "실내건축기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7152
                },
                {
                  "licenseName": "온수온돌기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7161
                },
                {
                  "licenseName": "거푸집기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7170
                },
                {
                  "licenseName": "도배기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7180
                },
                {
                  "licenseName": "타일기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7210
                }
              ],
              "ncsCategoryName2": "건축",
              "ncsCategoryCode2": 141
            },
            {
              "licenses": [
                {
                  "licenseName": "도시계획기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 650
                },
                {
                  "licenseName": "교통기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 951
                },
                {
                  "licenseName": "도시계획기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1350
                },
                {
                  "licenseName": "교통기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1751
                },
                {
                  "licenseName": "교통산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2751
                }
              ],
              "ncsCategoryName2": "도시 교통",
              "ncsCategoryCode2": 144
            },
            {
              "licenses": [
                {
                  "licenseName": "조경기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 670
                },
                {
                  "licenseName": "조경기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1370
                },
                {
                  "licenseName": "조경산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2320
                },
                {
                  "licenseName": "조경기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7900
                }
              ],
              "ncsCategoryName2": "조경",
              "ncsCategoryCode2": 143
            },
            {
              "licenses": [
                {
                  "licenseName": "배관산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2041
                },
                {
                  "licenseName": "배관기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3081
                },
                {
                  "licenseName": "배관기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6213
                }
              ],
              "ncsCategoryName2": "건설배관",
              "ncsCategoryCode2": 145
            },
            {
              "licenses": [
                {
                  "licenseName": "천공기운전기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7483
                },
                {
                  "licenseName": "타워크레인운전기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7834
                },
                {
                  "licenseName": "컨테이너크레인운전기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7835
                },
                {
                  "licenseName": "기중기운전기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7861
                },
                {
                  "licenseName": "굴삭기운전기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7862
                },
                {
                  "licenseName": "불도저운전기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7863
                },
                {
                  "licenseName": "천장크레인운전기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7864
                },
                {
                  "licenseName": "로더운전기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7866
                },
                {
                  "licenseName": "롤러운전기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7871
                },
                {
                  "licenseName": "지게차운전기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7875
                },
                {
                  "licenseName": "양화장치운전기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7930
                }
              ],
              "ncsCategoryName2": "건설기계운전",
              "ncsCategoryCode2": 146
            }
          ],
          "ncsCategoryName1": "건설"
        },
        {
          "ncsCategoryCode1": 2,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "전산회계운용사 1급",
                  "licenseSeries": "None",
                  "licenseSeriesName": "None",
                  "licenseCode": 482
                },
                {
                  "licenseName": "전산회계운용사1급",
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseCode": 9621
                },
                {
                  "licenseName": "전산회계운용사2급",
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseCode": 9622
                },
                {
                  "licenseName": "전산회계운용사3급",
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseCode": 9623
                }
              ],
              "ncsCategoryName2": "회계",
              "ncsCategoryCode2": 22
            },
            {
              "licenses": [
                {
                  "licenseName": "컴퓨터활용능력1급",
                  "licenseSeries": "None",
                  "licenseSeriesName": "None",
                  "licenseCode": 492
                },
                {
                  "licenseName": "컴퓨터활용능력1급",
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseCode": 9611
                },
                {
                  "licenseName": "컴퓨터활용능력2급",
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseCode": 9612
                },
                {
                  "licenseName": "비서1급",
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseCode": 9937
                },
                {
                  "licenseName": "비서2급",
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseCode": 9938
                },
                {
                  "licenseName": "비서3급",
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseCode": 9939
                },
                {
                  "licenseName": "워드프로세서",
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseCode": 9961
                },
                {
                  "licenseName": "한글속기1급",
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseCode": 9971
                },
                {
                  "licenseName": "한글속기2급",
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseCode": 9972
                },
                {
                  "licenseName": "한글속기3급",
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseCode": 9973
                }
              ],
              "ncsCategoryName2": "사무",
              "ncsCategoryCode2": 23
            },
            {
              "licenses": [
                {
                  "licenseName": "공장관리기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 760
                },
                {
                  "licenseName": "품질관리기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 770
                },
                {
                  "licenseName": "포장기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 780
                },
                {
                  "licenseName": "품질경영기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1500
                },
                {
                  "licenseName": "포장기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1511
                },
                {
                  "licenseName": "품질경영산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2420
                },
                {
                  "licenseName": "포장산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2431
                }
              ],
              "ncsCategoryName2": "생산관리",
              "ncsCategoryCode2": 24
            },
            {
              "licenses": [
                {
                  "licenseName": "사회조사분석사1급",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 9520
                },
                {
                  "licenseName": "사회조사분석사2급",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 9521
                },
                {
                  "licenseName": "컨벤션기획사1급",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 9535
                },
                {
                  "licenseName": "컨벤션기획사2급",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 9536
                },
                {
                  "licenseName": "소비자전문상담사1급",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 9537
                },
                {
                  "licenseName": "소비자전문상담사2급",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 9538
                }
              ],
              "ncsCategoryName2": "경영",
              "ncsCategoryCode2": 21
            }
          ],
          "ncsCategoryName1": "경영 회계 사무"
        },
        {
          "ncsCategoryCode1": 19,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "섬유기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 551
                },
                {
                  "licenseName": "의류기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 561
                },
                {
                  "licenseName": "섬유기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1297
                },
                {
                  "licenseName": "의류기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1301
                },
                {
                  "licenseName": "섬유디자인산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2264
                },
                {
                  "licenseName": "섬유산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2277
                },
                {
                  "licenseName": "염색기능사(침염)",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7301
                },
                {
                  "licenseName": "염색기능사(날염)",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7302
                }
              ],
              "ncsCategoryName2": "섬유",
              "ncsCategoryCode2": 191
            },
            {
              "licenses": [
                {
                  "licenseName": "패션머천다이징산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2085
                },
                {
                  "licenseName": "한복산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2268
                },
                {
                  "licenseName": "패션디자인산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2301
                },
                {
                  "licenseName": "신발산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2302
                },
                {
                  "licenseName": "한복기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7723
                },
                {
                  "licenseName": "신발류제조기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7904
                },
                {
                  "licenseName": "양복기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7931
                },
                {
                  "licenseName": "양장기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7932
                },
                {
                  "licenseName": "세탁기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7960
                }
              ],
              "ncsCategoryName2": "의복",
              "ncsCategoryCode2": 192
            }
          ],
          "ncsCategoryName1": "섬유 의복"
        },
        {
          "ncsCategoryCode1": 15,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "자원관리기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 570
                },
                {
                  "licenseName": "화약류관리기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 591
                },
                {
                  "licenseName": "화약류관리기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1140
                },
                {
                  "licenseName": "광산보안기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1450
                },
                {
                  "licenseName": "화약류관리산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2130
                },
                {
                  "licenseName": "광산보안산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2135
                },
                {
                  "licenseName": "시추기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7330
                },
                {
                  "licenseName": "광산보안기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7380
                },
                {
                  "licenseName": "화약취급기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7970
                }
              ],
              "ncsCategoryName2": "채광",
              "ncsCategoryCode2": 151
            },
            {
              "licenses": [
                {
                  "licenseName": "광해방지기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 575
                },
                {
                  "licenseName": "광해방지기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1575
                }
              ],
              "ncsCategoryName2": "광해방지",
              "ncsCategoryCode2": 152
            }
          ],
          "ncsCategoryName1": "광업자원"
        },
        {
          "ncsCategoryCode1": 21,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "정보관리기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 601
                },
                {
                  "licenseName": "컴퓨터시스템응용기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 622
                },
                {
                  "licenseName": "정보처리기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1320
                },
                {
                  "licenseName": "전자계산기조직응용기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1322
                },
                {
                  "licenseName": "정보보안기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1325
                },
                {
                  "licenseName": "사무자동화산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2193
                },
                {
                  "licenseName": "정보처리산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2290
                },
                {
                  "licenseName": "정보보안산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2325
                },
                {
                  "licenseName": "정보기기운용기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6892
                },
                {
                  "licenseName": "정보처리기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6921
                },
                {
                  "licenseName": "멀티미디어콘텐츠제작전문가",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 9545
                }
              ],
              "ncsCategoryName2": "정보기술",
              "ncsCategoryCode2": 211
            },
            {
              "licenses": [
                {
                  "licenseName": "전파전자통신기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1195
                },
                {
                  "licenseName": "전파전자통신산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2195
                },
                {
                  "licenseName": "전파전자통신기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6893
                }
              ],
              "ncsCategoryName2": "통신",
              "ncsCategoryCode2": 213
            }
          ],
          "ncsCategoryName1": "정보통신"
        },
        {
          "ncsCategoryCode1": 24,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "수산양식기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 701
                },
                {
                  "licenseName": "어로기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 702
                },
                {
                  "licenseName": "수산양식기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1625
                },
                {
                  "licenseName": "어업생산관리기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1633
                },
                {
                  "licenseName": "수산양식산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2520
                },
                {
                  "licenseName": "어로산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2631
                },
                {
                  "licenseName": "수산양식기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7700
                }
              ],
              "ncsCategoryName2": "어업",
              "ncsCategoryCode2": 244
            },
            {
              "licenses": [
                {
                  "licenseName": "산림기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 801
                },
                {
                  "licenseName": "식물보호기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1562
                },
                {
                  "licenseName": "산림기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1564
                },
                {
                  "licenseName": "임업종묘기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1570
                },
                {
                  "licenseName": "임산가공기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1590
                },
                {
                  "licenseName": "버섯산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1641
                },
                {
                  "licenseName": "산림산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2481
                },
                {
                  "licenseName": "임산가공산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2500
                },
                {
                  "licenseName": "식물보호산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2562
                },
                {
                  "licenseName": "임업종묘기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7630
                },
                {
                  "licenseName": "버섯종균기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7631
                },
                {
                  "licenseName": "산림기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7632
                },
                {
                  "licenseName": "임산가공기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7644
                }
              ],
              "ncsCategoryName2": "임업",
              "ncsCategoryCode2": 243
            },
            {
              "licenses": [
                {
                  "licenseName": "종자기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 840
                },
                {
                  "licenseName": "시설원예기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 841
                },
                {
                  "licenseName": "농화학기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 950
                },
                {
                  "licenseName": "종자기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1560
                },
                {
                  "licenseName": "화훼장식기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1576
                },
                {
                  "licenseName": "유기농업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1592
                },
                {
                  "licenseName": "시설원예기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1780
                },
                {
                  "licenseName": "종자산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2470
                },
                {
                  "licenseName": "유기농업산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2592
                },
                {
                  "licenseName": "화훼장식산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2625
                },
                {
                  "licenseName": "유기농업기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6592
                },
                {
                  "licenseName": "종자기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7620
                },
                {
                  "licenseName": "화훼장식기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7625
                },
                {
                  "licenseName": "원예기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7901
                }
              ],
              "ncsCategoryName2": "농업",
              "ncsCategoryCode2": 241
            },
            {
              "licenses": [
                {
                  "licenseName": "축산기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 851
                },
                {
                  "licenseName": "축산기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1581
                },
                {
                  "licenseName": "축산산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2491
                },
                {
                  "licenseName": "축산기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7481
                },
                {
                  "licenseName": "식육처리기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7482
                }
              ],
              "ncsCategoryName2": "축산",
              "ncsCategoryCode2": 242
            }
          ],
          "ncsCategoryName1": "농림어업"
        },
        {
          "ncsCategoryCode1": 25,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "기계안전기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 710
                },
                {
                  "licenseName": "화공안전기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 720
                },
                {
                  "licenseName": "전기안전기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 730
                },
                {
                  "licenseName": "건설안전기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 740
                },
                {
                  "licenseName": "소방기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 750
                },
                {
                  "licenseName": "산업위생관리기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 751
                },
                {
                  "licenseName": "가스기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 752
                },
                {
                  "licenseName": "인간공학기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 875
                },
                {
                  "licenseName": "산업안전기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1431
                },
                {
                  "licenseName": "건설안전기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1440
                },
                {
                  "licenseName": "화재감식평가기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1441
                },
                {
                  "licenseName": "농작업안전보건기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1442
                },
                {
                  "licenseName": "방재기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1443
                },
                {
                  "licenseName": "가스기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1471
                },
                {
                  "licenseName": "산업위생관리기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1472
                },
                {
                  "licenseName": "인간공학기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1875
                },
                {
                  "licenseName": "소방설비기사(기계분야)",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1900
                },
                {
                  "licenseName": "소방설비기사(전기분야)",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1910
                },
                {
                  "licenseName": "산업안전산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2381
                },
                {
                  "licenseName": "건설안전산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2390
                },
                {
                  "licenseName": "화재감식평가산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2441
                },
                {
                  "licenseName": "가스산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2471
                },
                {
                  "licenseName": "산업위생관리산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2472
                },
                {
                  "licenseName": "소방설비산업기사(기계분야)",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2900
                },
                {
                  "licenseName": "소방설비산업기사(전기분야)",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2910
                },
                {
                  "licenseName": "가스기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3375
                },
                {
                  "licenseName": "가스기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6335
                }
              ],
              "ncsCategoryName2": "안전관리",
              "ncsCategoryCode2": 251
            },
            {
              "licenses": [
                {
                  "licenseName": "비파괴검사기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 802
                },
                {
                  "licenseName": "방사선비파괴검사기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1611
                },
                {
                  "licenseName": "초음파비파괴검사기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1612
                },
                {
                  "licenseName": "자기비파괴검사기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1613
                },
                {
                  "licenseName": "침투비파괴검사기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1614
                },
                {
                  "licenseName": "와전류비파괴검사기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1615
                },
                {
                  "licenseName": "누설비파괴검사기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1617
                },
                {
                  "licenseName": "방사선비파괴검사산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2611
                },
                {
                  "licenseName": "초음파비파괴검사산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2612
                },
                {
                  "licenseName": "자기비파괴검사산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2613
                },
                {
                  "licenseName": "침투비파괴검사산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2614
                },
                {
                  "licenseName": "방사선비파괴검사기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7471
                },
                {
                  "licenseName": "초음파비파괴검사기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7472
                },
                {
                  "licenseName": "자기비파괴검사기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7473
                },
                {
                  "licenseName": "침투비파괴검사기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7474
                }
              ],
              "ncsCategoryName2": "비파괴검사",
              "ncsCategoryCode2": 252
            }
          ],
          "ncsCategoryName1": "안전관리"
        },
        {
          "ncsCategoryCode1": 22,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "식품기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 800
                },
                {
                  "licenseName": "수산제조기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 810
                },
                {
                  "licenseName": "식품기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1530
                },
                {
                  "licenseName": "수산제조기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1540
                },
                {
                  "licenseName": "식육가공기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1541
                },
                {
                  "licenseName": "식품산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2450
                },
                {
                  "licenseName": "식품가공기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7591
                }
              ],
              "ncsCategoryName2": "식품",
              "ncsCategoryCode2": 221
            },
            {
              "licenses": [
                {
                  "licenseName": "제과기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3923
                },
                {
                  "licenseName": "제과기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7892
                },
                {
                  "licenseName": "제빵기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7893
                },
                {
                  "licenseName": "떡제조기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7992
                }
              ],
              "ncsCategoryName2": "제과 제빵",
              "ncsCategoryCode2": 222
            }
          ],
          "ncsCategoryName1": "식품 가공"
        },
        {
          "ncsCategoryCode1": 26,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "기상예보기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 891
                },
                {
                  "licenseName": "신재생에너지발전설비기사(태양광)",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1114
                },
                {
                  "licenseName": "에너지관리기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1340
                },
                {
                  "licenseName": "기상기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1600
                },
                {
                  "licenseName": "기상감정기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1601
                },
                {
                  "licenseName": "신재생에너지발전설비산업기사(태양광)",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2114
                },
                {
                  "licenseName": "에너지관리산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2960
                },
                {
                  "licenseName": "에너지관리기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3170
                },
                {
                  "licenseName": "신재생에너지발전설비기능사(태양광)",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7114
                },
                {
                  "licenseName": "에너지관리기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7761
                }
              ],
              "ncsCategoryName2": "에너지 기상",
              "ncsCategoryCode2": 262
            },
            {
              "licenses": [
                {
                  "licenseName": "대기관리기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 920
                },
                {
                  "licenseName": "수질관리기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 930
                },
                {
                  "licenseName": "자연환경관리기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 938
                },
                {
                  "licenseName": "소음진동기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 940
                },
                {
                  "licenseName": "토양환경기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 948
                },
                {
                  "licenseName": "폐기물처리기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 970
                },
                {
                  "licenseName": "온실가스관리기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1028
                },
                {
                  "licenseName": "환경위해관리기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1029
                },
                {
                  "licenseName": "대기환경기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1661
                },
                {
                  "licenseName": "수질환경기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1662
                },
                {
                  "licenseName": "소음진동기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1663
                },
                {
                  "licenseName": "자연생태복원기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1938
                },
                {
                  "licenseName": "토양환경기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1948
                },
                {
                  "licenseName": "폐기물처리기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1950
                },
                {
                  "licenseName": "생물분류기사(식물)",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1988
                },
                {
                  "licenseName": "생물분류기사(동물)",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1989
                },
                {
                  "licenseName": "온실가스관리산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2037
                },
                {
                  "licenseName": "대기환경산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2571
                },
                {
                  "licenseName": "수질환경산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2572
                },
                {
                  "licenseName": "소음진동산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2573
                },
                {
                  "licenseName": "농림토양평가관리산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2582
                },
                {
                  "licenseName": "자연생태복원산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2938
                },
                {
                  "licenseName": "폐기물처리산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2950
                },
                {
                  "licenseName": "환경기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7918
                }
              ],
              "ncsCategoryName2": "환경",
              "ncsCategoryCode2": 261
            }
          ],
          "ncsCategoryName1": "환경 에너지"
        },
        {
          "ncsCategoryCode1": 8,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "제품디자인기술사",
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseCode": 960
                },
                {
                  "licenseName": "제품디자인기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1512
                },
                {
                  "licenseName": "시각디자인기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1790
                },
                {
                  "licenseName": "컬러리스트기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 1982
                },
                {
                  "licenseName": "제품디자인산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2432
                },
                {
                  "licenseName": "시각디자인산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2434
                },
                {
                  "licenseName": "컬러리스트산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2982
                },
                {
                  "licenseName": "제품응용모델링기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6793
                },
                {
                  "licenseName": "컴퓨터그래픽스운용기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7796
                },
                {
                  "licenseName": "웹디자인기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7798
                }
              ],
              "ncsCategoryName2": "디자인",
              "ncsCategoryCode2": 82
            },
            {
              "licenses": [
                {
                  "licenseName": "영사산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2047
                },
                {
                  "licenseName": "영사기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7920
                }
              ],
              "ncsCategoryName2": "방송",
              "ncsCategoryCode2": 83
            }
          ],
          "ncsCategoryName1": "문화 예술 디자인 방송"
        },
        {
          "ncsCategoryCode1": 9,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "철도운송산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2045
                },
                {
                  "licenseName": "농기계운전기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 6301
                }
              ],
              "ncsCategoryName2": "운전 운송",
              "ncsCategoryCode2": 91
            }
          ],
          "ncsCategoryName1": "운전 운송"
        },
        {
          "ncsCategoryCode1": 13,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "한식조리산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2971
                },
                {
                  "licenseName": "양식조리산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2972
                },
                {
                  "licenseName": "일식조리산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2973
                },
                {
                  "licenseName": "중식조리산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2974
                },
                {
                  "licenseName": "복어조리산업기사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 2975
                },
                {
                  "licenseName": "조리기능장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3922
                },
                {
                  "licenseName": "한식조리기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7910
                },
                {
                  "licenseName": "양식조리기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7911
                },
                {
                  "licenseName": "일식조리기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7912
                },
                {
                  "licenseName": "중식조리기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7913
                },
                {
                  "licenseName": "복어조리기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7914
                },
                {
                  "licenseName": "조주기능사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7916
                }
              ],
              "ncsCategoryName2": "조리",
              "ncsCategoryCode2": 131
            }
          ],
          "ncsCategoryName1": "음식서비스"
        },
        {
          "ncsCategoryCode1": 12,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "미용장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3924
                },
                {
                  "licenseName": "이용장",
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseCode": 3925
                },
                {
                  "licenseName": "이용사",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7908
                },
                {
                  "licenseName": "미용사(일반)",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7937
                },
                {
                  "licenseName": "미용사(피부)",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7947
                },
                {
                  "licenseName": "미용사(네일)",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7957
                },
                {
                  "licenseName": "미용사(메이크업)",
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseCode": 7967
                }
              ],
              "ncsCategoryName2": "이용 미용",
              "ncsCategoryCode2": 121
            },
            {
              "licenses": [
                {
                  "licenseName": "스포츠경영관리사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 9546
                }
              ],
              "ncsCategoryName2": "숙박 여행 오락 스포츠",
              "ncsCategoryCode2": 122
            }
          ],
          "ncsCategoryName1": "이용 숙박 여행 오락 스포츠"
        },
        {
          "ncsCategoryCode1": 6,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "국제의료관광코디네이터",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 9105
                },
                {
                  "licenseName": "임상심리사1급",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 9539
                },
                {
                  "licenseName": "임상심리사2급",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 9540
                }
              ],
              "ncsCategoryName2": "보건 의료",
              "ncsCategoryCode2": 61
            }
          ],
          "ncsCategoryName1": "보건 의료"
        },
        {
          "ncsCategoryCode1": 7,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "직업상담사1급",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 9510
                },
                {
                  "licenseName": "직업상담사2급",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 9511
                }
              ],
              "ncsCategoryName2": "사회복지 종교",
              "ncsCategoryCode2": 71
            }
          ],
          "ncsCategoryName1": "사회복지 종교"
        },
        {
          "ncsCategoryCode1": 10,
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseName": "전자상거래관리사1급",
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseCode": 9530
                },
                {
                  "licenseName": "텔레마케팅관리사",
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseCode": 9541
                },
                {
                  "licenseName": "전자상거래운용사",
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseCode": 9940
                }
              ],
              "ncsCategoryName2": "영업 판매",
              "ncsCategoryCode2": 101
            }
          ],
          "ncsCategoryName1": "영업 판매"
        }
      ],
      // LicenseResultList 에서 사용하는 변수들
      selectedLicense: '',

      licenseInfo: '',
    },
    member: {
      isLogin: false,
      isLoginError: false,
      loginUID: null,
      currentToken: ''
    }
  },
  mutations: {
    // 로그인이 성공했을 때,
    loginSuccess(state) {
      state.member.isLogin = true
      state.member.isLoginError = false
    },
    // 로그인이 실패했을 때 
    loginError(state) {
      state.member.isLogin = false
      state.member.isLoginError = true
    },
    signupSuccess(state) {
      state.member.isLogin = false
    }
  },
  actions: {
    // 로그인 => 서버에 데이터 보내고 UID 받기
    login({ state, commit }, loginData) {
      axios.post(`http://${state.address}:8080/login`, loginData)
        .then(function (res) {
          state.member.loginUID = res.data.object
          commit("loginSuccess")

          router.push({ name: "MyStudy", params: { UID: state.member.loginUID } })

        })
        .catch(function (err) {
          commit("loginError")
          console.log(err)
          // console.log(state.member.isLoginError)
        })
        .finally(function () {
          console.log('cT : ' + state.member.currentToken)
        })
    },
    signup({ state, commit }, signupData) {
      axios.post(`http://${state.address}:8080/join`, signupData)
        .then(res => {
          console.log(res)
          commit("signupSuccess")
          router.push({ name: "SignupComplete" })
        })
        .finally(function () {
          console.log(signupData)
        })
    },
    logout({ state }) {
      axios.post(`http://${state.address}:8080/logout`)
        .then(function () {
          state.member.loginUID = null
          state.member.isLogin = false
          localStorage.removeItem('vuex')
        })
        .catch(function () {
          console.log('logout error')
        })
    }
  },
  modules: {
  }
})
