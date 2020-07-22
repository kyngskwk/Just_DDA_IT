<template>
<div>
    <!-- 대분류 페이지. 대분류가 선택되면 중분류가 보이게 할 것 -->
    <div v-show="isField1" class="license-block container">
        <h3 class="header-h3">국가직무능력표준(NCS)에 기반한 검색이 가능합니다</h3>
        <div class="license-content row">
            <a
            class="col-3 btn btn-white"
            v-for="ncs_field in ncs_fields"
            :key="ncs_field.number"
            @click="changeField(ncs_field.title, ncs_field.second_fields)"
            >
                {{ ncs_field.number }}. {{ ncs_field.title }}
            </a>
        </div>
    </div>
    
    <!-- 중분류 페이지. 대분류 선택해야 보입니다. -->
    <div v-show="isField2" @click="changeField">
        <div class="license-ncsfield2-block container">
            <div class="d-flex justify-content-between">
                <span class="btn btn-dark">뒤로가기</span>
                <h3>선택하신 대분류 {{ this.ncs_field_title }} 에 따른 결과입니다</h3>
                <span content=""></span>
            </div>
            <div class="license-ncsfield2-content row">
                <router-link 
                to="license/result" 
                class="col-3 btn btn-white"
                v-for="second_field in second_fields"
                :key="second_field.number"
                >
                  {{ second_field.number }}. {{ second_field.title }}
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'NcsField1',
    props: {
   },
    methods: {
        changeField: function(ncs_field_title, ncs_field_second_fields) {
            this.isField1 = !this.isField1
            this.isField2 = !this.isField2
            this.ncs_field_title = ncs_field_title
            this.second_fields = ncs_field_second_fields
        }
    },
    data() {
        return {
            second_fields: {},
            ncs_field_title: '',
            isField1: true,
            isField2: false,
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
          ]
        }
    }
}
</script>

<style>
    .license-ncsfield2-content > a {
    border: solid 1px black ;
  }
</style>