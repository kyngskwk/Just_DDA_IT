<template>
  <div class="license">
    <h1>자격증 찾기</h1>
    <div class="license-search-bar">
      <label for="license-title">자격증 검색</label>
      <input type="text" id="license-title">
      <button>검색</button>
    </div>
    <h2 class="header-h2">국가직무능력표준(NCS)에 기반한 검색이 가능합니다</h2>

    <div class="license-ncs-contents container">
      <div class="license-ncs-field1 row">
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            01. 사업관리
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            02. 경영 회계 사무
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            03. 금융 보험
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            04. 교육 자연 사회과학
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            05. 법률 경찰 소방 교도 국방
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            06. 보건 의료
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            07. 사회 복지 종교
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            08. 문화 예술 디자인 방송
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            09. 운전 운송
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            10. 영업판매
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            11. 경비 청소
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            12. 이용 숙박 여행 오락 스포츠
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            13. 음식서비스
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            14. 건설
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            15. 기계
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            16. 재료
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            17. 화학
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            18. 섬유 의복
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            19. 전기 전자
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            20. 정보통신
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            21. 식품가공
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            22. 인쇄 목재 가구 공예
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            23. 환경 에너지 안전
          </span>
        </a>
        <a class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNscField">
            24. 농림어업
          </span>
        </a>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'License',
  components: {
  }
}
</script>

<style>
  .header-h2 {
    margin: 20px 0;
  }
  .license-ncs-field1 > a {
    border: solid 1px black ;
  }
</style>
