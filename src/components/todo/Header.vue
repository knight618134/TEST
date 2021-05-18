<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="請輸入今天的任務清單, 按Enter鍵確認"
      v-model="title"
      @keyup.enter="addItem"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import _ from "lodash";
export default {
  name: "Header",
  data() {
    return {
      title: "",
      originalToDoData: [],
    };
  },
  computed: {
    ...mapGetters(["todos"]),
  },
  methods: {
    ...mapActions(["addTodoData"]),
    addItem() {
      const title = this.title.trim();
      if (!title) {
        alert("title 不能為空");
      } else {
        let lastElement;
        lastElement = this.todos.length>0 ? _.last(this.todos).id : 0;
        const todo = {
          id: lastElement + 1,
          title: this.title,
          finished: false,
        };
        this.addTodoData(todo);
        this.title = "";
      }
    },
  },
};
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  outline: none;
}
.todo-header input:focus {
  outline: none;
  border-color: rgba(255, 0, 0, 0.8);
  box-shadow: inset 0 1px 1px rgba(255, 0, 0, 0.075),
    0 0 8px rgba(255, 0, 0, 0.6);
}
</style>
