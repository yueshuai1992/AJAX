var express = require("express")
var app = express();
app.use(express.static("public"));
app.get("/croll",function(req,res){
	res.send("hello two")
})
app.get("/jsonp",function(req,res){
	res.jsonp({data:"hello yueshuai"})
})
app.listen(8080);
console.log("第二台服务器启动！")