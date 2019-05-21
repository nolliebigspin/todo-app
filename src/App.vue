<template>
  <div id="app">
    <Header Hallo/>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { PassThrough } from "stream";

export default {
  name: "app",
  components: {
    Header,
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Todo One",
          description: "Backflip lernen",
          status: "todo",
          deadline: "23.05.19"
        },
        {
          id: 2,
          title: "Todo Two",
          description: "Whips lernen",
          status: "active",
          deadline: "24.05.19"
        },
        {
          id: 3,
          title: "Todo Three",
          description: "Vue.js lernen",
          status: "completed",
          deadline: "25.05.19"
        }
      ]
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    }
  }
};
</script>

<style>
@import "../static/bulma.min.css";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
