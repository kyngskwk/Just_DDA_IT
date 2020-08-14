<template>
  <v-card>
    <v-card-title>
      <span class="headline">자격증 추가하기</span>
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
              v-model="myLicenseData.licenseStatus"
              :items="['todo', 'doing', 'pass']"
              label="자격증 상태*"
              required
            ></v-select>
          </v-col>
          <!-- pass -->
          <v-col v-if="myLicenseData.licenseStatus === 'pass'" cols="12" sm="6" md="4">
            <v-text-field
              v-model="myLicenseData.licenseScore"
              label="점수"
              hint="취득한 자격증의 점수를 입력해주세요."
              persistent-hint
            ></v-text-field>
          </v-col>
          <v-col v-if="myLicenseData.licenseStatus === 'pass'" cols="12" sm="6" md="4">
            <v-text-field
              v-model="myLicenseData.licenseGrade"
              label="등급"
              hint="취득한 자격증의 등급을 입력해주세요."
              persistent-hint
            ></v-text-field>
          </v-col>
          <v-col v-if="myLicenseData.licenseStatus === 'pass'" cols="12">
            <p>자격증 취득 날짜를 입력해주세요.</p>
            <form>
              <input v-model="myLicenseData.dueData" type="date">
            </form>
          </v-col>
          <v-col v-if="myLicenseData.licenseStatus === 'pass'" cols="12">
            <p>자격증 마감 날짜를 입력해주세요.</p>
            <form>
              <input v-model="myLicenseData.gainDate" type="date">
            </form>
          </v-col>

          <!-- todo/doing -->
          <v-col v-if="myLicenseData.licenseStatus !== 'pass'" cols="12" sm="6" md="4">
            <v-text-field
              v-model="myLicenseData.licenseScore"
              label="점수"
              hint="목표하는 자격증의 점수를 입력해주세요."
              persistent-hint
            ></v-text-field>
          </v-col>
          <v-col v-if="myLicenseData.licenseStatus !== 'pass'" cols="12" sm="6" md="4">
            <v-text-field
              v-model="myLicenseData.licenseGrade"
              label="등급"
              hint="목표하는 자격증의 등급을 입력해주세요."
              persistent-hint
            ></v-text-field>
          </v-col>
          <v-col v-if="myLicenseData.licenseStatus !== 'pass'" cols="12">
            <p>자격증 시험 날짜를 입력해주세요.</p>
            <form>
              <input v-model="myLicenseData.testDate" type="date">
            </form>
          </v-col>
        </v-row>
      </v-container>
      <small>*필수 입력 사항입니다.</small>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="back">Close</v-btn>
      <v-btn color="blue darken-1" text @click="saveMyLicense; back()">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MyLicenseCreate',
  data() {
    return {
      "dialog1": false,
      "notifications": false,
      "sound": true,
      "widgets": false,
      myLicenseData: {
        uid: this.hostId,
        licenseId: 1,
        licenseStatus: null,
        licenseScore: null,
        licenseGrade: null,
        gainDate: null,
        dueData: null,
        testDate: null
      },
      licenseTitle: null,
    }
  },
    props: {
    hostID : {
      type: Number
    }
  },
  methods: {
    saveMyLicense(){
      axios.post('http://${state.address}:${this.$store.state.port}/license/addMyLicense', this.myLicenseData)
      .then( res => {
        console.log(res)
      })
      .catch( res => {
        console.log(res)
      })
    },
    searchLicense(){
      console.log(this.licenseTitle)
      axios.get('http://${state.address}:${this.$store.state.port}/license/getByKeyword', {
        params: 
        {
          keyword: this.licenseTitle
        }
      })
      .then (res => {
        console.log(res.data)
        const selectedLicenseList = res.data
        this.$store.state.license.selectedLicense = selectedLicenseList
        this.$router.push('/license/result')
      })
      .catch(err => console.log(err.message))
    },
    back() {
      this.$router.go(-1)
    }
  }

}
</script>

<style>

</style>