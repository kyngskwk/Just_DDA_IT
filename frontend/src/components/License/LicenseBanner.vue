<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
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
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: '../../assets/license/banner/Ribbon-Banner-PNG.png',
          },
          {
            src: '@/assets/license/banner/Vector-Banner-PNG.png',
          },
          {
            src: '@/assets/license/banner/Yellow-Banner-PNG.png',
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
