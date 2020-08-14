<template>

  <div class="card-body feed-group">
    <div class="card-group row px-3">
      <LicenseStudyListItem 
      v-for="licenseStudyItem in licenseStudyList" 
      :key="licenseStudyItem.id" :feed="feed" 
      :licenseStudyItem="licenseStudyItem"/>
    </div>
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
    axios.get(`http://${this.$store.state.address}/userstudyrooms.json`)
      .then((res) => {
        console.log(res.data.data)
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
