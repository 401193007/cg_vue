import axios from 'axios';
import QS from 'qs';

var instance = axios.create({
	//请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
	url : '',

	//请求方法，可覆盖
	method : 'get',  //dafault值

	//URL前缀
	baseURL : 'http://localhost:8080/',

	// 这里可以在发送请求之前对请求数据做处理，
	// 比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
	transformRequset : [
		function (data){
			data = QS.stringify({});
			return data;
		}
	],

	transformResponse : [
		function (data){
			return data;
		}
	],

	//parameter参数
	params: {

	},

	//参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
	data: {
	
	},	

	// 请求头信息
	headers: {'X-Requested-With': 'XMLHttpRequest'},	

	//设置超时时间
	timeout: 10000,	

	//返回数据类型
	responseType: 'json' // default	
});

export default instance;
 

