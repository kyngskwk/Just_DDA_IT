<template>
  <div class="confirm">
    <div class="banner-title">
      이런
      <span>자격증</span>은 어때요
      <span>?</span>
    </div>
    <carousel-3d width="270" height="300" clickable>
      <slide v-for="(item,i) in newItems" :index="i" :key="i" class="licslide">
        <div class="d-flex flex-column align-center justify-center">
          <v-img :src="item.src" @click="searchRoomList(item.topic)" class="mt-3 rounded-xl" alt="#" height="200" width="200"></v-img>
          <p class="text-center pt-5 lictopic">{{ item.topic }}</p>
        </div>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import axios from 'axios'
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "LicenseBanner",
  components: {
    Carousel3d,
    Slide,
  },
  props: {
    userList: {
      type: Array,
    },
    recList: {
      type: Array,
    },
  },
  created: function () {
    this.slides = [].forEach();
  },
  computed: {
    newItems: function () {
      let it = [];
      // console.log(typeof this.recList, typeof this.userList);
      let thisArray = this.recList.concat(this.userList);
      if (this.recList.length !== 0 && this.userList.length !== 0) {
        for (var i = 0; i < thisArray.length; i++) {
          var n1 = Math.ceil(Math.random() * 4);
          var n2 = Math.ceil(Math.random() * 5);
          // console.log(`../../../public/license/img/0${n1}/0${n1}-${n2}.png`);
          it.push({
            src: require(`../../../public/license/img/0${n1}/0${n1}-${n2}.png`),
            topic: thisArray[i].licenseName,
          });
        }
      } else {
        it = [
          {
            src: require("../../../public/license/img/01/01-1.png"),
            topic: "정보처리기사",
          },
          {
            src: require("../../../public/license/img/01/01-2.png"),
            topic: "버섯산업기사",
          },
          {
            src: require("../../../public/license/img/01/01-3.png"),
            topic: "건축기사",
          },
          {
            src: require("../../../public/license/img/01/01-4.png"),
            topic: "보석감정사",
          },
          {
            src: require("../../../public/license/img/01/01-5.png"),
            topic: "시각디자인기사",
          },
        ];
      }
      return it;
    },
  },
  methods: {
    searchRoomList: function (topic) {
      axios.get(`http://${this.$store.state.address}:8080/license/getByKeyword`, {
          params: {
            keyword: topic,
          }
        })
        .then((res) => {
          // console.log(res.data)
          let arr = res.data.object;
          for (let i = 0; i < arr.length; i++) {
            if (arr[i].licenseName === topic) {
              this.$store.state.license.selectedLicense = arr[i]
            }
          this.$router.push({ name: "LicenseResultDetail" })
          }

        })
        .catch((err) => console.log('LicenseResult Error ', err.message))
    },
  },
  data: function () {
    return {
      slides: {
        type: Array,
      },
      
    };
  },
};
</script>

<style>
.banner-title {
  text-align: center;
  font-family: "Black Han Sans", sans-serif;
  color: #3c3c3c;
  text-align: center;
  font-size: 30px;
}
.banner-title > span {
  color: #fd462e;
}
.confirm {
  background-color: #ececec;
  padding: 10px 0px 15px 0px;
}
.licslide {
  border: 0px;
  border-radius: 15px;
  background-color: #fcfcfc;
}
.lictopic {
  text-align: center;
  font-family: "Black Han Sans", sans-serif;
  color: #3c3c3c;
  text-align: center;
  font-size: 30px;
}
</style>
