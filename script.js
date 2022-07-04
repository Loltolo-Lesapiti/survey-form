//Declaring variables
let nameError=document.getElementById("nameError");
let emailError=document.getElementById("emailError");
let ageError=document.getElementById("ageError");
let message=document.getElementById("message");

//Validate username
function validateName(){
    let name=document.getElementById("name").value;
    if(name.length==0){
        nameError.innerHTML="Name is required";
        return false;
    }else if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Enter username"
        return false;
    }else{
        nameError.innerHTML='<i class="fa fa-check-circle"></i>';
        return true;
    }
}
//Validating email

function validateEmail(){
    let email=document.getElementById("email").value;
    if(email.length==0){
        emailError.innerHTML="Enter email";
        return false;
    }
    else if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        emailError.innerHTML="Imput the correct email format";
        return false;
    }else{
    emailError.innerHTML='<i class="fa fa-check-circle"></i>';
    return false;
    }
}