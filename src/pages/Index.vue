<template>
	<div>
		<div class="tc-top-bar">
			<p class="tc-top-title">番茄社</p>
		</div>
		<tc-slider></tc-slider>
		<div class="tc-container">
			<news-panel></news-panel>
			<column-panel></column-panel>
		</div>
	</div>
</template>

<script>
	import slider from "./../components/tc-slider.vue";

	import newspanel from "./../components/panel/news-panel.vue";
	import columnpanel from "./../components/panel/column-panel.vue";
	export default {
		components : {
			"tc-slider" : slider,
			"news-panel" : newspanel,
			"column-panel" : columnpanel
		}
	}
</script>