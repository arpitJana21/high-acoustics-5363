/**************************
 * Sticky Nav Bar
 **************************/
const header = document.querySelector("header");
let sticky = header.offsetTop;
window.addEventListener("scroll", function () {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

/**************************
 * Move to Sign in up page
 **************************/
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let loginoutBtn = document.querySelector("#loginoutBtn");
if (currentUser === null) {
  loginoutBtn.textContent = "Log in";
} else {
  loginoutBtn.textContent = "Log out";
}
loginoutBtn.addEventListener("click", function () {
  if (currentUser === null) {
    window.location.href = "/Sign-up page/index.html";
  } else {
    currentUser = null;
    localStorage.removeItem("currentUser");
    alert("Logged out successfully!");
    loginoutBtn.textContent = "Log in";
  }
});

/**************************
 * Dropdown Functionality
 **************************/
let makeup = document.querySelector("header .bottom #make-up");
let dropdown = document.querySelector("section #dropdown-container");
let shadow = document.querySelector("#shadow");

makeup.addEventListener("mouseover", function () {
  dropdown.classList.remove("hide-box");
  makeup.style.color = "var(--pink)";
  makeup.style.borderColor = "var(--pink)";
  dropdown.style.top = `${
    window.pageYOffset > 0 ? window.pageYOffset + 142.7 : -2
  }px`;
  shadow.style.opacity = "1";
});

makeup.addEventListener("mouseout", function () {
  dropdown.classList.add("hide-box");
  makeup.style.color = "var(--black)";
  makeup.style.borderColor = "transparent";
  shadow.style.opacity = "0";
});

dropdown.addEventListener("mouseover", function () {
  dropdown.classList.remove("hide-box");
  makeup.style.color = "var(--pink)";
  makeup.style.borderColor = "var(--pink)";
  shadow.style.opacity = "1";
});

dropdown.addEventListener("mouseout", function () {
  dropdown.classList.add("hide-box");
  makeup.style.color = "var(--black)";
  makeup.style.borderColor = "transparent";
  shadow.style.opacity = "0";
});

/**************************
 * Auto Image slider
 **************************/
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 6000);
