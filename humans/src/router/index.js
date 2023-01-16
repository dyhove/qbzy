import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/Common/Login.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/Common/Home.vue"),
    children: [
      {
        path: "/userIndex",
        name: "userIndex",
        component: () => import("../views/Homepage/userIndex.vue")
      },
      {
        path: "/Myinfor",
        name: "Myinfor",
        component: () => import("../views/Homepage/Myinfor.vue")
      },
      {
        path: "/StaffIn",
        name: "StaffIn",
        component: () => import("../views/Staff/StaffIn.vue")
      },
      {
        path: "/Staffsee",
        name: "Staffsee",
        component: () => import("../views/Staff/Staffsee.vue")
      },
      {
        path: "/StaffImport",
        name: "StaffImport",
        component: () => import("../views/Staff/StaffImport.vue")
      },
      {
        path: "/Setup",
        name: "Setup",
        component: () => import("../views/Setup/Setup.vue")
      },
      {
        path: "/Permission",
        name: "Permission",
        component: () => import("../views/Management/Permission.vue")
      },
      {
        path: "/Security",
        name: "Security",
        component: () => import("../views/SocialSecurity/Security.vue")
      },
			{
				path: "/Approval",
				name: "Approval",
				component: () => import("../views/Approval/Approval.vue")
			}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
