// Get User-Data from Local Storage
let userDataArr = JSON.parse(localStorage.getItem("userData"));
if (userDataArr === null) userDataArr = [];

// Sign-in Sign-up page transition :
let signup_page_btn = document.querySelector("#signup-page");
let signin_page_btn = document.querySelector("#signin-page");
let signup_box = document.querySelector(".sign-up-box");
let signin_box = document.querySelector(".sign-in-box");
let modal = document.querySelector(".modal");

signup_page_btn.addEventListener("click", function () {
  signup_box.classList.remove("hide-box");
  signin_box.classList.add("hide-box");
  // Reset Form
  document.querySelectorAll("form").forEach(function (form) {
    form.reset();
  });
});

signin_page_btn.addEventListener("click", function () {
  signup_box.classList.add("hide-box");
  signin_box.classList.remove("hide-box");
  // Reset Form
  document.querySelectorAll("form").forEach(function (form) {
    form.reset();
  });
});

// User Side form validation || Signup Page
let sign_up_form = document.querySelector("#sign-up-form");
let signup_nameInp = document.querySelector(".sign-up-box .username");
let signup_emailInp = document.querySelector(".sign-up-box .email");
let signup_passInp = document.querySelector(".sign-up-box .password");
let signup_pass2Inp = document.querySelector(".sign-up-box .password2");

sign_up_form.addEventListener("submit", function (e) {
  e.preventDefault();
  check_signup_inputs();
});

function check_signup_inputs() {
  let nameVal = signup_nameInp.value.trim();
  let emailVal = signup_emailInp.value.trim();
  let passVal = signup_passInp.value.trim();
  let pass2Val = signup_pass2Inp.value.trim();
  let user = {};
  if (nameVal === "") {
    setErrorFor(signup_nameInp, "Username cannot be blank !");
  } else {
    setSuccessFor(signup_nameInp);
    user.name = nameVal;
  }

  if (emailVal === "") {
    setErrorFor(signup_emailInp, "Email cannot be blank !");
  } else {
    setSuccessFor(signup_emailInp);
    user.email = emailVal;
  }

  if (passVal === "") {
    setErrorFor(signup_passInp, "Password cannot be blank !");
  } else if (passVal.length < 8) {
    setErrorFor(signup_passInp, "less than 8 characters !");
  } else {
    setSuccessFor(signup_passInp);
  }

  if (pass2Val === "") {
    setErrorFor(signup_pass2Inp, "please confirm password");
  } else if (passVal.length !== pass2Val.length) {
    setErrorFor(signup_pass2Inp, "Password is not matching !");
  } else {
    setSuccessFor(signup_pass2Inp);
    user.password = pass2Val;
  }
  // Store Data in Local-Storage
  if (user.name && user.email && user.password) {
    alert("Account created Successfully 🎉 \nWellcome to Glammer crown");
    userDataArr.push(user);
    localStorage.setItem("userData", JSON.stringify(userDataArr));
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "/index.html";
  }
}

// User Side form validation || Signin Page
let sign_in_form = document.querySelector("#sign-in-form");
let signin_emailInp = document.querySelector(".sign-in-box .email");
let signin_passInp = document.querySelector(".sign-in-box .password");

sign_in_form.addEventListener("submit", function (e) {
  e.preventDefault();
  check_signin_inputs();
});

function check_signin_inputs() {
  let emailVal = signin_emailInp.value.trim();
  let passVal = signin_passInp.value.trim();

  let user = {};

  user.email = emailVal;
  user.password = passVal;

  let oldUser = false;
  let currentUser;
  userDataArr.forEach(function (data) {
    if (data.email == user.email && data.password == user.password) {
      currentUser = data;
      oldUser = true;
      return;
    }
  });

  if (!oldUser) {
    setErrorFor(signin_emailInp, "Please enter valid Credentials");
    setErrorFor(signin_passInp, "Please enter valid Credentials");
  } else {
    alert("welcome again to Glammer crown 💖");
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    window.location.href = "/index.html";
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  let small = formControl.querySelector("small");
  formControl.classList.add("error");
  small.textContent = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
}
