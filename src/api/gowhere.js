import {encode_url_params} from "../common/base"
import request from "../common/apiUtil"

export default{
	getList: (params, options = {}) => {
		let uri = "/goWhere/list" + encode_url_params(params)
		return request.do_fetch(uri, options)
	},
	getDetail: (params, options = {}) => {
		let uri = "/goWhere/detail" + encode_url_params(params)
		return request.do_fetch(uri, options)
	}
} 