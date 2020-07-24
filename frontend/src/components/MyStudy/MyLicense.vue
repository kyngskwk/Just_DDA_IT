<template>
  <div>
    <div class="d-flex flex-row-reverse">
      <button class="btn btn-primary">+</button>
    </div>
    <div>
      <div v-for="passLicense in passLicenses" :key="passLicense.pk">
        <span class="badge badge-success">{{ passLicense.licenseStatus }}</span>
        {{ passLicense.licenseTitle }}
        {{ passLicense.licenseScore }}
        {{ passLicense.licenseGrade }}
        {{ passLicense.testDate }}
        {{ passLicense.dueDate }}
        <hr>
      </div>
    </div>
    <div>
      <div v-for="todoLicense in todoLicenses" :key="todoLicense.pk">
        <span class="badge badge-secondary">{{ todoLicense.licenseStatus }}</span>
        {{ todoLicense.licenseTitle }}
        {{ todoLicense.licenseScore }}
        {{ todoLicense.licenseGrade }}
        {{ todoLicense.testDate }}
        {{ todoLicense.dueDate }}
        <hr>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "MyLicense",
  props : {
    user : {
      type: Object
    }
  },
  data () {
    return {
      "passLicenses" : [],
      "todoLicenses" : [],
      "doingLicenses" : [],
    }
  },
  created () {
      // UID -> mylicense 전체 & license title 
      axios.get('http://localhost:3000/mylicense.json')
      .then(res => {
        const myLicenses = res.data.data
        // console.log(res.data.data)
        for (var i=0; i<myLicenses.length; i++) {
          if (myLicenses[i].licenseStatus === "pass") {
            this.passLicenses.push(myLicenses[i]);
          }
          else if (myLicenses[i].licenseStatus === "todo") {
            this.todoLicenses.push(myLicenses[i])
          }
          else {
            this.doingLicenses.push(myLicenses[i])
          }
        }
      })
  }
}
</script>

<style>

</style>