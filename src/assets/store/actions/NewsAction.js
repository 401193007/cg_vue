import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE } from  '../constants/types'
import axios from 'axios'

export const newsListAction = {
	newsList ({ commit , state }, param){
		commit(FETCH_LIST_REQUEST);   //state.isFetching = true

		axios.get('api/news')
			.then(function(response){

	            commit(FETCH_LIST_SUCCESS, {
	                data: response.data.data
	            })  
	            console.log("我请求回来的参数：" + state.data);

			})
			.catch(function (error) {
				commit(FETCH_LIST_FAILURE, {
				    error: error
				})
				console.log(error);
			});			
	}
}