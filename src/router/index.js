import Vue from "vue";
import VueRouter from "vue-router";
import Cookies from "js-cookie";
const Home = (r) =>
  require.ensure([], () => r(require("../pages/Home.vue")), "pages");
const Login = (r) =>
  require.ensure([], () => r(require("../pages/Login.vue")), "pages");
const AppTodo = (r) =>
  require.ensure([], () => r(require("../pages/AppTodo.vue")), "pages");
Vue.use(VueRouter);
// 正在尝试访问 admin 页面

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/appTodo",
    name: "appTodo",
    component: AppTodo,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});
// 利用全局導航鉤子來實作
router.beforeEach(function(to, from, next) {
  if (to.path === "/login") {
    next();
  } else {
    console.log(Cookies.get("Admin-Token"))
    if (!Cookies.get("Admin-Token")) {
      next({
        path: "/login",
      });
    }
    else {
      next();
    }
  }
});

export default router;
