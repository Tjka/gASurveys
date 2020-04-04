//REGEX EMAIL
/*
function validateEmailRegex(){
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (emailRegex.test(emailInput)){
        changeEmailInputColor('#FF7878');
    }
console.log("Se ejecutó la validacion Regex");
}
let emailInput = document.getElementById("registerEmailInputId");
emailInput.addEventListener("blur", validateEmailRegex);
*/
//

//DECLARACIÓN DE FUNCIONES
function changeEmailInputColor(color) {
    document.getElementById("registerEmailInputId").style.borderColor = color
    document.getElementById("registerEmailConfirmationInputId").style.borderColor = color
}

function clearEmailInputColor(){
    document.getElementById("registerEmailInputId").style.borderColor = "";
    document.getElementById("registerEmailConfirmationInputId").style.borderColor = "";
    document.getElementById("tilde1").style.visibility = "visible";
    document.getElementById("tilde1").style.color = "#67FF6C";
}

function changePasswordInputColor(color){
    document.getElementById("registerPasswordInputId").style.borderColor = color;
    document.getElementById("registerPasswordConfirmationInputId").style.borderColor = color;
}

function clearPasswordInputColor(){
    document.getElementById("registerPasswordInputId").style.borderColor = "";
    document.getElementById("registerPasswordConfirmationInputId").style.borderColor = "";
    document.getElementById("tilde2").style.visibility = "visible";
    document.getElementById("tilde2").style.color = "#67FF6C";
}

function validateEmailCredentials() {
    let emailValue = document.getElementById("registerEmailInputId").value;
    let emailConfirmationValue = document.getElementById("registerEmailConfirmationInputId").value;
        if (emailValue != emailConfirmationValue){
            changeEmailInputColor('#FF7878');
        }
        else{
            clearEmailInputColor();
        }
}

function validatePasswordCredentials(){
    let passwordValue = document.getElementById("registerPasswordInputId").value;
    let passwordConfirmationValue = document.getElementById("registerPasswordConfirmationInputId").value;
        if (passwordValue != passwordConfirmationValue){
            changePasswordInputColor('#FF7878');
        }
        else{
            clearPasswordInputColor();
        }
}
//FIN DECLARACIÓN DE FUNCIONES

//EJECUCIÓN
let emailConfirmationInput = document.getElementById("registerEmailConfirmationInputId");
let passwordConfirmationInput = document.getElementById("registerPasswordConfirmationInputId");

emailConfirmationInput.addEventListener("blur", validateEmailCredentials);
passwordConfirmationInput.addEventListener("blur", validatePasswordCredentials);
//FIN EJECUCIÓN