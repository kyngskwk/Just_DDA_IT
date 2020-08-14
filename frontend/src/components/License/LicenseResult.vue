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
      <LicenseResultList v-if="isFieldSelected" :licenseArray="licenseArray" />
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
    const keyword = !!this.$store.state.license.keyword
    if ( keyword ) {
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
    } else {
      this.licenseArray = this.$store.state.license.licenses
    }
  },
  computed: {
    // 중분류가 빈스트링이 아니라면 종류선택, 빈스트링이면 검색임
    isFieldSelected: function () {
      return !!this.field2;
    },
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
