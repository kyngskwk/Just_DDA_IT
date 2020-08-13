<template>
  <div class="p-4">
    <!-- 버튼을 누르면 아래의 폼이 활성화 -> 리뷰 작성가능 -->
    <v-switch v-model="switch1" :label="`${ licenseInfo.licenseName } 리뷰 작성하기`"></v-switch>

    <div v-show="switch1">
      <v-alert type="error" :value="!isUserLogin">
      로그인해야 작성이 가능합니다. 
      </v-alert>

      <v-form ref="form" v-model="valid" lazy-validation>
        <span>이 자격증의 난이도는 어땠나요?</span>
        <!-- 리뷰 별점 -->
        <v-rating
          v-model="rating"
          :length="10"
          :hover="true"
          :readonly="false"
          
          :size="size"
          :dense="false"
          :color="color"
          :background-color="bgColor"
        ></v-rating>

        <!-- 하루공부시간 -->
        <v-slider
          v-model="reviewHours"
          color="green"
          label="하루 공부 시간"
          min="1"
          max="24"

          thumb-label
        ></v-slider>

        <!-- 공부기간 -->
        <v-slider
          v-model="reviewDuration"
          color="orange"
          label="공부 기간"
          min="1"
          max="50"
          thumb-label
        ></v-slider>

        <!-- 리뷰 글 쓰기 -->
        <v-text-field
          v-model="reviewContent"
          :counter="255"
          :rules="reviewRules"
          label="리뷰를 작성해 주세요"
          required
        ></v-text-field>

        <!-- 리뷰 작성 버튼 -->
        <v-btn :disabled="!valid" color="primary" class="mr-4" @click="validate">작성하기</v-btn>
      </v-form>
    </div>

    <!-- 리뷰 리스트 보여줌 -->
    <span>다른 사람의 리뷰를 확인해 보세요!</span>
    <hr>
    <ul v-for="reviewArr in reviewArray" :key="reviewArr.key">
      <li>작성자: {{ reviewArr.reviewWriter.userName }}</li>
      <li>내용: {{ reviewArr.reviewContents }}</li>  
      <li>공부기간: {{ reviewArr.reviewDuration }}</li>
      <li>하루공부시간: {{ reviewArr.reviewHours }}</li>
      <li>난이도: {{ reviewArr.reviewRating }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "LicenseReview",
  props: {
    licenseInfo: {
      type: Object,
    },
  },
  mounted: function() {
    axios.get('http://localhost:8080/license/getReview', {
      params: {
        "licenseCode": this.licenseInfo.licenseCode
      }
    })
      .then(res => {
        // console.log(res.data)
        if (res.data.object.length === 0) {
          this.reviewArray = []
        } else {
          this.reviewArray = res.data.object
        }
        })
      .catch(err => console.log("LicenseReview Error: ", err.message))
  },
  methods: {
    validate() {
      this.$refs.form.validate();

      // 로그인이 되어 있는 경우에만 실행됨
      if (!this.$store.state.member.isLogin){
        axios.post("http://localhost:8080/license/addReview", {


          "licenseCode": this.licenseInfo.licenseCode,
          "reviewHours": this.reviewHours,
          "reviewRating": this.rating,
          "reviewContents": this.reviewContent,
          "reviewDuration": this.reviewDuration,
          // 아마 유저정보 필요할건데
          "uid": this.uid,
        })
          .then( res => {
            // console.log( res.data )
            this.reviewArray = res.data.object
            this.rating = 0;
            this.reviewContent = ""
            this.reviewDuration = null
            this.reviewHours = null
          })
          .catch(err => console.log( err.message ))
      } else {
        this.isUserLogin = !this.isUserLogin
      }
    },
  },
  watch: {
    switch1: function () {
      this.rating = 0;
      this.reviewContent = ""
      this.reviewDuration = null
      this.reviewHours = null
    },
  },
  data: function () {
    return {
      // 리뷰폼에 사용되는 변수들
      uid: 1,
      switch1: false,
      rating: 0,
      reviewHours: null,
      reviewDuration: null,
      reviewContent: "",
      isUserLogin: false,
      // 리뷰폼 설정위한 색깔정보
      color: "yellow darken-3",
      bgColor: "yellow darken-2",
      // validate 검사 및 충족조건 노출
      reviewRules: [
        () => this.isUserLogin || "로그인을 해 주세요",
        (v) => !!v || "리뷰를 작성해 주세요",
        (v) =>
          (v && v.length <= 255) || "리뷰는 255자 이상 작성하실 수 없습니다.",
      ],
      reviewArray: {
        type: Array
      }
    };
  },
};
</script>

<style>
</style>