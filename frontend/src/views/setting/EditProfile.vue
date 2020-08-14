<template>
  <div>

    <div class="d-flex flex-column align-center">
      <v-toolbar flat class="mb-3">
        <h5 class="font_l_k">회원정보 수정</h5>
      </v-toolbar>
      <div style="position:relative;">
        <img v-if="host.userThumbnail || userThumbnail" class="thumbnail" :src='"data:"+thumbnailType+";base64," + thumbnail'/>
        <img
          v-if="!host.userThumbnail && !userThumbnail"
          class="thumbnail"
          src="/mystudy/userprofile/default.jpg"
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
          style="position: absolute; left: 70%; top: 60%"
        ></v-file-input>
      </div>

      <!-- input form -->
      <v-text-field
        label="이메일"
        v-model="host.userEmail"
        filled
        rounded
        dense
        disabled
        style="width:80%; margin-top:20px;"
      ></v-text-field>

      <v-text-field
        label="이름"
        v-model="host.userName"
        filled
        rounded
        dense
        style="width:80%;"
      ></v-text-field>
       
      <!-- <v-text-field
        v-model="host.userName"
        label="이름"
        type="text"
        style="width:70%"
        clearable
        required
      ></v-text-field> -->
    </div>
    <div class="ml-13 mt-3">
      <h5 class="font_k mb-1" style="font-weight: bold">선택 정보</h5>
      <p style="font-size:small;"> 정보 입력 후 다양한 <span class="color_emp">추천 서비스</span>를 받아보세요! </p>
      <p class="font_k mb-1" style="font-weight: bold">전공</p>
    </div>
    <div class="d-flex flex-column align-center">
      <v-select
        :items="subjectsList"
        placeholder="전공 계열"
        v-model="subjectElem"
        filled
        label="전공 계열"
        rounded
        dense
        style="width:80%;"
      ></v-select>
      <!-- 전공 -->
      <div class="d-flex justify-center" style="width: 80%;">  
        <v-text-field
          v-if="subjectElem == null"
          label="전공"
          v-model="host.major"
          filled
          rounded
          dense
          disabled
          style="width:80%;"
        ></v-text-field>
        <v-autocomplete
          v-if="subjectElem == '공학계열'"
          v-model="host.major"
          :items="engineering"
          label="전공"
          dense
          filled
          rounded
          style="width:80%;"
        ></v-autocomplete>
        <v-autocomplete
          v-if="subjectElem == '예체능계열'"
          v-model="host.major"
          :items="arts"
          label="전공"
          dense
          filled
          rounded
          style="width:80%;"
        ></v-autocomplete>
        <v-autocomplete
          v-if="subjectElem == '의학계열'"
          v-model="host.major"
          :items="medical"
          label="전공"
          dense
          filled
          rounded
          style="width:80%;"
        ></v-autocomplete>
        <v-autocomplete
          v-if="subjectElem == '인문사회계열'"
          v-model="host.major"
          :items="society"
          label="전공"
          dense
          filled
          rounded
          style="width:80%;"
        ></v-autocomplete>
        <v-autocomplete
          v-if="subjectElem == '자연과학계열'"
          v-model="host.major"
          :items="science"
          label="전공"
          dense
          filled
          rounded
          style="width:80%;"
        ></v-autocomplete>
      </div>
    </div>
    <div class="ml-13">
      <p class="font_k mb-1" style="font-weight: bold">학력</p>
    </div>
    <div class="d-flex flex-column align-center">
      <v-select
        :items="education"
        v-model="host.education"
        filled
        label="최종 학력"
        rounded
        dense
        style="width:80%;"
      ></v-select>

      <!-- <v-select v-model="host.education" :items="education" label="최종 학력" style="width:70%"></v-select> -->
    </div>
    <div class="ml-13">
      <p class="font_k mb-2" style="font-weight: bold">분야 및 희망 분야</p>
      <p class="mb-1" style="font-size:small;"> 재직중인 경우 입력해주세요. </p>
    </div>
    <div class="d-flex flex-column align-center">
      <v-autocomplete
        v-model="host.field1"
        :items="desiredFields"
        label="현재 분야"
        dense
        filled
        rounded
        style="width:80%;"
      ></v-autocomplete>

      <!-- <v-autocomplete v-model="host.field1" :items="desiredFields" label="현재 분야"></v-autocomplete> -->
        <v-autocomplete
        v-model="host.desiredField1"
        :items="desiredFields"
        label="1순위"
        dense
        filled
        rounded
        style="width:80%"
        ></v-autocomplete>
        <v-autocomplete
        v-model="host.desiredField2"
        :items="desiredFields"
        label="2순위"
        dense
        filled
        rounded
        style="width:80%"
        ></v-autocomplete>
        <v-autocomplete
        v-model="host.desiredField3"
        :items="desiredFields"
        label="3순위"
        dense
        filled
        rounded
        style="width:80%"
        ></v-autocomplete>

      <v-card flat width="40%" class="d-flex justify-center mt-5 mb-15">
        <v-btn @click="cancel" rounded block large outlined color="#fd462e">취소</v-btn>
        <v-btn rounded class="mb-1" @click="update" block large dark color="#fd462e">수정 완료</v-btn>
      </v-card>  
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "EditProfile",
  watch: {
    'userThumbnail': function() {
      // 이미지 업로드 여부 체크
      this.isImgUpload = true
      console.log(this.isImgUpload)
      // 이미지 미리보기 => 이미지만 서버에 보내서, 이미지만 받고, 받은 이미지를 thumbnail에 저장하기 
      const formData = new FormData();
      formData.append('userThumbnail', this.userThumbnail)
      axios.post('http://localhost:8080/getImage', formData, {
        headers: {
          'Content-Type' : 'multipart/form-data'
        }
      })
      .then( res => {
        // console.log(res.data.object.thumbnail) 
        // console.log(res.data.object.thumbnailType)
        // console.log(this.userThumbnail)
        this.thumbnail = res.data.object.thumbnail
        this.thumbnailType = res.data.object.thumbnailType
      })
      .catch( res => {
        console.log(res)
      })
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
      // 보여지는 이미지
      thumbnail: null,
      thumbnailType : null,
      subjectElem: null,
      // 이미지 업로드 여부
      userThumbnail: null,
      isImgUpload : false,

      form: Object.assign({}, defaultForm),
      education: ['중졸 이하', '고졸', '대학교(2년)졸업', '대학교(4년) 졸업', '대학원 졸업'],
      status: ['학생', '구직 중', '재직 중', '기타'],
      subjectsList: ['공학계열', '예체능계열', '의학계열', '인문사회계열', '자연과학계열'],
      engineering : [],
      arts: [],
      medical: [],
      society: [],
      science: [],
      // subjects: [
      //   {'subject': '인문계열', 'value': 100391}, 
      //   {'subject': '사회계열', 'value': 100392}, 
      //   {'subject': '교육계열', 'value': 100393}, 
      //   {'subject': '공학계열', 'value': 100394}, 
      //   {'subject': '자연계열', 'value': 100395}, 
      //   {'subject': '의약계열', 'value': 100396}, 
      //   {'subject': '예체능계열', 'value': 100397}
      // ],
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
    axios.post(`http://${this.$store.state.address}:8080/getUser`, {
      id: this.loginUID
    })
    .then(res => {
      // console.log("getUser Success.")
      // console.log(res.data)
      this.host = res.data.object
      this.thumbnail = this.host.userThumbnail
      this.thumbnailType =this.host.imageType
    })
    .catch( function(error) {
      // console.log(this.hostUID)
      console.log(error)
    })

    // desiredFields 가져오기
    // console.log('Import desireFields')
    // let df = []
    
    let df = this.$store.state.license.ncs_fields
    for (var j = 0; j < df.length; j++) {
      let str = df[j]["ncsCategoryName1"]
      console.log(str)
      console.log(typeof(str))
      df.push(str)
    }
    console.log(df)
    this.desiredFields = df
    
   
    // console.log(this.desiredFields)

    // 전공 정보 가져오기
    axios.get(`http://${this.$store.state.address}:3000/setting/majors.json`)
    .then( res => {
      // console.log(res.data)
      res.data.forEach((elem) => {
        // console.log(elem)
        if(elem.subject == '공학계열') {
          this.engineering.push(elem.major)
        } else if(elem.subject == '예체능계열') {
          this.arts.push(elem.major)
        } else if(elem.subject == '의학계열') {
          this.medical.push(elem.major)
        } else if(elem.subject == '인문사회계열') {
          this.society.push(elem.major)
        } else {
          this.science.push(elem.major)
        } 
      })
      // console.log(this.society)
    })
    .catch( res => {
      console.log(res)
    })
  },
  methods: {
    cancel() {
      this.$router.push({name: 'Setting', params: { UID: this.$store.state.member.loginUID }})
    },
    update() {
      const formData = new FormData();
      formData.append('id', this.host.id)
      formData.append('userEmail', this.host.userEmail)
      formData.append('userName', this.host.userName)
      formData.append('userContent', this.host.userContent)
      formData.append('password', this.host.password)
      formData.append('major', this.host.major)
      formData.append('education', this.host.education)
      formData.append('field1', this.host.field1)
      formData.append('desiredField1', this.host.desiredField1)
      formData.append('desiredField2', this.host.desiredField2)
      formData.append('desiredField3', this.host.desiredField3)
      formData.append('isSecret', this.host.isSecret)
      // 이미지 수정했을 때 
      if(this.isImgUpload) {
        formData.append('userThumbnail', this.userThumbnail)   
        axios.post(`http://${this.$store.state.address}:8080/updateMyInfoWithImage`, formData, {
          headers: {
            'Content-Type' : 'multipart/form-data'
          }
        })
        .then( res => {
          alert('회원정보가 수정되었습니다.')
          console.log(res) 
        })
        .catch( res => {
          console.log('err')
          console.log(res)
        })
        .finally(function(){
          console.log('fin')
        })
      } else {
        // 이미지 수정 안했을 때
        axios.post(`http://${this.$store.state.address}:8080/updateMyInfoNoImage`, formData, {
          headers: {
            'Content-Type' : 'multipart/form-data'
          }
        })
        .then( res => {
          alert('회원정보가 수정되었습니다.')
          console.log(res) 
        })
        .catch( res => {
          console.log('err')
          console.log(res)
        })
      }
      
    },
  }
}
</script>

<style scoped>
.thumbnail {
  object-fit: cover;
  border-radius: 90%;
  width: 100px;
  /* max-width: 100%; */
  height: 100px;
}
</style>