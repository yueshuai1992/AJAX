var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.set("view engine","jade");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
	extended:false
}));
app.get("/", function(req, res) {
	// fs.readFile("data/message.json","utf8",function(err,data) {
	// 	var list = JSON.parse(data)
	// 	res.render("chat",{text:list})
	// 	console.log(data);
	// })
});
app.post("/submit",function(req,res) {
	var obj = req.body;
	fs.readFile("data/message.json","utf8",function(err,data) {
		var arr = JSON.parse(data);
		arr.push(obj);
		var str = "";
		for (var i in arr){
			for(var j in arr[i] ){
				str =str+ arr[i][j]+"\n";
			}
		}
		res.send(str);
		var arrStr = JSON.stringify(arr,null,4);
		fs.writeFile("data/message.json",arrStr);
	})
})
app.listen(3000);
console.log("服务器启动！");