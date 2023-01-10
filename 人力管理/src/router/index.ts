import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: "/permiss",
        name: "permiss",
        component: () => import("../views/Permission/permiss.vue")
      },
      {
        path: "/security",
        name: "security",
        component: () => import("../views/security/security.vue")
      },
      {
        path: "/Approval",
        name: "Approval",
        component: () => import("../views/Approval/Approval.vue")
      },
      {
        path: "/attendance",
        name: "attendance",
        component: () => import("../views/attendance/attendance.vue")
      },
      {
        path: "/wages",
        name: "wages",
        component: () => import("../views/wages/wages.vue")
      },
      {
        path: "/setting",
        name: "setting",
        component: () => import("../views/wages/setting.vue")
      },
      {
        path: "/organizational",
        name: "organizational",
        component: () => import("../views/organizational/organizational.vue")
      },
      {
        path: '/Historical',
        name: 'Historical',
        component: () => import('../views/security/Historical.vue')
      },
      {
        path: '/report',
        name: 'report',
        component: () => import('../views/security/report.vue')
      },
      {
        path: '/reports',
        name: 'reports',
        component: () => import('../views/wages/reports.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
