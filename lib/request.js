export default {
	// 全局配置
	common: {
		baseUrl: 'http://ceshi3.dishait.cn/api',
		header: {
			'Content-Type': 'application/json;charset=UTF-8',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: {},
		method: 'GET',
		dataType: 'json'
	},
	// get请求
	get(url, data = {}, options = {}) {
		options.url = url;
		options.data = data;
		options.method = 'GET';
		return this.request(options)
	},
	// post请求
	post(url, data = {}, options = {}) {
		options.url = url;
		options.data = data;
		options.method = 'POST';
		return this.request(options)
	}
}
