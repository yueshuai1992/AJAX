var express = require("express");
var app = express();
app.use(express.static("public"))
app.get("/getData",function(req,res){
	res.send("hello")
})
app.listen(3000);
console.log("服务器启动！")