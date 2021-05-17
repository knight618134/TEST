import Vue from "vue";
import VueRouter from "vue-router";
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
    meta: {
      needLogin: false,
    },
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
// router.beforeEach(function(to, from, next) {
//   if (to.meta.needLogin) {
//     next({ name: "signin" });
//   } else {
//     next();
//   }
// });

export default router;
