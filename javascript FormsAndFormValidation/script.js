const { isValidElement } = require("react");

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("sumbit", function (dets) {
    dets.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    let emailans = emailRegex.test(email.value);
    let passwwordans = passwordRegex.test(password.value);

    let isValid = true;

    if(!emailans){
        document.querySelector("#emailError").textContent = "Email is incorrect";
        document.querySelector("#emailError").computedStyleMap.display = "initial";
        isValid = false;
      }
    if(!passwordans){
      document.querySelector("#passwordError").textContent = "password is incorrect";  
       document.querySelector("#passwordError").computedStyleMap.display = "initial";
       isValid = false;
    }
});