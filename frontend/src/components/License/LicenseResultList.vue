<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">자격증명</th>
          <th class="text-left">등급</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="license in licenseArray" 
          :key="license.licenseCode"
          @click="selectLicense(license)"
          >
          <td>{{ license.licenseName }}</td>
          <td>{{ selectedLicenseSeries(lisence.licenseSeries) }}</td>
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
  watch: {
    selectedLicenseArray: function () {
      return this.licenseArray;
    },
  },
  methods: {
    selectLicenseSeries: function(arg) {
      if (arg == '01') {
        return '기능장'
      } else if (arg == '02') {
        return '기술사'
      } else if (arg == '03') {
        return '기사'
      } else {
        return '기능사'
      }
    },
    selectLicense: function (value) {
      console.log(value.licenseName);
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
.v-data-table__mobile-table-row:hover {
  cursor: pointer;
}
</style>
