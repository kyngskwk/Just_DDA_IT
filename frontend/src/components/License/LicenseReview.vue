<template>
  <div class="p-4">
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
  </div>
</template>

<script>
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
      reviewHours: null,
      reviewDuration: null,
      color: "yellow darken-3",
      rating: 0,
      bgColor: "yellow darken-2",
      switch1: true,
      reviewContent: "",
      reviewRules: [
        (v) => !!v || "리뷰를 작성해 주세요",
        (v) =>
          (v && v.length <= 255) || "리뷰는 255자 이상 작성하실 수 없습니다.",
      ],
    };
  },
};
</script>

<style>
</style>