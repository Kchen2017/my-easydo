import {encode_url_params} from "../common/base"
import request from "../common/apiUtil"



export default{
    loginPost: (params, options = {}) => {
			let uri = "/login?t=" + new Date();
			return request.do_post(uri, JSON.stringify(params), options)
		}
}