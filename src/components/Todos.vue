<template>
  <div>
    <TodoItem
      :todo="todo"
      :key="todo.id"
      v-for="todo in todos"
      @del-todo="$emit('del-todo', todo.id)"
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
