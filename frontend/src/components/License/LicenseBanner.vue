<template>
  <v-carousel height="200" hide-delimiters>
    <v-carousel-item
      class="fill-width"
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
            src: require("../../../public/license/banner/test-logo-1.png"),
          },
          {
            src: require("../../../public/license/banner/test-logo-2.png"),
          }
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
