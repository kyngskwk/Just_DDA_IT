<template>
<v-card v-if="isShow" class="my-2 rounded-xl mylicense" outlined style="border-width: 0.1rem; background-color:white;">
  
  <v-card-subtitle v-if="isFin && LicenseData.dueDate" class="pl-5 pb-0 font_k" style="color:#4DB6AC;">※ 만료된 자격증 </v-card-subtitle>
  <div class="d-flex flex-row align-center justify-space-between pl-8 pr-2">
    <div class="d-flex flex-row justify-start align-center">
      <v-card-title class="px-0 font_l_k">
        {{ passLicense.license.licenseName }}
      </v-card-title>
      <div>
        <v-card-subtitle class="font_k" v-if="passLicense.serialNumber">{{ passLicense.serialNumber }}</v-card-subtitle>
        <v-card-subtitle class="font_k" v-if="!passLicense.serialNumber">일련번호</v-card-subtitle>
      </div>
    </div>
    <div class="d-flex flex-row justify-end align-center">
      <!-- 등급/점수 -->
      <div>
        <v-card-subtitle v-if="passLicense.licenseGrade" class="font_k" style="color:black;"> 
          {{ passLicense.licenseGrade }}등급
        </v-card-subtitle>
        <v-card-subtitle v-if="passLicense.licenseScore != '0'" class="font_k" style="color:black;">{{ passLicense.licenseScore }}점</v-card-subtitle>
        <v-card-subtitle v-if="passLicense.licenseScore == '0' && !passLicense.licenseGrade" class="font_k" style="color:black;">점수/등급</v-card-subtitle>
      </div>
      <!-- 수정 삭제 메뉴 -->
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="#8d8d8d"
              icon
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="selected = item.title "
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
  <div class="d-flex flex-row justify-space-between align-start">
    <div>
      <v-card-subtitle class="pt-0 pl-8 font_k" style="color:black;" v-if="passLicense.gainDate || passLicense.dueDate">{{ passLicense.gainDate }}~{{ passLicense.dueDate }}</v-card-subtitle>
      <v-card-subtitle class="pt-0 pl-8 font_k" style="color:black;" v-if="!passLicense.dueDate && !passLicense.gainDate">날짜를 입력해주세요.</v-card-subtitle>
    </div>
  </div>

  </v-card>
  <!-- <tr>
    
      <th scope="row">{{ passLicense.license.licenseName }}</th>
        <td>
          <div>{{ passLicense.licenseScore }}</div>
          <div>{{ passLicense.licenseGrade }}</div>
        </td>
      <td>{{ passLicense.gainDate }}</td>
      <td>{{ passLicense.dueDate }}</td>
  </tr> -->
</template>

<script>
import axios from "axios"

export default {
  name: 'MyLicenseItem',
  props: {
    passLicense: {
      type: Object
    },
    showEdit: {
      type: Boolean
    }
  },
  data() {
    return {
      isFin : false,
      isShow: true,
      selected: null,
      items: [
        { title: '수정' },
        { title: '삭제' },
      ],
      LicenseData : {
        id: this.passLicense.id,
        uid: this.$route.params.UID, 
        licenseCode: this.passLicense.license.licenseCode,
        licenseName: this.passLicense.license.licenseName,
        serialNumber: this.passLicense.serialNumber,
        licenseStatus: this.passLicense.licenseStatus,
        licenseScore: this.passLicense.licenseScore,
        licenseGrade: this.passLicense.licenseGrade,
        gainDate: this.passLicense.gainDate,
        dueDate: this.passLicense.dueDate,
        testDate: this.passLicense.testDate
      }
    }
  },
  created() {
  // var dueDate = new Date(this.dueDate)
  var now = new Date()
  var dueDate = new Date(this.passLicense.dueDate)
  // console.log(dueDate)
  // console.log(now)
  // 기간이 지났을 때 => true 반환 
  if( now > dueDate ) {
    this.isFin = true
  } else {
    this.isFin = false
  }
  },
  watch: { 
    'selected': function() {
      if(this.selected == '수정') {
        this.updateForm()
      } else if(this.selected == '삭제') {
        this.deleteMyLicense()
      }
    }
  },
  methods: {
    deleteMyLicense() {
      axios.post(`http://${this.$store.state.address}:8080/license/deleteMyLicense`, this.LicenseData)
      .then (res => {
        alert("자격증이 삭제되었습니다.")
        this.isShow = false
        console.log(res)
      }).catch( res => {
        console.log(res.response.data)
      })
    },
    updateForm() {
      this.$emit("updateForm", this.LicenseData)
    },
  }
}
</script>

<style>

</style>