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
  props: {
    todoLicense : {
      type: Object
    }
  },
  methods: {
    deleteMyLicense() {
      axios.post("", this.todoLicense)
      .then (res => {
        console.log(res)
      }).catch( res => {
        console.log(res)
      })
    },
    updateForm() {
      this.$emit("updateForm", this.todoLicense)
    }
  }
  

}
</script>

<style>

</style>