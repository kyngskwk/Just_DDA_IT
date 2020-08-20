<template>
  <v-card v-if="isShow" class="my-2 rounded-xl" outlined style="border-width: 0.1rem;">
    <div class="d-flex flex-row justify-space-around align-center">
      <v-card-title v-if="todoLicense.licenseStatus == 'doing'" class="px-3 font_l_k">
          <v-badge inline color="#4DB6AC">
          <template v-slot:badge>
            <span>{{ todoLicense.licenseStatus }}</span>
          </template>
            {{ todoLicense.license.licenseName }}
        </v-badge>
      </v-card-title>
      <v-card-title v-if="todoLicense.licenseStatus == 'todo'" class="px-3 font_l_k">
          <v-badge inline  color="grey">
          <template v-slot:badge>
            <span>{{ todoLicense.licenseStatus }}</span>
          </template>
            {{ todoLicense.license.licenseName }}
        </v-badge>
      </v-card-title>
      <div>
        <v-card-subtitle class="font_e px-0" style="color:black;">D-day: {{ todoLicense.testDate }}</v-card-subtitle>
      </div>
      <!-- 수정 삭제 메뉴 -->
      <div v-if="isThisUser" class="text-center">
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


      <!-- <div v-if="showEdit">
        <i @click="updateForm" class="fas fa-edit fa-lg"></i>
        <i  @click="deleteMyLicense" class="fas fa-minus-circle fa-lg"></i>
      </div> -->
    </div>
    <!-- <div>
      <div v-if="todoLicense.licenseScore != '0'">{{ todoLicense.licenseScore }}</div>
      <div>{{ todoLicense.licenseGrade }}</div>
    </div> -->
  </v-card>
</template>

<script>
import axios from "axios"


export default {
  name: 'MyLicenseTodo',
  data() {
    return {
      items: [
        { title: '수정' },
        { title: '삭제' },
      ],
      selected: null,
      isShow: true,
      LicenseData : {
        id: this.todoLicense.id,
        uid: this.$route.params.UID, 
        licenseCode: this.todoLicense.license.licenseCode,
        licenseName: this.todoLicense.license.licenseName,
        licenseStatus: this.todoLicense.licenseStatus,
        licenseScore: this.todoLicense.licenseScore,
        licenseGrade: this.todoLicense.licenseGrade,
        gainDate: this.todoLicense.gainDate,
        dueData: this.todoLicense.dueData,
        testDate: this.todoLicense.testDate
      }
    }
  },
  props: {
    todoLicense : {
      type: Object
    },
    showEdit : {
      type: Boolean
    },
    hostID: {
      type: Number
    },
    nowUID: {
      type: Number
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
  computed: {
    isThisUser: function() {
      // console.log(this.hostID, this.nowUID)
      return this.hostID === this.nowUID
    }
  },
  methods: {
    deleteMyLicense() {
      console.log(this.LicenseData)
      axios.post(`http://${this.$store.state.address}:8080/license/deleteMyLicense`, this.LicenseData)
      .then (res => {
        this.isShow = false
        console.log(res)
      }).catch( res => {
        console.log(res.response.data)
      })
    },
    updateForm() {
      this.$emit("updateForm", this.LicenseData)
    },
  },
  created() {
    // console.log("들고온 라이센스")
    // console.log(this.todoLicense)
  }
}
</script>

<style>

</style>