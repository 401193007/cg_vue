<template>
	<a class="weui_cell" href="javascript:;" v-if="islink">
		<slot></slot>
	</a>
	<span class="weui_cell" v-else>
		
	</span>	
</template>

<script>
	export default {
		props : ["islink"]
	}
</script>