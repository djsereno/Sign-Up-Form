const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const pw = document.querySelector("#password");
const pwConfirm = document.querySelector("#confirm");

email.addEventListener("keyup", setInteracted);
phone.addEventListener("keyup", setInteracted);
pw.addEventListener("keyup", setInteracted);
pw.addEventListener("keyup", verifyPassword);
pwConfirm.addEventListener("keyup", setInteracted);
pwConfirm.addEventListener("keyup", confirmPassword);

function setInteracted(e) {
  if (e.target.value !== "") e.target.classList.add("interacted");
  if (e.target.value === "" && !e.target.hasAttribute("required")) {
    e.target.classList.remove("interacted");
  }
}

function verifyPassword() {
  password = pw.value;
  /[a-z]+/.test(password) &&
  /[A-Z]+/.test(password) &&
  /[0-9]+/.test(password) &&
  /[#?!@$%^&*-]+/.test(password) &&
  password.length >= 8 &&
  password.length <= 20
    ? pw.classList.remove("invalid")
    : pw.classList.add("invalid");
}

function confirmPassword() {
  pw.value && pwConfirm.value && pw.value == pwConfirm.value
    ? pwConfirm.classList.remove("invalid")
    : pwConfirm.classList.add("invalid");
}
