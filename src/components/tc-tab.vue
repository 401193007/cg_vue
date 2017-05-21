<template>
	<div :class="cls">
		<slot name="tabbar"></slot>
		<slot name="tab-container"></slot>
	</div>
</template>

<script>
	export default {
		props : ['cls']		
	}
</script>