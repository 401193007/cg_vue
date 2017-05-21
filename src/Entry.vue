<template>
	<div id="app">
		<!-- 主视图 -->
		<tc-tab-container v-model="selected" >
			<tc-tab-container-item id="index" >
				<Index></Index>
			</tc-tab-container-item>
			<tc-tab-container-item id="course">
				<!-- <Course></Course> -->
			</tc-tab-container-item>
			<tc-tab-container-item id="my">
				<!-- <My></My> -->
			</tc-tab-container-item>	
		</tc-tab-container>
		<!-- 主视图 -->

		<!-- 底部tab -->
		<tc-tabbar cls="weui_tabbar" v-model="selected">
			<tc-tabitem cls="weui_tabbar_item" id="index">
				<div class="weui_tabbar_icon" slot="icon">
					<i class="tabar-icon index" ></i>	
				</div>			
				<p class="weui_tabbar_label" slot="label">首页</p>
			</tc-tabitem>
			<tc-tabitem cls="weui_tabbar_item" id="course">
				<div class="weui_tabbar_icon" slot="icon">
					<i class="tabar-icon course"></i>	
				</div>			
					
				<p class="weui_tabbar_label" slot="label">课程</p>			
			</tc-tabitem>
			<tc-tabitem cls="weui_tabbar_item" id="my">
				<div class="weui_tabbar_icon" slot="icon">
					<i class="tabar-icon my"></i>		
				</div>					
				<p class="weui_tabbar_label" slot="label">我</p>			
			</tc-tabitem>		
		</tc-tabbar>
		<!-- 底部tab -->
	</div>
</template>

<script>
	import { mapState, mapActions, mapGetters } from 'vuex';

	import Index from  './pages/Index';
	import Course from './pages/Course';
	import My from './pages/My';	

	import tabbar from "./components/tc-tabbar"
	import tabitem from "./components/tc-tab-item"	

	import tabcontainer from "./components/tc-tab-container"
	import tabcontaineritem from "./components/tc-tab-container-item"

	export default {
		data(){
			return {
				selected : "index"
			}
		},
		methods : {
	        ...mapActions([
	            'newsList'
	        ])			
		},
	    computed: {
	        ...mapState({
	        	list: (state) => state.test.data
	        })
	    },		
		created (){
			// console.log(this.list);
			// this.newsList();
			// console.log(this.list);
		},
		components : {
			"Index" : Index,
			"Course" : Course,
			"My" : My,
			"tc-tabbar" : tabbar,
			"tc-tabitem" : tabitem,
			"tc-tab-container" : tabcontainer,
			"tc-tab-container-item" : tabcontaineritem
		},
		watch : {
			selected (newval,oldval){
				console.log("新的值："+newval,"旧的值：" + oldval);
			}
		}	
	}
</script>

<style>
.tabar-icon {
	display: block;
	width: 100%;
	height: 100%;
	background-size: 100%;
}
.tabar-icon.index {
	background-image: url(./assets/images/icon-index.png);
}
.tabar-icon.course {
	background-image: url(./assets/images/icon-course.png);
}
.tabar-icon.my {
	background-image: url(./assets/images/icon-my.png);
}
.weui_bar_item_on .tabar-icon.index {
	background-image: url(./assets/images/icon-index-2.png);
}
.weui_bar_item_on .tabar-icon.course {
	background-image: url(./assets/images/icon-course-2.png);
}
.weui_bar_item_on .tabar-icon.my {
	background-image: url(./assets/images/icon-my-2.png);
}
.weui_bar_item_on .weui_tabbar_label{
	color :#fd8c02;
}
</style>