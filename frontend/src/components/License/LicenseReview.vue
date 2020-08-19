<template>
  <div class="py-4 px-2 mb-10">
    <!-- 버튼을 누르면 아래의 폼이 활성화 -> 리뷰 작성가능 -->
    <v-switch
      v-model="switch1"
      id="reviewSwitch"
      :label="`${ licenseInfo.licenseName } 리뷰 작성하기`"
      color="#fd462e"
      class="font_k"
    ></v-switch>

    <div v-show="switch1">
      <v-alert v-if="!isUserLogin" type="error" class="font_k">로그인해야 작성이 가능합니다.</v-alert>

      <v-form v-else ref="form" v-model="valid" lazy-validation class="text-center pt-10">
        <span class="font_k">이 자격증의 난이도는 어땠나요?</span>
        <!-- 리뷰 별점 -->
        <v-rating
          v-model="rating"
          :length="10"
          :hover="true"
          :readonly="false"
          :size="size"
          :dense="false"
          color="#fd462e"
          background-color="#fd462e"
          class="pt-3 pb-10"
        ></v-rating>

        <!-- 하루공부시간 -->
        <v-slider
          v-model="reviewHours"
          color="green"
          label="하루 공부 시간"
          min="1"
          max="24"
          class="font_k"
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
          class="font_k"
        ></v-slider>

        <!-- 리뷰 글 쓰기 -->
        <v-text-field
          v-model="reviewContent"
          :counter="255"
          :rules="reviewRules"
          label="리뷰를 작성해 주세요"
          required
          class="font_k"
        ></v-text-field>

        <!-- 리뷰 작성 버튼 -->
        <v-btn
          :disabled="!valid"
          color="#fd462e"
          class="mr-4 my-10 text-white font_k rounded-xl"
          block
          @click="validate"
        >작성하기</v-btn>
      </v-form>
    </div>

    <!-- 리뷰 리스트 보여줌 -->
    <p class="mt-10 font_k">다른 사람의 리뷰를 확인해 보세요!</p>
    <hr />
    <v-card
      v-for="reviewArr in reviewArray.slice().reverse()"
      :key="reviewArr.key"
      class="font_k rounded-xl pa-2 px-3 mr-2 mb-5"
      color="#fff4f3"
    >
      <div class="d-flex justify-content-between">
        <div class="d-flex justify-content-start">
          <v-list-item-avatar>
            <v-img
              v-if="reviewArr.reviewWriter.userThumbnail != null"
              :src="'data:' + reviewArr.reviewWriter.imageType + ';base64,' + reviewArr.reviewWriter.userThumbnail"
            ></v-img>
            <v-img
              v-if="reviewArr.reviewWriter.userThumbnail == null"
              src="../../../public/profile/profile.png"
            ></v-img>
          </v-list-item-avatar>
          <div
            class="pt-4 font-weight-bold"
            style="color:#fd462e"
          >{{ reviewArr.reviewWriter.userName }}</div>
        </div>
        <div class="pt-3">
          <v-chip outlined color="#fd462e">
            <span>📆</span>
            <span
              class="badge badge-light ml-2 rounded-xl text-white"
              style="background-color:#fd462e"
            >{{reviewArr.reviewDuration}}</span>
            <span>일</span>
            <span class="pl-3">🕔</span>
            <span
              class="badge badge-light ml-2 rounded-xl text-white"
              style="background-color:#fd462e"
            >{{ reviewArr.reviewHours }}</span>
            <span>시간</span>
          </v-chip>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <v-chip color="#ffffff">
          <span class="pr-2">체감 난이도</span>
          <span v-for="(item, i) in  reviewArr.reviewRating" :key="i">⭐</span>
        </v-chip>
      </div>
      <div class="d-flex justify-space-between">
        <div class="my-3" style="color:#505050">{{ reviewArr.reviewContents }}</div>
        <v-btn
            v-if="isWritter(reviewArr.reviewWriter.id)"
            class="badge badge-light ml-2 rounded-xl text-white"
            style="background-color:#fd462e"
            @click="deleteReview(reviewArr)"
          >삭제</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LicenseReview",
  props: {
    licenseInfo: {
      type: Object,
    },
  },
  created() {
    //로그인 정보 가져오는 함수
    if (localStorage.getItem("loginUID")) {
      this.isUserLogin = true;
      this.uid = localStorage.getItem("loginUID");
    } else if (sessionStorage.getItem("loginUID")) {
      this.isUserLogin = true;
      this.uid = sessionStorage.getItem("loginUID");
    } else {
      this.isUserLogin = false;
    }
  },
  mounted: function () {
    axios
      .get(`http://${this.$store.state.address}:8080/license/getReview`, {
        params: {
          licenseCode: this.licenseInfo.licenseCode,
        },
      })
      .then((res) => {
        if (res.data.object.length === 0) {
          this.reviewArray = [];
        } else {
          this.reviewArray = res.data.object;
        }
      })
      .catch((err) => console.log("LicenseReview Error: ", err.message));
  },
  
  methods: {
    getReviews() {
      axios
        .get(`http://${this.$store.state.address}:8080/license/getReview`, {
          params: {
            licenseCode: this.licenseInfo.licenseCode,
          },
        })
        .then((res) => {
          if (res.data.object.length === 0) {
            this.reviewArray = [];
          } else {
            this.reviewArray = res.data.object;
          }
        })
        .catch((err) => console.log("LicenseReview Error: ", err.message));
    },
    deleteReview(review) {
      console.log(review);
      axios
        .get(`http://${this.$store.state.address}:8080/license/deleteReview`, {
          params: {
            id: review.id,
          },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
    validate() {
      this.$refs.form.validate();

      // 로그인이 되어 있는 경우에만 실행됨
      if (this.isUserLogin) {
        axios
          .post(`http://${this.$store.state.address}:8080/license/addReview`, {
            licenseCode: this.licenseInfo.licenseCode,
            reviewHours: this.reviewHours,
            reviewRating: this.rating,
            reviewContents: this.reviewContent,
            reviewDuration: this.reviewDuration,
            // 아마 유저정보 필요할건데
            uid: this.uid,
          })
          .then((res) => {
            // console.log( res.data )
            this.reviewArray = res.data.object;
            this.rating = 0;
            this.reviewContent = "";
            this.reviewDuration = null;
            this.reviewHours = null;
            this.switch1 = false;
          })
          .catch((err) => console.log(err.message));
      } else {
        this.isUserLogin = !this.isUserLogin;
      }
    },
    isWritter: function(reviewWritterId) {
      let b = false
      if (this.uid == reviewWritterId) {
        b = true
      } 
      return b
    }
  },
  computed: {
    
  },
  watch: {
    switch1: function () {
      this.rating = 0;
      this.reviewContent = "";
      this.reviewDuration = null;
      this.reviewHours = null;
    },
  },
  data: function () {
    return {
      // 리뷰폼에 사용되는 변수들
      uid: null,
      switch1: false,
      rating: 0,
      reviewHours: null,
      reviewDuration: null,
      reviewContent: "",
      isUserLogin: null,
      // 리뷰폼 설정위한 색깔정보
      color: "yellow darken-3",
      bgColor: "yellow darken-2",
      // validate 검사 및 충족조건 노출
      reviewRules: [
        (v) => !!v || "리뷰를 작성해 주세요",
        (v) =>
          (v && v.length <= 255) || "리뷰는 255자 이상 작성하실 수 없습니다.",
      ],
      reviewArray: {
        type: Array,
      },
    };
  },
};
</script>

<style scoped>
</style>