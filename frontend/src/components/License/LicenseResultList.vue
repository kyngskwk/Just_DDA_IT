<template>
<div width="100%">
  <v-card class="license-result-list font_k d-flex justify-content-start pa-5 ma-2" v-for="license in licenseArray" :key="license.licenseCode" @click="selectLicense(license)">
      <span style="border:1px solid #fd462e; color:#fd462e; font-size:14px" class="rounded-xl py-1 px-2">{{ license.licenseSeriesName }}</span>
      <div class="ml-2 pt-1">{{ license.licenseName }}</div>
    </v-card>
</div>
  <!-- <v-simple-table class="license-result-list">
    

    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center ">자격증명</th>
          <th class="text-center ">등급</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          class="license-result-list font_k"
          v-for="license in licenseArray" 
          :key="license.licenseCode"
          @click="selectLicense(license)"
        >
          <td>{{ license.licenseName }}</td>
          <td>{{ license.licenseSeriesName }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table> -->
</template>


<script>
export default {
  name: "LicenseResultList",
  components: {},
  props: {
    licenseArray: {
      type: Array,
    },
  },
  methods: {
    selectLicense: function (value) {
      // console.log(value.licenseName);
      this.$store.state.license.selectedLicense = value;
      this.$router.push({ name: "LicenseResultDetail" });
    },
  },
  data: function () {
    return {
    };
  },
};
</script>

<style scoped>
.license-result-list {
  width: 100%;
  word-break:normal;
}
.license-result-list:hover {
  cursor: pointer;
}
</style>
