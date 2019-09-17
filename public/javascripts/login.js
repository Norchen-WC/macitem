function toValid(){
    let userLength = document.getElementById("user").value.length;
    let passValue = document.getElementById("pass").value;
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
    if(userLength > 8 && passValue.length > 8){
        return true;
    }
    else {
        return false;
    }
}
