<template>
<div>
    <!-- 대분류 페이지. 대분류가 선택되면 중분류가 보이게 할 것 -->
    <v-container v-show="isField1" class="license-block">
        <h5 class="text-center mb-5">국가직무능력표준(NCS)에 기반한 검색이 가능합니다</h5>
        
        <!-- 대분류 row -->
        <v-row class="license-content">
            <v-col 
                v-for="ncs_field in ncs_fields" 
                :key="ncs_field.number" 
                cols="12" sm="3"
                tile
                outlined
                class="pa-3"
                @click="selectField1(ncs_field.title, ncs_field.second_fields)"
            >
                {{ ncs_field.number }}. {{ ncs_field.title }}
            </v-col>
        </v-row>
    </v-container>
    
    <!-- 중분류 페이지. 대분류 선택해야 보입니다. -->
    <v-container v-show="isField2" class="license-block-ncsfield2">
        <div class="d-flex justify-content-between align-center mb-5">
            <v-btn @click="changeField">뒤로가기</v-btn>
            <h5 class="m-0">선택하신 대분류 {{ this.ncs_field_title }} 에 따른 결과입니다</h5>
            <span content=""></span>
        </div>
        
        <!-- 중분류 row -->
        <v-row class="license-content-ncsfield2">
            <v-col 
                v-for="second_field in second_fields" 
                :key="second_field.number" 
                cols="12" sm="3"
                tile
                outlined
                class="pa-3"
                @click="selectField2(second_field.title)"
            >
                {{ second_field.number }}. {{ second_field.title }}
            </v-col>
        </v-row>   
    </v-container>
</div>
</template>

<script>
export default {
    name: 'LicenseField',
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

<style scoped>
    .license-content > div {
        border: solid 1px #1D4E89;
    }
    .license-content-ncsfield2 > div {
        border: solid 1px #1D4E89 ;
    }
</style>
