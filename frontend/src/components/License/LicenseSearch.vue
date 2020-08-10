<template>
  <div class="input-group mw-90 container">
    <input
      v-model="keyword"
      type="text"
      class="form-control"
      placeholder="자격증 검색이 가능합니다"
      @keypress.enter="searchKeyword"
    />
    <div class="input-group-append">
      <button class="btn btn-outline-secondary lic-btn text-white" @click="searchKeyword" type="button">검색</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LicenseSearch",
  created: function () {
    this.keyword = "";
  },
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchKeyword() {
      this.$store.state.license.keyword = this.keyword;
      this.$store.state.license.field1 = "";
      this.$store.state.license.field2 = "";
      this.$router.push("/license/result");
    },
  },
};
</script>

<style scoped>
.license-search-bar > label {
  padding: 4px;
}
.lic-btn {
  background-color: #fd462e;
  border: 0px;
}
</style>
