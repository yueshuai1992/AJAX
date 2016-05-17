var express = require("express");
var fs = require("fs");
var app = express();
app.set("view engine","jade")
app.use(express.static("public"));
app.get("/login",function(req,res){
	var obj = req.query;
	fs.readFile("data/user.json","utf8",function(err,data1){
		var result = "";
		var userlist = JSON.parse(data1);
		for(var i in userlist){
			if(userlist[i]==obj.username){
				result="成功";
				break;
			}else
			{
				result="失败";
			}
		}
		res.send(result)
	})

})
app.get("/fruit",function(req,res){
	res.render("fruit")
})
app.listen(3000);
console.log("服务器启动！")