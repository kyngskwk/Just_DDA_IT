<template>
  <div class="license">
    <p class="title mb-0"><span>DDA IT.</span>에서 자격증을 검색해보세요</p>
    <LicenseSearch />
    <LicenseBanner />
    <LicenseField style="background-color:#fff8f7" class="pb-10"/>
    <!-- <LicenseStudyList /> -->
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import LicenseField from '../components/License/LicenseField.vue'
import LicenseSearch from '../components/License/LicenseSearch.vue'
import LicenseBanner from '../components/License/LicenseBanner.vue'
// import LicenseStudyList from '../components/License/LicenseStudyList.vue'

export default {
  name: 'License',
  components: {
    LicenseField,
    LicenseSearch,
    LicenseBanner,
    // LicenseStudyList
  }, 
  created: function () {
    //로그인 정보 가져오는 함수
    if (localStorage.getItem("loginUID")) {
      this.isUserLogin = true;
      this.uid = localStorage.getItem("loginUID");
      this.des = localStorage.getItem("desiredField");
    } else if (sessionStorage.getItem("loginUID")) {
      this.isUserLogin = true;
      this.uid = sessionStorage.getItem("loginUID");
      this.des = localStorage.getItem("desiredField");
    } else {
      this.isUserLogin = false;
    }

    axios
      .get(
        `http://localhost:8080/license/recommendLicense`,
        {
          params: {
            UID: this.uid,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data));

    axios
      .post(`http://${this.$store.state.address}:8080/getUser`, {
        id: this.uid,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  data() {
    return {
      uid: "",
      isUserLogin: "",
      des: "",
    }
  }
}
</script>

<style>
.title {
  color: #fd462e;
  text-align: center;
  font-size: 20px;
}
.title > span {
  font-family: 'Roboto', sans-serif;
  margin: 0 4px;
  font-weight: 800;
}
/* .license {
  background-color: #d3d3d3;
} */

</style>
