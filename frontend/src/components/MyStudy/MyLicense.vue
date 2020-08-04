<template>
  <div>
    <MyLicenseCreate :hostId="host.id" @save="saveMyLicense"/>
    <div v-for="doingLicense in doingLicenses" :key="doingLicense.pk">
      <span class="badge badge-danger">{{ doingLicense.licenseStatus }}</span>
      {{ doingLicense.licenseTitle }}
      {{ doingLicense.licenseScore }}
      {{ doingLicense.licenseGrade }}
      {{ doingLicense.testDate }}
      {{ doingLicense.dueDate }}
      <hr>
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
  </div>
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
      "todoLicenses" : [],
      "doingLicenses" : []
    }
  },
  created () {
    console.log(this.host.id)
      // UID를 보내서 mylicense 전체 & license title 받기  
      axios.get('http://localhost:8080/license/getMyLicense', {
        params: {
          UID: this.host.id
        }
      })
      .then(res => {
        // const myLicenses = res.data.data
        console.log(res)
        // for (var i=0; i<myLicenses.length; i++) {
        //   if (myLicenses[i].licenseStatus === "pass") {
        //     this.passLicenses.push(myLicenses[i]);
        //   }
        //   else if (myLicenses[i].licenseStatus === "todo") {
        //     this.todoLicenses.push(myLicenses[i])
        //   }
        //   else {
        //     this.doingLicenses.push(myLicenses[i])
        //   }
        // }
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

<style>

</style>