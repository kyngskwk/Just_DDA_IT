<template>
  <v-carousel height="300" show-arrows-on-hover>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'LicenseBanner',
  data: function() {
    return {
      slides: {
        type: Array
      },
      items: [
          {
            src: require("../../../public/license/banner/Colors-Banner-PNG.png"),
          },
          {
            src: require("../../../public/license/banner/Vector-Banner-PNG.png"),
          },
          {
            src: require("../../../public/license/banner/Ribbon-Banner-PNG.png"),
          },
          {
            src: require("../../../public/license/banner/Yellow-Banner-PNG.png"),
          },
        ],
    }
  },
  created: function() {
    this.slides = [].forEach()
  }
}
</script>

<style>

</style>
