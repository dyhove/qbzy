import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/local',
    name: 'local',
    component: () => import('../views/Local.vue')
  },
  {
    path: '/from',
    name: 'from',
    component: () => import('../views/From.vue')
  },
  {
    path: '/vuexs',
    name: 'vuexs',
    component: () => import('../views/Vuexs.vue')
  },
  {
    path: '/refs',
    name: 'refs',
    component: () => import('../views/Refs.vue')
  },
  {
    path: '/attrs',
    name: 'attrs',
    component: () => import('../views/Attrs.vue')
  },
  {
    path: '/provide',
    name: 'provide',
    component: () => import('../views/provide.vue')
  },
  {
    path: '/dome1',
    name: 'dome1',
    component: () => import('../views/dome1.vue')
  },
  {
    path: '/dome2',
    name: 'dome2',
    component: () => import('../views/dome2.vue')
  },
  {
    path: '/slot',
    name: 'slot',
    component: () => import('../views/slot.vue')
  },
  {
    path: '/childrenparent',
    name: 'childrenparent',
    component: () => import('../views/childrenparent.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
