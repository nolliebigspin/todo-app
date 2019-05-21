<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p>
      <b>{{ todo.title }}</b>
      &nbsp; | &nbsp;
      <small>{{ todo.description }}</small>
      &nbsp; | &nbsp;
      <span class="select">
        <select v-model="todo.status">
          <option>todo</option>
          <option>active</option>
          <option>completed</option>
        </select>
      </span>
      &nbsp; | &nbsp;
      {{ todo.deadline }}
      <a
        class="delete"
        @click="$emit('del-todo', todo.id)"
      ></a>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"]
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.delete {
  background: #ff0000;
  color: #fff;
  border: none;
  cursor: pointer;
  float: right;
}
</style>