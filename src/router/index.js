import Vue from 'vue'
import Router from 'vue-router'


import Login from '@/components/login/Login'
import Register from '@/components/login/Register'
import Home from '@/components/others/Home'
import Index from '@/components/index/Index'
import Team from '@/components/team/Team'
import Sign from '@/components/sign/Sign'

import About from '@/components/about/About'
<<<<<<< HEAD
import Paid from '@/components/pay/paid'
import Paying2 from '@/components/pay/paying2'
import Paying3 from '@/components/pay/paying3'
import Button from '@/components/pay/button'
=======
import Information from '@/components/about/information'
import Unused from '@/components/about/unused'
import Orders from '@/components/about/orders'
import Bought from '@/components/about/bought'
import Entrust from '@/components/about/entrust'
import Entrusting from '@/components/about/entrusting'
import Entrusted from '@/components/about/entrusted'


import Paid from '@/components/pay/Paid'
import Paying2 from '@/components/pay/Paying2'
import Paying3 from '@/components/pay/Paying3'
import Button from '@/components/pay/Button'
>>>>>>> 9e814bb3e3eeaf65b5de66803ae8314de2989b20
import Search from '@/components/index/components/search'
import PublishSe from '@/components/secondHand/publish-second'

Vue.use(Router)

let router = new Router({
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
		redirect: '/index',
        children:[{
			path: 'index',
			name: 'Index',
			component: Index,
			meta: {
				requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
			}
		},{
			path: 'team',
			name: 'Team',
			component: Team,
			meta: {
				requireAuth: true, 
			}
		},{
			path: 'sign',
			name: 'Sign',
			component: Sign,
			meta: {
				requireAuth: true, 
			}
		},{
			path: 'about',
			name: 'About',
			component: About
<<<<<<< HEAD
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
=======
		}]
	},{
		path: '/about/information',
		name: 'Information',
		component: Information
	},{
		path: '/about/unused',
		name: 'Unused',
		component: Unused
	},{
		path: '/about/orders',
		name: 'Orders',
		component: Orders
	},{
		path: '/about/bought',
		name: 'Bought',
		component: Bought
	},{
		path: '/about/entrust',
		name: 'Entrust',
		component: Entrust
	},{
		path: '/about/entrusting',
		name: 'Entrusting',
		component: Entrusting
	},{
		path: '/about/entrusted',
		name: 'Entrusted',
		component: Entrusted
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

// 访问之前，都检查下是否登录了
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {  //前往登录页
        window.sessionStorage.removeItem('username'); //删除缓存中的用户信息
        next();
    } else if(to.meta.requireAuth){  //判断是否需要登录
		let username = window.sessionStorage.getItem('username'); 
		//判断缓存是否已存在用户信息，即是否已登录
        if (!username) {  
			next({ path: '/login' });
        } else {
            next();
        }
    } else {
		next();
	}
>>>>>>> 9e814bb3e3eeaf65b5de66803ae8314de2989b20
})

export default router;
