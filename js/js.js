
var errorMasseg =` This field is required`;
var errorEmail=` Please enter a valid email address`;
var Alert=`  Message Sent!
Thanks for completing the form. We'll be in touch soon!`;
var inputName = document.querySelector(`[name="fristName"]`);
var inputlastName = document.querySelector(`[name="LastName"]`);
var inputEmail = document.querySelector(`[name="Email"]`);
var pError =document.querySelector(`.arror`);
var lerror=document.querySelector(`.lerror`);
var eerror=document.querySelector(`.eerror`);
document.forms[0].onsubmit=function(e){
    let usarvalid = false;
    let emailvalid = false;
    if(inputName.value!==""&&inputlastName.value!==""){
        usarvalid=true;
    }
    if(inputEmail.value!==""){emailvalid=true}
    if(usarvalid===false||emailvalid===false){
        e.preventDefault();
        if(inputName.value===""){pError.innerHTML=errorMasseg;}
            else if(inputlastName.value===""&&inputName.value!==""){
            lerror.innerHTML=errorMasseg;pError.remove(pError);}
            else if(inputEmail.value===""&&inputlastName.value!==""
            &&inputName.value!=="")
            {eerror.innerHTML=errorEmail;
                lerror.remove(lerror);pError.remove(pError) }
        
    
    }else{alert(Alert)}
    

}







