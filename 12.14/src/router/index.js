import Vue from "vue"
import VueRouter from "vue-router"
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
    component: () => import("../views/HomeView.vue"),
    children: [
      {
        path: "/",
        name: "welcome",
        component: () => import("../views/WecomeView.vue")
      },
      {
        path: "/users",
        name: "users",
        meta: ["用户管理", "用户列表"],
        component: () => import("../views/User/UsersView.vue")
      },
      {
        path: "/roles",
        name: "roles",
        meta: ["权限管理", "角色列表"],
        component: () => import("../views/Permission/Roles.vue")
      },
      {
        path: "/rights",
        name: "rights",
        meta: ["权限管理", "权限列表"],
        component: () => import("../views/Permission/Rights.vue")
      },
      {
        path: "/goods",
        name: "ShopList",
        component: () => import("../views/Shop/ShopList.vue"),
        meta: ["商品管理", "商品列表"]
      },
      {
        path: "/shopadd",
        name: "/Shopadd",
        component: () => import("../views/Shop/Shopadd.vue"),
        meta: ["商品管理", "添加商品"]
      },
      {
        path: "/params",
        name: "/ClassParameter",
        component: () => import("../views/Shop/ClassParameter.vue"),
        meta: ["商品管理", "分类列表"]
      },
      {
        path: "/categories",
        name: "/ShopClass",
        component: () => import("../views/Shop/ShopClass.vue"),
        meta: ["商品管理", "商品分类"]
      },
      {
        path: "/orders",
        name: "/Orders",
        component: () => import("../views/Order/Orders.vue"),
        meta: ["订单管理", "订单列表"]
      },
      // 数据统计
      {
        path: "/reports",
        name: "/Reports",
        component: () => import("../views/Statistics/ReportsView.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
