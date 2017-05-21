<template>
	<transition name="slide">
		<div v-show="id === $parent.currentActive" :class="cls">
			<slot></slot>
		</div>			
	</transition>		
</template>
<script>
	export default {
		props: ['id',"cls"]
	}
</script>

<style scoped>
/* 跳转页面动画 */  
.slide-enter,  
.slide_back-enter {   
    width: 100%;  
}  
.slide-leave,  
.slide_back-leave {   
    width: 100%;  
}  
.slide-enter-active,  
.slide_back-enter-active {  
    transition: all 0.3s ease-out;  
}  
.slide-leave-active {  
 
    transition: all 0.3s ease-out;  
    transform: translate(-100%);  
}  
.slide-enter{  
    transform: translateX(100%);  
}  
.slide_back-leave-active {  
    transition: all 0.3s ease-out;  
    transform: translate(100%);  
}  
.slide_back-enter {  
    transform: translateX(-100%);  
} 	
</style>