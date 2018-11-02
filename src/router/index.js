import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login/Login'
import Register from '@/components/login/Register'
import Home from '@/components/others/Home'
import Index from '@/components/index/Index'
import Team from '@/components/team/Team'
import Sign from '@/components/sign/Sign'
import About from '@/components/about/About'
import Paid from '@/components/pay/paid'
import Paying2 from '@/components/pay/paying2'
import Paying3 from '@/components/pay/paying3'
import Button from '@/components/pay/button'
import Search from '@/components/index/components/search'
import Se from '@/components/index/components/second-hand'

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
			path: 'button',
			name: 'Button',
			component: Button
    },{
      path: 'search',
      name: 'Search',
      component: Search
    }]  
    },{
      path:'/paid',
      name: 'paid',
      component: Paid
    },{
      path:'/paying2',
      name: 'paying2',
      component: Paying2
    },{
      path: '/paying3',
      name: 'paying3',
      component: Paying3
    }]
})
