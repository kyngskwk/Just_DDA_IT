<template>
  <tr>
      <th scope="row">{{ todoLicense.license.licenseName }}<span class="badge badge-info">{{ todoLicense.licenseStatus }}</span></th>
        <td>
          <span :v-if="todoLicense.licenseScore !== null"> / {{ todoLicense.licenseGrade }}</span>
        </td>
      <td>{{ todoLicense.testDate }}</td>
      <td>
        <v-btn @click="updateForm">수정</v-btn>
        <v-btn @click="deleteMyLicense">삭제</v-btn>
      </td>
  </tr>
</template>

<script>
import axios from "axios"

export default {
  name: 'MyLicenseTodo',
  data() {
    return {
      LicenseData : {
        UID: this.$route.params.UID, 
        licenseId: this.todoLicense.license.id,
        licenseStatus: this.todoLicense.licenseStatus,
        licenseScore: this.todoLicense.licenseScore,
        licenseGrade: this.todoLicense.licenseGrade,
        gainDate: this.todoLicense.gainDate,
        dueData: this.todoLicense.dueData,
        testDate: this.todoLicense.testDate
      }
    }
  },
  props: {
    todoLicense : {
      type: Object
    },
  },
  methods: {
    deleteMyLicense() {
      axios.post("http://localhost:8080/license/deleteMyLicense", this.todoLicense)
      .then (res => {
        alert("자격증이 삭제되었습니다.")
        console.log(res)
      }).catch( res => {
        console.log(res.response.data)
      })
    },
    updateForm() {
      this.$emit("updateForm", this.LicenseData)
    }
  }
  

}
</script>

<style>

</style>