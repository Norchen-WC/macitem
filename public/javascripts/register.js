function toValid(){
	let userLength = document.getElementById("user").value.length;
		let passValue = document.getElementById("pass").value;
	let passTwoValue = document.getElementById("pass_two").value;
	if(userLength <= 8){
		document.getElementById("user_err").innerHTML = "用户名长度必须大于8" ;
	}
	else{
		document.getElementById("user_err").innerHTML = "" ;		
	}
	if(passValue.length <= 8){
		document.getElementById("pass_err").innerHTML = "密码长度必须大于8" ;
	}
	else{
		document.getElementById("pass_err").innerHTML = "" ;		
	}
	if(passValue == passTwoValue){
		document.getElementById("pass_two_err").innerHTML = "";
	}
	else{
		document.getElementById("pass_two_err").innerHTML = "两次密码必须相同" ;	
	}
	if(userLength > 8 && passValue.length > 8 && passValue == passTwoValue){
			return true;
	}
	else {return false;}
}
