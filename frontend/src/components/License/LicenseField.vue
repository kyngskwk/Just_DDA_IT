<template>
  <div class="container license-field">
    <!-- 대분류 페이지. 대분류가 선택되면 중분류가 보이게 할 것 -->
    <h3 id="licenseFields" class="text-cont text-center my-5">국가직무능력표준(NCS) 분류</h3>
    <v-container v-show="isField1" class="license-block">
      
      <!-- 대분류 row -->
      <v-row class="license-content">
        <div class="col-3 thumb" v-for="(ncs_field, idx) in ncs_fields"
          :key="idx" @click="selectField1(ncs_field.ncsCategoryName1, ncs_field.ncsCategory2)">
          <v-card class="content ma-1 rounded-xl d-flex flex-column align-center justify-center">
            <img width=50% :src="require(`../../../public/license/img/${idx + 1}.png`)" alt="">
            <span class="text-cont text-center">{{ ncs_field.ncsCategoryName1 }}</span>
          </v-card>
        </div>
     </v-row>
    </v-container>

    <!-- 중분류 페이지. 대분류 선택해야 보입니다. -->
    <v-container v-show="isField2" class="license-block-ncsfield2">
      <div class="mb-5">
        <v-btn class="float-left" @click="changeField">BACk</v-btn>
        <h3 class="text-cont-2 text-center m-0">선택하신 대분류 : {{ this.ncs_field_title }} </h3>
      </div>
      
      <!-- 중분류 row -->
      <v-row class="license-content">
        <div class="col-3 thumb" v-for="(second_field, idx) in second_fields"
          :key="idx" @click="selectField2(second_field.ncsCategoryName2, second_field.licenses)">
          <v-card class="content ma-1 rounded-xl d-flex flex-column align-center justify-center">
            <span class="text-cont text-center">{{ second_field.ncsCategoryName2 }}</span>
          </v-card>
        </div>


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
      
      // 선택시 NCS분류 문구를 기준으로 스크롤 이동
      let ncsFieldsLocation = document.querySelector('#licenseFields').offsetTop;
      window.scrollTo({ top: ncsFieldsLocation, behavior: 'smooth'});
    },
    selectField2: function(ncs_field_title2, licenses) {
      this.$store.state.license.field2 = ncs_field_title2
      this.$store.state.license.licenses = licenses
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
      second_fields: {},
    }
  }
}

</script>

<style scoped>
.license-field {
  background-color: #d3d3d3;

}
.license-content:hover {
  cursor: pointer;
}
.thumb {
  position:relative;
  display: block;
  overflow: hidden;
  width: 100%;
}
.thumb:before {
  content: "";
  display: block;
  padding-top: 100%;
}
.content {
  position: absolute;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
}
.text-cont {
  display: inline-block;
  width: 100%;
  word-break:normal;
  font-family: 'Black Han Sans', sans-serif;
  color: #fd462e;
}
.text-cont-2 {
  width: 100%;
  word-break:normal;
  font-family: 'Black Han Sans', sans-serif;
}
</style>
