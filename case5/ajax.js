var express = require("express");
var app = express();
app.use(express.static("public"));
app.get("/ajaxget",function(req,res){
	res.send("获取成功")
})
app.listen(3000)