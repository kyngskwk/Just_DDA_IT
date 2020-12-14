<template>
  <div class="license">
    <p class="title mb-0"><span>DDA IT.</span>에서 자격증을 검색해보세요</p>
    <LicenseSearch />
    <LicenseBanner :recList="recList" :userList="userList" />
    <LicenseField style="background-color: #fff8f7" class="pb-10" />
    <!-- <LicenseStudyList /> -->
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import LicenseField from "../components/License/LicenseField.vue";
import LicenseSearch from "../components/License/LicenseSearch.vue";
import LicenseBanner from "../components/License/LicenseBanner.vue";
// import LicenseStudyList from '../components/License/LicenseStudyList.vue'

export default {
  name: "License",
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

    // 유저 정보에 기반하여 맞춤 자격증 3개를 받아옴
    axios
      .get(
        `http://${this.$store.state.address}:8080/license/recommendLicense`,
        {
          params: {
            UID: this.uid,
          },
        }
      )
      .then((res) => {
        this.recList = res.data.object;
      })
      .catch((err) => console.log(err.message));

    // 유저정보를 가져옴 -> desiredField에서 대분류 가져와서 아무거나 추천고고
    axios
      .post(`http://${this.$store.state.address}:8080/getUser`, {
        id: this.uid,
      })
      .then((res) => {
        let arr = [
          res.data.object.desiredField1,
          res.data.object.desiredField2,
          res.data.object.desiredField3,
        ];
        // console.log(arr);
        // 사용자의 대분류에 맞는 자격증 추천을 위해 대분류에서 자격증을 검색해들어감
        for (var j = 0; j < arr.length; j++) {
          if (arr[j] !== null) {
            let subArr = this.$store.state.license.ncs_fields;
            let ncs2 = null;
            let licenses = [];
            for (let k = 0; k < subArr.length; k++) {
              if (arr[j] === subArr[k]["ncsCategoryName1"]) {
                ncs2 = subArr[k]["ncsCategory2"];
                for (let l = 0; l < ncs2.length; l++) {
                  licenses = licenses.concat(ncs2[l].licenses);
                }
                // console.log(licenses.length);
                let lic_len = licenses.length;
                let n1 = Math.floor(Math.random() * lic_len);
                let n2 = Math.floor(Math.random() * lic_len);
                // console.log(n1, "dtd", n2);
                let ar = [licenses[n1], licenses[n2]];
                this.userList = ar;
              }
            }
          }
        }
      })
      .catch(function (err) {
        console.log(err.message);
      });
  },
  data() {
    return {
      userList: [],
      recList: [],
      uid: null,
      isUserLogin: "",
      des: "",
    };
  },
};
</script>

<style>
.title {
  color: #fd462e;
  text-align: center;
  font-size: 20px;
}
.title > span {
  font-family: "Roboto", sans-serif;
  margin: 0 4px;
  font-weight: 800;
}
/* .license {
  background-color: #d3d3d3;
} */
</style>
