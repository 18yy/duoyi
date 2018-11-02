import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login/Login'
import Register from '@/components/login/Register'
import Home from '@/components/others/Home'
import Index from '@/components/index/Index'
import Team from '@/components/team/Team'
import Sign from '@/components/sign/Sign'
import About from '@/components/about/About'
import Paid from '@/components/pay/Paid'
import Paying2 from '@/components/pay/Paying2'
import Paying3 from '@/components/pay/Paying3'
import Button from '@/components/pay/Button'
import Search from '@/components/index/components/search'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/register',
		name: 'Register',
		component: Register
	},{
		path: '/login',
		name: 'Login',
		component: Login
	},{
		path: '/',
		name: 'Home',
		component: Home,
		redirect: Index,
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
		},{
		  path: 'search',
		  name: 'Search',
          component: Search
   		}]
	},{
		path:'/paying2',
		name: 'Paying2',
		component: Paying2
	  },{
		path: '/paying2/paying3',
		name: 'Paying3',
		component: Paying3
	  },{
		path:'/paying2/paying3/paid',
		name: 'Paid',
		component: Paid
	  }]

})
