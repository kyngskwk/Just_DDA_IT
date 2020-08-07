<template>
    <v-card>
      <v-card-title>
        <span class="headline">나의 자격증</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="자격증명*" required v-model="licenseTitle"></v-text-field>
              <v-btn @click="searchLicense">검색</v-btn>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="LicenseData.licenseStatus"
                :items="['todo', 'doing', 'pass']"
                label="자격증 상태*"
                required
              ></v-select>
            </v-col>
            <!-- pass -->
            <v-col v-if="LicenseData.licenseStatus === 'pass'" cols="12" sm="6" md="4">
              <v-text-field
                v-model="LicenseData.licenseScore"
                label="점수"
                hint="취득한 자격증의 점수를 입력해주세요."
                persistent-hint
              ></v-text-field>
            </v-col>
            <v-col v-if="LicenseData.licenseStatus === 'pass'" cols="12" sm="6" md="4">
              <v-text-field
                v-model="LicenseData.licenseGrade"
                label="등급"
                hint="취득한 자격증의 등급을 입력해주세요."
                persistent-hint
              ></v-text-field>
            </v-col>
            <v-col v-if="LicenseData.licenseStatus === 'pass'" cols="12">
              <p>자격증 취득 날짜를 입력해주세요.</p>
              <form>
                <input v-model="LicenseData.dueData" type="date">
              </form>
            </v-col>
            <v-col v-if="LicenseData.licenseStatus === 'pass'" cols="12">
              <p>자격증 마감 날짜를 입력해주세요.</p>
              <form>
                <input v-model="LicenseData.gainDate" type="date">
              </form>
            </v-col>

            <!-- todo/doing -->
            <v-col v-if="LicenseData.licenseStatus !== 'pass'" cols="12" sm="6" md="4">
              <v-text-field
                v-model="LicenseData.licenseScore"
                label="점수"
                hint="목표하는 자격증의 점수를 입력해주세요."
                persistent-hint
              ></v-text-field>
            </v-col>
            <v-col v-if="LicenseData.licenseStatus !== 'pass'" cols="12" sm="6" md="4">
              <v-text-field
                v-model="LicenseData.licenseGrade"
                label="등급"
                hint="목표하는 자격증의 등급을 입력해주세요."
                persistent-hint
              ></v-text-field>
            </v-col>
            <v-col v-if="LicenseData.licenseStatus !== 'pass'" cols="12">
              <p>자격증 시험 날짜를 입력해주세요.</p>
              <form>
                <input v-model="LicenseData.testDate" type="date">
              </form>
            </v-col>
          </v-row>
        </v-container>
        <small>*필수 입력 사항입니다.</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeForm">Close</v-btn>
        <v-btn color="blue darken-1" text @click="closeForm(); saveMyLicense()">Save</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MyLicenseForm',
  data() {
    return {
      licenseTitle: null,
    }
  },
  props: {
    LicenseData : {
      type: Object
    }
  },
  methods: {
    closeForm(){
      this.$emit("closeForm")
    },
    // openForm(){
    //   this.showForm = true
    //   this.$emit("openForm")
    // },
    // searchLicense(){
    //   console.log(this.licenseTitle)
    //   axios.get('http://localhost:8080/license/getByKeyword', {
    //     params: 
    //     {
    //       keyword: this.licenseTitle
    //     }
    //   })
    //   .then (res => {
    //     console.log(res.data)
    //     const selectedLicenseList = res.data
    //     this.$store.state.license.selectedLicense = selectedLicenseList
    //     this.$router.push('/license/result')
    //   })
    //   .catch(err => console.log(err.message))
    // },
    saveMyLicense(){
      // create
      axios.post('http://localhost:8080/license/addMyLicense', this.LicenseData)
      .then( res => {
        alert("자격증 추가가 완료되었습니다.")
        console.log(res)
      })
      .catch( res => {
        console.log(res.response)
      })
      
    },
  }

}
</script>

<style>

</style>