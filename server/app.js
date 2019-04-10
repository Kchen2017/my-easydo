var express = require("express")
var request = require("request")
var mysql = require('./baseData/mysql')

var app = express()

app.use("*", (req, res, next)=>{
    // 设置请求头为允许跨域
    res.header("Access-Control-Allow-Origin", "*");
    // 设置服务器支持的所有头信息字段
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // 设置服务器支持的所有跨域请求的方法
    res.header("Access-Control-Allow-Methods", "POST,GET");
    // next()方法表示进入下一个路由
    next();
})

var goWhereApi = require('./api/goWhere')
var myApi = require('./api/my')
var withWhoApi = require('./api/withWho')

app.use("/goWhere", goWhereApi)
app.use("/my", myApi)
app.use("/withWho", withWhoApi)



app.get("/getMovieList", (req, res, next) => {
    var type = req.query.type;
    var url = 'https://api.douban.com/v2/movie/' + type;

    request(url, (err, response, body) => {
        res.send(body)
    })
})

// 获取电影详细
app.get('/getditail', function (req, res) {
    var id = req.query.id;
    var url = 'https://api.douban.com/v2/movie/subject/' + id;
    request(url, function (error, response, body) {
        // body 中存放的，就是我们要获取的真实数据
        // console.log(body);
        res.send(body);
    });
});

app.listen(3090, function () {
    console.log('server运行在 http://127.0.0.1:3090');
});