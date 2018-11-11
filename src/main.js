// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import fastClick from 'fastclick'
import 'lib-flexible'
import './assets/styles/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store.js'
import router from './router'
import App from './App'


Vue.config.productionTip = false
// fastClick.attach(document.body)
Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})