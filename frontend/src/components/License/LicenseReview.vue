<template>
  <div class="p-4">
    <!-- 버튼을 누르면 아래의 폼이 활성화 -> 리뷰 작성가능 -->
    <v-switch v-model="switch1" :label="`${ licenseInfo.licenseName } 리뷰 작성하기`"></v-switch>

    <div v-show="switch1">
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
    <span> Review List will be here </span>
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
  methods: {
    validate() {
      this.$refs.form.validate();
      axios.get(URL, {
        params: {
          "licenseCode": this.licenseInfo.licenseCode,
          "reviewHours": this.reviewHours,
          "reviewRating": this.rating,
          "reviewContent": this.reviewContent,
          "reviewDuration": this.reviewDuration,
          // 아마 유저정보 필요할건데
          "uid": this.uid,
        }
      })
        .then( res => {console.log( res.data )})
        .catch(err => console.log( err.message ))
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
      uid: 123456789,
      switch1: true,
      rating: 0,
      reviewHours: null,
      reviewDuration: null,
      reviewContent: "",
      // 리뷰폼 설정위한 색깔정보
      color: "yellow darken-3",
      bgColor: "yellow darken-2",
      // validate 검사 및 충족조건 노출
      reviewRules: [
        (v) => !!v || "리뷰를 작성해 주세요",
        (v) =>
          (v && v.length <= 255) || "리뷰는 255자 이상 작성하실 수 없습니다.",
      ],

      // 리뷰리스트
      reviewList: {
        type: Array,
      }
    };
  },
};
</script>

<style>
</style>