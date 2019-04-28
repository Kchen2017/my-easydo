var mysql  = require('mysql');
const md5 = require('md5');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'gowherelist'
});
 
connection.md5 = md5;

var insertData = function(table, data){
	return new Promise((resolve, reject)=>{
			connection.query('insert into ?? set ?', [table, data], function(err, result) {
			    if (err) {
			    	reject(err)
			    }
			    if(result){
			    	resolve(result)
			    }
			    
			});
		})
}
var searchData = function(table, data){
	return new Promise((resolve, reject)=>{
			connection.query('select * from ?', table, function(err, result) {
			    if (err) {
			    	reject(err)
			    }
			    if(result){
			    	resolve(result)
			    }
			    
			});
		})
}




module.exports = {
	insertData,
	searchData
}