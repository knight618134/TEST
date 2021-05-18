<template>
  <li
    @mouseenter="dealShow(true)"
    @mouseleave="dealShow(false)"
    @click="changeCheck"
    :style="{ backgroundColor: bgColor }"
  >
    <label>
      <input type="checkbox" :checked="todo.finished" />
      <span>{{ todo.title }}</span>
    </label>
    <button
      v-show="isShowDelBtn && todo.finished"
      class="btn btn-warning"
      @click="delItem"
    >
      删除
    </button>
  </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Item",
  data() {
    return {
      isShowDelBtn: false,
      bgColor: "#fff",
    };
  },
  props: {
    todo: Object,
    index: Number,
  },
  methods: {
    ...mapActions(["changeTodoData", "deleteTodoData"]),
    changeCheck() {
      if (!this.todo.finished) {
        const { id, title } = this.todo;
        const payload = {
          id,
          title,
          finished: true,
        };
        this.changeTodoData(payload);
      } else {
        const { id, title } = this.todo;
        const payload = {
          id,
          title,
          finished: false,
        };
        this.changeTodoData(payload);
      }
    },
    dealShow(isShow) {
      this.isShowDelBtn = isShow;
      this.bgColor = isShow ? "#DCDCDC" : "#fff";
    },
    delItem() {
      const { id, title } = this.todo;
      if (window.confirm(`確定刪除 ${title} 嗎 ?`)) {
        this.deleteTodoData(id);
      }
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  padding: 4px 10px;
  float: right;
  /*display: none;*/
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
