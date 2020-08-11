<template>
<div class="confirm">
  <div class="banner-title">이런 <span>자격증</span>은 어때요<span>?</span></div>
  <carousel-3d height="380px">
    <slide v-for="(item,i) in items" :index="i" :key="i" class="licslide" height="400px">
      <v-img :src="item.src" alt="#" height="300px"></v-img>
      <p class="text-center pt-5 lictopic">{{ item.topic }}</p>
    </slide>
  </carousel-3d> 
</div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "LicenseBanner",
  components: {
    Carousel3d,
    Slide,
  },
  data: function () {
    return {
      slides: {
        type: Array,
      },
      items: [
        {
          src: require("../../../public/license/img/01/01-1.png"),
          topic: "사업관리"
        },
        {
          src: require("../../../public/license/img/01/01-2.png"),
          topic: "경영, 회계, 사무"
        },
        {
          src: require("../../../public/license/img/01/01-3.png"),
          topic: "금융, 보험"
        },
        {
          src: require("../../../public/license/img/01/01-4.png"),
          topic: "교육, 자연, 사회과학"
        },
        {
          src: require("../../../public/license/img/01/01-5.png"),
          topic: "보건, 의료"
        }
      ],
    };
  },
  created: function () {
    this.slides = [].forEach();
  },
};
</script>

<style>
.banner-title {
  text-align: center;
  font-family: 'Black Han Sans', sans-serif;
  color: #3c3c3c;
  text-align: center;
  font-size: 30px;
}
.banner-title > span {
  color: #fd462e;
}
.confirm {
  background-color: #ececec;
  padding:10px 0px 30px 0px;
}
.licslide {
  border: 0px;
  border-radius: 15px;
  background-color: #fcfcfc;
}
.lictopic {
  text-align: center;
  font-family: 'Black Han Sans', sans-serif;
  color: #3c3c3c;
  text-align: center;
  font-size: 30px;
}
</style>
