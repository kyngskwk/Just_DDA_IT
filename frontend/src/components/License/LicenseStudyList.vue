<template>
  <div class="ncs-study-rooms">
    <div class="blue-grey lighten-4 text-center m-4">
      <h3>인기 스터디방</h3>
    </div>
    <LicenseStudyListItem
      v-for="licenseStudyItem in licenseStudyList"
      :key="licenseStudyItem.id"
      :licenseStudyItem="licenseStudyItem"
    />

    <div class="end-block text-center blue-grey--text lighten-2">페이지의 끝. 추후 인피티니 스크롤 추가예정</div>
  </div>
</template>

<script>
import axios from "axios";
import LicenseStudyListItem from "./LicenseStudyListItem.vue";
export default {
  name: "LicenseStudyList",
  components: {
    LicenseStudyListItem,
  },
  created: function () {
    axios
      .get("http://${this.$store.state.address}/userstudyrooms.json")
      .then((res) => {
        this.licenseStudyList = res.data.data;
      })
      .catch((err) => console.log(err));
  },
  data: function () {
    return {
      licenseStudyList: {
        type: Object,
      },
    };
  },
};
</script>

<style scoped>
.ncs-study-rooms {
  margin: 30px 0;
}
.end-block {
  height: 120px;
}
</style>
