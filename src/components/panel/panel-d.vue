<template>
	<div :class="direction">
		<slot></slot>
	</div>	
</template>

<script>
	export default {
		props : ['dc'],
		computed : {
			direction : function(){
				if(this.dc == 'horizontal'){
					return 'weui_panel_bd';
				}else if(this.dc == 'vertical'){
					return 'weui_panel_hd'
				}else{
					return '';
				}
			}
		}
	}
</script>