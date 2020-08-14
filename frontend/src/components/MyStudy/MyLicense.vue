<template >
  <v-container>
    <!--뒤로가기-->
    <v-btn class="ml-3 fixed-top backbtn" fab dark small color="#fd462e" @click="goBack">
      <v-icon dark>mdi-arrow-left</v-icon>
    </v-btn>

    <!-- form -->
    <div class="d-flex flex-row-reverse">
      <v-btn @click="licenseForm" rounded color="#fd462e" class="font_k"><v-icon color="white">mdi-plus</v-icon></v-btn>
      <v-btn @click="edit" rounded outlined color="#fd462e" class="font_k">편집</v-btn>
    </div>
    
    <MyLicenseForm v-if="showForm" :LicenseData="LicenseData" @reload="reload" @closeForm="licenseForm"/>
    
    <div>
      <p class="mt-5 font_k mb-0 ml-5" style="font-weight:bold" >[ 준비중 ] </p>
        <TodoLicenseItem 
          v-for="todoLicense in todoLicenses" 
          :key="todoLicense.pk"
          :todoLicense="todoLicense"
          :showEdit="showEdit"
          @updateForm="updateForm"
        />
      <p class="mt-10 font_k mb-0 ml-5" style="font-weight:bold;">[ 나의 자격증 ]</p>
        <MyLicenseItem 
          v-for="passLicense in passLicenses" 
          :key="passLicense.pk"
          :passLicense="passLicense"
          :showEdit="showEdit"
          @updateForm="updateForm"
          />
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
        gainDate: null,
        dueData: null,
        testDate: null
      }
    }
  },
  created () {
    // UID를 보내서 mylicense 전체 받기  
    axios.get(`http://${this.$store.state.address}:8080/license/getMyLicense`, {
      params: {
        UID: this.hostID
      }
    })
    .then(res => {
      const licenses = res.data.object
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
      console.log(doingLicenses)
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
    edit() {
      this.showEdit = !this.showEdit
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
        licenseScore: null,
        licenseGrade: null,
        gainDate: null,
        dueData: null,
        testDate: null
      }
      this.showForm = !this.showForm
    },
    // update => form에 전달하는 데이터에 수정할 데이터 넣기
    updateForm(updateLicense){
      this.LicenseData = updateLicense
      console.log(this.LicenseData)
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