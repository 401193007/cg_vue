
import "./assets/css/weui.min.css";
import "./assets/css/jquery-weui.css";
import "./assets/css/reset.css";
import "./assets/css/style.css";

//引入所需库
import $ from 'jquery';
import './assets/js/jquery-weui.min.js';
import Vue from 'vue';

//引用插件
import Myplugin from './assets/js/myplugin';
Vue.use(Myplugin);

// 引入路由使用
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 引入vuex使用
import Vuex from "vuex";
Vue.use(Vuex);

import NewsModule from "./assets/store/modules/NewsModule";
import TestModule from "./assets/store/modules/testModule";
const  store = new Vuex.Store({
	modules : {
		news: NewsModule,
		test : TestModule
	}
});

import Index from  './pages/Index';
import Course from './pages/Course';
import My from './pages/My';

const routes = [
	{
		path : '/',
		component : Index		
	},
	{
		path : '/index',
		name : 'index',
		component : Index		
	},
	{
		path : '/course',
		name : 'course',
		component : Course,
		children : [
			{
				path : 'getVideoList',
				name : 'getVideoList',
				component : Index		
			},	
			{
				path : 'getFreeVideoList',
				name : 'getFreeVideoList',
				component : Index		
			}					
		]		
	},
	{
		path : '/my',
		name : 'my',
		component : My		
	}		
];

const router = new VueRouter({
	mode : "hash",   //设置路由模式
	routes
});

//引入主界面
import Entry from './Entry';

Vue.config.productionTip = true;

/* 注册vue */
new Vue({
  router,
  store : store,  //注入store
  render : h => h(Entry)
}).$mount("#app");
