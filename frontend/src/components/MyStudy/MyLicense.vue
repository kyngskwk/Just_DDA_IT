<template>
  <v-container>
    <!-- create -->
    <!-- <div class="d-flex flex-row-reverse">
      <v-btn @click="addMyLicense" class="mx-2" fab dark color="indigo"><v-icon dark>mdi-plus</v-icon></v-btn>
    </div> -->

    <div class="d-flex flex-row-reverse ">
      <MyLicenseCreate :hostID="hostID" :updateData="updateData" @openForm="closeList" @closeForm="openList" @save="saveMyLicense"/>
    </div>
    
    <div v-if="showList">
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
              <MyLicenseTodo 
                v-for="todoLicense in todoLicenses" 
                :key="todoLicense.pk"
                :todoLicense="todoLicense"
                @updateMyLicense="updateTodo"
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
import MyLicenseTodo from '@/components/MyStudy/MyLicenseTodo.vue'
import MyLicenseItem from '@/components/MyStudy/MyLicenseItem.vue'
import MyLicenseCreate from '@/components/MyStudy/MyLicenseCreate.vue'

export default {
  name: "MyLicense",
  props : {
    hostID : {
      type: Number
    }
  },
  components : {
    MyLicenseCreate,
    MyLicenseTodo,
    MyLicenseItem
  },
  data () {
    return {
      showList : true,
      passLicenses : [],
      todoLicenses : [],
      licenseCnt : [],
      updateData: false
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
    closeList(){
      this.showList = false
    },
    openList(){
      this.showList = true
      // 라이센스 데이터 받아오기
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
      })
    },
    updateTodo(targetLicense){
      console.log(targetLicense)
      // create comp로 props
      this.updateData = targetLicense
    }
  }
}
</script>

<style scoped>

</style>