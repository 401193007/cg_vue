<template>
	<div class="weui_panel weui_panel_access tc-remove-line selective">
		<panel-top>
			<span slot="title">最新资讯</span>
			<i class="icon icon-fire" slot="fire"></i>
		</panel-top>
		<div class="weui_panel_bd">
			<news-item v-for="item in getNews" :title="item.title" :praiseNum="item.praiseNum" :studyNum="item.studyNum" :img="item.img" :memberFree="item.memberFree"></news-item>
		</div>
	</div>
</template>

<script>
	// 在单独构建的版本中辅助函数为 Vuex.mapState
	import { mapState , mapGetters ,mapActions } from 'vuex';
	import paneltop from "./panel-top.vue";
	import newsitem from "./../news/news-item.vue";
	export default {
		data (){
			return {
				news : []	
			}
		},
		computed : {
			...mapState({
				newsList : state => state.news.news
			}),
			...mapGetters([
				'getNews'
			])			
		},
		methods : {
			...mapActions([
				'initNews'
			])
		},
		created (){
			this.initNews();
		},
		components : {
			"panel-top" : paneltop,
			"news-item" : newsitem
		}
	}
</script>
