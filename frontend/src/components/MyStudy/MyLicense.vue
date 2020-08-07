<template>
  <v-container>
    <!-- create -->
    <div class="d-flex flex-row-reverse ">
      <MyLicenseCreate :hostID="hostID" @save="saveMyLicense"/>
    </div>
    <h5 class="mt-5">공부중인 자격증</h5>
    <v-card class="mx-auto" outlined>
      <v-card-text>
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">자격증명</th>
              <th scope="col">목표</th>
              <th scope="col">시험날짜</th>
            </tr>
          </thead>
          <tbody>
            <!-- doing -->
            <tr v-for="doingLicense in doingLicenses" :key="doingLicense.pk">
              <th scope="row">{{ doingLicense.license.licenseName }}<span class="badge badge-info">{{ doingLicense.licenseStatus }}</span></th>
              <td>
                <span :v-if="doingLicense.licenseScore !== null"> / {{ doingLicense.licenseGrade }}</span>
              </td>
              <td>{{ doingLicense.testDate }}</td>
            </tr>
            <!-- todo -->
            <tr v-for="todoLicense in todoLicenses" :key="todoLicense.pk">
              <th scope="row">{{ todoLicense.license.licenseName }}<span class="badge badge-secondary">{{ todoLicense.licenseStatus }}</span></th>
              <td>
                <span :v-if="todoLicense.licenseScore !== null"> / {{ todoLicense.licenseGrade }}</span>
              </td>
              <td>{{ todoLicense.testDate }}</td>
            </tr>
          </tbody>
        </table>
      </v-card-text>
    </v-card>


    <h5 class="mt-10">취득한 자격증</h5>
    <v-card outlined>
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
    hostID : {
      type: Number
    }
  },
  components : {
    MyLicenseCreate
  },
  data () {
    return {
      "passLicenses" : [],
      "doingLicenses" : [],
      "todoLicenses" : [],
      "licenseCnt" : []
    }
  },
  created () {
    // UID를 보내서 mylicense 전체 & license title 받기  
    axios.get('http://localhost:8080/license/getMyLicense', {
      params: {
        UID: this.hostID
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
        else if(licenses[i].licenseStatus === "doing"){
          this.doingLicenses.push(licenses[i])
        } else {
          this.todoLicenses.push(licenses[i])
        }
      }
      // console.log(this.doingLicenses)
    })
  },
  watch:{
    'todoLicenses': function(){
      this.licenseCnt.push(this.todoLicenses.length)
      this.$emit("licenseCnt", this.licenseCnt)
    },
    'doingLicenses': function(){
      this.licenseCnt.push(this.doingLicenses.length)
      this.$emit("licenseCnt", this.licenseCnt)
    },
    'passLicenses': function(){
      this.licenseCnt.push(this.passLicenses.length)
      this.$emit("licenseCnt", this.licenseCnt)
    }
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