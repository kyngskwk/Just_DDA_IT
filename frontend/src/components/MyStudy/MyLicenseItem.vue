<template>
<v-card class="my-2" outlined>
  <div class="d-flex flex-row align-center justify-space-between">
    <div>
      <div class="d-flex flex-row justify-start align-center pl-8">
        <v-card-title class="px-0">
          {{ passLicense.license.licenseName }}
        </v-card-title>
        <div>
          <v-card-subtitle>일련번호</v-card-subtitle>
        </div>
        <div v-if="showEdit">
          <i @click="updateForm" class="fas fa-edit fa-lg"></i>
          <i  @click="deleteMyLicense" class="fas fa-minus-circle fa-lg"></i>
        </div>
      </div>

      <div>
        <v-card-subtitle class="pt-0 pl-8">{{ passLicense.gainDate }}~{{ passLicense.gainDate }}</v-card-subtitle>
      </div>
    </div>
    <div class="medal-wrap">
      <img class="medal" src="../../../public/mystudy/mylicense/badge-icon.png">
        <v-card-subtitle class="grade"> 
          {{ passLicense.licenseGrade }}
        </v-card-subtitle>
        <v-card-subtitle class="grade" v-if="passLicense.licenseScore != '0'">{{ passLicense.licenseScore }}점</v-card-subtitle>
    </div>
  </div>

  </v-card>
  <!-- <tr>
    
      <th scope="row">{{ passLicense.license.licenseName }}</th>
        <td>
          <div>{{ passLicense.licenseScore }}</div>
          <div>{{ passLicense.licenseGrade }}</div>
        </td>
      <td>{{ passLicense.gainDate }}</td>
      <td>{{ passLicense.dueDate }}</td>
  </tr> -->
</template>

<script>
import axios from "axios"

export default {
  name: 'MyLicenseItem',
  props: {
    passLicense: {
      type: Object
    },
    showEdit: {
      type: Boolean
    }
  },
  data() {
    return {
      LicenseData : {
        id: this.passLicense.id,
        uid: this.$route.params.UID, 
        licenseId: this.passLicense.license.id,
        licenseStatus: this.passLicense.licenseStatus,
        licenseScore: this.passLicense.licenseScore,
        licenseGrade: this.passLicense.licenseGrade,
        gainDate: this.passLicense.gainDate,
        dueData: this.passLicense.dueData,
        testDate: this.passLicense.testDate
      }
    }
  },
  methods: {
    deleteMyLicense() {
      axios.post("http://${this.$store.state.address}:${this.$store.state.port}/license/deleteMyLicense", this.LicenseData)
      .then (res => {
        alert("자격증이 삭제되었습니다.")
        console.log(res)
      }).catch( res => {
        console.log(res.response.data)
      })
    },
    updateForm() {
      this.$emit("updateForm", this.LicenseData)
    },
  }
}
</script>

<style>
  .medal-wrap {
    width: 25%;
    vertical-align: middle;
    position: relative;
  }
  .medal {
  width: 100%;
  height: auto;
  vertical-align: middle;
  }
  .grade {
    position: absolute;
    text-align: center;
    top: 5%;
    left: 12%;
  }
</style>