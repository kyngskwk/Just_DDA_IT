<template>
  <v-carousel cycle height="300" hide-delimiters interval="4000" show-arrows-on-hover>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      hide-delimiter-background
      height=100%
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'HomeBanner',
  data: function() {
    return {
      items: [
          {
            src: require("../../../public/license/banner/allddait.png"),
          },
          {
            src: require("../../../public/license/banner/ddaittoeic.png"),
          },
          {
            src: require("../../../public/license/banner/ddaitcorona.png"),
          }
        ],
    }
  }
}
</script>

<style>

</style>
