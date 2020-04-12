//DECLARACIÓN DE FUNCIONES

function changeNameInputColor(color) {
    document.getElementById("registerUserNameInputId").style.borderColor = color;
    document.getElementById("tilde00").style.visibility = "hidden";
}

function clearNameInputColor(){
    document.getElementById("registerUserNameInputId").style.borderColor = "";
    document.getElementById("tilde00").style.visibility = "hidden";
}

function changeLastNameInputColor(color) {
    document.getElementById("registerUserLastNameInputId").style.borderColor = color;
    document.getElementById("tilde01").style.visibility = "hidden";
}

function clearLastNameInputColor(){
    document.getElementById("registerUserLastNameInputId").style.borderColor = "";
    document.getElementById("tilde01").style.visibility = "hidden";
}

function changeEmailInputColor(color) {
    document.getElementById("registerEmailInputId").style.borderColor = color;
    document.getElementById("tilde10").style.visibility = "hidden";
}

function clearEmailInputColor(){
    document.getElementById("registerEmailInputId").style.borderColor = "";
    document.getElementById("tilde10").style.visibility = "hidden";
}

function changeEmailConfirmationInputColor(color) {
    document.getElementById("registerEmailConfirmationInputId").style.borderColor = color;
    document.getElementById("tilde11").style.visibility = "hidden";
}

function clearEmailConfirmationInputColor(){
    document.getElementById("registerEmailConfirmationInputId").style.borderColor = "";
    document.getElementById("tilde11").style.visibility = "hidden";
}

function changePasswordInputColor(color){
    document.getElementById("registerPasswordInputId").style.borderColor = color;
    document.getElementById("tilde20").style.visibility = "hidden";
}

function clearPasswordInputColor(){
    document.getElementById("registerPasswordInputId").style.borderColor = "";
    document.getElementById("tilde20").style.visibility = "hidden";
}

function changePasswordConfirmationInputColor(){
    document.getElementById("registerPasswordConfirmationInputId").style.borderColor = color;
    document.getElementById("tilde21").style.visibility = "hidden";
}

function clearPasswordConfirmationInputColor(){
    document.getElementById("registerPasswordConfirmationInputId").style.borderColor = "";
    document.getElementById("tilde21").style.visibility = "hidden";
}

function reformatName(){
    let nameRegex = /^[a-zA-Z]{3,20}$/;
    let registerUserNameInputIdValue = document.getElementById("registerUserNameInputId").value;
    if (registerUserNameInputIdValue == ""){
        clearNameInputColor();
    }
    else{
        if (nameRegex.test(registerUserNameInputIdValue)){
            clearNameInputColor();
            document.getElementById("tilde00").style.visibility = "visible";
            return false;
        }
        else{
            changeNameInputColor('#FF7878');
        }
        let registerUserNameInputIdValueUP = registerUserNameInputIdValue.toUpperCase();
        document.getElementById("registerUserNameInputId").value = registerUserNameInputIdValueUP;
    }
}

function reformatLastName(){
    var lastNameRegex = /^[a-zA-Z]{3,20}$/;
    let registerUserLastNameInputIdValue = document.getElementById("registerUserLastNameInputId").value;
    if (registerUserLastNameInputIdValue == ""){
        clearLastNameInputColor();
    }
    else{
        if(lastNameRegex.test(registerUserLastNameInputIdValue)){
            clearLastNameInputColor();
            document.getElementById("tilde01").style.visibility = "visible";
        }
        else{
            changeLastNameInputColor('#FF7878');
        }
        let registerUserLastNameInputIdValueUP = registerUserLastNameInputIdValue.toUpperCase();
        document.getElementById("registerUserLastNameInputId").value = registerUserLastNameInputIdValueUP;
    }
}

function validateEmailRegex(){
    let emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    if (emailInput.value == ""){
        clearEmailInputColor();
        document.getElementById("registerEmailConfirmationInputId").style.visibility = "hidden";
    }
    else{
        if (emailRegex.test(emailInput.value)){
            clearEmailInputColor();
            document.getElementById("tilde10").style.visibility = "visible";
            document.getElementById("registerEmailConfirmationInputId").style.visibility = "visible";
        }
        else{
            changeEmailInputColor('#FF7878');
            document.getElementById("registerEmailConfirmationInputId").style.visibility = "hidden";
        }
    }
}

function validateEmailCredentials() {
    let emailValue = document.getElementById("registerEmailInputId").value;
    let emailConfirmationValue = document.getElementById("registerEmailConfirmationInputId").value;
    if (emailConfirmationValue == ""){
        clearEmailConfirmationInputColor();
    }
    else{
        if (emailValue !== emailConfirmationValue){
            changeEmailConfirmationInputColor('#FF7878');
        }
        else{
            clearEmailConfirmationInputColor();
            document.getElementById("tilde11").style.visibility = "visible";
        }
    }
}

function validatePasswordRegex(){
    var passwordRegex = /^[0-9a-zA-Z]{4,16}$/;
    if (passwordInput.value == ""){
        clearPasswordInputColor();
        document.getElementById("registerPasswordConfirmationInputId").style.visibility = "hidden";
    }
    else{
        if (passwordRegex.test(passwordInput.value)){
            clearPasswordInputColor();
            document.getElementById("tilde20").style.visibility = "visible";
            document.getElementById("registerPasswordConfirmationInputId").style.visibility = "visible";
        }
        else{
            changePasswordInputColor('#FF7878');
            document.getElementById("registerPasswordConfirmationInputId").style.visibility = "hidden";
        }
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
let registerUserNameInputId = document.getElementById("registerUserNameInputId");
registerUserNameInputId.addEventListener('blur', reformatName);

let registerUserLastNameInputId = document.getElementById("registerUserLastNameInputId");
registerUserLastNameInputId.addEventListener('blur', reformatLastName)

let emailInput = document.getElementById("registerEmailInputId");
emailInput.addEventListener("blur", validateEmailRegex);

let emailConfirmationInput = document.getElementById("registerEmailConfirmationInputId");
emailConfirmationInput.addEventListener("blur", validateEmailCredentials);

let passwordInput = document.getElementById("registerPasswordInputId");
passwordInput.addEventListener('blur', validatePasswordRegex);

let passwordConfirmationInput = document.getElementById("registerPasswordConfirmationInputId");
passwordConfirmationInput.addEventListener("blur", validatePasswordCredentials);

//este es el IF con problemitas
if (!reformatName){
    document.getElementById("registerButton").removeAttribute="disabled";
    console.log('puto');
}


// no tocar
/* let registerEmailInputId = document.getElementById("registerEmailInputId").value;
let registerEmailConfirmationInputId = document.getElementById("registerEmailConfirmationInputId").value;
let registerPasswordInputId = document.getElementById("registerPasswordInputId").value;
let registerPasswordConfirmationInputId = document.getElementById("registerPasswordConfirmationInputId").value;


let usersName = [];
let usersLastName = [];
let usersEmail = [];
let usersPassword = [];

let newUser = {
    userName: usersName,
    userLastName: usersLastName,
    userEmail: usersEmail,
    userPassword: usersPassword
} */
//FIN EJECUCIÓN