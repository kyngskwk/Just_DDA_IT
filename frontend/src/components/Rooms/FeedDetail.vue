<template>
  <div class="container">
    <div v-if="isLogin">
      <v-btn class="ml-3 fixed-top backbtn" fab dark small color="#fd462e" @click="goBack">
        <v-icon dark>mdi-arrow-left</v-icon>
      </v-btn>
      <!--피드 부분-->
      <div class="mb-3 d-flex justify-content-between">
        <div class="d-flex justify-content-start">
          <v-avatar>
            <v-img v-if="this.feed.member.userThumbnail != null" :src="'data:' + this.feed.member.imageType + ';base64,' + this.feed.member.userThumbnail"></v-img>
            <v-img v-if="this.feed.member.userThumbnail == null" src="../../../public/profile/profile.png"></v-img>
          </v-avatar>
          <div class="pt-3 ml-4">
            <a @click="goProfile" class="font_k pf-text">{{ feed.member.userName }}</a>
          </div>
        </div>
        <div v-if="this.feed.member.id == this.UID" class="pt-2">
          <v-btn text color="#fd462e" style="border:1px solid #fd462e" rounded outlined @click="editfeed">
            수정
          </v-btn>
          <v-btn text style="background-color:#fd462e" rounded class="text-white ml-2" @click="feedsnackbar=true">
            삭제
          </v-btn>
        </div>
      </div>  
      <v-card class="pa-0 d-flex">
        <div class="feed-card" style="width:100%">
          <div class="thumb">
            <img :src="this.studyImage" class="card-img-top content" alt="..." style="min-height:100%">
          </div>
            <!--stamp찍기-->
            <img v-if="this.studyDegree <= 10" src="../../../public/feed/1.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 20" src="../../../public/feed/2.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 30" src="../../../public/feed/3.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 40" src="../../../public/feed/4.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 50" src="../../../public/feed/5.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 60" src="../../../public/feed/6.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 70" src="../../../public/feed/7.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 80" src="../../../public/feed/8.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 90" src="../../../public/feed/9.png" alt="" class="stampimg">
            <img v-else-if="this.studyDegree <= 100" src="../../../public/feed/10.png" alt="" class="stampimg">
        
          <div class="card-body text-left">
            <!--피드 좋아요-->
            <div class="mb-2 d-flex">
              <div>
                <i v-if="isLike" class="fas fa-heart fa-lg like-button"  style="color:crimson" @click="likeColor"></i>
                <i v-else class="fas fa-heart fa-lg like-button"  @click="likeColor"></i>
              </div>
              <div>
                <p class="ml-2" v-if ="!isLike"><span class="text-danger font-weight-bold">{{ this.likeList.length }}</span>명이 좋아합니다.</p>
                <p class="ml-2" v-if ="isLike && this.likeList.length == 1"><span class="text-danger font-weight-bold">{{ name }}님</span>이 좋아합니다.</p>
                <p class="ml-2" v-if ="isLike && this.likeList.length != 1"><span class="text-danger font-weight-bold">{{ name }}님 외 {{ this.likeList.length -1 }}</span>명이 좋아합니다.</p>
              </div>
            </div>
            <p class="card-text"><a @click="goProfile"><span class="font-weight-bold feedname">{{ this.feed.member.userName }}</span></a> {{ this.feed.studyContent }}</p>
            <!--댓글 부분-->
          </div>
          <div class="card-body text-left px-0 pb-3v pt-0">
            <FeedCommentList :feedId="feedId" :onLoading="onLoading"/>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <small class="text-muted pt-2">{{ this.feedDate }}</small>
          </div>

        </div>
      </v-card>
      
      <!--댓글 작성-->
      <div class="form-group mt-5">
        <label for="comment" class="mb-1 font_k">댓글</label>
        <div>
          <div class="d-flex justify-content-between">
            <input type="text" class="form-control commentinput font_k rounded-xl" v-model="studyComment">
            <button class="btn commentbtn ml-2 rounded-xl font_k text-white" style="background-color:#fd462e" @click="commentInput" :disabled="this.studyComment.length < 1">댓글</button>
          </div>
        </div>
        <small class="form-text text-muted font_k">댓글을 작성해 주세요.</small>
      </div>
      <!--댓글 뒤로가기 알람-->
      <v-snackbar v-model="snackbar">
        작성중인 댓글이 있습니다.
        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">취소하기</v-btn>
          <v-btn color="blue" text v-bind="attrs" @click="commentBack">뒤로가기</v-btn>
        </template>
      </v-snackbar>
      <!--댓글 정상 알람-->
      <v-snackbar v-model="snackbar2">
        댓글이 정상적으로 작성되었습니다.
        <template v-slot:action="{ attrs2 }">
          <v-btn color="pink" text v-bind="attrs2" @click="snackbar2 = false">확인</v-btn>
        </template>
      </v-snackbar>
      <!--피드 삭제-->
      <v-snackbar v-model="feedsnackbar">
        피드를 정말로 <br> 삭제할까요?
        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="feedsnackbar = false">취소하기</v-btn>
          <v-btn color="blue" text v-bind="attrs" @click="delfeed">삭제하기</v-btn>
        </template>
      </v-snackbar>

    </div>
    <div v-if="!isLogin" class="notLogin text-center">
      <h5>로그인하러 바로가기</h5>
      <v-btn @click="goLogin" class="mt-5">로그인</v-btn>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import FeedCommentList from '../Rooms/FeedCommentList.vue'

export default {
  name: 'FeedDetail',
  components: {
    FeedCommentList
  },
  props: {
    roomId: {
      type: Number,
      required: true
    },
    feedId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      UID: null,
      isLogin: false,
      feed:'',
      feedDate: '',
      userName: '',
      color: false,
      studyComment: '',
      snackbar: false,
      snackbar2: false,
      name: '',
      member: '',
      onLoading: false,
      isLike: false,
      likeList: '',
      feedsnackbar: false,
      studyImage: '',
      studyDegree: ''
    }
  },
  created() {
    if(localStorage.getItem('loginUID')){
      this.isLogin = true
      this.UID = localStorage.getItem('loginUID')
    } else if(sessionStorage.getItem('loginUID')) {
      this.isLogin = true
      this.UID = sessionStorage.getItem('loginUID')
    } else {
      this.isLogin = false
    }
  },
  methods: {
    goProfile() {
      this.$router.push({name: 'MyStudy', params: { UID:this.feed.member.id }})
    },
    goLogin(){
      this.$router.push('/accounts/login')
    },
    goBack() {
      if(this.studyComment.length >= 1){
        this.snackbar = true
      }
      else {
        this.$router.push({name: 'RoomDetail' , params: { roomId:this.roomId }})
      }
    },
    commentBack(){
      this.snackbar = false
      this.$router.push({name: 'RoomDetail' , params: { roomId:this.roomId }})
    },
    // 좋아요 구현
    likeColor() {
      // this.color = !this.color
      var likeObject = {
          'feedId': this.feedId,
          'uid': this.UID
      }
      axios.post(`http://${this.$store.state.address}:8080/feed/likeFeed`, likeObject)
      .then(response => {
        console.log("눌렀따.")
        console.log(response)
        axios.get(`http://${this.$store.state.address}:8080/feed/getIsMyLike`, {
          params: {
              'feedId': this.feedId,
              'UID': this.UID
            }
        })
        .then(response => {
          console.log('like')
          console.log(response)
          this.isLike = response.data.object
        })
        axios.get(`http://${this.$store.state.address}:8080/feed/getLikeList`, {
          params: {
              'feedId': this.feedId,
              'UID': this.UID
            }
        })
        .then(response => {
          console.log('list')
          console.log(response)
          this.likeList = response.data.object
        })
      })
      
    },
    // 댓글 구현
    commentInput() {
      var comment = {
        'studyComment': this.studyComment,
      }
      axios.post(`http://${this.$store.state.address}:8080/feed/addComment`, comment, {
        params: {
          'feedId': this.feedId,
          'UID': this.UID
        }
      })
      .then(response => {
        console.log(response)
        this.snackbar2 = true
        this.studyComment = ''
        this.onLoading =! this.onLoading
      })
      console.log(this.onLoading)
    },
    // 피드 삭제
    delfeed() {
        axios.get(`http://${this.$store.state.address}:8080/feed/delete`, {
          params: {
            'feedId': this.feedId
         }
       })
      .then(response => {
        console.log(response)
        this.$router.push({name: 'RoomDetail', params: { roomId:this.roomId }})
      })
      .error(res=>{
        console.log(res);
      })
    },
    // 피드 수정
    editfeed() {
      this.$router.push({name: 'FeedUpdate', params: { roomId:this.roomId, FeedId:this.feedId}})
    }
  },
  mounted() {
    console.log('방id:'+ this.roomId)
    this.member = this.$store.state.member
    axios.post(`http://${this.$store.state.address}:8080/getUser`, {
      id: this.UID
    })
    .then(res => {
      console.log("getUser Success.");
      console.log(res.data)
      this.name = res.data.object.userName
    })
    .catch( function(error) {
      console.log(error)
    })
    // console.log("1",this.member)
    console.log("feedid : "+this.feedId);
    axios.get(`http://${this.$store.state.address}:8080/feed/getById`, {
      params: {
        'feedId': this.feedId
      }
    }) 
    .then(response => {
      console.log(response)
      console.log('여기')
      console.log(response.data.object)
      this.feed = response.data.object
      this.studyImage = "data:"+this.feed.imageType+";base64," + this.feed.studyImage
      // var score = parseInt(response.data.object.studyDegree/10)
      this.studyDegree = response.data.object.studyDegree

      // 이거 시간계산
      var when = new Date(this.feed.registTime);
      var now = new Date();

      var gap = now.getTime() - when.getTime();
      if (gap < (1000*60)) {
        this.feedDate = Math.floor(gap / (1000)) + "초 전";
      } 
      else if (gap < (1000*60*60)) {
        this.feedDate = Math.floor(gap / (1000 * 60)) + "분 전";
      } 
      else if (gap < (1000*60*60*24)) {
        this.feedDate = Math.floor(gap / (1000 * 60 * 60)) + "시간 전";
      } 
      else {
        this.feedDate = Math.floor(gap / (1000 * 60 * 60 * 24)) + "일 전";
      }

      // 도장찍기
      // if (score < 1) {
      //   this.stampsrc = '../../../public/feed/1.png'
      // }
      // else if (score < 10) {
      //   this.stampsrc = '../../../public/feed/' + score + '.png'
      // }
      // else {
      //   this.stampsrc = '../../../public/feed/10.png'
      // }
    })

    // 좋아요 여부 
    axios.get(`http://${this.$store.state.address}:8080/feed/getIsMyLike`, {
      params: {
          'feedId': this.feedId,
          'UID': this.UID
        }
    })
    .then(response => {
      console.log('like')
      console.log(response)
      this.isLike = response.data.object
    })
    // 좋아요 리스트
    axios.get(`http://${this.$store.state.address}:8080/feed/getLikeList`, {
      params: {
          'feedId': this.feedId,
          'UID': this.UID
        }
    })
    .then(response => {
      console.log('list')
      console.log(response)
      this.likeList = response.data.object
    })
  }
}
</script>

<style scoped>
.pf-text {
  color: #505050 ;
  font-weight: 600;
}
.feedname {
  color: #505050 ;
  font-weight: 600; 
}
.thumb {
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
}
.thumb:before {
  content: "";
  display: block;
  padding-top: 100%;
}
.content {
  position: absolute;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
}
.stampimg {
  width: 40%;
  position: absolute;
  z-index: 6;
  top:20px;
  right:20px;
}
.backbtn {
  z-index: 8;
  position: fixed;
  top: 30px
}
.feed-card {
  margin: 5px;
  padding: 0px;
}
.commentbtn {
  padding: 5px;
  width: 18%;
}
.notLogin {
  margin-top: 250px
}

</style>