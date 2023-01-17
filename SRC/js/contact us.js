/*form functionality*/
   
var email = document.getElementById("email");
var message=document.getElementById("message");
var number =document.getElementById("number");
var nam  =document.getElementById("name");
var submit =document.getElementById(submit);


function Validateform(){
var nameValue=(nam.value).trim();

if (nameValue===""){
  document.getElementById("errname").innerText="name is required";
  document.getElementById("errname").classList.add("s")
  return 
}
else {
  document.getElementById("errname").innerText="";
}
 var emailValue=(email.value).trim();
if (emailValue===""  !emailValue.includes("@")){
  document.getElementById("erremail").innerText="plese enter valid email address";
  document.getElementById("erremail").classList.add("s")
  return 
}
else{
  document.getElementById("erremail").innerText="";
}
var numberValue=(number.value)
if (numberValue===""  numberValue.length<8){
document.getElementById("errnum").innerText="please enter valid number";
document.getElementById("errnum").classList.add("s")
return 
}
else{
document.getElementById("errnum").innerText="";
}
var messageValue=message.value.trim();
if (messageValue===""){
document.getElementById("errmessage").innerText="please enter message";
document.getElementById("errmessage").classList.add("s")
return 

}
else{
document.getElementById("errmessage").innerText="";
}

document.getElementById("errmessage").innerText="summited successfully";
document.getElementById("errmessage").classList.add("ss")

}

//add to cart functionality