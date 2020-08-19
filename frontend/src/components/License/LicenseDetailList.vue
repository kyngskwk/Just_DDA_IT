<template>
  <v-data-table
    :headers="headers"
    :items="licenseArray"
    item-key="licenseCode"
    class="elevation-1"
  >
    
  </v-data-table>
</template>

<script>
export default {
  name: 'LicenseResultList',
  components: {
  },
  props: {
    licenseArray: {
      type: Array
    }
  },
  methods: {
    selectLicense: function(licenseName) {
      this.$store.state.license.selectedLicense = licenseName
    }
  },
  data: function() {
    return {
      headers: [
        {
          text: '자격증이름',
          align: 'start',
          sortable: false,
          value: 'licenseName',
        },
        { text: '자격증 고유번호', value: 'licenseCode' },
        { text: '자격증 종류', value: 'licenseSeries' },
      ],
    }
  }
}
</script>

<style>

</style>
