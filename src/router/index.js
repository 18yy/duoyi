import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login/Login'
import Home from '@/components/others/Home'
import Index from '@/components/index/Index'
import Team from '@/components/team/Team'
import Sign from '@/components/sign/Sign'
import About from '@/components/about/About'
import SecondHand from '@/components/index/components/second-hand'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/login',
		name: 'Login',
		component: Login
	},{
		path: '/',
		name: 'Home',
		component: Home,
        children:[{
			path: 'index',
			name: 'Index',
			component: Index
		},{
			path: 'team',
			name: 'Team',
			component: Team
		},{
			path: 'sign',
			name: 'Sign',
			component: Sign
		},{
			path: 'about',
			name: 'About',
			component: About
		}]
	}]
})
