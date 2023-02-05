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
		path:"/home",
		name:"home",
		component: () => import('../views/Home/Home.vue'),
		children:[
			{
				path:"/home",
				name:"homepage",
				component: () => import('../views/HomePage/HomePage.vue')
			},
			{
				path:"/StaffIn",
				name:"StaffIn",
				component: () => import('../views/StaffIn/StaffIn.vue')
			},
			{
				path:"/Staffsee",
				name:"Staffsee",
				component: () => import('../views/StaffIn/Staffsee.vue')
			},
			{
				path:'/SetUp',
				name:'SetUp',
				component: () => import('../views/SetUp/SetUp.vue')
			},
			{
				path:"/jurisdiction",
				name:"jurisdiction",
				component: () => import('../views/jurisdiction/jurisdiction.vue')
			},
			{
				path:"/Security",
				name:"Security",
				component: () => import('../views/Security/Security.vue')
			},
			{
				path:"/file",
				name:'file',
				component: () => import('../views/Security/file.vue')
			},
			{
				path:"/filelist",
				name:"filelist",
				component: () => import('../views/Security/filelist.vue')
			},
			{
				path:"/detail",
				name:"detail",
				component: () => import('../views/Security/detail.vue')
			},
			{
				path:"/Approval",
				name:"Approval",
				component: () => import('../views/Approval/Approval.vue')
			},
			{
				path:"/Appdetail",
				name:"Appdetail",
				component: () => import('../views/Approval/Appdetail.vue')
			},
			{
				path:"/APPprocess",
				name:"APPprocess",
				component: () => import('../views/Approval/APPprocess.vue')
			},
			{
				path:"/Attendance",
				name:"Attendance",
				component: () => import('../views/Attendances/Attendances.vue')
			},
			{
				path:"/Atthistory",
				name:"Atthistory",
				component: () => import('../views/Attendances/Atthistory.vue')
			},
			{
				path:"/ReportForm",
				name:"ReportForm",
				component: () => import('../views/Attendances/ReportForm.vue')
			},
			{
				path:"/wages",
				name:"wages",
				component: () => import('../views/Wages/Wages.vue')
			},
			{
				path:"/decidePay",
				name:"decidePay",
				component: () => import('../views/Wages/decidePay.vue')
			},
			{
				path:'/setting',
				name:'setting',
				component: () => import('../views/Wages/setting.vue')
			},
			{
				path:"/statement",
				name:"statement",
				component: () => import('../views/Wages/statement.vue')
			},
			{
        path: "/organizational",
        name: "organizational",
        component: () => import("../views/organizational/organizational.vue")
      }
		]
	},

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
