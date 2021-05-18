<template>
  <ul class="todo-main">
    <Item
      v-for="(todo, index) in todos"
      :todo="todo"
      :key="index"
      :index="index"
    />
  </ul>
</template>

<script>
import Item from "./Item";
import _ from 'lodash';
import { mapGetters } from "vuex";
export default {
  name: "List",
  data() {
    return {
      todoData: [],
    };
  },
  computed: {
    ...mapGetters(["todos"]),
  },
  mounted() {
    this.todoData = _.cloneDeep(this.todos);
  },
  components: {
    Item,
  },
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-inline-start: 3px;
}
</style>
