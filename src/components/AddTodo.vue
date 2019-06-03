<template>
  <div>
    <form @submit="addTodo">
      <input
        type="text"
        v-model="title"
        placeholder="Add Todo..."
        class="input"
      >
      <input
        type="text"
        v-model="description"
        placeholder="Add a description"
        class="input"
      >
      <div class="select">
        <select v-model="status">
          <option>todo</option>
          <option>active</option>
          <option>completed</option>
        </select>
      </div>
      <input
        type="text"
        v-model="deadline"
        placeholder="Deadline..."
        class="input"
      >
      <input
        type="submit"
        value="Submit"
        class="button is-primary"
      >
    </form>
  </div>
</template>

<script>
const uuid = () => import("uuid");

export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
      description: "",
      status: "",
      deadline: ""
    };
  },
  methods: {
    addTodo(e) {
      // cancel form submission
      e.preventDefault();

      // Send to parent
      if (this.title.length > 0) {
        this.$emit("add-todo", {
          id: uuid.v4(),
          title: this.title,
          description: this.description,
          status: this.status,
          deadline: this.deadline
        });
      } else {
        alert("Todo Title can't be empty!");
      }
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input [type="text"] {
  flex: 10;
  padding: 5px;
}

input [type="submit"] {
  flex: 2;
}

.radio {
  margin-left: 10px;
}
</style>
