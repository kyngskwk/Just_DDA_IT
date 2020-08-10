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
    license: {
      licenseInfo: '',
      selectedLicense: '',
      field1: '',
      field2: '',
      keyword: '',
      ncs_fields: [
        {
          number: '01',
          title: '사업관리',
          second_fields: [
            {
              number: '01',
              title: '사업관리'
            }
          ]
        },
        {
          number: '02',
          title: '경영 회계 사무',
          second_fields: [
            {
              number: '01',
              title: '기획사무'
            },
            {
              number: '02',
              title: '총무 인사'
            },
            {
              number: '03',
              title: '재무 회계'
            },
            {
              number: '04',
              title: '생산 품질관리'
            }
          ]
        },
        {
          number: '03',
          title: '금융 보험',
          second_fields: [
            {
              number: '01',
              title: '금융'
            },
            {
              number: '02',
              title: '보험'
            }
          ]
        },
        {
          number: '04',
          title: '교육 자연 사회과학',
          second_fields: [
            {
              number: '01',
              title: '학교교육'
            },
            {
              number: '02',
              title: '평생교육'
            },
            {
              number: '03',
              title: '직업교육'
            }
          ]
        },
        {
          number: '05',
          title: '법률 경찰 소방 교도 국방',
          second_fields: [
            {
              number: '01',
              title: '법률'
            },
            {
              number: '02',
              title: '소방방재'
            }
          ]
        },
        {
          number: '06',
          title: '보건 의료',
          second_fields: [
            {
              number: '01',
              title: '보건'
            },
            {
              number: '02',
              title: '의료'
            }
          ]
        },
        {
          number: '07',
          title: '사회 복지 종교',
          second_fields: [
            {
              number: '01',
              title: '사회복지'
            },
            {
              number: '02',
              title: '상담'
            },
            {
              number: '03',
              title: '보육'
            }
          ]
        },
        {
          number: '08',
          title: '문화 예술 디자인 방송',
          second_fields: [
            {
              number: '01',
              title: '문화 예술'
            },
            {
              number: '02',
              title: '디자인'
            },
            {
              number: '03',
              title: '문화콘텐츠'
            }

          ]
        },
        {
          number: '09',
          title: '운전 운송',
          second_fields: [
            {
              number: '01',
              title: '자동차운전 운송'
            },
            {
              number: '02',
              title: '철도운전 운송'
            },
            {
              number: '03',
              title: '선박운전 운송'
            },
            {
              number: '04',
              title: '항공운전 운송'
            }
          ]
        },
        {
          number: '10',
          title: '영업판매',
          second_fields: [
            {
              number: '01',
              title: '영업'
            },
            {
              number: '02',
              title: '부동산'
            },
            {
              number: '03',
              title: '판매'
            }
          ]
        },
        {
          number: '11',
          title: '경비 청소',
          second_fields: [
            {
              number: '01',
              title: '경비'
            },
            {
              number: '02',
              title: '청소'
            }
          ]
        },
        {
          number: '12',
          title: '이용 숙박 여행 오락 스포츠',
          second_fields: [
            {
              number: '01',
              title: '이 미용'
            },
            {
              number: '02',
              title: '결혼 장례'
            },
            {
              number: '03',
              title: '관광 레저'
            },
            {
              number: '04',
              title: '스포츠'
            }
          ]
        },
        {
          number: '13',
          title: '음식서비스',
          second_fields: [
            {
              number: '01',
              title: '식음료조리 서비스'
            }
          ]
        },
        {
          number: '14',
          title: '건설',
          second_fields: [
            {
              number: '01',
              title: '건설공사관리'
            },
            {
              number: '02',
              title: '토목'
            },
            {
              number: '03',
              title: '건축'
            },
            {
              number: '04',
              title: '플랜트'
            },
            {
              number: '05',
              title: '조경'
            },
            {
              number: '06',
              title: '도시 교통'
            },
            {
              number: '07',
              title: '건설기계운전 정비'
            },
            {
              number: '08',
              title: '해양자원'
            }
          ]
        },
        {
          number: '15',
          title: '기계',
          second_fields: [
            {
              number: '01',
              title: '기계설계'
            },
            {
              number: '02',
              title: '기계가공'
            },
            {
              number: '03',
              title: '기계조립 관리'
            },
            {
              number: '04',
              title: '기계품질관리'
            },
            {
              number: '05',
              title: '기계장치설치'
            },
            {
              number: '06',
              title: '자동차'
            },
            {
              number: '07',
              title: '철도차량제작'
            },
            {
              number: '08',
              title: '조선'
            },
            {
              number: '09',
              title: '항공기제작'
            },
            {
              number: '10',
              title: '금형'
            },
            {
              number: '11',
              title: '스마트공장(smart factory)'
            }
          ]
        },
        {
          number: '16',
          title: '재료',
          second_fields: [
            {
              number: '01',
              title: '금속재료'
            },
            {
              number: '02',
              title: '요업재료'
            }
          ]
        },
        {
          number: '17',
          title: '화학',
          second_fields: [
            {
              number: '01',
              title: '화학물질 화학공정관리'
            },
            {
              number: '02',
              title: '석유 기초화학물 제조'
            },
            {
              number: '03',
              title: '정밀화학제품제조'
            },
            {
              number: '04',
              title: '플라스틱 고무제품제조'
            }
          ]
        },
        {
          number: '18',
          title: '섬유 의복',
          second_fields: [
            {
              number: '01',
              title: '섬유제조'
            },
            {
              number: '02',
              title: '패션'
            },
            {
              number: '03',
              title: '의복관리'
            }
          ]
        },
        {
          number: '19',
          title: '전기 전자',
          second_fields: [
            {
              number: '01',
              title: '전기'
            },
            {
              number: '02',
              title: '전자기기일반'
            },
            {
              number: '03',
              title: '전자기기개발'
            }
          ]
        },
        {
          number: '20',
          title: '정보통신',
          second_fields: [
            {
              number: '01',
              title: '정보기술'
            },
            {
              number: '02',
              title: '통신기술'
            },
            {
              number: '03',
              title: '방송기술'
            }
          ]
        },
        {
          number: '21',
          title: '식품가공',
          second_fields: [
            {
              number: '01',
              title: '식품가공'
            },
            {
              number: '02',
              title: '제과 제빵 떡 제조'
            }
          ]
        },
        {
          number: '22',
          title: '인쇄 목재 가구 공예',
          second_fields: [
            {
              number: '01',
              title: '인쇄 출판'
            },
            {
              number: '02',
              title: '공예'
            }
          ]
        },
        {
          number: '23',
          title: '환경 에너지 안전',
          second_fields: [
            {
              number: '01',
              title: '산업환경'
            },
            {
              number: '02',
              title: '환경보건'
            },
            {
              number: '03',
              title: '자연환경'
            },
            {
              number: '04',
              title: '환경서비스'
            },
            {
              number: '05',
              title: '에너지 자원'
            },
            {
              number: '06',
              title: '산업안전'
            }
          ]
        },
        {
          number: '24',
          title: '농림어업',
          second_fields: [
            {
              number: '01',
              title: '농업'
            },
            {
              number: '02',
              title: '축산'
            },
            {
              number: '03',
              title: '임업'
            },
            {
              number: '04',
              title: '수산'
            }
          ]
        }
      ],
      ncs_fields_license: [
        { "ncsCategory2": [{ "ncsCategoryName2": "\uc6a9\uc811", "ncsCategoryCode2": "174", "licenses": [{ "licenseName": "\uc6a9\uc811\uae30\uc220\uc0ac", "licenseCode": "11", "licenseSeries": "1" }, { "licenseName": "\uc6a9\uc811\uae30\uc0ac", "licenseCode": "1022", "licenseSeries": "3" }, { "licenseName": "\uc6a9\uc811\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2026", "licenseSeries": "3" }, { "licenseName": "\uc6a9\uc811\uae30\ub2a5\uc7a5", "licenseCode": "3100", "licenseSeries": "2" }, { "licenseName": "\ud2b9\uc218\uc6a9\uc811\uae30\ub2a5\uc0ac", "licenseCode": "6222", "licenseSeries": "4" }, { "licenseName": "\uc6a9\uc811\uae30\ub2a5\uc0ac", "licenseCode": "6223", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\uae08\uc18d.\uc7ac\ub8cc", "ncsCategoryCode2": "171", "licenses": [{ "licenseName": "\uae08\uc18d\uc81c\ub828\uae30\uc220\uc0ac", "licenseCode": "94", "licenseSeries": "1" }, { "licenseName": "\uae08\uc18d\uc7ac\ub8cc\uae30\uc220\uc0ac", "licenseCode": "110", "licenseSeries": "1" }, { "licenseName": "\uae08\uc18d\uac00\uacf5\uae30\uc220\uc0ac", "licenseCode": "130", "licenseSeries": "1" }, { "licenseName": "\uc138\ub77c\ubbf9\uae30\uc220\uc0ac", "licenseCode": "790", "licenseSeries": "1" }, { "licenseName": "\uae08\uc18d\uc7ac\ub8cc\uae30\uc0ac", "licenseCode": "1104", "licenseSeries": "3" }, { "licenseName": "\uae08\uc18d\uc7ac\ub8cc\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2101", "licenseSeries": "3" }, { "licenseName": "\uc7ac\ub8cc\uc870\uc9c1\ud3c9\uac00\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2107", "licenseSeries": "3" }, { "licenseName": "\uae08\uc18d\uc7ac\ub8cc\uae30\ub2a5\uc7a5", "licenseCode": "3221", "licenseSeries": "2" }, { "licenseName": "\uc81c\uc120\uae30\ub2a5\uc7a5", "licenseCode": "3230", "licenseSeries": "2" }, { "licenseName": "\uc81c\uac15\uae30\ub2a5\uc7a5", "licenseCode": "3240", "licenseSeries": "2" }, { "licenseName": "\uc555\uc5f0\uae30\ub2a5\uc7a5", "licenseCode": "3270", "licenseSeries": "2" }, { "licenseName": "\ucd95\ub85c\uae30\ub2a5\uc0ac", "licenseCode": "6381", "licenseSeries": "4" }, { "licenseName": "\uc5f4\ucc98\ub9ac\uae30\ub2a5\uc0ac", "licenseCode": "6420", "licenseSeries": "4" }, { "licenseName": "\uae08\uc18d\uc7ac\ub8cc\uc2dc\ud5d8\uae30\ub2a5\uc0ac", "licenseCode": "6490", "licenseSeries": "4" }, { "licenseName": "\uc81c\uc120\uae30\ub2a5\uc0ac", "licenseCode": "6500", "licenseSeries": "4" }, { "licenseName": "\uc81c\uac15\uae30\ub2a5\uc0ac", "licenseCode": "6515", "licenseSeries": "4" }, { "licenseName": "\uc555\uc5f0\uae30\ub2a5\uc0ac", "licenseCode": "6543", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\ub3c4\uc7a5.\ub3c4\uae08", "ncsCategoryCode2": "175", "licenses": [{ "licenseName": "\ud45c\uba74\ucc98\ub9ac\uae30\uc220\uc0ac", "licenseCode": "120", "licenseSeries": "1" }, { "licenseName": "\ud45c\uba74\ucc98\ub9ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2106", "licenseSeries": "3" }, { "licenseName": "\ud45c\uba74\ucc98\ub9ac\uae30\ub2a5\uc7a5", "licenseCode": "3210", "licenseSeries": "2" }, { "licenseName": "\ud45c\uba74\ucc98\ub9ac\uae30\ub2a5\uc0ac", "licenseCode": "6480", "licenseSeries": "4" }, { "licenseName": "\uae08\uc18d\ub3c4\uc7a5\uae30\ub2a5\uc0ac", "licenseCode": "7450", "licenseSeries": "4" }, { "licenseName": "\uad11\uace0\ub3c4\uc7a5\uae30\ub2a5\uc0ac", "licenseCode": "7888", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\ud310\uae08.\uc81c\uad00.\uc0c8\uc2dc", "ncsCategoryCode2": "172", "licenses": [{ "licenseName": "\ud310\uae08\uc81c\uad00\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2012", "licenseSeries": "3" }, { "licenseName": "\ud310\uae08\uc81c\uad00\uae30\ub2a5\uc7a5", "licenseCode": "3095", "licenseSeries": "2" }, { "licenseName": "\ud310\uae08\uc81c\uad00\uae30\ub2a5\uc0ac", "licenseCode": "6175", "licenseSeries": "4" }, { "licenseName": "\uae08\uc18d\uc7ac\ucc3d\ud638\uae30\ub2a5\uc0ac", "licenseCode": "7102", "licenseSeries": "4" }, { "licenseName": "\ud50c\ub77c\uc2a4\ud2f1\ucc3d\ud638\uae30\ub2a5\uc0ac", "licenseCode": "7103", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\ub2e8\uc870.\uc8fc\uc870", "ncsCategoryCode2": "173", "licenses": [{ "licenseName": "\uc8fc\uc870\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2105", "licenseSeries": "3" }, { "licenseName": "\uc8fc\uc870\uae30\ub2a5\uc7a5", "licenseCode": "3200", "licenseSeries": "2" }, { "licenseName": "\uc8fc\uc870\uae30\ub2a5\uc0ac", "licenseCode": "6461", "licenseSeries": "4" }, { "licenseName": "\uc6d0\ud615\uae30\ub2a5\uc0ac", "licenseCode": "6530", "licenseSeries": "4" }] }], "ncsCategoryCode1": "17", "ncsCategoryName1": "\uc7ac\ub8cc" }, { "ncsCategory2": [{ "ncsCategoryName2": "\uae08\ud615.\uacf5\uc791\uae30\uacc4", "ncsCategoryCode2": "167", "licenses": [{ "licenseName": "\uae08\ud615\uae30\uc220\uc0ac", "licenseCode": "12", "licenseSeries": "1" }, { "licenseName": "\uc0ac\ucd9c\uae08\ud615\uc124\uacc4\uae30\uc0ac", "licenseCode": "1024", "licenseSeries": "3" }, { "licenseName": "\ud504\ub808\uc2a4\uae08\ud615\uc124\uacc4\uae30\uc0ac", "licenseCode": "1025", "licenseSeries": "3" }, { "licenseName": "\uc0ac\ucd9c\uae08\ud615\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2028", "licenseSeries": "3" }, { "licenseName": "\ud504\ub808\uc2a4\uae08\ud615\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2029", "licenseSeries": "3" }, { "licenseName": "\uae08\ud615\uc81c\uc791\uae30\ub2a5\uc7a5", "licenseCode": "3061", "licenseSeries": "2" }, { "licenseName": "\uae08\ud615\uae30\ub2a5\uc0ac", "licenseCode": "6105", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\uc790\ub3d9\ucc28", "ncsCategoryCode2": "166", "licenses": [{ "licenseName": "\ucc28\ub7c9\uae30\uc220\uc0ac", "licenseCode": "50", "licenseSeries": "1" }, { "licenseName": "\uadf8\ub9b0\uc804\ub3d9\uc790\ub3d9\ucc28\uae30\uc0ac", "licenseCode": "1027", "licenseSeries": "3" }, { "licenseName": "\uc790\ub3d9\ucc28\uc815\ube44\uae30\uc0ac", "licenseCode": "1070", "licenseSeries": "3" }, { "licenseName": "\uc790\ub3d9\ucc28\uc815\ube44\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2070", "licenseSeries": "3" }, { "licenseName": "\uc790\ub3d9\ucc28\uc815\ube44\uae30\ub2a5\uc7a5", "licenseCode": "3110", "licenseSeries": "2" }, { "licenseName": "\uc790\ub3d9\ucc28\uc815\ube44\uae30\ub2a5\uc0ac", "licenseCode": "6281", "licenseSeries": "4" }, { "licenseName": "\uc790\ub3d9\ucc28\ucc28\uccb4\uc218\ub9ac\uae30\ub2a5\uc0ac", "licenseCode": "6285", "licenseSeries": "4" }, { "licenseName": "\uc790\ub3d9\ucc28\ubcf4\uc218\ub3c4\uc7a5\uae30\ub2a5\uc0ac", "licenseCode": "6836", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\uae30\uacc4\uc7a5\ube44\uc124\ube44.\uc124\uce58", "ncsCategoryCode2": "162", "licenses": [{ "licenseName": "\uc0b0\uc5c5\uae30\uacc4\uc124\ube44\uae30\uc220\uc0ac", "licenseCode": "60", "licenseSeries": "1" }, { "licenseName": "\uacf5\uc870\ub0c9\ub3d9\uae30\uacc4\uae30\uc220\uc0ac", "licenseCode": "71", "licenseSeries": "1" }, { "licenseName": "\uac74\uc124\uae30\uacc4\uae30\uc220\uc0ac", "licenseCode": "80", "licenseSeries": "1" }, { "licenseName": "\ub18d\uc5c5\uae30\uacc4\uae30\uc0ac", "licenseCode": "1023", "licenseSeries": "3" }, { "licenseName": "\uac74\uc124\uae30\uacc4\uc124\ube44\uae30\uc0ac", "licenseCode": "1040", "licenseSeries": "3" }, { "licenseName": "\uac74\uc124\uae30\uacc4\uc815\ube44\uae30\uc0ac", "licenseCode": "1050", "licenseSeries": "3" }, { "licenseName": "\uada4\ub3c4\uc7a5\ube44\uc815\ube44\uae30\uc0ac", "licenseCode": "1051", "licenseSeries": "3" }, { "licenseName": "\uba54\uce74\ud2b8\ub85c\ub2c9\uc2a4\uae30\uc0ac", "licenseCode": "1060", "licenseSeries": "3" }, { "licenseName": "\uc2b9\uac15\uae30\uae30\uc0ac", "licenseCode": "1555", "licenseSeries": "3" }, { "licenseName": "\uacf5\uc870\ub0c9\ub3d9\uae30\uacc4\uae30\uc0ac", "licenseCode": "1730", "licenseSeries": "3" }, { "licenseName": "\uc124\ube44\ubcf4\uc804\uae30\uc0ac", "licenseCode": "1837", "licenseSeries": "3" }, { "licenseName": "\ub18d\uc5c5\uae30\uacc4\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2027", "licenseSeries": "3" }, { "licenseName": "\uc0dd\uc0b0\uc790\ub3d9\ud654\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2034", "licenseSeries": "3" }, { "licenseName": "\uae30\uacc4\uc815\ube44\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2035", "licenseSeries": "3" }, { "licenseName": "\uac74\uc124\uae30\uacc4\uc124\ube44\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2040", "licenseSeries": "3" }, { "licenseName": "\uac74\uc124\uae30\uacc4\uc815\ube44\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2050", "licenseSeries": "3" }, { "licenseName": "\uada4\ub3c4\uc7a5\ube44\uc815\ube44\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2051", "licenseSeries": "3" }, { "licenseName": "\uc2b9\uac15\uae30\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2395", "licenseSeries": "3" }, { "licenseName": "\uacf5\uc870\ub0c9\ub3d9\uae30\uacc4\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2590", "licenseSeries": "3" }, { "licenseName": "\uc804\uc790\ubd80\ud488\uc7a5\ucc29\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2835", "licenseSeries": "3" }, { "licenseName": "\uac74\uc124\uae30\uacc4\uc815\ube44\uae30\ub2a5\uc7a5", "licenseCode": "3120", "licenseSeries": "2" }, { "licenseName": "\ubc18\ub3c4\uccb4\uc7a5\ube44\uc720\uc9c0\ubcf4\uc218\uae30\ub2a5\uc0ac", "licenseCode": "6033", "licenseSeries": "4" }, { "licenseName": "\uada4\ub3c4\uc7a5\ube44\uc815\ube44\uae30\ub2a5\uc0ac", "licenseCode": "6051", "licenseSeries": "4" }, { "licenseName": "\uac74\uc124\uae30\uacc4\uc815\ube44\uae30\ub2a5\uc0ac", "licenseCode": "6298", "licenseSeries": "4" }, { "licenseName": "\ub18d\uae30\uacc4\uc815\ube44\uae30\ub2a5\uc0ac", "licenseCode": "6300", "licenseSeries": "4" }, { "licenseName": "\uacf5\uc870\ub0c9\ub3d9\uae30\uacc4\uae30\ub2a5\uc0ac", "licenseCode": "6320", "licenseSeries": "4" }, { "licenseName": "\uc0dd\uc0b0\uc790\ub3d9\ud654\uae30\ub2a5\uc0ac", "licenseCode": "6415", "licenseSeries": "4" }, { "licenseName": "\uc804\uc790\ubd80\ud488\uc7a5\ucc29\uae30\ub2a5\uc0ac", "licenseCode": "6835", "licenseSeries": "4" }, { "licenseName": "\uc124\ube44\ubcf4\uc804\uae30\ub2a5\uc0ac", "licenseCode": "6837", "licenseSeries": "4" }, { "licenseName": "\uae30\uacc4\uc815\ube44\uae30\ub2a5\uc0ac", "licenseCode": "7121", "licenseSeries": "4" }, { "licenseName": "\uc2b9\uac15\uae30\uae30\ub2a5\uc0ac", "licenseCode": "7940", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\uc870\uc120", "ncsCategoryCode2": "164", "licenses": [{ "licenseName": "\uc870\uc120\uae30\uc220\uc0ac", "licenseCode": "320", "licenseSeries": "1" }, { "licenseName": "\uc870\uc120\uae30\uc0ac", "licenseCode": "1220", "licenseSeries": "3" }, { "licenseName": "\uc870\uc120\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2220", "licenseSeries": "3" }, { "licenseName": "\uc804\uc0b0\uc751\uc6a9\uc870\uc120\uc81c\ub3c4\uae30\ub2a5\uc0ac", "licenseCode": "6910", "licenseSeries": "4" }, { "licenseName": "\uc120\uccb4\uac74\uc870\uae30\ub2a5\uc0ac", "licenseCode": "6920", "licenseSeries": "4" }, { "licenseName": "\ub3d9\ub825\uae30\uacc4\uc815\ube44\uae30\ub2a5\uc0ac", "licenseCode": "6960", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\ud56d\uacf5", "ncsCategoryCode2": "165", "licenses": [{ "licenseName": "\ud56d\uacf5\uae30\uccb4\uae30\uc220\uc0ac", "licenseCode": "360", "licenseSeries": "1" }, { "licenseName": "\ud56d\uacf5\uae30\uad00\uae30\uc220\uc0ac", "licenseCode": "370", "licenseSeries": "1" }, { "licenseName": "\ud56d\uacf5\uae30\uc0ac", "licenseCode": "1240", "licenseSeries": "3" }, { "licenseName": "\ud56d\uacf5\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2230", "licenseSeries": "3" }, { "licenseName": "\ud56d\uacf5\uae30\uccb4\uc815\ube44\uae30\ub2a5\uc0ac", "licenseCode": "6291", "licenseSeries": "4" }, { "licenseName": "\ud56d\uacf5\uae30\uad00\uc815\ube44\uae30\ub2a5\uc0ac", "licenseCode": "6292", "licenseSeries": "4" }, { "licenseName": "\ud56d\uacf5\uc7a5\ube44\uc815\ube44\uae30\ub2a5\uc0ac", "licenseCode": "6293", "licenseSeries": "4" }, { "licenseName": "\ud56d\uacf5\uc804\uc790\uc815\ube44\uae30\ub2a5\uc0ac", "licenseCode": "6294", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\ucca0\ub3c4", "ncsCategoryCode2": "163", "licenses": [{ "licenseName": "\ucca0\ub3c4\ucc28\ub7c9\uae30\uc220\uc0ac", "licenseCode": "431", "licenseSeries": "1" }, { "licenseName": "\ucca0\ub3c4\ucc28\ub7c9\uae30\uc0ac", "licenseCode": "1030", "licenseSeries": "3" }, { "licenseName": "\ucca0\ub3c4\ucc28\ub7c9\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2030", "licenseSeries": "3" }, { "licenseName": "\ucca0\ub3c4\ucc28\ub7c9\uc815\ube44\uae30\ub2a5\uc7a5", "licenseCode": "3150", "licenseSeries": "2" }, { "licenseName": "\ucca0\ub3c4\ucc28\ub7c9\uc815\ube44\uae30\ub2a5\uc0ac", "licenseCode": "6352", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\uae30\uacc4\uc81c\uc791", "ncsCategoryCode2": "161", "licenses": [{ "licenseName": "\uae30\uacc4\uae30\uc220\uc0ac", "licenseCode": "872", "licenseSeries": "1" }, { "licenseName": "\uc77c\ubc18\uae30\uacc4\uae30\uc0ac", "licenseCode": "1021", "licenseSeries": "3" }, { "licenseName": "\uae30\uacc4\uc124\uacc4\uae30\uc0ac", "licenseCode": "1080", "licenseSeries": "3" }, { "licenseName": "\uae30\uacc4\uc870\ub9bd\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2011", "licenseSeries": "3" }, { "licenseName": "\ucef4\ud4e8\ud130\uc751\uc6a9\uac00\uacf5\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2025", "licenseSeries": "3" }, { "licenseName": "\uae30\uacc4\uc124\uacc4\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2031", "licenseSeries": "3" }, { "licenseName": "\uce58\uacf5\uad6c\uc124\uacc4\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2090", "licenseSeries": "3" }, { "licenseName": "\uc815\ubc00\uce21\uc815\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2104", "licenseSeries": "3" }, { "licenseName": "\uae30\uacc4\uac00\uacf5\uae30\ub2a5\uc7a5", "licenseCode": "3021", "licenseSeries": "2" }, { "licenseName": "\ucef4\ud4e8\ud130\uc751\uc6a9\uc120\ubc18\uae30\ub2a5\uc0ac", "licenseCode": "6012", "licenseSeries": "4" }, { "licenseName": "\ucef4\ud4e8\ud130\uc751\uc6a9\ubc00\ub9c1\uae30\ub2a5\uc0ac", "licenseCode": "6032", "licenseSeries": "4" }, { "licenseName": "\uc5f0\uc0ad\uae30\ub2a5\uc0ac", "licenseCode": "6040", "licenseSeries": "4" }, { "licenseName": "\uae30\uacc4\uac00\uacf5\uc870\ub9bd\uae30\ub2a5\uc0ac", "licenseCode": "6042", "licenseSeries": "4" }, { "licenseName": "\uc815\ubc00\uce21\uc815\uae30\ub2a5\uc0ac", "licenseCode": "6120", "licenseSeries": "4" }, { "licenseName": "\uc804\uc0b0\uc751\uc6a9\uae30\uacc4\uc81c\ub3c4\uae30\ub2a5\uc0ac", "licenseCode": "6151", "licenseSeries": "4" }, { "licenseName": "\uacf5\uc720\uc555\uae30\ub2a5\uc0ac", "licenseCode": "6251", "licenseSeries": "4" }] }], "ncsCategoryCode1": "16", "ncsCategoryName1": "\uae30\uacc4" }, { "ncsCategory2": [{ "ncsCategoryName2": "\ud654\uacf5", "ncsCategoryCode2": "181", "licenses": [{ "licenseName": "\ud654\uacf5\uae30\uc220\uc0ac", "licenseCode": "210", "licenseSeries": "1" }, { "licenseName": "\ud654\uacf5\uae30\uc0ac", "licenseCode": "1110", "licenseSeries": "3" }, { "licenseName": "\ud654\uc57d\ub958\uc81c\uc870\uae30\uc0ac", "licenseCode": "1130", "licenseSeries": "3" }, { "licenseName": "\ud654\ud559\ubd84\uc11d\uae30\uc0ac", "licenseCode": "1563", "licenseSeries": "3" }, { "licenseName": "\ubc14\uc774\uc624\ud654\ud559\uc81c\ud488\uc81c\uc870\uae30\uc0ac", "licenseCode": "1800", "licenseSeries": "3" }, { "licenseName": "\ud654\uc57d\ub958\uc81c\uc870\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2120", "licenseSeries": "3" }, { "licenseName": "\ubc14\uc774\uc624\ud654\ud559\uc81c\ud488\uc81c\uc870\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2570", "licenseSeries": "3" }, { "licenseName": "\ud654\ud559\ubd84\uc11d\uae30\ub2a5\uc0ac", "licenseCode": "6560", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\uc704\ud5d8\ubb3c", "ncsCategoryCode2": "182", "licenses": [{ "licenseName": "\uc704\ud5d8\ubb3c\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2121", "licenseSeries": "3" }, { "licenseName": "\uc704\ud5d8\ubb3c\uae30\ub2a5\uc7a5", "licenseCode": "3360", "licenseSeries": "2" }, { "licenseName": "\uc704\ud5d8\ubb3c\uae30\ub2a5\uc0ac", "licenseCode": "6697", "licenseSeries": "4" }] }], "ncsCategoryCode1": "18", "ncsCategoryName1": "\ud654\ud559" }, { "ncsCategory2": [{ "ncsCategoryName2": "\uc804\uae30", "ncsCategoryCode2": "201", "licenses": [{ "licenseName": "\ubc1c\uc1a1\ubc30\uc804\uae30\uc220\uc0ac", "licenseCode": "230", "licenseSeries": "1" }, { "licenseName": "\uc804\uae30\uc751\uc6a9\uae30\uc220\uc0ac", "licenseCode": "250", "licenseSeries": "1" }, { "licenseName": "\ucca0\ub3c4\uc2e0\ud638\uae30\uc220\uc0ac", "licenseCode": "261", "licenseSeries": "1" }, { "licenseName": "\uc804\uae30\ucca0\ub3c4\uae30\uc220\uc0ac", "licenseCode": "432", "licenseSeries": "1" }, { "licenseName": "\uac74\ucd95\uc804\uae30\uc124\ube44\uae30\uc220\uc0ac", "licenseCode": "502", "licenseSeries": "1" }, { "licenseName": "\uc804\uae30\uae30\uc0ac", "licenseCode": "1150", "licenseSeries": "3" }, { "licenseName": "\uc804\uae30\uacf5\uc0ac\uae30\uc0ac", "licenseCode": "1160", "licenseSeries": "3" }, { "licenseName": "\ucca0\ub3c4\uc2e0\ud638\uae30\uc0ac", "licenseCode": "1740", "licenseSeries": "3" }, { "licenseName": "\uc804\uae30\ucca0\ub3c4\uae30\uc0ac", "licenseCode": "1741", "licenseSeries": "3" }, { "licenseName": "\uc804\uae30\ucca0\ub3c4\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2036", "licenseSeries": "3" }, { "licenseName": "\uc804\uae30\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2140", "licenseSeries": "3" }, { "licenseName": "\uc804\uae30\uacf5\uc0ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2150", "licenseSeries": "3" }, { "licenseName": "\ucca0\ub3c4\uc2e0\ud638\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2160", "licenseSeries": "3" }, { "licenseName": "\uc804\uae30\uae30\ub2a5\uc7a5", "licenseCode": "3380", "licenseSeries": "2" }, { "licenseName": "\ucca0\ub3c4\uc804\uae30\uc2e0\ud638\uae30\ub2a5\uc0ac", "licenseCode": "6772", "licenseSeries": "4" }, { "licenseName": "\uc804\uae30\uae30\ub2a5\uc0ac", "licenseCode": "7780", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\uc804\uc790", "ncsCategoryCode2": "202", "licenses": [{ "licenseName": "\uc0b0\uc5c5\uacc4\uce21\uc81c\uc5b4\uae30\uc220\uc0ac", "licenseCode": "270", "licenseSeries": "1" }, { "licenseName": "\uc804\uc790\uc751\uc6a9\uae30\uc220\uc0ac", "licenseCode": "301", "licenseSeries": "1" }, { "licenseName": "\uc784\ubca0\ub514\ub4dc\uae30\uc0ac", "licenseCode": "1121", "licenseSeries": "3" }, { "licenseName": "\uc804\uc790\uae30\uc0ac", "licenseCode": "1170", "licenseSeries": "3" }, { "licenseName": "\ubc18\ub3c4\uccb4\uc124\uacc4\uae30\uc0ac", "licenseCode": "1175", "licenseSeries": "3" }, { "licenseName": "\uc758\uacf5\uae30\uc0ac", "licenseCode": "1176", "licenseSeries": "3" }, { "licenseName": "\ub85c\ubd07\uae30\uad6c\uac1c\ubc1c\uae30\uc0ac", "licenseCode": "1177", "licenseSeries": "3" }, { "licenseName": "\ub85c\ubd07\uc18c\ud504\ud2b8\uc6e8\uc5b4\uac1c\ubc1c\uae30\uc0ac", "licenseCode": "1178", "licenseSeries": "3" }, { "licenseName": "\ub85c\ubd07\ud558\ub4dc\uc6e8\uc5b4\uac1c\ubc1c\uae30\uc0ac", "licenseCode": "1179", "licenseSeries": "3" }, { "licenseName": "\uc804\uc790\uacc4\uc0b0\uae30\uae30\uc0ac", "licenseCode": "1321", "licenseSeries": "3" }, { "licenseName": "\uad11\ud559\uae30\uc0ac", "licenseCode": "1513", "licenseSeries": "3" }, { "licenseName": "\uad11\ud559\uae30\uae30\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2108", "licenseSeries": "3" }, { "licenseName": "\uc804\uc790\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2170", "licenseSeries": "3" }, { "licenseName": "\ubc18\ub3c4\uccb4\uc124\uacc4\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2175", "licenseSeries": "3" }, { "licenseName": "\uc758\uacf5\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2176", "licenseSeries": "3" }, { "licenseName": "3D\ud504\ub9b0\ud130\uac1c\ubc1c\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2177", "licenseSeries": "3" }, { "licenseName": "\uc804\uc790\uacc4\uc0b0\uae30\uc81c\uc5b4\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2324", "licenseSeries": "3" }, { "licenseName": "\uc804\uc790\uae30\uae30\uae30\ub2a5\uc7a5", "licenseCode": "3410", "licenseSeries": "2" }, { "licenseName": "\uc758\ub8cc\uc804\uc790\uae30\ub2a5\uc0ac", "licenseCode": "6176", "licenseSeries": "4" }, { "licenseName": "\uc804\uc790\uce90\ub4dc\uae30\ub2a5\uc0ac", "licenseCode": "6785", "licenseSeries": "4" }, { "licenseName": "\uc804\uc790\uae30\uae30\uae30\ub2a5\uc0ac", "licenseCode": "6790", "licenseSeries": "4" }, { "licenseName": "\uc804\uc790\uacc4\uc0b0\uae30\uae30\ub2a5\uc0ac", "licenseCode": "6801", "licenseSeries": "4" }, { "licenseName": "\uad11\ud559\uae30\ub2a5\uc0ac", "licenseCode": "7671", "licenseSeries": "4" }, { "licenseName": "3D\ud504\ub9b0\ud130\uc6b4\uc6a9\uae30\ub2a5\uc0ac", "licenseCode": "7785", "licenseSeries": "4" }] }], "ncsCategoryCode1": "20", "ncsCategoryName1": "\uc804\uae30.\uc804\uc790" }, { "ncsCategory2": [{ "ncsCategoryName2": "\ud1a0\ubaa9", "ncsCategoryCode2": "142", "licenses": [{ "licenseName": "\ud1a0\uc9c8\ubc0f\uae30\ucd08\uae30\uc220\uc0ac", "licenseCode": "390", "licenseSeries": "1" }, { "licenseName": "\ud1a0\ubaa9\uad6c\uc870\uae30\uc220\uc0ac", "licenseCode": "400", "licenseSeries": "1" }, { "licenseName": "\ud56d\ub9cc\ubc0f\ud574\uc548\uae30\uc220\uc0ac", "licenseCode": "410", "licenseSeries": "1" }, { "licenseName": "\ub3c4\ub85c\ubc0f\uacf5\ud56d\uae30\uc220\uc0ac", "licenseCode": "420", "licenseSeries": "1" }, { "licenseName": "\ucca0\ub3c4\uae30\uc220\uc0ac", "licenseCode": "430", "licenseSeries": "1" }, { "licenseName": "\uc218\uc790\uc6d0\uac1c\ubc1c\uae30\uc220\uc0ac", "licenseCode": "451", "licenseSeries": "1" }, { "licenseName": "\uc0c1\ud558\uc218\ub3c4\uae30\uc220\uc0ac", "licenseCode": "460", "licenseSeries": "1" }, { "licenseName": "\ub18d\uc5b4\uc5c5\ud1a0\ubaa9\uae30\uc220\uc0ac", "licenseCode": "470", "licenseSeries": "1" }, { "licenseName": "\ud1a0\ubaa9\uc2dc\uacf5\uae30\uc220\uc0ac", "licenseCode": "480", "licenseSeries": "1" }, { "licenseName": "\ud1a0\ubaa9\ud488\uc9c8\uc2dc\ud5d8\uae30\uc220\uc0ac", "licenseCode": "481", "licenseSeries": "1" }, { "licenseName": "\uce21\ub7c9\ubc0f\uc9c0\ud615\uacf5\uac04\uc815\ubcf4\uae30\uc220\uc0ac", "licenseCode": "680", "licenseSeries": "1" }, { "licenseName": "\uc9c0\uc801\uae30\uc220\uc0ac", "licenseCode": "690", "licenseSeries": "1" }, { "licenseName": "\ud574\uc591\uae30\uc220\uc0ac", "licenseCode": "700", "licenseSeries": "1" }, { "licenseName": "\uc9c0\uc9c8\ubc0f\uc9c0\ubc18\uae30\uc220\uc0ac", "licenseCode": "825", "licenseSeries": "1" }, { "licenseName": "\ucf58\ud06c\ub9ac\ud2b8\uae30\uc0ac", "licenseCode": "1048", "licenseSeries": "3" }, { "licenseName": "\ud1a0\ubaa9\uae30\uc0ac", "licenseCode": "1250", "licenseSeries": "3" }, { "licenseName": "\ud56d\ub85c\ud45c\uc9c0\uae30\uc0ac", "licenseCode": "1351", "licenseSeries": "3" }, { "licenseName": "\uce21\ub7c9\ubc0f\uc9c0\ud615\uacf5\uac04\uc815\ubcf4\uae30\uc0ac", "licenseCode": "1380", "licenseSeries": "3" }, { "licenseName": "\uc9c0\uc801\uae30\uc0ac", "licenseCode": "1390", "licenseSeries": "3" }, { "licenseName": "\ud574\uc591\ud658\uacbd\uae30\uc0ac", "licenseCode": "1401", "licenseSeries": "3" }, { "licenseName": "\ud574\uc591\uc790\uc6d0\uac1c\ubc1c\uae30\uc0ac", "licenseCode": "1402", "licenseSeries": "3" }, { "licenseName": "\ud574\uc591\uacf5\ud559\uae30\uc0ac", "licenseCode": "1403", "licenseSeries": "3" }, { "licenseName": "\uc751\uc6a9\uc9c0\uc9c8\uae30\uc0ac", "licenseCode": "1550", "licenseSeries": "3" }, { "licenseName": "\uac74\uc124\uc7ac\ub8cc\uc2dc\ud5d8\uae30\uc0ac", "licenseCode": "1750", "licenseSeries": "3" }, { "licenseName": "\ucca0\ub3c4\ud1a0\ubaa9\uae30\uc0ac", "licenseCode": "1760", "licenseSeries": "3" }, { "licenseName": "\ucf58\ud06c\ub9ac\ud2b8\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2048", "licenseSeries": "3" }, { "licenseName": "\ud1a0\ubaa9\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2240", "licenseSeries": "3" }, { "licenseName": "\uce21\ub7c9\ubc0f\uc9c0\ud615\uacf5\uac04\uc815\ubcf4\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2330", "licenseSeries": "3" }, { "licenseName": "\uc9c0\uc801\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2340", "licenseSeries": "3" }, { "licenseName": "\ud574\uc591\uc870\uc0ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2350", "licenseSeries": "3" }, { "licenseName": "\ud56d\ub85c\ud45c\uc9c0\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2351", "licenseSeries": "3" }, { "licenseName": "\uc7a0\uc218\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2521", "licenseSeries": "3" }, { "licenseName": "\uac74\uc124\uc7ac\ub8cc\uc2dc\ud5d8\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2600", "licenseSeries": "3" }, { "licenseName": "\ucca0\ub3c4\ud1a0\ubaa9\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2610", "licenseSeries": "3" }, { "licenseName": "\uc7a0\uc218\uae30\ub2a5\uc7a5", "licenseCode": "3911", "licenseSeries": "2" }, { "licenseName": "\ud56d\ub85c\ud45c\uc9c0\uae30\ub2a5\uc0ac", "licenseCode": "6351", "licenseSeries": "4" }, { "licenseName": "\uce21\ub7c9\uae30\ub2a5\uc0ac", "licenseCode": "6980", "licenseSeries": "4" }, { "licenseName": "\uc11d\uacf5\uae30\ub2a5\uc0ac", "licenseCode": "6990", "licenseSeries": "4" }, { "licenseName": "\ucca0\ub3c4\ud1a0\ubaa9\uae30\ub2a5\uc0ac", "licenseCode": "7010", "licenseSeries": "4" }, { "licenseName": "\ucf58\ud06c\ub9ac\ud2b8\uae30\ub2a5\uc0ac", "licenseCode": "7020", "licenseSeries": "4" }, { "licenseName": "\uc804\uc0b0\uc751\uc6a9\ud1a0\ubaa9\uc81c\ub3c4\uae30\ub2a5\uc0ac", "licenseCode": "7072", "licenseSeries": "4" }, { "licenseName": "\uac74\uc124\uc7ac\ub8cc\uc2dc\ud5d8\uae30\ub2a5\uc0ac", "licenseCode": "7132", "licenseSeries": "4" }, { "licenseName": "\uc7a0\uc218\uae30\ub2a5\uc0ac", "licenseCode": "7612", "licenseSeries": "4" }, { "licenseName": "\uc9c0\uc801\uae30\ub2a5\uc0ac", "licenseCode": "7650", "licenseSeries": "4" }, { "licenseName": "\ub3c4\ud654\uae30\ub2a5\uc0ac", "licenseCode": "7660", "licenseSeries": "4" }, { "licenseName": "\ud56d\uacf5\uc0ac\uc9c4\uae30\ub2a5\uc0ac", "licenseCode": "7670", "licenseSeries": "4" }, { "licenseName": "\uc9c0\ub3c4\uc81c\uc791\uae30\ub2a5\uc0ac", "licenseCode": "7680", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\uac74\ucd95", "ncsCategoryCode2": "141", "licenses": [{ "licenseName": "\uac74\ucd95\uad6c\uc870\uae30\uc220\uc0ac", "licenseCode": "490", "licenseSeries": "1" }, { "licenseName": "\uac74\ucd95\uae30\uacc4\uc124\ube44\uae30\uc220\uc0ac", "licenseCode": "501", "licenseSeries": "1" }, { "licenseName": "\uac74\ucd95\uc2dc\uacf5\uae30\uc220\uc0ac", "licenseCode": "510", "licenseSeries": "1" }, { "licenseName": "\uac74\ucd95\ud488\uc9c8\uc2dc\ud5d8\uae30\uc220\uc0ac", "licenseCode": "511", "licenseSeries": "1" }, { "licenseName": "\uc2e4\ub0b4\uac74\ucd95\uae30\uc0ac", "licenseCode": "1282", "licenseSeries": "3" }, { "licenseName": "\uac74\ucd95\uae30\uc0ac", "licenseCode": "1630", "licenseSeries": "3" }, { "licenseName": "\uac74\ucd95\uc124\ube44\uae30\uc0ac", "licenseCode": "1632", "licenseSeries": "3" }, { "licenseName": "\uac74\ucd95\uc77c\ubc18\uc2dc\uacf5\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2251", "licenseSeries": "3" }, { "licenseName": "\uac74\ucd95\ubaa9\uacf5\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2253", "licenseSeries": "3" }, { "licenseName": "\uc2e4\ub0b4\uac74\ucd95\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2282", "licenseSeries": "3" }, { "licenseName": "\uac74\ucd95\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2530", "licenseSeries": "3" }, { "licenseName": "\uac74\ucd95\uc124\ube44\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2531", "licenseSeries": "3" }, { "licenseName": "\ubc29\uc218\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2630", "licenseSeries": "3" }, { "licenseName": "\uac74\ucd95\ubaa9\uc7ac\uc2dc\uacf5\uae30\ub2a5\uc7a5", "licenseCode": "3611", "licenseSeries": "2" }, { "licenseName": "\uac74\ucd95\uc77c\ubc18\uc2dc\uacf5\uae30\ub2a5\uc7a5", "licenseCode": "3621", "licenseSeries": "2" }, { "licenseName": "\ubc29\uc218\uae30\ub2a5\uc0ac", "licenseCode": "7030", "licenseSeries": "4" }, { "licenseName": "\uc804\uc0b0\uc751\uc6a9\uac74\ucd95\uc81c\ub3c4\uae30\ub2a5\uc0ac", "licenseCode": "7061", "licenseSeries": "4" }, { "licenseName": "\uc870\uc801\uae30\ub2a5\uc0ac", "licenseCode": "7070", "licenseSeries": "4" }, { "licenseName": "\ucca0\uadfc\uae30\ub2a5\uc0ac", "licenseCode": "7080", "licenseSeries": "4" }, { "licenseName": "\ubbf8\uc7a5\uae30\ub2a5\uc0ac", "licenseCode": "7110", "licenseSeries": "4" }, { "licenseName": "\ube44\uacc4\uae30\ub2a5\uc0ac", "licenseCode": "7120", "licenseSeries": "4" }, { "licenseName": "\uac74\ucd95\ubaa9\uacf5\uae30\ub2a5\uc0ac", "licenseCode": "7130", "licenseSeries": "4" }, { "licenseName": "\uac74\ucd95\ub3c4\uc7a5\uae30\ub2a5\uc0ac", "licenseCode": "7150", "licenseSeries": "4" }, { "licenseName": "\uc720\ub9ac\uc2dc\uacf5\uae30\ub2a5\uc0ac", "licenseCode": "7151", "licenseSeries": "4" }, { "licenseName": "\uc2e4\ub0b4\uac74\ucd95\uae30\ub2a5\uc0ac", "licenseCode": "7152", "licenseSeries": "4" }, { "licenseName": "\uc628\uc218\uc628\ub3cc\uae30\ub2a5\uc0ac", "licenseCode": "7161", "licenseSeries": "4" }, { "licenseName": "\uac70\ud478\uc9d1\uae30\ub2a5\uc0ac", "licenseCode": "7170", "licenseSeries": "4" }, { "licenseName": "\ub3c4\ubc30\uae30\ub2a5\uc0ac", "licenseCode": "7180", "licenseSeries": "4" }, { "licenseName": "\ud0c0\uc77c\uae30\ub2a5\uc0ac", "licenseCode": "7210", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\ub3c4\uc2dc.\uad50\ud1b5", "ncsCategoryCode2": "144", "licenses": [{ "licenseName": "\ub3c4\uc2dc\uacc4\ud68d\uae30\uc220\uc0ac", "licenseCode": "650", "licenseSeries": "1" }, { "licenseName": "\uad50\ud1b5\uae30\uc220\uc0ac", "licenseCode": "951", "licenseSeries": "1" }, { "licenseName": "\ub3c4\uc2dc\uacc4\ud68d\uae30\uc0ac", "licenseCode": "1350", "licenseSeries": "3" }, { "licenseName": "\uad50\ud1b5\uae30\uc0ac", "licenseCode": "1751", "licenseSeries": "3" }, { "licenseName": "\uad50\ud1b5\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2751", "licenseSeries": "3" }] }, { "ncsCategoryName2": "\uc870\uacbd", "ncsCategoryCode2": "143", "licenses": [{ "licenseName": "\uc870\uacbd\uae30\uc220\uc0ac", "licenseCode": "670", "licenseSeries": "1" }, { "licenseName": "\uc870\uacbd\uae30\uc0ac", "licenseCode": "1370", "licenseSeries": "3" }, { "licenseName": "\uc870\uacbd\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2320", "licenseSeries": "3" }, { "licenseName": "\uc870\uacbd\uae30\ub2a5\uc0ac", "licenseCode": "7900", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\uac74\uc124\ubc30\uad00", "ncsCategoryCode2": "145", "licenses": [{ "licenseName": "\ubc30\uad00\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2041", "licenseSeries": "3" }, { "licenseName": "\ubc30\uad00\uae30\ub2a5\uc7a5", "licenseCode": "3081", "licenseSeries": "2" }, { "licenseName": "\ubc30\uad00\uae30\ub2a5\uc0ac", "licenseCode": "6213", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\uac74\uc124\uae30\uacc4\uc6b4\uc804", "ncsCategoryCode2": "146", "licenses": [{ "licenseName": "\ucc9c\uacf5\uae30\uc6b4\uc804\uae30\ub2a5\uc0ac", "licenseCode": "7483", "licenseSeries": "4" }, { "licenseName": "\ud0c0\uc6cc\ud06c\ub808\uc778\uc6b4\uc804\uae30\ub2a5\uc0ac", "licenseCode": "7834", "licenseSeries": "4" }, { "licenseName": "\ucee8\ud14c\uc774\ub108\ud06c\ub808\uc778\uc6b4\uc804\uae30\ub2a5\uc0ac", "licenseCode": "7835", "licenseSeries": "4" }, { "licenseName": "\uae30\uc911\uae30\uc6b4\uc804\uae30\ub2a5\uc0ac", "licenseCode": "7861", "licenseSeries": "4" }, { "licenseName": "\uad74\uc0ad\uae30\uc6b4\uc804\uae30\ub2a5\uc0ac", "licenseCode": "7862", "licenseSeries": "4" }, { "licenseName": "\ubd88\ub3c4\uc800\uc6b4\uc804\uae30\ub2a5\uc0ac", "licenseCode": "7863", "licenseSeries": "4" }, { "licenseName": "\ucc9c\uc7a5\ud06c\ub808\uc778\uc6b4\uc804\uae30\ub2a5\uc0ac", "licenseCode": "7864", "licenseSeries": "4" }, { "licenseName": "\ub85c\ub354\uc6b4\uc804\uae30\ub2a5\uc0ac", "licenseCode": "7866", "licenseSeries": "4" }, { "licenseName": "\ub864\ub7ec\uc6b4\uc804\uae30\ub2a5\uc0ac", "licenseCode": "7871", "licenseSeries": "4" }, { "licenseName": "\uc9c0\uac8c\ucc28\uc6b4\uc804\uae30\ub2a5\uc0ac", "licenseCode": "7875", "licenseSeries": "4" }, { "licenseName": "\uc591\ud654\uc7a5\uce58\uc6b4\uc804\uae30\ub2a5\uc0ac", "licenseCode": "7930", "licenseSeries": "4" }] }], "ncsCategoryCode1": "14", "ncsCategoryName1": "\uac74\uc124" }, { "ncsCategory2": [{ "ncsCategoryName2": "\uc12c\uc720", "ncsCategoryCode2": "191", "licenses": [{ "licenseName": "\uc12c\uc720\uae30\uc220\uc0ac", "licenseCode": "551", "licenseSeries": "1" }, { "licenseName": "\uc758\ub958\uae30\uc220\uc0ac", "licenseCode": "561", "licenseSeries": "1" }, { "licenseName": "\uc12c\uc720\uae30\uc0ac", "licenseCode": "1297", "licenseSeries": "3" }, { "licenseName": "\uc758\ub958\uae30\uc0ac", "licenseCode": "1301", "licenseSeries": "3" }, { "licenseName": "\uc12c\uc720\ub514\uc790\uc778\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2264", "licenseSeries": "3" }, { "licenseName": "\uc12c\uc720\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2277", "licenseSeries": "3" }, { "licenseName": "\uc5fc\uc0c9\uae30\ub2a5\uc0ac(\uce68\uc5fc)", "licenseCode": "7301", "licenseSeries": "4" }, { "licenseName": "\uc5fc\uc0c9\uae30\ub2a5\uc0ac(\ub0a0\uc5fc)", "licenseCode": "7302", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\uc758\ubcf5", "ncsCategoryCode2": "192", "licenses": [{ "licenseName": "\ud328\uc158\uba38\ucc9c\ub2e4\uc774\uc9d5\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2085", "licenseSeries": "3" }, { "licenseName": "\ud55c\ubcf5\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2268", "licenseSeries": "3" }, { "licenseName": "\ud328\uc158\ub514\uc790\uc778\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2301", "licenseSeries": "3" }, { "licenseName": "\uc2e0\ubc1c\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2302", "licenseSeries": "3" }, { "licenseName": "\ud55c\ubcf5\uae30\ub2a5\uc0ac", "licenseCode": "7723", "licenseSeries": "4" }, { "licenseName": "\uc2e0\ubc1c\ub958\uc81c\uc870\uae30\ub2a5\uc0ac", "licenseCode": "7904", "licenseSeries": "4" }, { "licenseName": "\uc591\ubcf5\uae30\ub2a5\uc0ac", "licenseCode": "7931", "licenseSeries": "4" }, { "licenseName": "\uc591\uc7a5\uae30\ub2a5\uc0ac", "licenseCode": "7932", "licenseSeries": "4" }, { "licenseName": "\uc138\ud0c1\uae30\ub2a5\uc0ac", "licenseCode": "7960", "licenseSeries": "4" }] }], "ncsCategoryCode1": "19", "ncsCategoryName1": "\uc12c\uc720.\uc758\ubcf5" }, { "ncsCategory2": [{ "ncsCategoryName2": "\ucc44\uad11", "ncsCategoryCode2": "151", "licenses": [{ "licenseName": "\uc790\uc6d0\uad00\ub9ac\uae30\uc220\uc0ac", "licenseCode": "570", "licenseSeries": "1" }, { "licenseName": "\ud654\uc57d\ub958\uad00\ub9ac\uae30\uc220\uc0ac", "licenseCode": "591", "licenseSeries": "1" }, { "licenseName": "\ud654\uc57d\ub958\uad00\ub9ac\uae30\uc0ac", "licenseCode": "1140", "licenseSeries": "3" }, { "licenseName": "\uad11\uc0b0\ubcf4\uc548\uae30\uc0ac", "licenseCode": "1450", "licenseSeries": "3" }, { "licenseName": "\ud654\uc57d\ub958\uad00\ub9ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2130", "licenseSeries": "3" }, { "licenseName": "\uad11\uc0b0\ubcf4\uc548\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2135", "licenseSeries": "3" }, { "licenseName": "\uc2dc\ucd94\uae30\ub2a5\uc0ac", "licenseCode": "7330", "licenseSeries": "4" }, { "licenseName": "\uad11\uc0b0\ubcf4\uc548\uae30\ub2a5\uc0ac", "licenseCode": "7380", "licenseSeries": "4" }, { "licenseName": "\ud654\uc57d\ucde8\uae09\uae30\ub2a5\uc0ac", "licenseCode": "7970", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\uad11\ud574\ubc29\uc9c0", "ncsCategoryCode2": "152", "licenses": [{ "licenseName": "\uad11\ud574\ubc29\uc9c0\uae30\uc220\uc0ac", "licenseCode": "575", "licenseSeries": "1" }, { "licenseName": "\uad11\ud574\ubc29\uc9c0\uae30\uc0ac", "licenseCode": "1575", "licenseSeries": "3" }] }], "ncsCategoryCode1": "15", "ncsCategoryName1": "\uad11\uc5c5\uc790\uc6d0" }, { "ncsCategory2": [{ "ncsCategoryName2": "\uc815\ubcf4\uae30\uc220", "ncsCategoryCode2": "211", "licenses": [{ "licenseName": "\uc815\ubcf4\uad00\ub9ac\uae30\uc220\uc0ac", "licenseCode": "601", "licenseSeries": "1" }, { "licenseName": "\ucef4\ud4e8\ud130\uc2dc\uc2a4\ud15c\uc751\uc6a9\uae30\uc220\uc0ac", "licenseCode": "622", "licenseSeries": "1" }, { "licenseName": "\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac", "licenseCode": "1320", "licenseSeries": "3" }, { "licenseName": "\uc804\uc790\uacc4\uc0b0\uae30\uc870\uc9c1\uc751\uc6a9\uae30\uc0ac", "licenseCode": "1322", "licenseSeries": "3" }, { "licenseName": "\uc815\ubcf4\ubcf4\uc548\uae30\uc0ac", "licenseCode": "1325", "licenseSeries": "3" }, { "licenseName": "\uc0ac\ubb34\uc790\ub3d9\ud654\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2193", "licenseSeries": "3" }, { "licenseName": "\uc815\ubcf4\ucc98\ub9ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2290", "licenseSeries": "3" }, { "licenseName": "\uc815\ubcf4\ubcf4\uc548\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2325", "licenseSeries": "3" }, { "licenseName": "\uc815\ubcf4\uae30\uae30\uc6b4\uc6a9\uae30\ub2a5\uc0ac", "licenseCode": "6892", "licenseSeries": "4" }, { "licenseName": "\uc815\ubcf4\ucc98\ub9ac\uae30\ub2a5\uc0ac", "licenseCode": "6921", "licenseSeries": "4" }, { "licenseName": "\uba40\ud2f0\ubbf8\ub514\uc5b4\ucf58\ud150\uce20\uc81c\uc791\uc804\ubb38\uac00", "licenseCode": "9545", "licenseSeries": "3" }] }, { "ncsCategoryName2": "\ud1b5\uc2e0", "ncsCategoryCode2": "213", "licenses": [{ "licenseName": "\uc804\ud30c\uc804\uc790\ud1b5\uc2e0\uae30\uc0ac", "licenseCode": "1195", "licenseSeries": "3" }, { "licenseName": "\uc804\ud30c\uc804\uc790\ud1b5\uc2e0\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2195", "licenseSeries": "3" }, { "licenseName": "\uc804\ud30c\uc804\uc790\ud1b5\uc2e0\uae30\ub2a5\uc0ac", "licenseCode": "6893", "licenseSeries": "4" }] }], "ncsCategoryCode1": "21", "ncsCategoryName1": "\uc815\ubcf4\ud1b5\uc2e0" }, { "ncsCategory2": [{ "ncsCategoryName2": "\uc5b4\uc5c5", "ncsCategoryCode2": "244", "licenses": [{ "licenseName": "\uc218\uc0b0\uc591\uc2dd\uae30\uc220\uc0ac", "licenseCode": "701", "licenseSeries": "1" }, { "licenseName": "\uc5b4\ub85c\uae30\uc220\uc0ac", "licenseCode": "702", "licenseSeries": "1" }, { "licenseName": "\uc218\uc0b0\uc591\uc2dd\uae30\uc0ac", "licenseCode": "1625", "licenseSeries": "3" }, { "licenseName": "\uc5b4\uc5c5\uc0dd\uc0b0\uad00\ub9ac\uae30\uc0ac", "licenseCode": "1633", "licenseSeries": "3" }, { "licenseName": "\uc218\uc0b0\uc591\uc2dd\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2520", "licenseSeries": "3" }, { "licenseName": "\uc5b4\ub85c\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2631", "licenseSeries": "3" }, { "licenseName": "\uc218\uc0b0\uc591\uc2dd\uae30\ub2a5\uc0ac", "licenseCode": "7700", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\uc784\uc5c5", "ncsCategoryCode2": "243", "licenses": [{ "licenseName": "\uc0b0\ub9bc\uae30\uc220\uc0ac", "licenseCode": "801", "licenseSeries": "1" }, { "licenseName": "\uc2dd\ubb3c\ubcf4\ud638\uae30\uc0ac", "licenseCode": "1562", "licenseSeries": "3" }, { "licenseName": "\uc0b0\ub9bc\uae30\uc0ac", "licenseCode": "1564", "licenseSeries": "3" }, { "licenseName": "\uc784\uc5c5\uc885\ubb18\uae30\uc0ac", "licenseCode": "1570", "licenseSeries": "3" }, { "licenseName": "\uc784\uc0b0\uac00\uacf5\uae30\uc0ac", "licenseCode": "1590", "licenseSeries": "3" }, { "licenseName": "\ubc84\uc12f\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "1641", "licenseSeries": "3" }, { "licenseName": "\uc0b0\ub9bc\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2481", "licenseSeries": "3" }, { "licenseName": "\uc784\uc0b0\uac00\uacf5\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2500", "licenseSeries": "3" }, { "licenseName": "\uc2dd\ubb3c\ubcf4\ud638\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2562", "licenseSeries": "3" }, { "licenseName": "\uc784\uc5c5\uc885\ubb18\uae30\ub2a5\uc0ac", "licenseCode": "7630", "licenseSeries": "4" }, { "licenseName": "\ubc84\uc12f\uc885\uade0\uae30\ub2a5\uc0ac", "licenseCode": "7631", "licenseSeries": "4" }, { "licenseName": "\uc0b0\ub9bc\uae30\ub2a5\uc0ac", "licenseCode": "7632", "licenseSeries": "4" }, { "licenseName": "\uc784\uc0b0\uac00\uacf5\uae30\ub2a5\uc0ac", "licenseCode": "7644", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\ub18d\uc5c5", "ncsCategoryCode2": "241", "licenses": [{ "licenseName": "\uc885\uc790\uae30\uc220\uc0ac", "licenseCode": "840", "licenseSeries": "1" }, { "licenseName": "\uc2dc\uc124\uc6d0\uc608\uae30\uc220\uc0ac", "licenseCode": "841", "licenseSeries": "1" }, { "licenseName": "\ub18d\ud654\ud559\uae30\uc220\uc0ac", "licenseCode": "950", "licenseSeries": "1" }, { "licenseName": "\uc885\uc790\uae30\uc0ac", "licenseCode": "1560", "licenseSeries": "3" }, { "licenseName": "\ud654\ud6fc\uc7a5\uc2dd\uae30\uc0ac", "licenseCode": "1576", "licenseSeries": "3" }, { "licenseName": "\uc720\uae30\ub18d\uc5c5\uae30\uc0ac", "licenseCode": "1592", "licenseSeries": "3" }, { "licenseName": "\uc2dc\uc124\uc6d0\uc608\uae30\uc0ac", "licenseCode": "1780", "licenseSeries": "3" }, { "licenseName": "\uc885\uc790\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2470", "licenseSeries": "3" }, { "licenseName": "\uc720\uae30\ub18d\uc5c5\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2592", "licenseSeries": "3" }, { "licenseName": "\ud654\ud6fc\uc7a5\uc2dd\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2625", "licenseSeries": "3" }, { "licenseName": "\uc720\uae30\ub18d\uc5c5\uae30\ub2a5\uc0ac", "licenseCode": "6592", "licenseSeries": "4" }, { "licenseName": "\uc885\uc790\uae30\ub2a5\uc0ac", "licenseCode": "7620", "licenseSeries": "4" }, { "licenseName": "\ud654\ud6fc\uc7a5\uc2dd\uae30\ub2a5\uc0ac", "licenseCode": "7625", "licenseSeries": "4" }, { "licenseName": "\uc6d0\uc608\uae30\ub2a5\uc0ac", "licenseCode": "7901", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\ucd95\uc0b0", "ncsCategoryCode2": "242", "licenses": [{ "licenseName": "\ucd95\uc0b0\uae30\uc220\uc0ac", "licenseCode": "851", "licenseSeries": "1" }, { "licenseName": "\ucd95\uc0b0\uae30\uc0ac", "licenseCode": "1581", "licenseSeries": "3" }, { "licenseName": "\ucd95\uc0b0\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2491", "licenseSeries": "3" }, { "licenseName": "\ucd95\uc0b0\uae30\ub2a5\uc0ac", "licenseCode": "7481", "licenseSeries": "4" }, { "licenseName": "\uc2dd\uc721\ucc98\ub9ac\uae30\ub2a5\uc0ac", "licenseCode": "7482", "licenseSeries": "4" }] }], "ncsCategoryCode1": "24", "ncsCategoryName1": "\ub18d\ub9bc\uc5b4\uc5c5" }, { "ncsCategory2": [{ "ncsCategoryName2": "\uc548\uc804\uad00\ub9ac", "ncsCategoryCode2": "251", "licenses": [{ "licenseName": "\uae30\uacc4\uc548\uc804\uae30\uc220\uc0ac", "licenseCode": "710", "licenseSeries": "1" }, { "licenseName": "\ud654\uacf5\uc548\uc804\uae30\uc220\uc0ac", "licenseCode": "720", "licenseSeries": "1" }, { "licenseName": "\uc804\uae30\uc548\uc804\uae30\uc220\uc0ac", "licenseCode": "730", "licenseSeries": "1" }, { "licenseName": "\uac74\uc124\uc548\uc804\uae30\uc220\uc0ac", "licenseCode": "740", "licenseSeries": "1" }, { "licenseName": "\uc18c\ubc29\uae30\uc220\uc0ac", "licenseCode": "750", "licenseSeries": "1" }, { "licenseName": "\uc0b0\uc5c5\uc704\uc0dd\uad00\ub9ac\uae30\uc220\uc0ac", "licenseCode": "751", "licenseSeries": "1" }, { "licenseName": "\uac00\uc2a4\uae30\uc220\uc0ac", "licenseCode": "752", "licenseSeries": "1" }, { "licenseName": "\uc778\uac04\uacf5\ud559\uae30\uc220\uc0ac", "licenseCode": "875", "licenseSeries": "1" }, { "licenseName": "\uc0b0\uc5c5\uc548\uc804\uae30\uc0ac", "licenseCode": "1431", "licenseSeries": "3" }, { "licenseName": "\uac74\uc124\uc548\uc804\uae30\uc0ac", "licenseCode": "1440", "licenseSeries": "3" }, { "licenseName": "\ud654\uc7ac\uac10\uc2dd\ud3c9\uac00\uae30\uc0ac", "licenseCode": "1441", "licenseSeries": "3" }, { "licenseName": "\ub18d\uc791\uc5c5\uc548\uc804\ubcf4\uac74\uae30\uc0ac", "licenseCode": "1442", "licenseSeries": "3" }, { "licenseName": "\ubc29\uc7ac\uae30\uc0ac", "licenseCode": "1443", "licenseSeries": "3" }, { "licenseName": "\uac00\uc2a4\uae30\uc0ac", "licenseCode": "1471", "licenseSeries": "3" }, { "licenseName": "\uc0b0\uc5c5\uc704\uc0dd\uad00\ub9ac\uae30\uc0ac", "licenseCode": "1472", "licenseSeries": "3" }, { "licenseName": "\uc778\uac04\uacf5\ud559\uae30\uc0ac", "licenseCode": "1875", "licenseSeries": "3" }, { "licenseName": "\uc18c\ubc29\uc124\ube44\uae30\uc0ac(\uae30\uacc4\ubd84\uc57c)", "licenseCode": "1900", "licenseSeries": "3" }, { "licenseName": "\uc18c\ubc29\uc124\ube44\uae30\uc0ac(\uc804\uae30\ubd84\uc57c)", "licenseCode": "1910", "licenseSeries": "3" }, { "licenseName": "\uc0b0\uc5c5\uc548\uc804\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2381", "licenseSeries": "3" }, { "licenseName": "\uac74\uc124\uc548\uc804\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2390", "licenseSeries": "3" }, { "licenseName": "\ud654\uc7ac\uac10\uc2dd\ud3c9\uac00\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2441", "licenseSeries": "3" }, { "licenseName": "\uac00\uc2a4\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2471", "licenseSeries": "3" }, { "licenseName": "\uc0b0\uc5c5\uc704\uc0dd\uad00\ub9ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2472", "licenseSeries": "3" }, { "licenseName": "\uc18c\ubc29\uc124\ube44\uc0b0\uc5c5\uae30\uc0ac(\uae30\uacc4\ubd84\uc57c)", "licenseCode": "2900", "licenseSeries": "3" }, { "licenseName": "\uc18c\ubc29\uc124\ube44\uc0b0\uc5c5\uae30\uc0ac(\uc804\uae30\ubd84\uc57c)", "licenseCode": "2910", "licenseSeries": "3" }, { "licenseName": "\uac00\uc2a4\uae30\ub2a5\uc7a5", "licenseCode": "3375", "licenseSeries": "2" }, { "licenseName": "\uac00\uc2a4\uae30\ub2a5\uc0ac", "licenseCode": "6335", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\ube44\ud30c\uad34\uac80\uc0ac", "ncsCategoryCode2": "252", "licenses": [{ "licenseName": "\ube44\ud30c\uad34\uac80\uc0ac\uae30\uc220\uc0ac", "licenseCode": "802", "licenseSeries": "1" }, { "licenseName": "\ubc29\uc0ac\uc120\ube44\ud30c\uad34\uac80\uc0ac\uae30\uc0ac", "licenseCode": "1611", "licenseSeries": "3" }, { "licenseName": "\ucd08\uc74c\ud30c\ube44\ud30c\uad34\uac80\uc0ac\uae30\uc0ac", "licenseCode": "1612", "licenseSeries": "3" }, { "licenseName": "\uc790\uae30\ube44\ud30c\uad34\uac80\uc0ac\uae30\uc0ac", "licenseCode": "1613", "licenseSeries": "3" }, { "licenseName": "\uce68\ud22c\ube44\ud30c\uad34\uac80\uc0ac\uae30\uc0ac", "licenseCode": "1614", "licenseSeries": "3" }, { "licenseName": "\uc640\uc804\ub958\ube44\ud30c\uad34\uac80\uc0ac\uae30\uc0ac", "licenseCode": "1615", "licenseSeries": "3" }, { "licenseName": "\ub204\uc124\ube44\ud30c\uad34\uac80\uc0ac\uae30\uc0ac", "licenseCode": "1617", "licenseSeries": "3" }, { "licenseName": "\ubc29\uc0ac\uc120\ube44\ud30c\uad34\uac80\uc0ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2611", "licenseSeries": "3" }, { "licenseName": "\ucd08\uc74c\ud30c\ube44\ud30c\uad34\uac80\uc0ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2612", "licenseSeries": "3" }, { "licenseName": "\uc790\uae30\ube44\ud30c\uad34\uac80\uc0ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2613", "licenseSeries": "3" }, { "licenseName": "\uce68\ud22c\ube44\ud30c\uad34\uac80\uc0ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2614", "licenseSeries": "3" }, { "licenseName": "\ubc29\uc0ac\uc120\ube44\ud30c\uad34\uac80\uc0ac\uae30\ub2a5\uc0ac", "licenseCode": "7471", "licenseSeries": "4" }, { "licenseName": "\ucd08\uc74c\ud30c\ube44\ud30c\uad34\uac80\uc0ac\uae30\ub2a5\uc0ac", "licenseCode": "7472", "licenseSeries": "4" }, { "licenseName": "\uc790\uae30\ube44\ud30c\uad34\uac80\uc0ac\uae30\ub2a5\uc0ac", "licenseCode": "7473", "licenseSeries": "4" }, { "licenseName": "\uce68\ud22c\ube44\ud30c\uad34\uac80\uc0ac\uae30\ub2a5\uc0ac", "licenseCode": "7474", "licenseSeries": "4" }] }], "ncsCategoryCode1": "25", "ncsCategoryName1": "\uc548\uc804\uad00\ub9ac" }, { "ncsCategory2": [{ "ncsCategoryName2": "\uc0dd\uc0b0\uad00\ub9ac", "ncsCategoryCode2": "24", "licenses": [{ "licenseName": "\uacf5\uc7a5\uad00\ub9ac\uae30\uc220\uc0ac", "licenseCode": "760", "licenseSeries": "1" }, { "licenseName": "\ud488\uc9c8\uad00\ub9ac\uae30\uc220\uc0ac", "licenseCode": "770", "licenseSeries": "1" }, { "licenseName": "\ud3ec\uc7a5\uae30\uc220\uc0ac", "licenseCode": "780", "licenseSeries": "1" }, { "licenseName": "\ud488\uc9c8\uacbd\uc601\uae30\uc0ac", "licenseCode": "1500", "licenseSeries": "3" }, { "licenseName": "\ud3ec\uc7a5\uae30\uc0ac", "licenseCode": "1511", "licenseSeries": "3" }, { "licenseName": "\ud488\uc9c8\uacbd\uc601\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2420", "licenseSeries": "3" }, { "licenseName": "\ud3ec\uc7a5\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2431", "licenseSeries": "3" }] }, { "ncsCategoryName2": "\uacbd\uc601", "ncsCategoryCode2": "21", "licenses": [{ "licenseName": "\uc0ac\ud68c\uc870\uc0ac\ubd84\uc11d\uc0ac1\uae09", "licenseCode": "9520", "licenseSeries": "3" }, { "licenseName": "\uc0ac\ud68c\uc870\uc0ac\ubd84\uc11d\uc0ac2\uae09", "licenseCode": "9521", "licenseSeries": "3" }, { "licenseName": "\ucee8\ubca4\uc158\uae30\ud68d\uc0ac1\uae09", "licenseCode": "9535", "licenseSeries": "3" }, { "licenseName": "\ucee8\ubca4\uc158\uae30\ud68d\uc0ac2\uae09", "licenseCode": "9536", "licenseSeries": "3" }, { "licenseName": "\uc18c\ube44\uc790\uc804\ubb38\uc0c1\ub2f4\uc0ac1\uae09", "licenseCode": "9537", "licenseSeries": "3" }, { "licenseName": "\uc18c\ube44\uc790\uc804\ubb38\uc0c1\ub2f4\uc0ac2\uae09", "licenseCode": "9538", "licenseSeries": "3" }] }], "ncsCategoryCode1": "2", "ncsCategoryName1": "\uacbd\uc601.\ud68c\uacc4.\uc0ac\ubb34" }, { "ncsCategory2": [{ "ncsCategoryName2": "\uc2dd\ud488", "ncsCategoryCode2": "221", "licenses": [{ "licenseName": "\uc2dd\ud488\uae30\uc220\uc0ac", "licenseCode": "800", "licenseSeries": "1" }, { "licenseName": "\uc218\uc0b0\uc81c\uc870\uae30\uc220\uc0ac", "licenseCode": "810", "licenseSeries": "1" }, { "licenseName": "\uc2dd\ud488\uae30\uc0ac", "licenseCode": "1530", "licenseSeries": "3" }, { "licenseName": "\uc218\uc0b0\uc81c\uc870\uae30\uc0ac", "licenseCode": "1540", "licenseSeries": "3" }, { "licenseName": "\uc2dd\uc721\uac00\uacf5\uae30\uc0ac", "licenseCode": "1541", "licenseSeries": "3" }, { "licenseName": "\uc2dd\ud488\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2450", "licenseSeries": "3" }, { "licenseName": "\uc2dd\ud488\uac00\uacf5\uae30\ub2a5\uc0ac", "licenseCode": "7591", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\uc81c\uacfc.\uc81c\ube75", "ncsCategoryCode2": "222", "licenses": [{ "licenseName": "\uc81c\uacfc\uae30\ub2a5\uc7a5", "licenseCode": "3923", "licenseSeries": "2" }, { "licenseName": "\uc81c\uacfc\uae30\ub2a5\uc0ac", "licenseCode": "7892", "licenseSeries": "4" }, { "licenseName": "\uc81c\ube75\uae30\ub2a5\uc0ac", "licenseCode": "7893", "licenseSeries": "4" }, { "licenseName": "\ub5a1\uc81c\uc870\uae30\ub2a5\uc0ac", "licenseCode": "7992", "licenseSeries": "4" }] }], "ncsCategoryCode1": "22", "ncsCategoryName1": "\uc2dd\ud488.\uac00\uacf5" }, { "ncsCategory2": [{ "ncsCategoryName2": "\uc5d0\ub108\uc9c0.\uae30\uc0c1", "ncsCategoryCode2": "262", "licenses": [{ "licenseName": "\uae30\uc0c1\uc608\ubcf4\uae30\uc220\uc0ac", "licenseCode": "891", "licenseSeries": "1" }, { "licenseName": "\uc2e0\uc7ac\uc0dd\uc5d0\ub108\uc9c0\ubc1c\uc804\uc124\ube44\uae30\uc0ac(\ud0dc\uc591\uad11)", "licenseCode": "1114", "licenseSeries": "3" }, { "licenseName": "\uc5d0\ub108\uc9c0\uad00\ub9ac\uae30\uc0ac", "licenseCode": "1340", "licenseSeries": "3" }, { "licenseName": "\uae30\uc0c1\uae30\uc0ac", "licenseCode": "1600", "licenseSeries": "3" }, { "licenseName": "\uae30\uc0c1\uac10\uc815\uae30\uc0ac", "licenseCode": "1601", "licenseSeries": "3" }, { "licenseName": "\uc2e0\uc7ac\uc0dd\uc5d0\ub108\uc9c0\ubc1c\uc804\uc124\ube44\uc0b0\uc5c5\uae30\uc0ac(\ud0dc\uc591\uad11)", "licenseCode": "2114", "licenseSeries": "3" }, { "licenseName": "\uc5d0\ub108\uc9c0\uad00\ub9ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2960", "licenseSeries": "3" }, { "licenseName": "\uc5d0\ub108\uc9c0\uad00\ub9ac\uae30\ub2a5\uc7a5", "licenseCode": "3170", "licenseSeries": "2" }, { "licenseName": "\uc2e0\uc7ac\uc0dd\uc5d0\ub108\uc9c0\ubc1c\uc804\uc124\ube44\uae30\ub2a5\uc0ac(\ud0dc\uc591\uad11)", "licenseCode": "7114", "licenseSeries": "4" }, { "licenseName": "\uc5d0\ub108\uc9c0\uad00\ub9ac\uae30\ub2a5\uc0ac", "licenseCode": "7761", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\ud658\uacbd", "ncsCategoryCode2": "261", "licenses": [{ "licenseName": "\ub300\uae30\uad00\ub9ac\uae30\uc220\uc0ac", "licenseCode": "920", "licenseSeries": "1" }, { "licenseName": "\uc218\uc9c8\uad00\ub9ac\uae30\uc220\uc0ac", "licenseCode": "930", "licenseSeries": "1" }, { "licenseName": "\uc790\uc5f0\ud658\uacbd\uad00\ub9ac\uae30\uc220\uc0ac", "licenseCode": "938", "licenseSeries": "1" }, { "licenseName": "\uc18c\uc74c\uc9c4\ub3d9\uae30\uc220\uc0ac", "licenseCode": "940", "licenseSeries": "1" }, { "licenseName": "\ud1a0\uc591\ud658\uacbd\uae30\uc220\uc0ac", "licenseCode": "948", "licenseSeries": "1" }, { "licenseName": "\ud3d0\uae30\ubb3c\ucc98\ub9ac\uae30\uc220\uc0ac", "licenseCode": "970", "licenseSeries": "1" }, { "licenseName": "\uc628\uc2e4\uac00\uc2a4\uad00\ub9ac\uae30\uc0ac", "licenseCode": "1028", "licenseSeries": "3" }, { "licenseName": "\ud658\uacbd\uc704\ud574\uad00\ub9ac\uae30\uc0ac", "licenseCode": "1029", "licenseSeries": "3" }, { "licenseName": "\ub300\uae30\ud658\uacbd\uae30\uc0ac", "licenseCode": "1661", "licenseSeries": "3" }, { "licenseName": "\uc218\uc9c8\ud658\uacbd\uae30\uc0ac", "licenseCode": "1662", "licenseSeries": "3" }, { "licenseName": "\uc18c\uc74c\uc9c4\ub3d9\uae30\uc0ac", "licenseCode": "1663", "licenseSeries": "3" }, { "licenseName": "\uc790\uc5f0\uc0dd\ud0dc\ubcf5\uc6d0\uae30\uc0ac", "licenseCode": "1938", "licenseSeries": "3" }, { "licenseName": "\ud1a0\uc591\ud658\uacbd\uae30\uc0ac", "licenseCode": "1948", "licenseSeries": "3" }, { "licenseName": "\ud3d0\uae30\ubb3c\ucc98\ub9ac\uae30\uc0ac", "licenseCode": "1950", "licenseSeries": "3" }, { "licenseName": "\uc0dd\ubb3c\ubd84\ub958\uae30\uc0ac(\uc2dd\ubb3c)", "licenseCode": "1988", "licenseSeries": "3" }, { "licenseName": "\uc0dd\ubb3c\ubd84\ub958\uae30\uc0ac(\ub3d9\ubb3c)", "licenseCode": "1989", "licenseSeries": "3" }, { "licenseName": "\uc628\uc2e4\uac00\uc2a4\uad00\ub9ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2037", "licenseSeries": "3" }, { "licenseName": "\ub300\uae30\ud658\uacbd\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2571", "licenseSeries": "3" }, { "licenseName": "\uc218\uc9c8\ud658\uacbd\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2572", "licenseSeries": "3" }, { "licenseName": "\uc18c\uc74c\uc9c4\ub3d9\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2573", "licenseSeries": "3" }, { "licenseName": "\ub18d\ub9bc\ud1a0\uc591\ud3c9\uac00\uad00\ub9ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2582", "licenseSeries": "3" }, { "licenseName": "\uc790\uc5f0\uc0dd\ud0dc\ubcf5\uc6d0\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2938", "licenseSeries": "3" }, { "licenseName": "\ud3d0\uae30\ubb3c\ucc98\ub9ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2950", "licenseSeries": "3" }, { "licenseName": "\ud658\uacbd\uae30\ub2a5\uc0ac", "licenseCode": "7918", "licenseSeries": "4" }] }], "ncsCategoryCode1": "26", "ncsCategoryName1": "\ud658\uacbd.\uc5d0\ub108\uc9c0" }, { "ncsCategory2": [{ "ncsCategoryName2": "\ub514\uc790\uc778", "ncsCategoryCode2": "82", "licenses": [{ "licenseName": "\uc81c\ud488\ub514\uc790\uc778\uae30\uc220\uc0ac", "licenseCode": "960", "licenseSeries": "1" }, { "licenseName": "\uc81c\ud488\ub514\uc790\uc778\uae30\uc0ac", "licenseCode": "1512", "licenseSeries": "3" }, { "licenseName": "\uc2dc\uac01\ub514\uc790\uc778\uae30\uc0ac", "licenseCode": "1790", "licenseSeries": "3" }, { "licenseName": "\uceec\ub7ec\ub9ac\uc2a4\ud2b8\uae30\uc0ac", "licenseCode": "1982", "licenseSeries": "3" }, { "licenseName": "\uc81c\ud488\ub514\uc790\uc778\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2432", "licenseSeries": "3" }, { "licenseName": "\uc2dc\uac01\ub514\uc790\uc778\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2434", "licenseSeries": "3" }, { "licenseName": "\uceec\ub7ec\ub9ac\uc2a4\ud2b8\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2982", "licenseSeries": "3" }, { "licenseName": "\uc81c\ud488\uc751\uc6a9\ubaa8\ub378\ub9c1\uae30\ub2a5\uc0ac", "licenseCode": "6793", "licenseSeries": "4" }, { "licenseName": "\ucef4\ud4e8\ud130\uadf8\ub798\ud53d\uc2a4\uc6b4\uc6a9\uae30\ub2a5\uc0ac", "licenseCode": "7796", "licenseSeries": "4" }, { "licenseName": "\uc6f9\ub514\uc790\uc778\uae30\ub2a5\uc0ac", "licenseCode": "7798", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\ubc29\uc1a1", "ncsCategoryCode2": "83", "licenses": [{ "licenseName": "\uc601\uc0ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2047", "licenseSeries": "3" }, { "licenseName": "\uc601\uc0ac\uae30\ub2a5\uc0ac", "licenseCode": "7920", "licenseSeries": "4" }] }], "ncsCategoryCode1": "8", "ncsCategoryName1": "\ubb38\ud654.\uc608\uc220.\ub514\uc790\uc778.\ubc29\uc1a1" }, { "ncsCategory2": [{ "ncsCategoryName2": "\uc778\uc1c4.\uc0ac\uc9c4", "ncsCategoryCode2": "231", "licenses": [{ "licenseName": "\uc778\uc1c4\uae30\uc0ac", "licenseCode": "1391", "licenseSeries": "3" }, { "licenseName": "\uc778\uc1c4\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2391", "licenseSeries": "3" }, { "licenseName": "\uc804\uc790\ucd9c\ud310\uae30\ub2a5\uc0ac", "licenseCode": "6791", "licenseSeries": "4" }, { "licenseName": "\uc778\uc1c4\uae30\ub2a5\uc0ac", "licenseCode": "7524", "licenseSeries": "4" }, { "licenseName": "\uc0ac\uc9c4\uae30\ub2a5\uc0ac", "licenseCode": "7795", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\ubaa9\uc7ac.\uac00\uad6c.\uacf5\uc608", "ncsCategoryCode2": "232", "licenses": [{ "licenseName": "\uac00\uad6c\uc81c\uc791\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2142", "licenseSeries": "3" }, { "licenseName": "\ud53c\uc544\ub178\uc870\uc728\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2551", "licenseSeries": "3" }, { "licenseName": "\uadc0\uae08\uc18d\uac00\uacf5\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2760", "licenseSeries": "3" }, { "licenseName": "\ubcf4\uc11d\ub514\uc790\uc778\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2880", "licenseSeries": "3" }, { "licenseName": "\ubcf4\uc11d\uac10\uc815\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2980", "licenseSeries": "3" }, { "licenseName": "\uadc0\uae08\uc18d\uac00\uacf5\uae30\ub2a5\uc7a5", "licenseCode": "3770", "licenseSeries": "2" }, { "licenseName": "\uc11d\uacf5\uc608\uae30\ub2a5\uc0ac", "licenseCode": "6792", "licenseSeries": "4" }, { "licenseName": "\uac00\uad6c\uc81c\uc791\uae30\ub2a5\uc0ac", "licenseCode": "7140", "licenseSeries": "4" }, { "licenseName": "\uadc0\uae08\uc18d\uac00\uacf5\uae30\ub2a5\uc0ac", "licenseCode": "7460", "licenseSeries": "4" }, { "licenseName": "\ubaa9\uacf5\uc608\uae30\ub2a5\uc0ac", "licenseCode": "7480", "licenseSeries": "4" }, { "licenseName": "\ubcf4\uc11d\uac00\uacf5\uae30\ub2a5\uc0ac", "licenseCode": "7889", "licenseSeries": "4" }, { "licenseName": "\ub3c4\uc790\uacf5\uc608\uae30\ub2a5\uc0ac", "licenseCode": "7890", "licenseSeries": "4" }, { "licenseName": "\ud53c\uc544\ub178\uc870\uc728\uae30\ub2a5\uc0ac", "licenseCode": "7917", "licenseSeries": "4" }, { "licenseName": "\ubcf4\uc11d\uac10\uc815\uc0ac", "licenseCode": "7980", "licenseSeries": "4" }] }], "ncsCategoryCode1": "23", "ncsCategoryName1": "\uc778\uc1c4.\ubaa9\uc7ac.\uac00\uad6c.\uacf5\uc608" }, { "ncsCategory2": [{ "ncsCategoryName2": "\uc6b4\uc804.\uc6b4\uc1a1", "ncsCategoryCode2": "91", "licenses": [{ "licenseName": "\ucca0\ub3c4\uc6b4\uc1a1\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2045", "licenseSeries": "3" }, { "licenseName": "\ub18d\uae30\uacc4\uc6b4\uc804\uae30\ub2a5\uc0ac", "licenseCode": "6301", "licenseSeries": "4" }] }], "ncsCategoryCode1": "9", "ncsCategoryName1": "\uc6b4\uc804.\uc6b4\uc1a1" }, { "ncsCategory2": [{ "ncsCategoryName2": "\uc870\ub9ac", "ncsCategoryCode2": "131", "licenses": [{ "licenseName": "\ud55c\uc2dd\uc870\ub9ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2971", "licenseSeries": "3" }, { "licenseName": "\uc591\uc2dd\uc870\ub9ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2972", "licenseSeries": "3" }, { "licenseName": "\uc77c\uc2dd\uc870\ub9ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2973", "licenseSeries": "3" }, { "licenseName": "\uc911\uc2dd\uc870\ub9ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2974", "licenseSeries": "3" }, { "licenseName": "\ubcf5\uc5b4\uc870\ub9ac\uc0b0\uc5c5\uae30\uc0ac", "licenseCode": "2975", "licenseSeries": "3" }, { "licenseName": "\uc870\ub9ac\uae30\ub2a5\uc7a5", "licenseCode": "3922", "licenseSeries": "2" }, { "licenseName": "\ud55c\uc2dd\uc870\ub9ac\uae30\ub2a5\uc0ac", "licenseCode": "7910", "licenseSeries": "4" }, { "licenseName": "\uc591\uc2dd\uc870\ub9ac\uae30\ub2a5\uc0ac", "licenseCode": "7911", "licenseSeries": "4" }, { "licenseName": "\uc77c\uc2dd\uc870\ub9ac\uae30\ub2a5\uc0ac", "licenseCode": "7912", "licenseSeries": "4" }, { "licenseName": "\uc911\uc2dd\uc870\ub9ac\uae30\ub2a5\uc0ac", "licenseCode": "7913", "licenseSeries": "4" }, { "licenseName": "\ubcf5\uc5b4\uc870\ub9ac\uae30\ub2a5\uc0ac", "licenseCode": "7914", "licenseSeries": "4" }, { "licenseName": "\uc870\uc8fc\uae30\ub2a5\uc0ac", "licenseCode": "7916", "licenseSeries": "4" }] }], "ncsCategoryCode1": "13", "ncsCategoryName1": "\uc74c\uc2dd\uc11c\ube44\uc2a4" }, { "ncsCategory2": [{ "ncsCategoryName2": "\uc774\uc6a9.\ubbf8\uc6a9", "ncsCategoryCode2": "121", "licenses": [{ "licenseName": "\ubbf8\uc6a9\uc7a5", "licenseCode": "3924", "licenseSeries": "2" }, { "licenseName": "\uc774\uc6a9\uc7a5", "licenseCode": "3925", "licenseSeries": "2" }, { "licenseName": "\uc774\uc6a9\uc0ac", "licenseCode": "7908", "licenseSeries": "4" }, { "licenseName": "\ubbf8\uc6a9\uc0ac(\uc77c\ubc18)", "licenseCode": "7937", "licenseSeries": "4" }, { "licenseName": "\ubbf8\uc6a9\uc0ac(\ud53c\ubd80)", "licenseCode": "7947", "licenseSeries": "4" }, { "licenseName": "\ubbf8\uc6a9\uc0ac(\ub124\uc77c)", "licenseCode": "7957", "licenseSeries": "4" }, { "licenseName": "\ubbf8\uc6a9\uc0ac(\uba54\uc774\ud06c\uc5c5)", "licenseCode": "7967", "licenseSeries": "4" }] }, { "ncsCategoryName2": "\uc219\ubc15.\uc5ec\ud589.\uc624\ub77d.\uc2a4\ud3ec\uce20", "ncsCategoryCode2": "122", "licenses": [{ "licenseName": "\uc2a4\ud3ec\uce20\uacbd\uc601\uad00\ub9ac\uc0ac", "licenseCode": "9546", "licenseSeries": "3" }] }], "ncsCategoryCode1": "12", "ncsCategoryName1": "\uc774\uc6a9.\uc219\ubc15.\uc5ec\ud589.\uc624\ub77d.\uc2a4\ud3ec\uce20" }, { "ncsCategory2": [{ "ncsCategoryName2": "\ubcf4\uac74.\uc758\ub8cc", "ncsCategoryCode2": "61", "licenses": [{ "licenseName": "\uad6d\uc81c\uc758\ub8cc\uad00\uad11\ucf54\ub514\ub124\uc774\ud130", "licenseCode": "9105", "licenseSeries": "3" }, { "licenseName": "\uc784\uc0c1\uc2ec\ub9ac\uc0ac1\uae09", "licenseCode": "9539", "licenseSeries": "3" }, { "licenseName": "\uc784\uc0c1\uc2ec\ub9ac\uc0ac2\uae09", "licenseCode": "9540", "licenseSeries": "3" }] }], "ncsCategoryCode1": "6", "ncsCategoryName1": "\ubcf4\uac74.\uc758\ub8cc" }, { "ncsCategory2": [{ "ncsCategoryName2": "\uc0ac\ud68c\ubcf5\uc9c0.\uc885\uad50", "ncsCategoryCode2": "71", "licenses": [{ "licenseName": "\uc9c1\uc5c5\uc0c1\ub2f4\uc0ac1\uae09", "licenseCode": "9510", "licenseSeries": "3" }, { "licenseName": "\uc9c1\uc5c5\uc0c1\ub2f4\uc0ac2\uae09", "licenseCode": "9511", "licenseSeries": "3" }] }], "ncsCategoryCode1": "7", "ncsCategoryName1": "\uc0ac\ud68c\ubcf5\uc9c0.\uc885\uad50" }, { "ncsCategory2": [{ "ncsCategoryName2": "\uc601\uc5c5.\ud310\ub9e4", "ncsCategoryCode2": "101", "licenses": [{ "licenseName": "\ud154\ub808\ub9c8\ucf00\ud305\uad00\ub9ac\uc0ac", "licenseCode": "9541", "licenseSeries": "3" }] }], "ncsCategoryCode1": "10", "ncsCategoryName1": "\uc601\uc5c5.\ud310\ub9e4" }
      ]
    },
    member: {
      isLogin: false,
      isLoginError: false,
      loginUID: null
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
      axios.post('http://localhost:8080/login', loginData)
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
    },
    signup({ commit }, signupData) {
      axios.post('http://localhost:8080/join', signupData)
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
      axios.post('http://localhost:8080/logout')
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
