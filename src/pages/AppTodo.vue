<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header />
      <List />
      <Footer />
    </div>
  </div>
</template>

<script>
//引入
import Header from "../components/todo/Header";
import List from "../components/todo/List";
import Footer from "../components/todo/Footer";
import "../assets/todo.css";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  //註冊組件
  components: {
    Header,
    List,
    Footer,
  },
  created() {
    this.initData();
  },
  computed: {
    ...mapGetters(["todos"]),
  },
  methods: {
    ...mapActions(["getTodoData"]),
    initData() {
      this.getTodoData();
    },
  },
};
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
