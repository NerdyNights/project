"strict";

const all = document.querySelector(".box");
const hid = document.querySelector(".hid");
const exit = document.querySelector(".btnsuccess");
let email = document.querySelector(".email");
let errormessage = document.querySelector(".error");

let formo = document.forms["form"];

formo.onsubmit = function (e) {
  e.preventDefault();
  if (email.value === "") {
    document.querySelector(".error").classList.remove("hidden");
    email.style.border = "1px solid hsl(4, 100%, 67%)";
    email.style.backgroundColor = "hsl(7, 64%, 95%)";
  } else {
    all.classList.add("hidden");
    hid.classList.remove("hidden");
    errormessage.classList.toggle("hidden");
  }
};

exit.addEventListener("click", function () {
  all.classList.toggle("hidden");
  hid.classList.toggle("hidden");
  email.style.border = "1px solid black";
  email.style.backgroundColor = "white";
});
