<template>
  <carousel-3d>
    <slide v-for="(item,i) in items" :index="i" :key="i">
      <v-img :src="item.src" alt="#"></v-img>
    </slide>
  </carousel-3d>
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
          src: require("../../../public/license/banner/test-logo-1.png"),
        },
        {
          src: require("../../../public/license/banner/test-logo-2.png"),
        },
        {
          src: require("../../../public/license/banner/test-logo-1.png"),
        },
        {
          src: require("../../../public/license/banner/test-logo-2.png"),
        },
        {
          src: require("../../../public/license/banner/test-logo-1.png"),
        },
        {
          src: require("../../../public/license/banner/test-logo-2.png"),
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
</style>
