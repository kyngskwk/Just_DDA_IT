<template>
  <v-card class="my-2" outlined>
    <div class="d-flex flex-row justify-space-around align-center">
      <v-card-title v-if="todoLicense.licenseStatus == 'doing'" class="px-0">
          <v-badge inline  color="red">
          <template v-slot:badge>
            <span>{{ todoLicense.licenseStatus }}</span>
          </template>
            {{ todoLicense.license.licenseName }}
        </v-badge>
      </v-card-title>
      <v-card-title v-if="todoLicense.licenseStatus == 'todo'" class="px-0">
          <v-badge inline  color="grey">
          <template v-slot:badge>
            <span>{{ todoLicense.licenseStatus }}</span>
          </template>
            {{ todoLicense.license.licenseName }}
        </v-badge>
      </v-card-title>
      <div>
        <v-card-subtitle >D-day: {{ todoLicense.testDate }}</v-card-subtitle>
      </div>
      <div v-if="showEdit">
        <i @click="updateForm" class="fas fa-edit fa-lg"></i>
        <i  @click="deleteMyLicense" class="fas fa-minus-circle fa-lg"></i>
      </div>
    </div>
    <!-- <div>
      <div v-if="todoLicense.licenseScore != '0'">{{ todoLicense.licenseScore }}</div>
      <div>{{ todoLicense.licenseGrade }}</div>
    </div> -->
  </v-card>
</template>

<script>
import axios from "axios"


export default {
  name: 'MyLicenseTodo',
  data() {
    return {
      LicenseData : {
        id: this.todoLicense.id,
        uid: this.$route.params.UID, 
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
    showEdit : {
      type: Boolean
    },
  },
  methods: {
    deleteMyLicense() {
      console.log(this.LicenseData)
      axios.post("http://localhost:8080/license/deleteMyLicense", this.LicenseData)
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
  },
  created() {
    console.log("들고온 라이센스")
    console.log(this.todoLicense)
  }
}
</script>

<style>

</style>