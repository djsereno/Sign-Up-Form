const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const pw = document.querySelector("#password");
const pwConfirm = document.querySelector("#confirm");

email.addEventListener("keyup", setInteracted);
phone.addEventListener("keyup", setInteracted);
pw.addEventListener("keyup", setInteracted);
pwConfirm.addEventListener("keyup", setInteracted);

pw.addEventListener("keyup", verifyPassword);
pwConfirm.addEventListener("keyup", verifyPassword);

function verifyPassword() {
  if (pw.value && pwConfirm.value && pw.value == pwConfirm.value) {
    pw.classList.add("valid");
    pwConfirm.classList.add("valid");
  } else {
    pw.classList.remove("valid");
    pwConfirm.classList.remove("valid");
  }
}

function setInteracted(e) {
  if (e.target.value !== "") e.target.classList.add("interacted");
  if (e.target.value === "" && !e.target.hasAttribute("required")) {
    e.target.classList.remove("interacted");
  }
}
