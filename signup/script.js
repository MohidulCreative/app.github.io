let id = (id) => document.getElementById(id);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  checkbox = id("checkbox");
  let val = 1;

function validateForm(){
  // email validation **************
  if(email.value == ""){
    document.getElementById("error").innerHTML = "Email is required";
    email.style.border = "1px solid red";
    val = 0;

  }else {
    document.getElementsByClassName("error").innerHTML = "";
    email.style.border = "none";
    val = 1;
  }

  if(!email.value.length == ""){
    document.getElementById("error").innerHTML = "";
    val = 0;
  }
// password validation **************
  if(password.value.length < 8){
    document.getElementById("error1").innerHTML = "Password must be 8 characters";
    password.style.border = "1px solid red";
    val = 0;

  }else {
    document.getElementById("error1").innerHTML = "";
    password.style.border = "none";
    val = 1;
  }

// username validation ***************
  if(username.value == ""){
    document.getElementById("error2").innerHTML = "Name is required";
    username.style.border = "1px solid red";
    val = 0;

  }else if (email.value == ""){
    document.getElementById("error2").innerHTML = "";
    username.style.border = "none";
    val = 0;

  }else if (password.value.length < 8){
    document.getElementById("error2").innerHTML = "";
    username.style.border = "none";
    val = 0;

  }else if (!checkbox == checkbox.checked){
    document.getElementById("error2").innerHTML = "";
    username.style.border = "none";
    val = 0;

  }else {
    document.getElementById("error2").innerHTML = "";
    username.style.border = "none";
    val = 1;
  }

  // checkbox validation********
  if(document.getElementById("checkbox").checked){
    document.getElementById("message").innerHTML ="";
    
  }else {
    document.getElementById("message").innerHTML = "You must check";
    
  }

  if(val) {
    return true;
  }else {
    return false;
  }
}