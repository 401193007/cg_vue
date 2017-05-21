<template>
	<div class="weui_panel weui_panel_access">
		<panel-top>
			<span slot="title">专栏订阅</span>
			<a href="javascript:void(0);" class="show-all" slot="link">显示全部</a>
		</panel-top>
		<div class="weui_panel_bd">
			<column-item v-for="item in column" :title="item.title" :img="item.img" :price="item.price" :updateTime="item.updateTime" :newTitle="item.newTitle" :theme="item.theme"></column-item>
		</div>
	</div>		
</template>

<script>
	import { mapState } from 'vuex';
	import paneltop from "./panel-top";

	import columnitem from "./../column/column-item";

	export default {
		data (){
			return {
				column : []
			}
		},
		created (){
			// if(this.$store.state.news.column.length == 0){
			// 	this.$http.get("/api/column").then(function(data){
			// 		this.$store.state.news.column = data.body.data;
			// 		this.column = this.$store.state.news.column;
			// 	});				
			// }
		},
		components : {
			"panel-top" : paneltop,
			"column-item" : columnitem
		}
	}	
</script>
