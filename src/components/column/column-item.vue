<template>
	<a href="article-2.html" class="weui_media_box weui_media_appmsg tc-horizontal-box">
		<div class="weui_media_hd tc-article-left-wrap">
			<div class="tc-article-pic">
				<img class="weui_media_appmsg_thumb" :src="img" alt="">
			</div>

		</div>
		<div class="weui_media_bd">
			<h4 class="tc-article-title">{{title}}</h4>
			<tc-tag cls="tc-public-price">{{price}}￥/年</tc-tag>
			<p class="tc-article-subtitle" v-if="theme !== ''">本月经典解读主题：<span class="tc-text-mainColor">{{theme}}</span></p>
			<div class="bottom-wrap">
				<tc-tag cls="update">{{updateTime}}小时前更新</tc-tag>
				<p class="tc-text-grey">{{newTitle}}</p>
			</div>
		</div>
	</a>	
</template>

<script>
	import tag from "./../tc-tag";
	export default {
		props : ["img","title","price","updateTime","newTitle","theme"],
		components : {
			"tc-tag" : tag
		}
	}	
</script>