<template>
    <v-card>
      <v-card-title>
        <span class="font_l_k">나의 자격증</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                v-model="licenseTitle"
                :items="items"
                label="자격증 명"
                dense
                filled
                rounded
              ></v-autocomplete>
              <!-- <v-text-field label="자격증명*" required v-model="licenseTitle"></v-text-field> -->
            </v-col>
            <v-col cols="12" sm="6" style="height:60px;" class="py-0">
               <v-responsive
                @click="LicenseData.licenseStatus = 'todo'"
                :class="{ selectedBtn : LicenseData.licenseStatus == 'todo'}"
                class="text-center lighten-2 rounded-pill d-inline-flex align-center justify-center border"
                height="100%"
                width="30%"
              >
                계획 중
              </v-responsive>
               <v-responsive
                @click="LicenseData.licenseStatus = 'doing'"
                :class="{ selectedBtn : LicenseData.licenseStatus == 'doing'}"
                class="text-center lighten-2 rounded-pill d-inline-flex align-center justify-center border"
                height="100%"
                width="30%"
              >
                공부 중
              </v-responsive>
               <v-responsive
                @click="LicenseData.licenseStatus = 'pass'"
                :class="{ selectedBtn : LicenseData.licenseStatus == 'pass'}"
                class="text-center lighten-2 rounded-pill d-inline-flex align-center justify-center border"
                height="100%"
                width="35%"
              >
                가지고 있어요
              </v-responsive>
            </v-col>
            <!-- pass -->
            <v-col v-if="LicenseData.licenseStatus === 'pass'" cols="12" sm="6" md="4" class="pt-8 pb-0">
              <p class="font_k m-0">[선택] 점수 또는 등급</p>
              <div class="d-flex flex-row align-center">
                <v-text-field
                  v-model="LicenseData.licenseScore"
                  dense
                  filled
                  rounded
                  persistent-hint
                  type="number"
                  style="width: 30%;"
                ></v-text-field>
                <span class="font_l_k pr-3">점</span>
                <v-text-field
                  v-model="LicenseData.licenseGrade"
                  dense
                  filled
                  rounded
                  style="width: 30%;"
                  type="number"
                  class="pl-3"
                ></v-text-field>
                <span class="font_l_k">등급</span>
              </div>
            </v-col>
            <v-col v-if="LicenseData.licenseStatus === 'pass'" cols="12" sm="6" md="4" class="pt-2 pb-0">
              <p class="font_k m-0">[선택] 자격증 일련번호</p>
              <div class="d-flex flex-row align-center">
                <v-text-field
                  v-model="LicenseData.serialNumber"
                  dense
                  filled
                  rounded
                  persistent-hint
                  type="number"
                  style="width: 30%;"
                ></v-text-field>
              </div>
            </v-col>
            <v-col v-if="LicenseData.licenseStatus === 'pass'" cols="12" class="pt-3">
              <p class="font_k">[선택] 자격증 취득 날짜</p>
              <form>
                <input v-model="LicenseData.gainDate" type="date">
              </form>
            </v-col>
            <v-col v-if="LicenseData.licenseStatus === 'pass'" cols="12">
              <p class="font_k">[선택] 자격증 마감 날짜</p>
              <form>
                <input v-model="LicenseData.dueDate" type="date">
              </form>
            </v-col>

            <!-- todo/doing -->
            <v-col v-if="LicenseData.licenseStatus !== 'pass'" cols="12" class="pt-8">
              <p class="font_k">[선택] 자격증 시험 날짜</p>
              <form>
                <input v-model="LicenseData.testDate" type="date">
              </form>
            </v-col>

          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions class="justify-center">
        <div class="d-flex flex-row justify-center mb-5">
          <v-btn @click="closeForm" rounded block large outlined color="#fd462e" style="width:40%;">취소</v-btn>
          <v-btn rounded class="mb-1" @click="closeForm(); saveMyLicense()" block large dark color="#fd462e" style="width:40%;">저장</v-btn>
        </div>
      </v-card-actions>
    </v-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MyLicenseForm',
  created() {
    // 라이센스 데이터 들고오기
    axios.get(`http://${this.$store.state.address}:8080/license/getAll`) 
    .then( res => {
      // console.log(res.data)
      console.log(res.data.object)
      const arr = res.data.object
      for(var i=0; i<res.data.object.length; i++){
        // console.log(arr[i].licenseCode)
        // console.log(arr[i].licenseName)
        this.dictObject[arr[i].licenseCode] = arr[i].licenseName
      }
      // console.log('이거다')
      // console.log(this.dictObject)
      this.items = Object.values(this.dictObject)
      // console.log(this.items)
      // console.log(Object.keys(this.dictObject))
    })
    .catch( res =>{
      console.log(res)
    })
  },
  data() {
    return {
      licenseTitle: null,
      // 자격증 명 리스트
      dictObject: {},
      items: [],
    }
  },
  props: {
    LicenseData : {
      type: Object
    }
  },
  watch: {
    // 자격증 명 가지고 licenseCode 값 찾아오기
    'licenseTitle': function(){
      for(let key in this.dictObject) {
        // console.log(key)
        if(this.licenseTitle == this.dictObject[key]) {
          this.LicenseData.licenseCode = key
          break
        }
      }
      console.log(this.LicenseData.licenseCode)
    }
  },
  methods: {
    closeForm(){
      this.$emit("closeForm")
    },
    saveMyLicense(){
      // console.log("자격증 추가")
      axios.post(`http://${this.$store.state.address}:8080/license/addMyLicense`, this.LicenseData)
      .then( res => {
        alert("자격증 추가가 완료되었습니다.")
        location.reload()
        console.log(res)
      })
      .catch( res => {
        console.log(res.response)
      })
      
    },
  }

}
</script>

<style>
.selectedBtn {
  background-color: #fd462e; 
  color: white;
}
</style>