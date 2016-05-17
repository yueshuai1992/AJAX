var ajax = (function(){
	var xhr = null;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
	  xhr=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
	  xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}

	function get(url,next){
		xhr.open("get",url,true)
		xhr.send();
		xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			next(xhr.responseText)
			}
		}
	}
	function post(url,next){
		xhr.open("post",url,true)
		xhr.send();
		xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			next(xhr.responseText)
			}
		}
	}
	return {
		get:get,
		post:post,
	}

})()
