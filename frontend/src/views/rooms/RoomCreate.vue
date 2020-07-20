<template>
  <div>
    <h2>스터디 룸 만들기</h2>
    <form class="create-form">
      <div class="form-group">
        <label for="roomTitle">스터디 룸 이름</label>
        <input type="email" class="form-control roomTitle" id="roomTitle">
        <small class="form-text text-muted">스터디 룸 이름을 정해주세요.</small>
      </div>
      <button type="submit" class="btn btn-success submit-btn">스터디 룸 만들기</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RoomCreate'
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