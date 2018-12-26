import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import about from '@/components/about'
import contact from '@/components/contact'
import home from '@/components/home'
import ContactUs from '@/components/contactUs'

Vue.use(Router)

export default new Router({
	mode: "history",
	linkActiveClass: "active", //全局配置
	routes: [{
		path: '/',
		name: 'layout',
		component: layout,
		redirect:"/home",
		children: [
			{
				path: '/home',
				name: "home",
				component: home
			},
			{
				path: '/about',
				name: "about",
				component: about
			},
			{
				path: '/contact',
				name: "contact",
				component: contact
			},

			{
				path: '/contactUs',
				name: "contactUs",
				component: ContactUs
			}
		]
	}]
})