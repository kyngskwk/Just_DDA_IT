<template>
<div class="card-body">
  <div>
    <h4 class="mb-4 indigo--text">Today's TodoList : {{ todaythings.length }}</h4>
    <v-checkbox v-if="this.in == true" value label="할일" color="red" @checked="checktodo"></v-checkbox>
    <p v-else v-for="todo in todaythings" :key="todo.id" >{{ todo.todoContent }}</p>
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
    checktodo() {
      
    }
  }
}
</script>

<style>

</style>