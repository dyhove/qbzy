import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
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
    path: '/slot',
    name: 'slot',
    component: () => import('../views/slotView.vue')
  },
  {
    path: '/homes',
    name: 'homes',
    component: () => import('../views/home.vue')
  },
  {
    path: '/abouts',
    name: 'abouts',
    component: () => import('../views/about.vue')
  },
  {
    path: '/router',
    name: 'router',
    component: () => import('../views/router.vue')
  },
  {
    path: '/routing',
    name: 'routing',
    component: () => import('../views/routing.vue'),
    children: [{
        path: 'news',
        component: () => import('../views/News.vue')
      },
      {
        path: 'message',
        component: () => import('../views/Message.vue'),
        children: [{
          name: 'xiangqing', // name配置项为路由命名
          path: 'detail', // 使用占位符声明接收query参数
          // path:'detail/:id/:title',//使用占位符声明接收params参数
          component: () => import('../views/Detail.vue'),
          //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
          // props:{a:1,b:'hello'}

          //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
          // props:true

          //props的第三种写法，值为函数
          path:'detail/:id/:title',
          props($route) {
            return {
              id: $route.params.id,
              title: $route.params.title,
            }
          }
        }]
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router