var fs = require("fs");
function cheackUser(opi,next){
	fs.readFile("data/user.json","utf8",function(err,data1){
		var userlist = JSON.parse(data1);
		for(var i in userlist){
			if(userlist[i]==opi.username){
				next(true);
				return;
			}
		}
		next(false)
	})
}
module.exports = cheackUser;