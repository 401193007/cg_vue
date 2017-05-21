<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<tc-slider-item>
				<img src="./../assets/images/test-6.jpg" alt="" slot="sliderImg">
				<p class="slider-title tc-text-hidden" slot="sliderText">各色其职（掌控色彩关系）课程各色其职（掌控色彩关系）课程</p>
			</tc-slider-item>
			<tc-slider-item>
				<img src="./../assets/images/test-4.jpg" alt="" slot="sliderImg">
				<p class="slider-title tc-text-hidden" slot="sliderText">各色其职（掌控色彩关系）课程各色其职（掌控色彩关系）课程</p>
			</tc-slider-item>
			<tc-slider-item>
				<img src="./../assets/images/test-5.jpg" alt="" slot="sliderImg">
				<p class="slider-title tc-text-hidden" slot="sliderText">各色其职（掌控色彩关系）课程各色其职（掌控色彩关系）课程</p>
			</tc-slider-item>						
		</div>
	    <div class="swiper-pagination"></div>	
	</div>			
</template>

<script>
	import './../assets/js/swiper.min.js';
	import slieritem from "./tc-slider-item"
	export default {
		components : {
			"tc-slider-item" : slieritem
		},
		//挂载
		mounted(){
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 5000,//可选选项，自动滑动
			    speed: 400,
			    pagination : '.swiper-pagination'
			});
		}
	}
</script>