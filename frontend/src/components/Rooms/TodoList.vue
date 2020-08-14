<template>
<div class="card-body">
  <div>
    <h4 class="mb-4 indigo--text">Today's TodoList : {{ todaythings.length }}</h4>
    <div v-if="this.in == true">
      <v-checkbox  v-for="todo in todaythings" :key="todo.id" v-model="todo.checked"
      value :label="todo.dateForStudyroom.todoContent" color="red" @click="$emit('checked', todo)"></v-checkbox>
    </div>
    <p v-else v-for="todo in todaythings" :key="todo.id" >{{ todo.dateForStudyroom.todoContent }}</p>
  </div>
</div>
</template>

<script>

export default {
  name: 'TodoList',
  props: {
    todaythings: {
      type: Array
    },
    in: {
      type: Boolean
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    // checktodo(todo) {
    //   todo.checked =! todo.checked
    //   console.log(todo)
    // }
  },
  created() {
    console.log(this.todaythings)
  }
}
</script>

<style>

</style>