function login(){

const user=document.getElementById("user").value
const pass=document.getElementById("pass").value

if(user==="admin" && pass==="1234"){

localStorage.setItem("login","true")
window.location="index.html"

}else{

alert("Invalid login")

}

}
