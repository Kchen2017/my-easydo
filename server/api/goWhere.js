var express = require('express');
var router = express.Router();
var db = require('../baseData/mysql')
var base = require('../utils/base')
var fromQueryOrBody = base.fromQueryOrBody
var whereDataList = require('../baseData/wherList')

router.all("/list", function(req, res, next){
    var hh = fromQueryOrBody(req, "hh")
    // console.log(hh)
    // db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    //     if (error) throw error;
    //     console.log('The solution is: ', results[0].solution);
    // });

    res.json(whereDataList);
})

module.exports = router;