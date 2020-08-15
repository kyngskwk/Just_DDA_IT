import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
// import createPersistedState from 'vuex-persistedstate'



Vue.use(Vuex)

export default new Vuex.Store({

  // plugins: [
  //   createPersistedState()
  // ],
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
          "ncsCategory2": [
            {
              "licenses": [],
              "ncsCategoryName2": "사업관리",
              "ncsCategoryCode2": 11
            }
          ],
          "ncsCategoryCode1": 1,
          "ncsCategoryName1": "사업관리"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "사회조사분석사1급",
                  "licenseCode": 9520
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "사회조사분석사2급",
                  "licenseCode": 9521
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "컨벤션기획사1급",
                  "licenseCode": 9535
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "컨벤션기획사2급",
                  "licenseCode": 9536
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "소비자전문상담사1급",
                  "licenseCode": 9537
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "소비자전문상담사2급",
                  "licenseCode": 9538
                }
              ],
              "ncsCategoryName2": "경영",
              "ncsCategoryCode2": 21
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "공장관리기술사",
                  "licenseCode": 760
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "품질관리기술사",
                  "licenseCode": 770
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "포장기술사",
                  "licenseCode": 780
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "품질경영기사",
                  "licenseCode": 1500
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "포장기사",
                  "licenseCode": 1511
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "품질경영산업기사",
                  "licenseCode": 2420
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "포장산업기사",
                  "licenseCode": 2431
                }
              ],
              "ncsCategoryName2": "생산관리",
              "ncsCategoryCode2": 24
            },
            {
              "licenses": [
                {
                  "licenseSeries": "None",
                  "licenseSeriesName": "None",
                  "licenseName": "전산회계운용사 1급",
                  "licenseCode": 482
                },
                {
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseName": "전산회계운용사1급",
                  "licenseCode": 9621
                },
                {
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseName": "전산회계운용사2급",
                  "licenseCode": 9622
                },
                {
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseName": "전산회계운용사3급",
                  "licenseCode": 9623
                }
              ],
              "ncsCategoryName2": "회계",
              "ncsCategoryCode2": 22
            },
            {
              "licenses": [
                {
                  "licenseSeries": "None",
                  "licenseSeriesName": "None",
                  "licenseName": "컴퓨터활용능력1급",
                  "licenseCode": 492
                },
                {
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseName": "컴퓨터활용능력1급",
                  "licenseCode": 9611
                },
                {
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseName": "컴퓨터활용능력2급",
                  "licenseCode": 9612
                },
                {
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseName": "비서1급",
                  "licenseCode": 9937
                },
                {
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseName": "비서2급",
                  "licenseCode": 9938
                },
                {
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseName": "비서3급",
                  "licenseCode": 9939
                },
                {
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseName": "워드프로세서",
                  "licenseCode": 9961
                },
                {
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseName": "한글속기1급",
                  "licenseCode": 9971
                },
                {
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseName": "한글속기2급",
                  "licenseCode": 9972
                },
                {
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseName": "한글속기3급",
                  "licenseCode": 9973
                }
              ],
              "ncsCategoryName2": "사무",
              "ncsCategoryCode2": 23
            }
          ],
          "ncsCategoryCode1": 2,
          "ncsCategoryName1": "경영 회계 사무"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "자원관리기술사",
                  "licenseCode": 570
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "화약류관리기술사",
                  "licenseCode": 591
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "화약류관리기사",
                  "licenseCode": 1140
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "광산보안기사",
                  "licenseCode": 1450
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "화약류관리산업기사",
                  "licenseCode": 2130
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "광산보안산업기사",
                  "licenseCode": 2135
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "시추기능사",
                  "licenseCode": 7330
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "광산보안기능사",
                  "licenseCode": 7380
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "화약취급기능사",
                  "licenseCode": 7970
                }
              ],
              "ncsCategoryName2": "채광",
              "ncsCategoryCode2": 151
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "광해방지기술사",
                  "licenseCode": 575
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "광해방지기사",
                  "licenseCode": 1575
                }
              ],
              "ncsCategoryName2": "광해방지",
              "ncsCategoryCode2": 152
            }
          ],
          "ncsCategoryCode1": 15,
          "ncsCategoryName1": "광업자원"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [],
              "ncsCategoryName2": "학교교육",
              "ncsCategoryCode2": 41
            },
            {
              "licenses": [],
              "ncsCategoryName2": "평생교육",
              "ncsCategoryCode2": 42
            },
            {
              "licenses": [],
              "ncsCategoryName2": "직업교육",
              "ncsCategoryCode2": 43
            }
          ],
          "ncsCategoryCode1": 4,
          "ncsCategoryName1": "교육 자연 사회과학"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "기계안전기술사",
                  "licenseCode": 710
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "화공안전기술사",
                  "licenseCode": 720
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "전기안전기술사",
                  "licenseCode": 730
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "건설안전기술사",
                  "licenseCode": 740
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "소방기술사",
                  "licenseCode": 750
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "산업위생관리기술사",
                  "licenseCode": 751
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "가스기술사",
                  "licenseCode": 752
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "인간공학기술사",
                  "licenseCode": 875
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "산업안전기사",
                  "licenseCode": 1431
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "건설안전기사",
                  "licenseCode": 1440
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "화재감식평가기사",
                  "licenseCode": 1441
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "농작업안전보건기사",
                  "licenseCode": 1442
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "방재기사",
                  "licenseCode": 1443
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "가스기사",
                  "licenseCode": 1471
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "산업위생관리기사",
                  "licenseCode": 1472
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "인간공학기사",
                  "licenseCode": 1875
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "소방설비기사(기계분야)",
                  "licenseCode": 1900
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "소방설비기사(전기분야)",
                  "licenseCode": 1910
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "산업안전산업기사",
                  "licenseCode": 2381
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "건설안전산업기사",
                  "licenseCode": 2390
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "화재감식평가산업기사",
                  "licenseCode": 2441
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "가스산업기사",
                  "licenseCode": 2471
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "산업위생관리산업기사",
                  "licenseCode": 2472
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "소방설비산업기사(기계분야)",
                  "licenseCode": 2900
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "소방설비산업기사(전기분야)",
                  "licenseCode": 2910
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "가스기능장",
                  "licenseCode": 3375
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "가스기능사",
                  "licenseCode": 6335
                }
              ],
              "ncsCategoryName2": "안전관리",
              "ncsCategoryCode2": 251
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "비파괴검사기술사",
                  "licenseCode": 802
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "방사선비파괴검사기사",
                  "licenseCode": 1611
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "초음파비파괴검사기사",
                  "licenseCode": 1612
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "자기비파괴검사기사",
                  "licenseCode": 1613
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "침투비파괴검사기사",
                  "licenseCode": 1614
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "와전류비파괴검사기사",
                  "licenseCode": 1615
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "누설비파괴검사기사",
                  "licenseCode": 1617
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "방사선비파괴검사산업기사",
                  "licenseCode": 2611
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "초음파비파괴검사산업기사",
                  "licenseCode": 2612
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "자기비파괴검사산업기사",
                  "licenseCode": 2613
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "침투비파괴검사산업기사",
                  "licenseCode": 2614
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "방사선비파괴검사기능사",
                  "licenseCode": 7471
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "초음파비파괴검사기능사",
                  "licenseCode": 7472
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "자기비파괴검사기능사",
                  "licenseCode": 7473
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "침투비파괴검사기능사",
                  "licenseCode": 7474
                }
              ],
              "ncsCategoryName2": "비파괴검사",
              "ncsCategoryCode2": 252
            }
          ],
          "ncsCategoryCode1": 25,
          "ncsCategoryName1": "안전관리"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "국제의료관광코디네이터",
                  "licenseCode": 9105
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "임상심리사1급",
                  "licenseCode": 9539
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "임상심리사2급",
                  "licenseCode": 9540
                }
              ],
              "ncsCategoryName2": "보건 의료",
              "ncsCategoryCode2": 61
            }
          ],
          "ncsCategoryCode1": 6,
          "ncsCategoryName1": "보건 의료"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "직업상담사1급",
                  "licenseCode": 9510
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "직업상담사2급",
                  "licenseCode": 9511
                }
              ],
              "ncsCategoryName2": "사회복지 종교",
              "ncsCategoryCode2": 71
            }
          ],
          "ncsCategoryCode1": 7,
          "ncsCategoryName1": "사회복지 종교"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "제품디자인기술사",
                  "licenseCode": 960
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "제품디자인기사",
                  "licenseCode": 1512
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "시각디자인기사",
                  "licenseCode": 1790
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "컬러리스트기사",
                  "licenseCode": 1982
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "제품디자인산업기사",
                  "licenseCode": 2432
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "시각디자인산업기사",
                  "licenseCode": 2434
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "컬러리스트산업기사",
                  "licenseCode": 2982
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "제품응용모델링기능사",
                  "licenseCode": 6793
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "컴퓨터그래픽스운용기능사",
                  "licenseCode": 7796
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "웹디자인기능사",
                  "licenseCode": 7798
                }
              ],
              "ncsCategoryName2": "디자인",
              "ncsCategoryCode2": 82
            },
            {
              "licenses": [
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "영사산업기사",
                  "licenseCode": 2047
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "영사기능사",
                  "licenseCode": 7920
                }
              ],
              "ncsCategoryName2": "방송",
              "ncsCategoryCode2": 83
            }
          ],
          "ncsCategoryCode1": 8,
          "ncsCategoryName1": "문화 예술 디자인 방송"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "철도운송산업기사",
                  "licenseCode": 2045
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "농기계운전기능사",
                  "licenseCode": 6301
                }
              ],
              "ncsCategoryName2": "운전 운송",
              "ncsCategoryCode2": 91
            }
          ],
          "ncsCategoryCode1": 9,
          "ncsCategoryName1": "운전 운송"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseName": "전자상거래관리사1급",
                  "licenseCode": 9530
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "텔레마케팅관리사",
                  "licenseCode": 9541
                },
                {
                  "licenseSeries": 15,
                  "licenseSeriesName": "대한상공회의소 시행종목",
                  "licenseName": "전자상거래운용사",
                  "licenseCode": 9940
                }
              ],
              "ncsCategoryName2": "영업 판매",
              "ncsCategoryCode2": 101
            }
          ],
          "ncsCategoryCode1": 10,
          "ncsCategoryName1": "영업 판매"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [],
              "ncsCategoryName2": "경비",
              "ncsCategoryCode2": 111
            },
            {
              "licenses": [],
              "ncsCategoryName2": "청소",
              "ncsCategoryCode2": 112
            }
          ],
          "ncsCategoryCode1": 11,
          "ncsCategoryName1": "경비 청소"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "미용장",
                  "licenseCode": 3924
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "이용장",
                  "licenseCode": 3925
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "이용사",
                  "licenseCode": 7908
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "미용사(일반)",
                  "licenseCode": 7937
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "미용사(피부)",
                  "licenseCode": 7947
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "미용사(네일)",
                  "licenseCode": 7957
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "미용사(메이크업)",
                  "licenseCode": 7967
                }
              ],
              "ncsCategoryName2": "이용 미용",
              "ncsCategoryCode2": 121
            },
            {
              "licenses": [
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "스포츠경영관리사",
                  "licenseCode": 9546
                }
              ],
              "ncsCategoryName2": "숙박 여행 오락 스포츠",
              "ncsCategoryCode2": 122
            }
          ],
          "ncsCategoryCode1": 12,
          "ncsCategoryName1": "이용 숙박 여행 오락 스포츠"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "한식조리산업기사",
                  "licenseCode": 2971
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "양식조리산업기사",
                  "licenseCode": 2972
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "일식조리산업기사",
                  "licenseCode": 2973
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "중식조리산업기사",
                  "licenseCode": 2974
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "복어조리산업기사",
                  "licenseCode": 2975
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "조리기능장",
                  "licenseCode": 3922
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "한식조리기능사",
                  "licenseCode": 7910
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "양식조리기능사",
                  "licenseCode": 7911
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "일식조리기능사",
                  "licenseCode": 7912
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "중식조리기능사",
                  "licenseCode": 7913
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "복어조리기능사",
                  "licenseCode": 7914
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "조주기능사",
                  "licenseCode": 7916
                }
              ],
              "ncsCategoryName2": "조리",
              "ncsCategoryCode2": 131
            }
          ],
          "ncsCategoryCode1": 13,
          "ncsCategoryName1": "음식서비스"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "건축구조기술사",
                  "licenseCode": 490
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "건축기계설비기술사",
                  "licenseCode": 501
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "건축시공기술사",
                  "licenseCode": 510
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "건축품질시험기술사",
                  "licenseCode": 511
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "실내건축기사",
                  "licenseCode": 1282
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "건축기사",
                  "licenseCode": 1630
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "건축설비기사",
                  "licenseCode": 1632
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "건축일반시공산업기사",
                  "licenseCode": 2251
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "건축목공산업기사",
                  "licenseCode": 2253
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "실내건축산업기사",
                  "licenseCode": 2282
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "건축산업기사",
                  "licenseCode": 2530
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "건축설비산업기사",
                  "licenseCode": 2531
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "방수산업기사",
                  "licenseCode": 2630
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "건축목재시공기능장",
                  "licenseCode": 3611
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "건축일반시공기능장",
                  "licenseCode": 3621
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "방수기능사",
                  "licenseCode": 7030
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "전산응용건축제도기능사",
                  "licenseCode": 7061
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "조적기능사",
                  "licenseCode": 7070
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "철근기능사",
                  "licenseCode": 7080
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "미장기능사",
                  "licenseCode": 7110
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "비계기능사",
                  "licenseCode": 7120
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "건축목공기능사",
                  "licenseCode": 7130
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "건축도장기능사",
                  "licenseCode": 7150
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "유리시공기능사",
                  "licenseCode": 7151
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "실내건축기능사",
                  "licenseCode": 7152
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "온수온돌기능사",
                  "licenseCode": 7161
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "거푸집기능사",
                  "licenseCode": 7170
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "도배기능사",
                  "licenseCode": 7180
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "타일기능사",
                  "licenseCode": 7210
                }
              ],
              "ncsCategoryName2": "건축",
              "ncsCategoryCode2": 141
            },
            {
              "licenses": [
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "배관산업기사",
                  "licenseCode": 2041
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "배관기능장",
                  "licenseCode": 3081
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "배관기능사",
                  "licenseCode": 6213
                }
              ],
              "ncsCategoryName2": "건설배관",
              "ncsCategoryCode2": 145
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "도시계획기술사",
                  "licenseCode": 650
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "교통기술사",
                  "licenseCode": 951
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "도시계획기사",
                  "licenseCode": 1350
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "교통기사",
                  "licenseCode": 1751
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "교통산업기사",
                  "licenseCode": 2751
                }
              ],
              "ncsCategoryName2": "도시 교통",
              "ncsCategoryCode2": 144
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "조경기술사",
                  "licenseCode": 670
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "조경기사",
                  "licenseCode": 1370
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "조경산업기사",
                  "licenseCode": 2320
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "조경기능사",
                  "licenseCode": 7900
                }
              ],
              "ncsCategoryName2": "조경",
              "ncsCategoryCode2": 143
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "토질및기초기술사",
                  "licenseCode": 390
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "토목구조기술사",
                  "licenseCode": 400
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "항만및해안기술사",
                  "licenseCode": 410
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "도로및공항기술사",
                  "licenseCode": 420
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "철도기술사",
                  "licenseCode": 430
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "수자원개발기술사",
                  "licenseCode": 451
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "상하수도기술사",
                  "licenseCode": 460
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "농어업토목기술사",
                  "licenseCode": 470
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "토목시공기술사",
                  "licenseCode": 480
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "토목품질시험기술사",
                  "licenseCode": 481
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "측량및지형공간정보기술사",
                  "licenseCode": 680
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "지적기술사",
                  "licenseCode": 690
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "해양기술사",
                  "licenseCode": 700
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "지질및지반기술사",
                  "licenseCode": 825
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "콘크리트기사",
                  "licenseCode": 1048
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "토목기사",
                  "licenseCode": 1250
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "항로표지기사",
                  "licenseCode": 1351
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "측량및지형공간정보기사",
                  "licenseCode": 1380
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "지적기사",
                  "licenseCode": 1390
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "해양환경기사",
                  "licenseCode": 1401
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "해양자원개발기사",
                  "licenseCode": 1402
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "해양공학기사",
                  "licenseCode": 1403
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "응용지질기사",
                  "licenseCode": 1550
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "건설재료시험기사",
                  "licenseCode": 1750
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "철도토목기사",
                  "licenseCode": 1760
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "콘크리트산업기사",
                  "licenseCode": 2048
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "토목산업기사",
                  "licenseCode": 2240
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "측량및지형공간정보산업기사",
                  "licenseCode": 2330
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "지적산업기사",
                  "licenseCode": 2340
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "해양조사산업기사",
                  "licenseCode": 2350
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "항로표지산업기사",
                  "licenseCode": 2351
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "잠수산업기사",
                  "licenseCode": 2521
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "건설재료시험산업기사",
                  "licenseCode": 2600
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "철도토목산업기사",
                  "licenseCode": 2610
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "잠수기능장",
                  "licenseCode": 3911
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "항로표지기능사",
                  "licenseCode": 6351
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "측량기능사",
                  "licenseCode": 6980
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "석공기능사",
                  "licenseCode": 6990
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "철도토목기능사",
                  "licenseCode": 7010
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "콘크리트기능사",
                  "licenseCode": 7020
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "전산응용토목제도기능사",
                  "licenseCode": 7072
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "건설재료시험기능사",
                  "licenseCode": 7132
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "잠수기능사",
                  "licenseCode": 7612
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "지적기능사",
                  "licenseCode": 7650
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "도화기능사",
                  "licenseCode": 7660
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "항공사진기능사",
                  "licenseCode": 7670
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "지도제작기능사",
                  "licenseCode": 7680
                }
              ],
              "ncsCategoryName2": "토목",
              "ncsCategoryCode2": 142
            },
            {
              "licenses": [
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "천공기운전기능사",
                  "licenseCode": 7483
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "타워크레인운전기능사",
                  "licenseCode": 7834
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "컨테이너크레인운전기능사",
                  "licenseCode": 7835
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "기중기운전기능사",
                  "licenseCode": 7861
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "굴삭기운전기능사",
                  "licenseCode": 7862
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "불도저운전기능사",
                  "licenseCode": 7863
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "천장크레인운전기능사",
                  "licenseCode": 7864
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "로더운전기능사",
                  "licenseCode": 7866
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "롤러운전기능사",
                  "licenseCode": 7871
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "지게차운전기능사",
                  "licenseCode": 7875
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "양화장치운전기능사",
                  "licenseCode": 7930
                }
              ],
              "ncsCategoryName2": "건설기계운전",
              "ncsCategoryCode2": 146
            }
          ],
          "ncsCategoryCode1": 14,
          "ncsCategoryName1": "건설"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "기계기술사",
                  "licenseCode": 872
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "일반기계기사",
                  "licenseCode": 1021
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "기계설계기사",
                  "licenseCode": 1080
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "기계조립산업기사",
                  "licenseCode": 2011
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "컴퓨터응용가공산업기사",
                  "licenseCode": 2025
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "기계설계산업기사",
                  "licenseCode": 2031
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "치공구설계산업기사",
                  "licenseCode": 2090
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "정밀측정산업기사",
                  "licenseCode": 2104
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "기계가공기능장",
                  "licenseCode": 3021
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "컴퓨터응용선반기능사",
                  "licenseCode": 6012
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "컴퓨터응용밀링기능사",
                  "licenseCode": 6032
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "연삭기능사",
                  "licenseCode": 6040
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "기계가공조립기능사",
                  "licenseCode": 6042
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "정밀측정기능사",
                  "licenseCode": 6120
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "전산응용기계제도기능사",
                  "licenseCode": 6151
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "공유압기능사",
                  "licenseCode": 6251
                }
              ],
              "ncsCategoryName2": "기계제작",
              "ncsCategoryCode2": 161
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "금형기술사",
                  "licenseCode": 12
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "사출금형설계기사",
                  "licenseCode": 1024
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "프레스금형설계기사",
                  "licenseCode": 1025
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "사출금형산업기사",
                  "licenseCode": 2028
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "프레스금형산업기사",
                  "licenseCode": 2029
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "금형제작기능장",
                  "licenseCode": 3061
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "금형기능사",
                  "licenseCode": 6105
                }
              ],
              "ncsCategoryName2": "금형 공작기계",
              "ncsCategoryCode2": 167
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "차량기술사",
                  "licenseCode": 50
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "그린전동자동차기사",
                  "licenseCode": 1027
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "자동차정비기사",
                  "licenseCode": 1070
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "자동차정비산업기사",
                  "licenseCode": 2070
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "자동차정비기능장",
                  "licenseCode": 3110
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "자동차정비기능사",
                  "licenseCode": 6281
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "자동차차체수리기능사",
                  "licenseCode": 6285
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "자동차보수도장기능사",
                  "licenseCode": 6836
                }
              ],
              "ncsCategoryName2": "자동차",
              "ncsCategoryCode2": 166
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "항공기체기술사",
                  "licenseCode": 360
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "항공기관기술사",
                  "licenseCode": 370
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "항공기사",
                  "licenseCode": 1240
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "항공산업기사",
                  "licenseCode": 2230
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "항공기체정비기능사",
                  "licenseCode": 6291
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "항공기관정비기능사",
                  "licenseCode": 6292
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "항공장비정비기능사",
                  "licenseCode": 6293
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "항공전자정비기능사",
                  "licenseCode": 6294
                }
              ],
              "ncsCategoryName2": "항공",
              "ncsCategoryCode2": 165
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "조선기술사",
                  "licenseCode": 320
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "조선기사",
                  "licenseCode": 1220
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "조선산업기사",
                  "licenseCode": 2220
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "전산응용조선제도기능사",
                  "licenseCode": 6910
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "선체건조기능사",
                  "licenseCode": 6920
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "동력기계정비기능사",
                  "licenseCode": 6960
                }
              ],
              "ncsCategoryName2": "조선",
              "ncsCategoryCode2": 164
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "산업기계설비기술사",
                  "licenseCode": 60
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "공조냉동기계기술사",
                  "licenseCode": 71
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "건설기계기술사",
                  "licenseCode": 80
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "농업기계기사",
                  "licenseCode": 1023
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "건설기계설비기사",
                  "licenseCode": 1040
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "건설기계정비기사",
                  "licenseCode": 1050
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "궤도장비정비기사",
                  "licenseCode": 1051
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "메카트로닉스기사",
                  "licenseCode": 1060
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "승강기기사",
                  "licenseCode": 1555
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "공조냉동기계기사",
                  "licenseCode": 1730
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "설비보전기사",
                  "licenseCode": 1837
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "농업기계산업기사",
                  "licenseCode": 2027
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "생산자동화산업기사",
                  "licenseCode": 2034
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "기계정비산업기사",
                  "licenseCode": 2035
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "건설기계설비산업기사",
                  "licenseCode": 2040
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "건설기계정비산업기사",
                  "licenseCode": 2050
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "궤도장비정비산업기사",
                  "licenseCode": 2051
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "승강기산업기사",
                  "licenseCode": 2395
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "공조냉동기계산업기사",
                  "licenseCode": 2590
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "전자부품장착산업기사",
                  "licenseCode": 2835
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "건설기계정비기능장",
                  "licenseCode": 3120
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "반도체장비유지보수기능사",
                  "licenseCode": 6033
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "궤도장비정비기능사",
                  "licenseCode": 6051
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "건설기계정비기능사",
                  "licenseCode": 6298
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "농기계정비기능사",
                  "licenseCode": 6300
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "공조냉동기계기능사",
                  "licenseCode": 6320
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "생산자동화기능사",
                  "licenseCode": 6415
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "전자부품장착기능사",
                  "licenseCode": 6835
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "설비보전기능사",
                  "licenseCode": 6837
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "기계정비기능사",
                  "licenseCode": 7121
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "승강기기능사",
                  "licenseCode": 7940
                }
              ],
              "ncsCategoryName2": "기계장비설비 설치",
              "ncsCategoryCode2": 162
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "철도차량기술사",
                  "licenseCode": 431
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "철도차량기사",
                  "licenseCode": 1030
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "철도차량산업기사",
                  "licenseCode": 2030
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "철도차량정비기능장",
                  "licenseCode": 3150
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "철도차량정비기능사",
                  "licenseCode": 6352
                }
              ],
              "ncsCategoryName2": "철도",
              "ncsCategoryCode2": 163
            }
          ],
          "ncsCategoryCode1": 16,
          "ncsCategoryName1": "기계"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "금속제련기술사",
                  "licenseCode": 94
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "금속재료기술사",
                  "licenseCode": 110
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "금속가공기술사",
                  "licenseCode": 130
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "세라믹기술사",
                  "licenseCode": 790
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "금속재료기사",
                  "licenseCode": 1104
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "금속재료산업기사",
                  "licenseCode": 2101
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "재료조직평가산업기사",
                  "licenseCode": 2107
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "금속재료기능장",
                  "licenseCode": 3221
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "제선기능장",
                  "licenseCode": 3230
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "제강기능장",
                  "licenseCode": 3240
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "압연기능장",
                  "licenseCode": 3270
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "축로기능사",
                  "licenseCode": 6381
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "열처리기능사",
                  "licenseCode": 6420
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "금속재료시험기능사",
                  "licenseCode": 6490
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "제선기능사",
                  "licenseCode": 6500
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "제강기능사",
                  "licenseCode": 6515
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "압연기능사",
                  "licenseCode": 6543
                }
              ],
              "ncsCategoryName2": "금속 재료",
              "ncsCategoryCode2": 171
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "표면처리기술사",
                  "licenseCode": 120
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "표면처리산업기사",
                  "licenseCode": 2106
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "표면처리기능장",
                  "licenseCode": 3210
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "표면처리기능사",
                  "licenseCode": 6480
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "금속도장기능사",
                  "licenseCode": 7450
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "광고도장기능사",
                  "licenseCode": 7888
                }
              ],
              "ncsCategoryName2": "도장 도금",
              "ncsCategoryCode2": 175
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "용접기술사",
                  "licenseCode": 11
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "용접기사",
                  "licenseCode": 1022
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "용접산업기사",
                  "licenseCode": 2026
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "용접기능장",
                  "licenseCode": 3100
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "특수용접기능사",
                  "licenseCode": 6222
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "용접기능사",
                  "licenseCode": 6223
                }
              ],
              "ncsCategoryName2": "용접",
              "ncsCategoryCode2": 174
            },
            {
              "licenses": [
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "판금제관산업기사",
                  "licenseCode": 2012
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "판금제관기능장",
                  "licenseCode": 3095
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "판금제관기능사",
                  "licenseCode": 6175
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "금속재창호기능사",
                  "licenseCode": 7102
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "플라스틱창호기능사",
                  "licenseCode": 7103
                }
              ],
              "ncsCategoryName2": "판금 제관 새시",
              "ncsCategoryCode2": 172
            },
            {
              "licenses": [
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "주조산업기사",
                  "licenseCode": 2105
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "주조기능장",
                  "licenseCode": 3200
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "주조기능사",
                  "licenseCode": 6461
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "원형기능사",
                  "licenseCode": 6530
                }
              ],
              "ncsCategoryName2": "단조 주조",
              "ncsCategoryCode2": 173
            }
          ],
          "ncsCategoryCode1": 17,
          "ncsCategoryName1": "재료"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "화공기술사",
                  "licenseCode": 210
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "화공기사",
                  "licenseCode": 1110
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "화약류제조기사",
                  "licenseCode": 1130
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "화학분석기사",
                  "licenseCode": 1563
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "바이오화학제품제조기사",
                  "licenseCode": 1800
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "화약류제조산업기사",
                  "licenseCode": 2120
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "바이오화학제품제조산업기사",
                  "licenseCode": 2570
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "화학분석기능사",
                  "licenseCode": 6560
                }
              ],
              "ncsCategoryName2": "화공",
              "ncsCategoryCode2": 181
            },
            {
              "licenses": [
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "위험물산업기사",
                  "licenseCode": 2121
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "위험물기능장",
                  "licenseCode": 3360
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "위험물기능사",
                  "licenseCode": 6697
                }
              ],
              "ncsCategoryName2": "위험물",
              "ncsCategoryCode2": 182
            }
          ],
          "ncsCategoryCode1": 18,
          "ncsCategoryName1": "화학"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "섬유기술사",
                  "licenseCode": 551
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "의류기술사",
                  "licenseCode": 561
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "섬유기사",
                  "licenseCode": 1297
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "의류기사",
                  "licenseCode": 1301
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "섬유디자인산업기사",
                  "licenseCode": 2264
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "섬유산업기사",
                  "licenseCode": 2277
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "염색기능사(침염)",
                  "licenseCode": 7301
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "염색기능사(날염)",
                  "licenseCode": 7302
                }
              ],
              "ncsCategoryName2": "섬유",
              "ncsCategoryCode2": 191
            },
            {
              "licenses": [
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "패션머천다이징산업기사",
                  "licenseCode": 2085
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "한복산업기사",
                  "licenseCode": 2268
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "패션디자인산업기사",
                  "licenseCode": 2301
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "신발산업기사",
                  "licenseCode": 2302
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "한복기능사",
                  "licenseCode": 7723
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "신발류제조기능사",
                  "licenseCode": 7904
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "양복기능사",
                  "licenseCode": 7931
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "양장기능사",
                  "licenseCode": 7932
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "세탁기능사",
                  "licenseCode": 7960
                }
              ],
              "ncsCategoryName2": "의복",
              "ncsCategoryCode2": 192
            }
          ],
          "ncsCategoryCode1": 19,
          "ncsCategoryName1": "섬유 의복"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "발송배전기술사",
                  "licenseCode": 230
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "전기응용기술사",
                  "licenseCode": 250
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "철도신호기술사",
                  "licenseCode": 261
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "전기철도기술사",
                  "licenseCode": 432
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "건축전기설비기술사",
                  "licenseCode": 502
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "전기기사",
                  "licenseCode": 1150
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "전기공사기사",
                  "licenseCode": 1160
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "철도신호기사",
                  "licenseCode": 1740
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "전기철도기사",
                  "licenseCode": 1741
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "전기철도산업기사",
                  "licenseCode": 2036
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "전기산업기사",
                  "licenseCode": 2140
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "전기공사산업기사",
                  "licenseCode": 2150
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "철도신호산업기사",
                  "licenseCode": 2160
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "전기기능장",
                  "licenseCode": 3380
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "철도전기신호기능사",
                  "licenseCode": 6772
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "전기기능사",
                  "licenseCode": 7780
                }
              ],
              "ncsCategoryName2": "전기",
              "ncsCategoryCode2": 201
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "산업계측제어기술사",
                  "licenseCode": 270
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "전자응용기술사",
                  "licenseCode": 301
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "임베디드기사",
                  "licenseCode": 1121
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "전자기사",
                  "licenseCode": 1170
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "반도체설계기사",
                  "licenseCode": 1175
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "의공기사",
                  "licenseCode": 1176
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "로봇기구개발기사",
                  "licenseCode": 1177
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "로봇소프트웨어개발기사",
                  "licenseCode": 1178
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "로봇하드웨어개발기사",
                  "licenseCode": 1179
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "전자계산기기사",
                  "licenseCode": 1321
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "광학기사",
                  "licenseCode": 1513
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "광학기기산업기사",
                  "licenseCode": 2108
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "전자산업기사",
                  "licenseCode": 2170
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "반도체설계산업기사",
                  "licenseCode": 2175
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "의공산업기사",
                  "licenseCode": 2176
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "3D프린터개발산업기사",
                  "licenseCode": 2177
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "전자계산기제어산업기사",
                  "licenseCode": 2324
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "전자기기기능장",
                  "licenseCode": 3410
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "의료전자기능사",
                  "licenseCode": 6176
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "전자캐드기능사",
                  "licenseCode": 6785
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "전자기기기능사",
                  "licenseCode": 6790
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "전자계산기기능사",
                  "licenseCode": 6801
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "광학기능사",
                  "licenseCode": 7671
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "3D프린터운용기능사",
                  "licenseCode": 7785
                }
              ],
              "ncsCategoryName2": "전자",
              "ncsCategoryCode2": 202
            }
          ],
          "ncsCategoryCode1": 20,
          "ncsCategoryName1": "전기 전자"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "정보관리기술사",
                  "licenseCode": 601
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "컴퓨터시스템응용기술사",
                  "licenseCode": 622
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "정보처리기사",
                  "licenseCode": 1320
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "전자계산기조직응용기사",
                  "licenseCode": 1322
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "정보보안기사",
                  "licenseCode": 1325
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "사무자동화산업기사",
                  "licenseCode": 2193
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "정보처리산업기사",
                  "licenseCode": 2290
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "정보보안산업기사",
                  "licenseCode": 2325
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "정보기기운용기능사",
                  "licenseCode": 6892
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "정보처리기능사",
                  "licenseCode": 6921
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "멀티미디어콘텐츠제작전문가",
                  "licenseCode": 9545
                }
              ],
              "ncsCategoryName2": "정보기술",
              "ncsCategoryCode2": 211
            },
            {
              "licenses": [
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "전파전자통신기사",
                  "licenseCode": 1195
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "전파전자통신산업기사",
                  "licenseCode": 2195
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "전파전자통신기능사",
                  "licenseCode": 6893
                }
              ],
              "ncsCategoryName2": "통신",
              "ncsCategoryCode2": 213
            }
          ],
          "ncsCategoryCode1": 21,
          "ncsCategoryName1": "정보통신"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "식품기술사",
                  "licenseCode": 800
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "수산제조기술사",
                  "licenseCode": 810
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "식품기사",
                  "licenseCode": 1530
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "수산제조기사",
                  "licenseCode": 1540
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "식육가공기사",
                  "licenseCode": 1541
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "식품산업기사",
                  "licenseCode": 2450
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "식품가공기능사",
                  "licenseCode": 7591
                }
              ],
              "ncsCategoryName2": "식품",
              "ncsCategoryCode2": 221
            },
            {
              "licenses": [
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "제과기능장",
                  "licenseCode": 3923
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "제과기능사",
                  "licenseCode": 7892
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "제빵기능사",
                  "licenseCode": 7893
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "떡제조기능사",
                  "licenseCode": 7992
                }
              ],
              "ncsCategoryName2": "제과 제빵",
              "ncsCategoryCode2": 222
            }
          ],
          "ncsCategoryCode1": 22,
          "ncsCategoryName1": "식품 가공"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "인쇄기사",
                  "licenseCode": 1391
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "인쇄산업기사",
                  "licenseCode": 2391
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "전자출판기능사",
                  "licenseCode": 6791
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "인쇄기능사",
                  "licenseCode": 7524
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "사진기능사",
                  "licenseCode": 7795
                }
              ],
              "ncsCategoryName2": "인쇄 사진",
              "ncsCategoryCode2": 231
            },
            {
              "licenses": [
                {
                  "licenseSeries": "None",
                  "licenseSeriesName": "None",
                  "licenseName": "목구조관리기술자",
                  "licenseCode": 9997
                },
                {
                  "licenseSeries": "None",
                  "licenseSeriesName": "None",
                  "licenseName": "목구조시공기술자",
                  "licenseCode": 9998
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "가구제작산업기사",
                  "licenseCode": 2142
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "피아노조율산업기사",
                  "licenseCode": 2551
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "귀금속가공산업기사",
                  "licenseCode": 2760
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "보석디자인산업기사",
                  "licenseCode": 2880
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "보석감정산업기사",
                  "licenseCode": 2980
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "귀금속가공기능장",
                  "licenseCode": 3770
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "석공예기능사",
                  "licenseCode": 6792
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "가구제작기능사",
                  "licenseCode": 7140
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "귀금속가공기능사",
                  "licenseCode": 7460
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "목공예기능사",
                  "licenseCode": 7480
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "보석가공기능사",
                  "licenseCode": 7889
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "도자공예기능사",
                  "licenseCode": 7890
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "피아노조율기능사",
                  "licenseCode": 7917
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "보석감정사",
                  "licenseCode": 7980
                }
              ],
              "ncsCategoryName2": "목재 가구 공예",
              "ncsCategoryCode2": 232
            }
          ],
          "ncsCategoryCode1": 23,
          "ncsCategoryName1": "인쇄 목재 가구 공예"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "대기관리기술사",
                  "licenseCode": 920
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "수질관리기술사",
                  "licenseCode": 930
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "자연환경관리기술사",
                  "licenseCode": 938
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "소음진동기술사",
                  "licenseCode": 940
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "토양환경기술사",
                  "licenseCode": 948
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "폐기물처리기술사",
                  "licenseCode": 970
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "온실가스관리기사",
                  "licenseCode": 1028
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "환경위해관리기사",
                  "licenseCode": 1029
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "대기환경기사",
                  "licenseCode": 1661
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "수질환경기사",
                  "licenseCode": 1662
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "소음진동기사",
                  "licenseCode": 1663
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "자연생태복원기사",
                  "licenseCode": 1938
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "토양환경기사",
                  "licenseCode": 1948
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "폐기물처리기사",
                  "licenseCode": 1950
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "생물분류기사(식물)",
                  "licenseCode": 1988
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "생물분류기사(동물)",
                  "licenseCode": 1989
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "온실가스관리산업기사",
                  "licenseCode": 2037
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "대기환경산업기사",
                  "licenseCode": 2571
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "수질환경산업기사",
                  "licenseCode": 2572
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "소음진동산업기사",
                  "licenseCode": 2573
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "농림토양평가관리산업기사",
                  "licenseCode": 2582
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "자연생태복원산업기사",
                  "licenseCode": 2938
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "폐기물처리산업기사",
                  "licenseCode": 2950
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "환경기능사",
                  "licenseCode": 7918
                }
              ],
              "ncsCategoryName2": "환경",
              "ncsCategoryCode2": 261
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "기상예보기술사",
                  "licenseCode": 891
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "신재생에너지발전설비기사(태양광)",
                  "licenseCode": 1114
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "에너지관리기사",
                  "licenseCode": 1340
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "기상기사",
                  "licenseCode": 1600
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "기상감정기사",
                  "licenseCode": 1601
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "신재생에너지발전설비산업기사(태양광)",
                  "licenseCode": 2114
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "에너지관리산업기사",
                  "licenseCode": 2960
                },
                {
                  "licenseSeries": 2,
                  "licenseSeriesName": "기능장",
                  "licenseName": "에너지관리기능장",
                  "licenseCode": 3170
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "신재생에너지발전설비기능사(태양광)",
                  "licenseCode": 7114
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "에너지관리기능사",
                  "licenseCode": 7761
                }
              ],
              "ncsCategoryName2": "에너지 기상",
              "ncsCategoryCode2": 262
            }
          ],
          "ncsCategoryCode1": 26,
          "ncsCategoryName1": "환경 에너지"
        },
        {
          "ncsCategory2": [
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "종자기술사",
                  "licenseCode": 840
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "시설원예기술사",
                  "licenseCode": 841
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "농화학기술사",
                  "licenseCode": 950
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "종자기사",
                  "licenseCode": 1560
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "화훼장식기사",
                  "licenseCode": 1576
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "유기농업기사",
                  "licenseCode": 1592
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "시설원예기사",
                  "licenseCode": 1780
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "종자산업기사",
                  "licenseCode": 2470
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "유기농업산업기사",
                  "licenseCode": 2592
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "화훼장식산업기사",
                  "licenseCode": 2625
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "유기농업기능사",
                  "licenseCode": 6592
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "종자기능사",
                  "licenseCode": 7620
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "화훼장식기능사",
                  "licenseCode": 7625
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "원예기능사",
                  "licenseCode": 7901
                }
              ],
              "ncsCategoryName2": "농업",
              "ncsCategoryCode2": 241
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "수산양식기술사",
                  "licenseCode": 701
                },
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "어로기술사",
                  "licenseCode": 702
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "수산양식기사",
                  "licenseCode": 1625
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "어업생산관리기사",
                  "licenseCode": 1633
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "수산양식산업기사",
                  "licenseCode": 2520
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "어로산업기사",
                  "licenseCode": 2631
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "수산양식기능사",
                  "licenseCode": 7700
                }
              ],
              "ncsCategoryName2": "어업",
              "ncsCategoryCode2": 244
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "축산기술사",
                  "licenseCode": 851
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "축산기사",
                  "licenseCode": 1581
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "축산산업기사",
                  "licenseCode": 2491
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "축산기능사",
                  "licenseCode": 7481
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "식육처리기능사",
                  "licenseCode": 7482
                }
              ],
              "ncsCategoryName2": "축산",
              "ncsCategoryCode2": 242
            },
            {
              "licenses": [
                {
                  "licenseSeries": 1,
                  "licenseSeriesName": "기술사",
                  "licenseName": "산림기술사",
                  "licenseCode": 801
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "식물보호기사",
                  "licenseCode": 1562
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "산림기사",
                  "licenseCode": 1564
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "임업종묘기사",
                  "licenseCode": 1570
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "임산가공기사",
                  "licenseCode": 1590
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "버섯산업기사",
                  "licenseCode": 1641
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "산림산업기사",
                  "licenseCode": 2481
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "임산가공산업기사",
                  "licenseCode": 2500
                },
                {
                  "licenseSeries": 3,
                  "licenseSeriesName": "기사",
                  "licenseName": "식물보호산업기사",
                  "licenseCode": 2562
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "임업종묘기능사",
                  "licenseCode": 7630
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "버섯종균기능사",
                  "licenseCode": 7631
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "산림기능사",
                  "licenseCode": 7632
                },
                {
                  "licenseSeries": 4,
                  "licenseSeriesName": "기능사",
                  "licenseName": "임산가공기능사",
                  "licenseCode": 7644
                }
              ],
              "ncsCategoryName2": "임업",
              "ncsCategoryCode2": 243
            }
          ],
          "ncsCategoryCode1": 24,
          "ncsCategoryName1": "농림어업"
        },
      ],
      // LicenseResultList 에서 사용하는 변수들
      selectedLicense: '',

      licenseInfo: '',
    },
    member: {
      // isLogin: false,
      isLoginError: false,
      // loginUID: null,
      // currentToken: ''
    }
  },
  mutations: {
    // 로그인이 성공했을 때,
    loginSuccess(state) {
      state.member.isLoginError = false
    },
    // 로그인이 실패했을 때 
    loginError(state) {
      state.member.isLoginError = true
      setTimeout(()=>{
        state.member.isLoginError=false
      },2000)
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
          // console.log(loginData.autoLogin)
          // console.log(res.data.object)
          // 자동 로그인
          if(loginData.autoLogin) {
            localStorage.setItem("loginUID", res.data.object)
          // 일반
          } else {
            sessionStorage.setItem("loginUID", res.data.object)
          }
          commit("loginSuccess")
          router.push({ name: "MyStudy", params: { UID: res.data.object } })
        })
        .catch(function (err) {
          commit("loginError")
          console.log(err)
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
          // localStorage.removeItem('vuex')
          localStorage.removeItem('loginUID')
          sessionStorage.removeItem('loginUID')
          router.push({ name: "Home" })
        })
        .catch(function () {
          console.log('logout error')
        })
    }
  },
  modules: {
  },
})
