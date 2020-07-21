<template>
  <div class="license-block container">
    <div 
    class="license-content row"
    v-for="ncs_field in ncs_fields"
    v-bind:key="ncs_field.number"
    >
    <router-link to="license/ncsfield2" class="col-3 btn btn-white">
        {{ ncs_field.number }}. {{ ncs_field.title }}
    </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NcsField1',
    props: {
   },
    methods: {
        fn_clickNcsField: function() {
        }
    },
    data() {
        return {
            ncs_fields: [
           {number: '01', title: '사업관리' },
           {number: '02', title: '경영 회계 사무' },
           {number: '03', title: '금융 보험' },
           {number: '04', title: '교육 자연 사회과학' },
           {number: '05', title: '법률 경찰 소방 교도 국방' },
           {number: '06', title: '보건 의료' },
           {number: '07', title: '사회 복지 종교' },
           {number: '08', title: '문화 예술 디자인 방송' },
           {number: '09', title: '운전 운송' },
           {number: '10', title: '영업판매' },
           {number: '11', title: '경비 청소' },
           {number: '12', title: '이용 숙박 여행 오락 스포츠' },
           {number: '13', title: '음식서비스' },
           {number: '14', title: '건설' },
           {number: '15', title: '기계' },
           {number: '16', title: '재료' },
           {number: '17', title: '화학' },
           {number: '18', title: '섬유 의복' },
           {number: '19', title: '전기 전자' },
           {number: '20', title: '정보통신' },
           {number: '21', title: '식품가공' },
           {number: '22', title: '인쇄 목재 가구 공예' },
           {number: '23', title: '환경 에너지 안전' },
           {number: '24', title: '농림어업' }
       ]
        }
    }
}
</script>

<style>
    .license-ncsfield1-content > a {
    border: solid 1px black ;
  }
</style>