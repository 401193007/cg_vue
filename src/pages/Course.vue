<template>
	<tc-tab cls="weui_tab" id="course-container">
		<tc-tabbar cls="weui_navbar" slot="tabbar" v-model="selected">
			<tc-tabitem cls="weui_navbar_item" id="getVideoList">	
				<span slot="label">精选课</span>
			</tc-tabitem>
			<tc-tabitem cls="weui_navbar_item" id="getFreeVideoList">	
				<span slot="label">公开课</span>
			</tc-tabitem>					
		</tc-tabbar>
		<tc-tab-container v-model="selected" cls="weui_tab_bd tc-tab-container" slot="tab-container">
			<tc-tab-container-item id="getVideoList" cls="weui_tab_bd_item weui_tab_bd_item_active" 
			v-pullToRefresh="{type:'news',fn:reRresh}" v-infinite="{type:'news',fn : loadMore}">
				<tc-pull-to-refresh-layer></tc-pull-to-refresh-layer>
				<div class="content selective" >
					<news-item v-for="item in this.$store.state.news.news" :title="item.title" :praiseNum="item.praiseNum" :studyNum="item.studyNum" :img="item.img" :memberFree="item.memberFree" isInpage="true"></news-item>
				</div>
				<tc-infinite-scroll></tc-infinite-scroll>
			</tc-tab-container-item>
			<tc-tab-container-item id="getFreeVideoList" cls="weui_tab_bd_item  weui_tab_bd_item_active" v-pullToRefresh="{type:'freenews',fn:reRresh}" v-infinite="{type:'freenews',fn : loadMore}">
				<tc-pull-to-refresh-layer></tc-pull-to-refresh-layer>
				<div class="content selective" >
					<news-item v-for="item in this.$store.state.news.freenews" :title="item.title" :praiseNum="item.praiseNum" :studyNum="item.studyNum" :img="item.img" :memberFree="item.memberFree" isInpage="false"></news-item>							
				</div>
				<tc-infinite-scroll></tc-infinite-scroll>	
			</tc-tab-container-item>		
		</tc-tab-container>		
	</tc-tab>
</template>

<script>
	import tab from "./../components/tc-tab";
	import tabbar from "./../components/tc-tabbar";
	import tabitem from "./../components/tc-tab-item";

	import tabcontainer from "./../components/tc-tab-container";
	import tabcontaineritem from "./../components/tc-tab-container-item";	

	import tcpulltorefreshlayer from "./../components/tc-pull-to-refresh-layer";
	import tcinfinitescroll from "./../components/tc-infinite-scroll";

	import newsitem from "./../components/news/news-item";	


	import { mapState , mapActions } from 'vuex'

	export default {
		data () {
			return {
				selected : "getVideoList",
			}
		},
		components : {
			"tc-tab" : tab,
			"tc-tabbar" : tabbar,
			"tc-tabitem" : tabitem,
			"tc-tab-container" : tabcontainer,
			"tc-tab-container-item" : tabcontaineritem,
			"tc-pull-to-refresh-layer" : tcpulltorefreshlayer,
			"tc-infinite-scroll" : tcinfinitescroll,
			"news-item" : newsitem			
		},
		created (){
			if(this.$store.state.news.news.length == 0){
				this.$http.get('/api/news').then((data) => {
					this.$store.state.news.news = data.body.data;
				});
			}
			if(this.$store.state.news.freenews.length == 0){
				this.$http.get('/api/freenews').then((data) => {
					this.$store.state.news.freenews = data.body.data;
				});
			}			
		},
		mounted(){
			$("#course-container").height($(window).height());  //高度赋值
		},
		computed : mapState({
			news : 'news',
			freenews : 'freenews'
		}),		
		methods : {
			...mapActions({
				saveNews : 'saveNews',
				updateNews : 'updateNews'	
			}),
			loadMore (type,callback){
				this.saveNews({
					newstype : type,
					callback : callback
				});			
			},
			reRresh (type,callback){
				this.updateNews({
					newstype : type,
					callback : callback
				});	
			}
		}	
	}
</script>

<style>
	.end-line {
		line-height: 55px;
		text-align: center;
	}
</style>


