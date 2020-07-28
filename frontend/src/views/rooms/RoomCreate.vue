<template>
  <div>
    <h2>스터디 룸 만들기</h2>
    <form class="create-form">
      <div class="form-group">
        <label for="roomTitle">스터디 룸 이름</label>
        <input type="text" class="form-control roomTitle" id="roomTitle" v-model="studyroom.roomTitle" required>
        <small class="form-text text-muted">스터디 룸 이름을 정해주세요.</small>
      </div>
      <div class="form-group">
        <label for="licenseId">자격증 이름</label>
        <select multiple class="form-control" id="licenseId" required>
          <option>자격증 이름 1</option>
          <option>자격증 이름 2</option>
          <option>자격증 이름 3</option>
          <option>자격증 이름 4</option>
          <option>자격증 이름 5</option>
          <option>자격증 이름 6</option>
        </select>
        <small class="form-text text-muted">공부할 자격증을 선택해주세요.</small>
      </div>
      <div class="form-group">
        <label for="testDate">시험 날짜</label>
        <input type="text" class="form-control testDate" id="testDate" v-model="studyroom.testDate" required>
        <small class="form-text text-muted">자격증 시험 날짜 YYYY-MM-DD 형식으로 적어주세요. ex) 2020-07-12 </small>
      </div>
      <div class="custom-control custom-switch form-group">
        <input type="checkbox" class="custom-control-input" id="isPrivate" v-model="studyroom.isPrivate" @checked="changePrivate">
        <label class="custom-control-label isPrivate" for="isPrivate">비밀방으로 설정하기</label>
      </div>
      <div class="form-group" v-show="this.studyroom.isPrivate">
        <label for="roomPassword">비밀 번호</label>
        <input type="password" class="form-control roomPassword" id="roomPassword" v-model="studyroom.roomPassword">
        <small class="form-text text-muted">비밀번호를 설정해주세요.</small>
      </div>
      <div>
        <label for="calendar">일정</label>
        <div>
          <v-date-picker v-model="picker" :landscape="landscape" :reactive="reactive" @click:date="clickdate" mode="multiple"></v-date-picker>
          <v-dialog v-model="dialog" persistent max-width="290">
            <v-card class="pa-3">
              <v-form>
                <v-text-field v-model="todoDate" :counter="10" label="날짜를 정해주세요." required></v-text-field>
                <v-text-field v-model="todoContent" :counter="30" label="할일을 적어주세요" required></v-text-field>
              </v-form>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-3" @click="modalClose"></v-btn>
                <v-btn color="indigo darken-3" @click="modalSave">저장하기</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>
      <div class="form-group mt-3">
        <label for="roomInfo">스터디 룸 소개글</label>
        <textarea class="form-control" id="roomInfo" 
        placeholder="자신의 스터디 룸에 대해 간단한 소개글이나 공부 계획을 적어주세요. 해시태그가 저절로 만들어져요. ex) 정처기 2주완성" 
        v-model="studyroom.roomInfo" @keypress.space="makeHashtag" required></textarea>
        <small class="form-text text-muted">띄워쓰기를 하면 해시태그가 생성됩니다.</small>
      </div>
      <div class="form-group">
        <label for="roomHashtag">해시태그</label>
        <input type="text" class="form-control roomHashtag" v-model="studyroom.roomHashtag" @keydown.backspace="removeHashtag">
      </div>
      <div class="form-group mt-3">
      <label for="roomHashtag">해시태그 추가하기</label>
        <div class="d-flex">
          <input type="text" class="form-control" v-model="inputHash">
          <button class="btn btn-primary ml-3" @click="putHashtag">+</button>
        </div>
        <small class="form-text text-muted">원하는 해시태그를 더 추가해 보세요.</small>
      </div>
      <button type="submit" class="btn btn-success submit-btn">스터디 룸 만들기</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RoomCreate',
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      landscape: true,
      reactive: false,
      studyroom: {
        roomTitle: '',
        testDate: '',
        isPrivate: false,
        roomPassword: '',
        roomInfo: '',
        roomHashtag: []
      },
      inputHash: '',
      dialog: false,
      todoDate: '',
      todoContent: '',
      dateForStudyroom: []
    }
  },
  methods: {
    clickdate(event) {
      this.todoDate = event
      this.dialog = true
    },
    modalClose() {
      this.dialog = false
    },
    modalSave() {
      this.dialog = false
      this.dateForStudyroom.push([this.todoDate, this.todoContent])
      console.log(this.dateForStudyroom)
      this.todoContent = ''
    },
    changePrivate() {
      this.studyroom.isPrivate != this.studyroom.isPrivate
    },
    makeHashtag() {
      var hashtagstring = this.studyroom.roomInfo;
      var make = hashtagstring.split(' ')
      if(make.slice(-1)[0] != '') {
        this.studyroom.roomHashtag.push('#' + make.slice(-1)[0])
      }
      console.log(this.studyroom.roomHashtag);
    },
    removeHashtag(event) {
      event.preventDefault();
      this.studyroom.roomHashtag.pop()
    },
    putHashtag() {
      if(this.inputHash != ''){
        var hashtagstring = this.inputHash;
        var make = hashtagstring.split(' ')
        for (var idx in make) {
          this.studyroom.roomHashtag.push('#' + make[idx])
        } 
      }
      this.inputHash = ''
    }
  }
}
</script>

<style scoped>
.create-form {
  margin-top: 30px;
}
.form-group {
  text-align: left;
}
.submit-btn {
  width: 100%;
}
</style>