<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr >
          <th class="text-center">자격증명</th>
          <th class="text-center">등급</th>
        </tr>
      </thead>
      <tbody>
        <tr 
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
  watch: {
    licenseArray: function(val) {
      for (var i = 0; i < val.length; i++) {
        const series = val[i].licenseSeries 
        console.log('series = ', series)
        let seriesName = ''
        switch(series) {
          case '1':
            seriesName = '기능사'
            break;
          case '2':
            seriesName = '기술사'
            break;
          case '3':
            seriesName = '기사'
            break;
          case '4':
            seriesName = '기능장'
            break;
        }
        val[i]["licenseSeriesName"] = seriesName 
      }
      return val
    }
  },
  methods: {
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

</style>
