<template>
  <div>
    <v-btn class="mx-2 mt-2 fixed-top backbtn" fab dark small color="primary" @click="goBack">
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>
    <div class="text-center">
      <h1 class="mb-4">검색 결과</h1>
      <span v-if="!isFieldSelected">검색하신 단어: {{ keyword }}</span>
      <h3 v-if="isFieldSelected">선택하신 분야: {{ field1 }}, {{ field2 }}</h3>
      <hr />
      <h5>검색된 자격증으로는</h5>

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
  mounted: function() {
    console.log("getLicenseList method launched");
    let this_array = []
    axios.get("http://localhost:8080/license/getByKeyword", {
        params: {
          keyword: this.$store.state.license.keyword,
        }
      })
      .then((res) => {
        console.log(res.data)
        this_array = res.data.object;
      })
      .catch((err) => console.log(err.message))
    this.licenseArray = this_array
  },
  computed: {
    // 중분류가 빈스트링이 아니라면 종류선택, 빈스트링이면 검색임
    isFieldSelected: function () {
      return !!this.field2;
    },
    // 대분류 타고 들어왔을 때 해당 분류에 있는 자격증들을 리턴하는 메서드
    license_based_on_fields: function () {
      var ncs_fields_list = this.$store.state.license.ncs_fields_license;
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
[v-clock] {
  display: none;
}
</style>
