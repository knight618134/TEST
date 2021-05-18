import axios from "axios";
const state = {
  todos: [],
  currentRelationId: "",
};

const getters = {
  todos: (state) => state.todos,
};

const actions = {
  getTodoData({ commit }, data = []) {
    axios.get("http://localhost:3000/todos").then((res) => {
      data = res.data;
      commit("GET_TODO_DATA", data);
    });
  },
  addTodoData({ dispatch }, data = {}) {
    axios.post("http://localhost:3000/todos", data).then(() => {
      dispatch("getTodoData");
    });
  },
  changeTodoData({ dispatch }, data = {}) {
    const {id} = data
    axios
      .put(`http://localhost:3000/todos/${id}`, data)
      .then(() => {
        dispatch("getTodoData");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  deleteTodoData({ dispatch }, id = "") {
    axios
      .delete(`http://localhost:3000/todos/${id}`)
      .then(() => {
        dispatch("getTodoData");
      })
      .catch(function(error) {
        console.log(error);
      });
  },
};

const mutations = {
  GET_TODO_DATA(state, data = []) {
    state.todos = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
