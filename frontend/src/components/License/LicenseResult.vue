<template>
<div>
  <v-btn class="mx-2 mt-2 fixed-top backbtn" fab dark small color="primary" @click="goBack">
    <v-icon dark>mdi-arrow-left</v-icon>
  </v-btn>
  <div class="text-center">
      <h1 class="mb-4">검색 결과</h1>
      <span v-if="!field2">검색하신 단어: {{ keyword }}</span>
      <h3 v-if="field2">선택하신 분야: {{ field1 }}, {{ field2 }}</h3>
      <hr>
      <h5>검색된 자격증으로는</h5>
      <LicenseDetailList :licenseArray="license_based_on_fields" />
  </div>
</div>
</template>

<script>
import LicenseDetailList from './LicenseDetailList.vue'
export default {
  name: 'LicenseResult',
  components: {
    LicenseDetailList
  },
  created: function() {
    this.keyword = this.$store.state.license.keyword
    this.field1 = this.$store.state.license.field1
    this.field2 = this.$store.state.license.field2
  },
  computed: {
    license_based_on_fields: function() {
      var ncs_fields_list = this.$store.state.license.ncs_fields_license
      for (var i = 0; i < ncs_fields_list.length; i++ ) {
        if (ncs_fields_list[i]['ncsCategoryName1'] === this.field1) {
          var ncs_second_fields = ncs_fields_list[i].ncsCategory2
          for (var j = 0; j < ncs_second_fields.length; j++) {
            if (ncs_second_fields[j]['ncsCategoryName2'] === this.field2) {
              // console.log('result: ', ncs_second_fields[j]['licenses'])
              return ncs_second_fields[j]['licenses']
            }
          }
        }
      } 
      return []
    }
  },
  watch: {
    // license_based_on_fields: {
    //   deep: true,
    //   handler: function(ncs_second_fields_licenses) {
    //     this.licenseArray = ncs_second_fields_licenses
    //   }
    // }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
  data() {
    return {
      keyword: {
        type: String
      },
      field1: {
        type: String
      },
      field2: {
        type: String
      },  
      licenseArray: {
        type: Array
      }
    }
  }
}
</script>

<style>

</style>
