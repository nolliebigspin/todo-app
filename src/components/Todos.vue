<template>
  <div>
    <TodoItem
      v-bind:todo="todo"
      v-bind:key="todo.id"
      v-for="todo in todos"
      v-on:del-todo="$emit('del-todo', todo.id)"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todos"]
};
</script>

<style scoped>
</style>
