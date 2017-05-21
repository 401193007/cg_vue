<template>
	<div :class="cls">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props : ["cls","text"]
	}	
</script>