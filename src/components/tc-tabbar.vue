<template>
	<div :class="cls">
		<slot></slot>
<!-- 		<input type="text" style="display:none;" :value="value" > -->
	</div>		
</template>
<script>
	export default {
		props : {
			cls : String,
			value : {
				type : String,
				default : "index"
			}
		}
	}
</script>