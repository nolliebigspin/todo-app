<template>
  <div class="todo-item" :class="{ 'is-complete' : status === 'completed' }">
    <b>{{ todo.title }}</b>
    &nbsp; | &nbsp;
    <small>{{ todo.description }}</small>
    &nbsp; | &nbsp;
    <select v-model="status">
      <option v-for="opt in this.options" :key="opt">{{ opt }}</option>
    </select>
    &nbsp; | &nbsp;
    {{ todo.deadline }}
    <a class="delete" @click="$emit('del-todo', todo.id)"></a>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  data() {
    return {
      options: ["todo", "active", "completed"],
      title: this.todo.title,
      status: this.todo.status,
      description: this.todo.description,
      deadline: this.todo.deadline
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./TodoItem";
</style>
