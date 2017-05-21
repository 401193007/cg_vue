<template>
	<div :class="cls">
		<slot></slot>
	</div>		
</template>
<script>
	export default {
		props: {
			cls : String,
			value: {}
		},
		data() {
			return {
			  currentActive: this.value
			}
		},
		watch : {
			value (val){
				this.currentActive = val;
			},
			currentActive (newval,oldval){
				this.$emit('input', newval);
				console.log("新的值："+newval,"旧的值：" + oldval);
			}
		}	
	}
</script>
