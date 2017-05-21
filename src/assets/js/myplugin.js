import axios from './../../api/config';
export default {
    install(Vue){

    	//请求配置
    	Vue.prototype.$http = axios;
        Vue.prototype.$request = function(obj,thenFn){

        	var t = typeof(obj === 'object') && typeof(thenFn === 'function');

			t && this.$http(obj)
				.then(thenFn)
				.catch(function(error){
					//请求失败操作
				})    	
        }

    	//全局下拉刷新
    	Vue.directive("pullToRefresh",{
    		bind (el,binding){
				var {type : newstype , fn : reRresh} = binding.value;

				$(el).pullToRefresh().on("pull-to-refresh", function() {
					var self = this;

					reRresh(newstype,function(){
						$(self).pullToRefreshDone().find('.end-line').remove();						
					});
				});	    			
    		}
    	});


    	//全局上拉加载
    	Vue.directive("infinite",{
    		bind (el,binding){
				let loading = false;
				let { type : newstype , fn : loadMore } = binding.value;

				$(el).infinite(50).on("infinite", function() {
					var self = this;
					if(loading || $(self).find('.end-line').length > 0) return;

					$(self).find('.weui-infinite-scroll').show();
					loading = true;   //状态锁

					//请求数据
					loadMore(newstype,function(len){
						loading = false;
						if(len == 12){
							$(self).append('<p class="end-line">已没有更多数据</p>').find('.weui-infinite-scroll').hide();
						}
					});	
				});	   			
    		}
    	});    	

    }	
}