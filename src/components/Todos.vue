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
const TodoItem = () => import("./TodoItem");

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: {
    todos: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    }
  }
};
</script>
