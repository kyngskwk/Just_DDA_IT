<template>
  <v-container>
    <!-- form -->
    <div class="d-flex flex-row-reverse">
      <v-btn @click="licenseForm">추가</v-btn>
      <v-btn @click="edit">편집</v-btn>
    </div>
    
    <MyLicenseForm v-if="showForm" :LicenseData="LicenseData" @closeForm="licenseForm" @reload="reload"/>
    <div>
      <h5 class="mt-5">공부중인 자격증</h5>
        <TodoLicenseItem 
          v-for="todoLicense in todoLicenses" 
          :key="todoLicense.pk"
          :todoLicense="todoLicense"
          :showEdit="showEdit"
          @updateForm="updateForm"
        />
      <h5 class="mt-10">취득한 자격증</h5>
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
        licenseId: null,
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
    axios.get('http://${this.$store.state.address}:${this.$store.state.port}/license/getMyLicense', {
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
  },
  watch:{
    'todoLicenses': function(){
      var todoCnt = 0
      var doingCnt = 0
      for(var i=0; i<this.todoLicenses.length; i++){
        if(this.todoLicenses[i].licenseStatus == "todo"){
          todoCnt ++;
        } else {
          doingCnt ++;
        }
      }
      this.$emit("cntTodo", todoCnt)
      this.$emit("cntDoing", doingCnt)
    },
    'passLicenses': function(){
      this.$emit("cntPass", this.passLicenses.length)
    }
  },
  methods: {
    edit() {
      this.showEdit = !this.showEdit
    },
    // create
    licenseForm() {
      this.LicenseData = {
        uid: this.$route.params.UID, 
        licenseId: null,
        licenseStatus: null,
        licenseScore: null,
        licenseGrade: null,
        gainDate: null,
        dueData: null,
        testDate: null
      }
      this.showForm = !this.showForm
      // 라이센스 데이터 받아오기
      axios.get('http://${this.$store.state.address}:${this.$store.state.port}/license/getMyLicense', {
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
      this.showForm = true
    }
  }
}
</script>

<style scoped>

</style>