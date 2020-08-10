<template>
  <div class="d-flex flex-column justify-center align-center">
    <v-toolbar flat>
      <v-toolbar-title>회원정보 수정</v-toolbar-title>
    </v-toolbar>

    <div class="d-flex flex-column justify-center align-center">
      <div class="thumbnail-wrapper" style="position: relative;">
        <img v-if="host.userThumbnail" class="thumbnail" :src="thumbnail" />
        <img
          v-if="!host.userThumbnail"
          class="thumbnail"
          src="../../../public/mystudy/userprofile/default.jpg"
        />
        <!-- <input type="file" accept="image/png, image/jpeg, image/bmp" capture="environment"> -->
        <v-file-input
          prepend-icon="mdi-camera"
          hide-input
          show-size
          counter
          label="file"
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          v-model="userThumbnail"
          style="position: absolute; left: 70%; top: 50%"
        ></v-file-input>
      </div>

      <v-text-field v-model="host.userEmail" label="이메일" type="text" style="width:60%" disabled></v-text-field>

      <v-text-field
        v-model="host.userName"
        label="이름"
        type="text"
        style="width:60%"
        clearable
        required
      ></v-text-field>

      <v-select v-model="subjectElem" :items="subjectsList" label="전공 계열" style="width:60%"></v-select>

      <v-autocomplete ref="전공" v-model="host.major" :placeholder="host.major" :items="majors" label="전공" style="width:60%"></v-autocomplete>

      <v-select v-model="host.education" :items="education" label="최종 학력" style="width:60%"></v-select>

      <!-- 현재 상태 -->
      <!-- 학생/구직 중/재직 중/기타 -->
      <v-select v-model="form.status" :items="status" label="현재 상태" style="width:60%"></v-select>

      <v-autocomplete v-if="form.status == '재직 중'" v-model="host.field1" :items="desiredFields" label="현재 직무"></v-autocomplete>

      <v-card flat width="60%">
        <v-card-title>희망 직무</v-card-title>
        <v-autocomplete v-model="host.desiredField1" :items="desiredFields" label="1순위"></v-autocomplete>
        <v-autocomplete v-model="host.desiredField2" :items="desiredFields" label="2순위"></v-autocomplete>
        <v-autocomplete v-model="host.desiredField3" :items="desiredFields" label="3순위"></v-autocomplete>
      </v-card>

      <div class="my-2" style="width:60%">
        <v-btn @click="update" block large color="primary">수정 완료</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "EditProfile",
  watch: {
    'subjectElem': function() {
      const API_KEY = '?apiKey=69aeb2c88545fc0b0e753369d893bea8'
      let SERVICE_KEY = 0
      this.subjects.forEach( elem => {
        if ( elem.subject === this.subjectElem) {
          SERVICE_KEY = elem.value 
        }
      })
      let URL = `https://www.career.go.kr/cnet/openapi/getOpenApi${API_KEY}&svcType=api&svcCode=MAJOR&contentType=json&gubun=univ_list`
      const SERVICE_CODE = `&subject=${SERVICE_KEY}`
      axios.get(URL + SERVICE_CODE) 
        .then( res => {
          let majorsObject = []
          // console.log('here!', res.data.dataSearch.content)
          res.data.dataSearch.content.forEach((elem)=> {
            this.majors.push(elem.mClass)
            let majorObject = {}
            majorObject['majorSeq'] = elem.majorSeq
            majorObject['mClass'] = elem.mClass
            majorsObject.push(majorObject)
          })
          this.majorsObject = majorsObject
          // console.log(this.majorsObject)
        })
        .catch(err => console.log(err.message))
    }
  },
  data(){
    const defaultForm = Object.freeze({
        education: '',
        status: '',
      })
    return{
      loginUID : this.$route.params.UID,
      host: {},
      majorSeq: '',
      userThumbnail: null,
      thumbnail: null,
      subjectElem: null,

      form: Object.assign({}, defaultForm),
      education: ['중졸 이하', '고졸', '대학교(2년)졸업', '대학교(4년) 졸업', '대학원 졸업'],
      status: ['학생', '구직 중', '재직 중', '기타'],
      subjectsList: ['인문계열', '사회계열', '교육계열', '공학계열', '자연계열', '의약계열', '예체능계열'],
      subjects: [
        {'subject': '인문계열', 'value': 100391}, 
        {'subject': '사회계열', 'value': 100392}, 
        {'subject': '교육계열', 'value': 100393}, 
        {'subject': '공학계열', 'value': 100394}, 
        {'subject': '자연계열', 'value': 100395}, 
        {'subject': '의약계열', 'value': 100396}, 
        {'subject': '예체능계열', 'value': 100397}
      ],
      majors: [],
      majorsObject: {
        type: Array
      },
      desiredFields: {
        type: Array
      },
      rules: [
        value => !value || value.size < 16000000 || '사진 크기는 16 MB까지 가능해요!',
      ],
    }
  },
  created() {
    // UID로 유저 정보 받아오기
    axios.post("http://localhost:8080/getUser", {
      id: this.loginUID
    })
    .then(res => {
        // console.log("getUser Success.")
        // console.log(res.data)
        this.host = res.data.object
        this.thumbnail = "data:"+this.host.imageType+";base64," + this.host.userThumbnail

    })
    .catch( function(error) {
        // console.log(this.hostUID)
        console.log(error)
    })

    // desiredFields 가져오기
    // console.log('Import desireFields')
    const df = []
    axios.get('http://localhost:3000/license/ncs_fields_license.json')
      .then(res => {
        res.data.forEach(elem => {
          df.push(elem.ncsCategoryName1)
        })
      })
      .catch(err => console.log(err.message))
    this.desiredFields = df
    // console.log(this.desiredFields)
  },
  methods: {
    update() {
      this.majorsObject.forEach( elem => {
        if ( elem.mClass == this.host.major ) {
          this.host.majorSeq = elem.majorSeq
          console.log('코드는', elem.majorSeq)
        }
      })
      const formData = new FormData();
      formData.append('id', this.host.id)
      formData.append('userEmail', this.host.userEmail)
      formData.append('userName', this.host.userName)
      formData.append('userContent', this.host.userContent)
      formData.append('password', this.host.password)
      formData.append('userThumbnail', this.userThumbnail)
      formData.append('major', this.host.major)
      formData.append('majorSeq', this.host.majorSeq)
      formData.append('education', this.host.education)
      formData.append('field1', this.host.field1)
      formData.append('desiredField1', this.host.desiredField1)
      formData.append('desiredField2', this.host.desiredField2)
      formData.append('desiredField3', this.host.desiredField3)
      formData.append('dateForUsers', this.host.dateForUsers)
      formData.append('secret', this.host.secret)

      axios.post('http://localhost:8080/updateMyInfo2', formData, {
        headers: {
          'Content-Type' : 'multipart/form-data'
        }
      })
      .then( res => {
        alert('회원정보가 수정되었습니다.')
        console.log(res) 
      })
      .catch( res => {
        console.log(res)
      })
    },

  }
}
</script>

<style>
.thumbnail-wrapper {
  width: 15%;
}

.thumbnail {
  border-radius: 90%;
  max-width: 100%;
  height: auto;
}
</style>