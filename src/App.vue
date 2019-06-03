<template>
  <div id="app">
    <Header @filterChange="onFilterChange" />
    <AddTodo @add-todo="addTodo" />
    <Todos
      :todos="filteredTodos"
      @del-todo="deleteTodo"
    />
  </div>
</template>

<script>
import uuid from "uuid";

const Header = () => import("./components/layout/Header");
const Todos = () => import("./components/Todos");
const AddTodo = () => import("./components/AddTodo");

export default {
  name: "App",
  components: {
    Header,
    Todos,
    AddTodo
  },
  data() {
    return {
      filter: "",
      todos: [
        {
          id: uuid.v4(),
          title: "Todo One",
          description: "Backflip lernen",
          status: "todo",
          deadline: "23.05.19"
        },
        {
          id: uuid.v4(),
          title: "Todo Two",
          description: "Whips lernen",
          status: "active",
          deadline: "24.05.19"
        },
        {
          id: uuid.v4(),
          title: "Todo Three",
          description: "Vue.js lernen",
          status: "completed",
          deadline: "25.05.19"
        }
      ]
    };
  },
  computed: {
    filteredTodos() {
      if (this.filter.length == 0) {
        return this.todos;
      } else {
        return this.todos.filter(
          todo =>
            todo.title.toLowerCase().includes(this.filter.toLowerCase()) ||
            todo.description
              .toLowerCase()
              .includes(this.filter.toLowerCase()) ||
            todo.status.toLowerCase().includes(this.filter.toLowerCase()) ||
            todo.deadline.toLowerCase().includes(this.filter.toLowerCase())
        );
      }
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    },
    onFilterChange(data) {
      this.filter = data;
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
