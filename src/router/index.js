import Vue from 'vue'
import Router from 'vue-router'

import Footer from '@/components/others/Footer'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		name: 'index',
		component: index,
		redirect: '/index',
        children:[{
			path: '/index',
			name: 'index',
			component: index
		},{
			path: '/team',
			name: 'team',
			component: index
		},{
			path: '/sign',
			name: 'sign',
			component: index
		},{
			path: '/about',
			name: 'about',
			component: index
		}]
	}]
})