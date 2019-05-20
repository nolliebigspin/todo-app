<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.status === 'completed'}">
    <p>
      <b>{{ todo.title }}</b>
      &nbsp; | &nbsp;
      <small>{{ todo.description }}</small>
      &nbsp; | &nbsp;
      {{ todo.status }}
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
import "./TodoItem.scss";

export default {
  name: "TodoItem",
  props: ["todo"]
};
</script>
