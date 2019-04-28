var express = require('express');
var router = express.Router();
var db = require('../baseData/mysql')
var base = require('../utils/base')
var fromQueryOrBody = base.fromQueryOrBody
var whereDataList = require('../baseData/wherList')

router.all("/list", function(req, res, next){
    var pageNumber = fromQueryOrBody(req, "pageNumber")
    var pageSize = fromQueryOrBody(req, "pageSize")

     var start = (pageNumber - 1)*10
    var end = start + pageSize
    var list = whereDataList 
    var realData = list.data.searchResult.slice(start, end)
    var resListData = {
        listData: realData,
        totalCount: list.data.totalCount
    }

    db.searchData("wherelist").then(res=>{
       
        res.json(resListData);
    }).catch(err=>{
        console.log(res)
        res.json({
            data:400,
            res: res
        });
    })
    
})

module.exports = router;