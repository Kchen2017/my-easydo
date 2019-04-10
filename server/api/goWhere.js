var express = require('express');
var router = express.Router();
var db = require('../baseData/mysql')
var base = require('../utils/base')
var fromQueryOrBody = base.fromQueryOrBody
var whereDataList = require('../baseData/wherList')

router.all("/list", function(req, res, next){
    var pageNumber = fromQueryOrBody(req, "pageNumber")
    var pageSize = fromQueryOrBody(req, "pageSize")
    // console.log(hh)
    // db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    //     if (error) throw error;
    //     console.log('The solution is: ', results[0].solution);
    // });
    var start = (pageNumber - 1)*10
    var end = start + pageSize
    var list = whereDataList 
    var realData = list.data.searchResult.slice(start, end)
    var resListData = {
    	listData: realData,
    	totalCount: list.data.totalCount
    }
    res.json(resListData);
})

module.exports = router;