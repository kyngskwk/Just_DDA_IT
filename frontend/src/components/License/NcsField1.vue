<template>
<div class="license-block container">
      <div class="license-content row">
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '사업관리')">
            01. 사업관리
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '경영 회계 사무')">
            02. 경영 회계 사무
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '금융 보험')">
            03. 금융 보험
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '교육 자연 사회과학')">
            04. 교육 자연 사회과학
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '법률 경찰 소방 교도 국방')">
            05. 법률 경찰 소방 교도 국방
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '보건 의료')">
            06. 보건 의료
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '사회 복지 종교')">
            07. 사회 복지 종교
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '문화 예술 디자인 방송')">
            08. 문화 예술 디자인 방송
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '운전 운송')">
            09. 운전 운송
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '영업판매')">
            10. 영업판매
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '경비 청소')">
            11. 경비 청소
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '이용 숙박 여행 오락 스포츠')">
            12. 이용 숙박 여행 오락 스포츠
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '음식서비스')">
            13. 음식서비스
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '건설')">
            14. 건설
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '기계')">
            15. 기계
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '재료')">
            16. 재료
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '화학')">
            17. 화학
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '섬유 의복')">
            18. 섬유 의복
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '전기 전자')">
            19. 전기 전자
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '정보통신')">
            20. 정보통신
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '식품가공')">
            21. 식품가공
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '인쇄 목재 가구 공예')">
            22. 인쇄 목재 가구 공예
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '환경 에너지 안전')">
            23. 환경 에너지 안전
          </span>
        </router-link>
        <router-link to="license/ncsfield2" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '농림어업')">
            24. 농림어업
          </span>
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
    }
}
</script>

<style>
    .license-ncsfield1-content > a {
    border: solid 1px black ;
  }
</style>