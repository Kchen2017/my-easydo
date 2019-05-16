import {encode_url_params} from "../common/base"

export default{
    loginPost: params=>{
        let uri = "/goWhere/list" + encode_url_params(params)
		return new Promise((resolve, reject) => {
			fetch('http://127.0.0.1:3090'+uri)
			  .then((response) => {
			    return response.json();
			  })
			  .then((myJson) => {
			    resolve(myJson)
			  }).catch(err => {
			  	reject(err)
			  });
		}) 
    }
}