import Vue from 'vue';
import * as type from '../constants/types';
import axios from './../../../api/config';

export default {
    state:{
		"news" : [],
		"column" : [],
		"freenews" : []
    },
    mutations:{
        init (state,{newsarr}){
            state.news = newsarr; 
        },
    	update (state,payload){
    		let {newstype,newsarr} = payload;
    		state[newstype] = newsarr;
    	},	
    	save (state,payload){
    		let {newstype,newsarr} = payload;
    		state[newstype] = state[newstype].concat(newsarr);   //合并数组
    	}
    },
    actions : {
        initNews (context,payload){ 
            axios({
                url : "api/news"
            }).then(function(res){
                console.log("我是进来了的：" + JSON.stringify(res));
                context.commit({
                    type : "init",
                    "newsarr" : res.data.data
                }); 
                console.log("我已经执行了:" + context.state.news);
            }).catch(function(res){

            })
        },
    	updateNews (context,payload){

    		let {newstype} = payload;

			Vue.http.get('/api/more').then((data) => {
				context.commit({
					type : "update",
					"newstype" : newstype,
					"newsarr" : data.body.data
				});
				payload.callback();
			});	    		
    	},
    	saveNews (context,payload){
			Vue.http.get('/api/more').then((data) => {

				let {newstype} = payload;

				context.commit({
					type : "save",
					"newstype" : newstype,
					"newsarr" : data.body.data
				});
				payload.callback(context.state[newstype].length);
			});		
    	}
    },
    getters : {
    	getNews(state){
    		return state.news.splice(1,2);
    	}
    }	
}