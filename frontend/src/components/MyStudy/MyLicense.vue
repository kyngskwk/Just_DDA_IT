<template>
  <v-container>
    <!-- form -->
    {{ LicenseData }}
    <div class="d-flex flex-row-reverse">
      <v-btn @click="licenseForm" class="mx-2" fab dark color="indigo"><v-icon dark>mdi-plus</v-icon></v-btn>
    </div>
    <MyLicenseForm v-if="showform" :LicenseData="LicenseData" @closeForm="licenseForm" @reload="reload"/>
    <div>
      <h5 class="mt-5">공부중인 자격증</h5>
      <v-card class="mx-auto" outlined>
        <v-card-text>
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">자격증명</th>
                <th scope="col">목표</th>
                <th scope="col">시험날짜</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <TodoLicenseItem 
                v-for="todoLicense in todoLicenses" 
                :key="todoLicense.pk"
                :todoLicense="todoLicense"
                @updateForm="updateForm"
              />
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
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <MyLicenseItem 
                v-for="passLicense in passLicenses" 
                :key="passLicense.pk"
                :passLicense="passLicense"
              />
          </tbody>
        </table>
        </v-card-text>
      </v-card>
    </div>

  </v-container>
</template>

<script>
import axios from 'axios'
import MyLicenseForm from '@/components/MyStudy/MyLicenseForm.vue'

import TodoLicenseItem from '@/components/MyStudy/TodoLicenseItem.vue'
import MyLicenseItem from '@/components/MyStudy/MyLicenseItem.vue'

export default {
  name: "MyLicense",
  props : {
    hostID : {
      type: Number
    }
  },
  components : {
    MyLicenseForm,
    TodoLicenseItem,
    MyLicenseItem
  },
  data () {
    return {
      showform : false,

      passLicenses : [],
      todoLicenses : [],
      licenseCnt : [],

      LicenseData: {
        uid: this.$route.params.UID, 
        licenseId: 1,
        licenseStatus: null,
        licenseScore: null,
        licenseGrade: null,
        gainDate: null,
        dueData: null,
        testDate: null
      }
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
      const licenses = res.data.object
      for (var i=0; i<licenses.length; i++) {
        if (licenses[i].licenseStatus === "pass") {
          this.passLicenses.push(licenses[i]);
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
      this.licenseCnt.push(this.todoLicenses.length)
      this.$emit("licenseCnt", this.licenseCnt)
    },
    'passLicenses': function(){
      this.licenseCnt.push(this.passLicenses.length)
      this.$emit("licenseCnt", this.licenseCnt)
    }
  },
  methods: {
    // create
    licenseForm(){
      this.LicenseData = {
        uid: this.$route.params.UID, 
        licenseId: 1,
        licenseStatus: null,
        licenseScore: null,
        licenseGrade: null,
        gainDate: null,
        dueData: null,
        testDate: null
      }
      this.showform = !this.showform
      // 라이센스 데이터 받아오기
      axios.get('http://localhost:8080/license/getMyLicense', {
        params: {
          UID: this.hostID
        }
      })
      .then(res => {
        this.passLicenses = []
        this.todoLicenses = []
        const licenses = res.data.object
        for (var i=0; i<licenses.length; i++) {
          if (licenses[i].licenseStatus === "pass") {
            this.passLicenses.push(licenses[i]);
          } else {
            this.todoLicenses.push(licenses[i])
          }
        }
      })
    },
    // update => form에 전달하는 데이터에 수정할 데이터 넣기
    updateForm(updateLicense){
      this.LicenseData = updateLicense
      console.log(this.LicenseData)
      this.showform = true
    }
  }
}
</script>

<style scoped>

</style>