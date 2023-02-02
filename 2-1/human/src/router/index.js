import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home/Home.vue'),
    children: [
      {
        path: '/',
        name: 'User',
        component: () => import('../views/User/User.vue')
      },
      {
        path: '/structure',
        name: 'structure',
        component: () => import('../views/structure/structure.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
