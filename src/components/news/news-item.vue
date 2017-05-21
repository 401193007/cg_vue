<template>
	<a href="javascript:void(0);" class="tc-media-box">
		<div class="tc-medie-img">
			<img :src="img" alt="">
			<strong class="vip-free" v-if="memberFree"></strong>
		</div>	
		<div class="tc-media-bd">
			<h4 class="tc-media-title">{{title}}</h4>
			<div class="tc-clearfix tc-media-desc">
				<div class="tag-wrap">
					<span class="tag important" v-show="isInpage">观看</span>
					<span class="tag">学习人数：{{studyNum}}人</span>
					<span class="tag"><i class="icon icon-praise"></i>{{praiseNum}}人</span>				
				</div>
				<em class="price" v-show="isInpage">￥123.00</em>
			</div>
		</div>
	</a>	
</template>

<script>
	export default {
		props : ["img","title","studyNum","praiseNum","memberFree","isInpage"]
	}
</script>
