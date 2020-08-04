<template>
  <v-data-table
    :headers="headers"
    :items="licenseArray"
    item-key="licenseCode"
    :items-per-page="5"
    class="elevation-1"
    @click:row="selectLicense"
  ></v-data-table>
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
    selectLicense: function (value) {
      console.log(value.licenseName);
      this.$store.state.license.selectedLicense = value;
      this.$router.push({ name: "LicenseResultDetail" });
    },
  },
  data: function () {
    return {
      headers: [
        {
          text: "자격증이름",
          align: "start",
          sortable: false,
          value: "licenseName",
        },
        { text: "자격증 고유번호", value: "licenseCode" },
        { text: "자격증 종류", value: "licenseSeries" },
      ],
    };
  },
};
</script>

<style scoped>
.v-data-table__mobile-table-row:hover {
  cursor: pointer;
}
</style>
