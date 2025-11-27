const form = document.getElementById("myForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault();  // page refresh रोकने के लिए

  let valid = true;
  emailError.textContent = "";
  passError.textContent = "";
  successMsg.textContent = "";

  // Email Validation (Regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  }

  // Password Validation
  if (password.value.length < 8) {
    passError.textContent = "Password must be at least 8 characters.";
    valid = false;
  }

  // If all valid
  if (valid) {
    successMsg.textContent = "Form submitted successfully ✅";
    form.reset();
  }
});
