<template>
<div class="card-body">
  <div>
    <h4 class="mb-4 font_e font-weight-bold" style="color:#fd462e;">
      <span class="font-weight-light mr-2">Today's</span>TodoList 
       <v-avatar color="#fd462e" outline size="40">
          <span class="white--text headline">{{ todaythings.length }}</span>
        </v-avatar>
    </h4>
    <div v-if="this.in == true">
      <v-checkbox class="font_k" v-for="todo in todaythings" :key="todo.id" v-model="todo.checked"
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

<style scoped>
label {
  padding-top: 20px;
}
</style>