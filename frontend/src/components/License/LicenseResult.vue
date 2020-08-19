<template>
  <div>
    <v-btn class="mx-2 mt-2 fixed-top backbtn" fab dark small color="primary" @click="goBack">
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>
    <div class="text-center">
      <h1 class="result-h1 mb-4">검색 결과</h1>
      <h3 class="result-text" v-if="!isFieldSelected">검색하신 단어: {{ keyword }}</h3>
      <h3 class="result-text" v-if="isFieldSelected">선택하신 분야: {{ field1 }}, {{ field2 }}</h3>
      <hr />

      <LicenseResultList v-if="!isFieldSelected" :licenseArray="licenseArray" />
      <LicenseResultList v-if="isFieldSelected" :licenseArray="license_based_on_fields" />
    </div>
  </div>
</template>

<script>
import axios from "axios"
import LicenseResultList from "./LicenseResultList.vue"
export default {
  name: "LicenseResult",
  components: {
    LicenseResultList,
  },
  created: function() {
    if (this.keyword !== '') {
      // console.log("LicenseResult created getByKeyword");
      axios.get(`http://${this.$store.state.address}:8080/license/getByKeyword`, {
          params: {
            keyword: this.$store.state.license.keyword,
          }
        })
        .then((res) => {
          // console.log(res.data)
          this.licenseArray = res.data.object;
        })
        .catch((err) => console.log('LicenseResult Error ', err.message))
    }
  },
  computed: {
    // 중분류가 빈스트링이 아니라면 종류선택, 빈스트링이면 검색임
    isFieldSelected: function () {
      return !!this.field2;
    },
    // 대분류 타고 들어왔을 때 해당 분류에 있는 자격증들을 리턴하는 메서드
    license_based_on_fields: function () {
      var ncs_fields_list = this.$store.state.license.ncs_fields;
      for (var i = 0; i < ncs_fields_list.length; i++) {
        if (ncs_fields_list[i]["ncsCategoryName1"] === this.field1) {
          var ncs_second_fields = ncs_fields_list[i].ncsCategory2;
          for (var j = 0; j < ncs_second_fields.length; j++) {
            if (ncs_second_fields[j]["ncsCategoryName2"] === this.field2) {
              // console.log('result: ', ncs_second_fields[j]['licenses'])
              return ncs_second_fields[j]["licenses"];
            }
          }
        }
      }
      return [];
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  data() {
    return {
      licenseArray: {
        type: Array
      },
      keyword: this.$store.state.license.keyword,
      field1: this.$store.state.license.field1,
      field2: this.$store.state.license.field2,
    };
  },
};
</script>


<style scoped>
.result-h1 {
  color: #fd462e ;
  font-family: 'Black Han Sans', sans-serif;
}

.result-text {
  color: #fd462e ;
  font-family: 'Black Han Sans', sans-serif;
}
</style>
