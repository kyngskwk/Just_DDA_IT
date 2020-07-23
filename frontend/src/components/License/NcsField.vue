<template>
<div>
    <!-- 대분류 페이지. 대분류가 선택되면 중분류가 보이게 할 것 -->
    <div v-show="isField1" class="license-block container">
        <h3 class="header-h3">국가직무능력표준(NCS)에 기반한 검색이 가능합니다</h3>
        
        <!-- 대분류 row -->
        <div class="license-content row">
            <a
            class="col-3 btn btn-white"
            v-for="ncs_field in ncs_fields"
            :key="ncs_field.number"
            @click="selectField1(ncs_field.title, ncs_field.second_fields)"
            >
                {{ ncs_field.number }}. {{ ncs_field.title }}
            </a>
        </div>
    </div>
    
    <!-- 중분류 페이지. 대분류 선택해야 보입니다. -->
    <div v-show="isField2" class="license-block-ncsfield2 container">
        <div class="d-flex justify-content-between">
            <span class="btn btn-dark" @click="changeField">뒤로가기</span>
            <h3>선택하신 대분류 {{ this.ncs_field_title }} 에 따른 결과입니다</h3>
            <span content=""></span>
        </div>
        
        <!-- 중분류 row -->
        <div class="license-content-ncsfield2 row">
            <a 
            to="license/result" 
            class="col-3 btn btn-white"
            v-for="second_field in second_fields"
            :key="second_field.number"
            @click="selectField2(second_field.title)"
            >
                {{ second_field.number }}. {{ second_field.title }}
            </a>
        </div>   
    </div>
</div>
</template>

<script>
export default {
    name: 'NcsField',
    methods: {
        selectField1: function(ncs_field_title1, ncs_field_second_fields) {
            this.isField1 = !this.isField1
            this.isField2 = !this.isField2
            this.ncs_field_title = ncs_field_title1
            this.second_fields = ncs_field_second_fields
            this.$store.state.license.field1 = ncs_field_title1
        },
        selectField2: function(ncs_field_title2) {
            this.$store.state.license.field2 = ncs_field_title2
            this.$store.state.license.keyword = ''
            this.$router.push('/license/result')
        },
        changeField: function() {
            this.isField1 = !this.isField1
            this.isField2 = !this.isField2
        }
    },
    data() {
        return {
            ncs_field_title: '',
            isField1: true,
            isField2: false,
            ncs_fields: this.$store.state.license.ncs_fields,
            second_fields: {}
        }
    }
}
</script>

<style>
    .license-content > a {
        border: solid 1px black ;
    }
    .license-content-ncsfield2 > a {
        border: solid 1px black ;
    }
</style>
