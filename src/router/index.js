import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Register from '@/components/login/Register'
import Home from '@/components/others/Home'
import Index from '@/components/index/Index'
import Team from '@/components/team/Team'
import Sign from '@/components/sign/Sign'
import About from '@/components/about/About'
import Search from '@/components/index/components/search'
import PublishSe from '@/components/secondHand/publish-second'

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
  }, {
    path: '/publishSe',
    component: PublishSe
  }, {
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
      component: Search
    }]
	}]
})
