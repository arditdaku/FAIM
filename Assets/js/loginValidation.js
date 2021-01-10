const email = document.getElementById("email");
const password = document.getElementById("password");
const from = document.getElementById("login-form");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("password-error");
const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
from.addEventListener("submit", (e) => {
  debugger;

  console.log("e", e);
  debugger;
  let messages = [];
  if (email.value === "" || email.value === null) {
    messages.push("Email is required!");
    errorEmail.innerText = "Email is required!";
    e.preventDefault();
    debugger;
  }
  debugger;

  if (!filter.test(email.value)) {
    errorEmail.innerText = "Please enter a valid email!";
    e.preventDefault();
  }
  if (password.value === "" || password.value === null) {
    errorEmail.innerText = "Please enter a valid email!";
    messages.push("Please enter a valid email!");
    e.preventDefault();
  }
  if (password.value.length <= 6) {
    debugger;

    errorPassword.innerHTML = "Password must be longer than 6 characters";
    // messages.push("Password must be longer than 6 characters");
    debugger;

    e.preventDefault();
    debugger;
  }
  debugger;

  if (password.value.length >= 20) {
    errorPassword.innerHTML;
    messages.push("Password must be less than 6 characters");
    e.preventDefault();
    debugger;
  }
  debugger;

  if (messages.length > 0) {
    e.preventDefault();
    errorEmail.innerText = messages.join(", ");
  }
});
