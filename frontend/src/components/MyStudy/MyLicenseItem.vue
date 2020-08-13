<template>
<v-card v-if="isShow" class="my-2 rounded-xl mylicense" outlined style="border-width: 0.1rem;">
  <v-card-subtitle v-if="isFin" class="pl-5 pb-0 font_k" style="color:red;">※ 만료된 자격증 </v-card-subtitle>
  <div class="d-flex flex-row align-center justify-space-around">
    <div class="d-flex flex-row justify-start align-center">
      <v-card-title class="px-0 font_l_k">
        {{ passLicense.license.licenseName }}
      </v-card-title>
      <div>
        <v-card-subtitle class="font_k">일련번호</v-card-subtitle>
      </div>
    </div>
    <div>
      <v-card-subtitle v-if="passLicense.licenseGrade" class="font_k" style="color:black;"> 
        {{ passLicense.licenseGrade }}등급
      </v-card-subtitle>
      <v-card-subtitle v-if="passLicense.licenseScore != '0'" class="font_k" style="color:black;">{{ passLicense.licenseScore }}점</v-card-subtitle>
    </div>
  </div>
  <div class="d-flex flex-row justify-space-between align-start">
    <div>
      <v-card-subtitle class="pt-0 pl-8 font_k" style="color:black;">{{ passLicense.gainDate }}~{{ passLicense.dueDate }}</v-card-subtitle>
    </div>

    <div v-if="showEdit" class="mr-5">
      <i @click="updateForm" class="fas fa-edit fa-lg"></i>
      <i  @click="deleteMyLicense" class="fas fa-minus-circle fa-lg"></i>
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
      isFin : false,
      isShow: true,
      LicenseData : {
        id: this.passLicense.id,
        uid: this.$route.params.UID, 
        licenseCode: this.passLicense.license.licenseCode,
        licenseStatus: this.passLicense.licenseStatus,
        licenseScore: this.passLicense.licenseScore,
        licenseGrade: this.passLicense.licenseGrade,
        gainDate: this.passLicense.gainDate,
        dueData: this.passLicense.dueDate,
        testDate: this.passLicense.testDate
      }
    }
  },
  created() {
  // var dueDate = new Date(this.dueDate)
  var now = new Date()
  var dueDate = new Date(this.passLicense.dueDate)
  // console.log(dueDate)
  // console.log(now)
  // 기간이 지났을 때 => true 반환 
  if( now > dueDate ) {
    this.isFin = true
  } else {
    this.isFin = false
  }
  },
  methods: {
    deleteMyLicense() {
      axios.post("http://localhost:8080/license/deleteMyLicense", this.LicenseData)
      .then (res => {
        alert("자격증이 삭제되었습니다.")
        this.isShow = false
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

</style>