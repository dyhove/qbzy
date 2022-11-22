import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/index.vue'),
        meta: [{ name: '首页' }]
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/user.vue'),
        meta: { title: '数据管理', name: '用户列表' }
      },
      {
        path: '/shop',
        name: 'shop',
        component: () => import('../views/shop.vue'),
        meta: { title: '数据管理', name: '商家列表' }
      },
      {
        path: '/food',
        name: 'food',
        component: () => import('../views/food.vue'),
        meta: { title: '数据管理', name: '食品列表' }
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/order.vue'),
        meta: { title: '数据管理', name: '订单列表' }
      },
      {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/admin.vue'),
        meta: { title: '数据管理', name: '管理员列表' }
      },
      {
        path: '/addshop',
        name: 'addshop',
        component: () => import('../views/addshop.vue'),
        meta: { title: '添加数据', name: '添加商铺' }
      },
      {
        path: '/addfood',
        name: 'addfood',
        component: () => import('../views/addfood.vue'),
        meta: { title: '添加数据', name: '添加食品' }
      },
      {
        path: '/distribution',
        name: 'distribution',
        component: () => import('../views/distribution.vue'),
        meta: { title: '图表', name: '用户分布' }
      },
      {
        path: '/edit',
        name: 'edit',
        component: () => import('../views/edit.vue'),
        meta: { title: '编辑', name: '文本编辑' }
      },
      {
        path: '/admintools',
        name: 'admintools',
        component: () => import('../views/admintools.vue'),
        meta: { title: '设置', name: '管理员设置' }
      },
      {
        path: '/explain',
        name: 'explain',
        component: () => import('../views/explain.vue'),
        meta: { title: '说明', name: '说明' }
      }
    ]
  },

  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
