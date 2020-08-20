<template >
  <v-container>
    <!--뒤로가기-->
    <v-btn class="ml-3 fixed-top backbtn" fab dark small color="#fd462e" @click="goBack">
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>

    <!-- form -->
    <div class="d-flex flex-row-reverse" v-if="nowUID == hostID">
      <v-btn @click="licenseForm" fab small color="#fd462e" class="font_k"><v-icon color="white">mdi-plus</v-icon></v-btn>
    </div>
    
    <MyLicenseForm v-if="showForm" :LicenseData="LicenseData" @reload="reload" @closeForm="licenseForm"/>
    
    <div>
      <p class="mt-5 font_k mb-0 ml-5" style="font-weight:bold" >[ 준비중 ] </p>
        <TodoLicenseItem 
          v-for="todoLicense in todoLicenses" 
          :key="todoLicense.pk"
          :todoLicense="todoLicense"
          :showEdit="showEdit"
          :hostID="hostID"
          :nowUID="nowUID"
          @updateForm="updateForm"
        />
      <p class="mt-10 font_k mb-0 ml-5" style="font-weight:bold;">[ 나의 자격증 ]</p>
        <MyLicenseItem 
          v-for="passLicense in passLicenses" 
          :key="passLicense.pk"
          :passLicense="passLicense"
          :showEdit="showEdit"
          :hostID="hostID"
          :nowUID="nowUID"
          @updateForm="updateForm"
          />
    </div>

    <v-snackbar v-model="snackBar">
      비밀번호가 수정되었습니다.
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackBar = false">확인</v-btn>
      </template>
    </v-snackbar>
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
      // 현재 로그인한 사람
      nowUID: null,

      snackBar : false,
      showForm : false,
      showEdit : false,

      passLicenses : [],
      todoLicenses : [],

      LicenseData: {
        uid: this.$route.params.UID, 
        licenseCode: null,
        licenseStatus: null,
        licenseScore: null,
        licenseGrade: null,
        serialNumber: null,
        gainDate: null,
        dueData: null,
        testDate: null
      }
    }
  },
  created () {
    // 로그인 여부
    if(localStorage.getItem('loginUID')){
      this.nowUID = localStorage.getItem('loginUID')
    } else if(sessionStorage.getItem('loginUID')){
      this.nowUID = sessionStorage.getItem('loginUID')
    }

    // UID를 보내서 mylicense 전체 받기  
    axios.get(`http://${this.$store.state.address}:8080/license/getMyLicense`, {
      params: {
        UID: this.hostID
      }
    })
    .then(res => {
      const licenses = res.data.object
      // console.log('나의 자격증')
      // console.log(licenses)
      for (var i=0; i<licenses.length; i++) {
        if (licenses[i].licenseStatus === "pass") {
          this.passLicenses.push(licenses[i]);
        } else {
          this.todoLicenses.push(licenses[i])
        }
      }
      // console.log("들고온 자격증")
      // console.log(this.todoLicenses)
    })
    .catch( res => {
      console.log(res)
    })
  },
  watch:{
    'todoLicenses': function(){
      var todoCnt = 0
      var doingCnt = 0
      const doingLicenses = {}
      for(var i=0; i<this.todoLicenses.length; i++){
        if(this.todoLicenses[i].licenseStatus == "todo"){
          todoCnt ++;
        } else {
          // console.log("doingLicense")
          // console.log(this.todoLicenses[i].license.licenseName)
          doingLicenses[this.todoLicenses[i].testDate] = this.todoLicenses[i].license.licenseName
          doingCnt ++;
        }
      }
      // console.log(doingLicenses)
      this.$emit("doingLicenses", doingLicenses)
      this.$emit("cntTodo", todoCnt)
      this.$emit("cntDoing", doingCnt)
    },
    'passLicenses': function(){
      this.$emit("cntPass", this.passLicenses.length)
    },
  },
  methods: {
    goBack() {
      this.$emit('goBack')
    },
    reload() {
      console.log('reload')
    },
    // create
    licenseForm() {
      this.LicenseData = {
        uid: this.$route.params.UID, 
        licenseCode: null,
        licenseStatus: null,
        licenseName: null,
        licenseScore: null,
        licenseGrade: null,
        serialNumber: null,
        gainDate: null,
        dueData: null,
        testDate: null
      }
      this.showForm = !this.showForm
    },
    // update => form에 전달하는 데이터에 수정할 데이터 넣기
    updateForm(updateLicense){
      this.LicenseData = updateLicense
      // console.log(this.LicenseData)
      this.showForm = true
    }
  }
}
</script>

<style scoped>
.backbtn {
  z-index: 8;
  position: fixed;
  top: 30px;
}
</style>