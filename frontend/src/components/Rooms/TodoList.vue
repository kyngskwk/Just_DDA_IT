<template>
<div class="card-body">
  <div>
    <h4 class="mb-4 indigo--text">Today's TodoList : {{ todaythings.length }}</h4>
    <p v-for="todo in todaythings" :key="todo.id" >{{ todo.todoContent }}</p>
  </div>
</div>
</template>

<script>

export default {
  name: 'TodoList',
  props: {
    todaythings: {
      type: Array
    }
  },
  data() {
    return {
      todothings: [],
    }
  }
}
</script>

<style>

</style>