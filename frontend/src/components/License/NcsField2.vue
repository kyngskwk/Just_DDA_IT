<template>
<div>
  
  <h2>선택하신 대분류 XXX 에 따른 결과입니다</h2>
  <div class="license-ncsfield2-block container">
    <div class="license-ncsfield2-content row">
        <router-link to="result" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '사업관리')">
            01. 사업관리
          </span>
        </router-link>
        <router-link to="result" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '경영 회계 사무')">
            02. 경영 회계 사무
          </span>
        </router-link>
        <router-link to="result" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '금융 보험')">
            03. 금융 보험
          </span>
        </router-link>
        <router-link to="result" class="col-3 btn btn-white">
          <span class="btn_go2" @click="fn_clickNcsField('01', '교육 자연 사회과학')">
            04. 교육 자연 사회과학
          </span>
        </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'NcsField2',
    props: {
       
    },
    methods: {
        fn_clickNcsField: function() {
     }
    }
}
</script>

<style>
    .license-ncsfield2-content > a {
    border: solid 1px black ;
  }
</style>