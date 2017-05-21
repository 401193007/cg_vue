<template>
	<a v-bind:id="id" :class="[cls,{'weui_bar_item_on' :active}]" @click="$parent.$emit('input', id)">
		<slot name="icon"></slot>
		<slot name="label"></slot>
	</a>
</template>
<script>
	export default {
		props : {
			'id' : String,
			"cls" : String
		},
		computed : {
			active (){
				return this.$parent.value === this.id;
			}
		}
	}
</script>