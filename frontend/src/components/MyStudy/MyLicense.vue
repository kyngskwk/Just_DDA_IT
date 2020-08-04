<template>
  <v-container>
    <!-- create -->
    <div class="d-flex flex-row-reverse ">
      <MyLicenseCreate :hostId="host.id" @save="saveMyLicense"/>
    </div>
    <h5 class="mt-5">공부중인 자격증</h5>
    <v-card class="mx-auto">
      <v-card-text>
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">자격증명</th>
              <th scope="col">상태</th>
              <th scope="col">목표</th>
              <th scope="col">시험날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="doingLicense in doingLicenses" :key="doingLicense.pk">
              <th scope="row">{{ doingLicense.license.licenseName }}</th>
              <td><span class="badge badge-secondary">{{ doingLicense.licenseStatus }}</span></td>
              <td>
                <span :v-if="doingLicense.licenseScore !== null"> / {{ doingLicense.licenseGrade }}</span>
              </td>
              <td>{{ doingLicense.testDate }}</td>
            </tr>
          </tbody>
        </table>
      </v-card-text>
    </v-card>


    <h5 class="mt-10">취득한 자격증</h5>
    <v-card>
      <v-card-text>
      <table class="table table-borderless">
        <thead>
          <tr>
            <th scope="col">자격증명</th>
            <th scope="col">점수/등급</th>
            <th scope="col">취득일</th>
            <th scope="col">만료일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="passLicense in passLicenses" :key="passLicense.pk">
            <th scope="row">{{ passLicense.license.licenseName }}</th>
            <td>
              <span>{{ passLicense.licenseScore }}</span>
              <span :v-if="passLicense.licenseGrade !== null"> / {{ passLicense.licenseGrade }}</span>
            </td>
            <td>{{ passLicense.gainDate }}</td>
            <td>{{ passLicense.dueDate }}</td>
          </tr>
        </tbody>
      </table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'
import MyLicenseCreate from '@/components/MyStudy/MyLicenseCreate.vue'

export default {
  name: "MyLicense",
  props : {
    host : {
      type: Object
    }
  },
  components : {
    MyLicenseCreate
  },
  data () {
    return {
      "passLicenses" : [],
      "doingLicenses" : []
    }
  },
  created () {
    // console.log(this.host.id)
      // UID를 보내서 mylicense 전체 & license title 받기  
      axios.get('http://localhost:8080/license/getMyLicense', {
        params: {
          UID: this.host.id
        }
      })
      .then(res => {
        // const myLicenses = res.data.data
        // console.log('getlicense')
        // console.log(res.data.object)
        const licenses = res.data.object
        for (var i=0; i<licenses.length; i++) {
          if (licenses[i].licenseStatus === "pass") {
            this.passLicenses.push(licenses[i]);
          }
          else {
            this.doingLicenses.push(licenses[i])
          }
        }
        console.log(this.doingLicenses)
      })
  },
  methods: {
    saveMyLicense(myLicenseData){
      console.log(myLicenseData)
      axios.post('http://localhost:8080/license/addMyLicense', myLicenseData)
      .then( res => {
        console.log(res)
      })
      .catch( res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>