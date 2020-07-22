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
            ncs_fields: this.$store.state.ncs_fields
        }
    }
}
</script>

<style>
    .license-ncsfield2-content > a {
    border: solid 1px black ;
  }
</style>