var express = require('express');
var router = express.Router();
var db = require('../baseData/mysql')
var base = require('../utils/base')
var fromQueryOrBody = base.fromQueryOrBody
var getFiltersInReq = base.getFiltersInReq
var whereDataList = require('../baseData/wherList')


router.all("/list", async function(req, res, next){
    var pageNumber = fromQueryOrBody(req, "pageNumber")
    var pageSize = fromQueryOrBody(req, "pageSize")
    var filters =  getFiltersInReq(req)
    
    console.log(filters)

    var start = (pageNumber - 1)*pageSize
    try{
        var dbData = await db.getListbyPage("wherelist", filters ,start, pageSize-0)

        var titleCount = await db.getlistTotleCount("wherelist")

        var resListData = {
            listData: dbData,
            totalCount: titleCount[0]["COUNT(*)"]
        }
        res.json(resListData);
    }catch(err){
        res.json({status:-1,msg:err});
    }
    
    
    
})

module.exports = router;