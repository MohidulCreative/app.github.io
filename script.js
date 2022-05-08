let email = document.getElementById("email");
let password = document.getElementById("password");
flag = 1;

function check_email_pass(){

    if(email.value == ""){
      document.getElementById("errorMsg").innerHTML = "Invalid email and password";
      email.style.border = "1px solid red";
      flag = 0;

    }else if(password.value == "") {
      document.getElementById("errorMsg").innerHTML = "Invalid email and password";
      password.style.border = "1px solid red";
      flag = 0;

    }else {
      document.getElementById("errorMsg").innerHTML = "";
      password.style.border = "none";
      flag = 1; 
    }

    if(!email.value == ""){
      email.style.border = "none";
    }

    if(flag){
      return true;
    }else {
      return false;
    }
}