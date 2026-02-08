let isLoggedIn=JSON.parse(localStorage.getItem("status")) ;
 let lastU=JSON.parse(localStorage.getItem("lastUser"));
        let obj=JSON.parse(localStorage.getItem(lastU));

function loadPage(){
    
   let idxOut=document.getElementById("idx-out");
   let idxIn=document.getElementById("idx-in");
    let a=document.getElementById("greet");
    if(isLoggedIn){
        idxIn.style.display="none";
       idxOut.style.display="block";  
       a.innerHTML=`Hello,${obj.name}`;     
    }else{
        idxIn.style.display="block";
       idxOut.style.display="none";
    }

}
function hLoad(){
     let hOut=document.getElementById("h-out");
   let hIn=document.getElementById("h-in");
let a=document.getElementById("greet");
   if(isLoggedIn){
       hIn.style.display="none";
       hOut.style.display="block";
  a.innerHTML=`Hello,${obj.name}`; 
    }else{
        hIn.style.display="block";
       hOut.style.display="none";
    }
}
function cLoad(){
    let cOut=document.getElementById("c-out");
   let cIn=document.getElementById("c-in");
    let a=document.getElementById("greet");
   if(isLoggedIn){
       cIn.style.display="none";
       cOut.style.display="block";
  a.innerHTML=`Hello,${obj.name}`; 
    }else{
        cIn.style.display="block";
       cOut.style.display="none";
    }
}

function logout(){
    localStorage.setItem("status",JSON.stringify(false));
    // loadPage();
    window.location.href="./login.html";
}



function login(){
    let e=document.getElementById("email").value.trim();
    let p=document.getElementById("pass").value.trim();
    let span=document.getElementById("sp");
    
    if(validate(e,p)){
        let obj=JSON.parse(localStorage.getItem(e));
        if(obj!==null && obj.pass===p){
            localStorage.setItem("status",JSON.stringify(true));
            localStorage.setItem("lastUser",JSON.stringify(e));
            // loadPage();
            alert("Login Success!");
            // alert(obj.name);
            window.location.href="./index.html"
        }else{
        span.style.color="red";
        span.innerHTML="Wrong Email/Pass";
        }
    }else{
        span.style.color="red";
        span.innerHTML="Invalid Email/Pass format";
    }
   
    
}
function signup(){
    let name=document.getElementById("sname").value.trim();
    let email=document.getElementById("semail").value.trim();
    let pass=document.getElementById("spass").value.trim();

    if(validate(email,pass)){
        let obj={
        name:name,
        email:email,
        pass:pass
    };
    let jobj=JSON.stringify(obj);
   
    localStorage.setItem(email,jobj);

    alert("SignUp Complete! Plz Log In");
    window.location.href='../login.html';
    }else{
        alert("Sign Up Fail");
        window.location.href='../login.html';
    }
    
}

function validate(email,pass){
    if(/^[a-z0-9.]{3,}@[a-z]{3,}\.[a-z]{2,}$/.test(email) && /^[a-zA-Z0-9@#$]{8,}$/.test(pass) ){
        return true;
    }else{
        return false;
    }
}



function signupPage(){
    let lg=document.getElementById("login1");
    let sg=document.getElementById("signup1");

    sg.style.display="block";
    lg.style.display="none";
}
function loginPage(){

    let lg=document.getElementById("login1");
    let sg=document.getElementById("signup1");

     sg.style.display="none";
    lg.style.display="block";
}