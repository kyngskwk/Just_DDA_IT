<template>
  <v-simple-table class="license-result-list">
    <template v-slot:default>
      <thead>
        <tr >
          <th class="text-center">자격증명</th>
          <th class="text-center">등급</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          class="license-result-list"
          v-for="license in licenseArray" 
          :key="license.licenseCode"
          @click="selectLicense(license)"
        >
          <td>{{ license.licenseName }}</td>
          <td>{{ license.licenseSeriesName }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
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
  font-family: 'Black Han Sans', sans-serif;
}
.license-result-list:hover {
  cursor: pointer;
}
</style>
