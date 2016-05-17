var express = require("express")
var app = express();
app.use(express.static("public"));
app.get("/croll",function(req,res){
	res.send({str:"hello one"})
})
app.listen(3000);
console.log("第一台服务器启动！")