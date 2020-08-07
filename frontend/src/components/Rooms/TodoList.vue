<template>
<div class="card-body">
  <div v-if="this.todothings.length != 0">
    <h4 class="mb-4 indigo--text">Today's TodoList : {{ todothings.length }}</h4>
    <v-checkbox v-for="todo in todothings" :key="todo.id" 
    :label="todo.todoContent" :value="todo.todoContent" class="my-0"></v-checkbox>
  </div>
  <div v-if="this.todothings.length == 0">
    <p class="mb-4">정해진 TodoList가 없어요 !</p>
  </div>
</div>
</template>

<script>

export default {
  name: 'TodoList',
  props: {
    dateForStudyrooms: {
      type: Array
    }
  },
  data() {
    return {
      todothings: [],
    }
  },
  created() {
    // 형식 바꾸는 거
    function leadingZeros(n, digits) {
      var zero = '';
      n = n.toString();

      if (n.length < digits) {
        for (i = 0; i < digits - n.length; i++)
          zero += '0';
      }
      return zero + n;
    }

    var now = new Date();
    // 형식 바꾸는거
    var nowtime = 
      leadingZeros(now.getFullYear(), 4) + '-' +
      leadingZeros(now.getMonth() + 1, 2) + '-' +
      leadingZeros(now.getDate(), 2);

    // console.log(nowtime)
    for(var i=0; i < this.dateForStudyrooms.length; i++) {
      if (this.dateForStudyrooms[i].todoDate == nowtime) {
        this.todothings.push(this.dateForStudyrooms[i])
        // this.tasks.push({isChecked: this.dateForStudyrooms[i].isChecked, text: this.dateForStudyrooms[i].todoContent})
      }
    }
  },
}
</script>

<style>

</style>