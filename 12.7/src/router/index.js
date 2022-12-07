import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/LoginView.vue")
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/",
        name: "welcome",
        component: () => import("../views/Wecome.vue")
      },
      {
        path: "/users",
        name: "users",
        component: () => import("../views/UsersView.vue"),
        meta: ["首页", "用户管理", "用户列表"]
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
