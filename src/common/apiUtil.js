export const fetch= (url,options)=>{
    var reqOptions = {}
    reqOptions.headers = reqOptions.headers || {};
    reqOptions.headers = _.assign({
        'Content-Type': 'application/json',
        'Authorization': 'Tenant=5678efgh Credential=5678efgh/credential-scope',
        'Accept': 'application/json'
    }, reqOptions.headers);
    reqOptions.credentials = 'same-origin';

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