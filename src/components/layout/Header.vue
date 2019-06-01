<template>
  <header class="header" v-bind:class="{ 'is-filtering' : filter.length > 0 }">
    <input type="text" v-model="filter" @input="onFilterChange">
    <h1>Todo-List</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      filter: ""
    };
  },
  methods: {
    onFilterChange() {
      this.$emit("filterChange", this.filter);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;

  &.is-filtering {
    background: #6aa51c;
  }

  > a {
    color: #fff;
    padding-right: 5px;
  }
}
</style>
