<template>
  <tr>
      <th scope="row">{{ todoLicense.license.licenseName }}<span class="badge badge-info">{{ todoLicense.licenseStatus }}</span></th>
        <td>
          <span :v-if="todoLicense.licenseScore !== null"> / {{ todoLicense.licenseGrade }}</span>
        </td>
      <td>{{ todoLicense.testDate }}</td>
      <td>
        <v-btn @click="updateTodo">수정</v-btn>
        <v-btn @click="deleteTodo">삭제</v-btn>
      </td>
  </tr>
</template>

<script>
import axios from "axios"

export default {
  name: 'MyLicenseTodo',
  props: {
    todoLicense: {
      type: Object
    }
  },
  methods: {
    deleteMyLicense() {
      axios.post("", {
        params: {
          
        }
      }).then (res => {
        console.log(res)
      }).catch( res => {
        console.log(res)
      })
    },
    updateTodo() {
      // emit으로 자격증 데이터 보내기 => MyLicense에서 dialog 키고 데이터 넣어두기
      this.$emit("updateMyLicense", this.todoLicense)
    }
  }
  

}
</script>

<style>

</style>