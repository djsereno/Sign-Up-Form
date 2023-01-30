const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const pw = document.querySelector("#password");
const pwConfirm = document.querySelector("#confirm");
const pwRules = document.querySelectorAll(".password-rules li");
const pwRulesDiv = document.querySelector(".password-rules");

const rules = [/^.{8,20}$/, /[a-z]+/, /[A-Z]+/, /[0-9]+/, /[#?!@$%^&*-]+/];
let valid = false;

email.addEventListener("focusout", setInteracted);
phone.addEventListener("focusout", setInteracted);

pw.addEventListener("focus", setInteracted);
pw.addEventListener("keyup", checkPassword);
pw.addEventListener("focusout", verifyPassword);

pwConfirm.addEventListener("focus", setInteracted);
pwConfirm.addEventListener("keyup", confirmPassword);

function setInteracted(e) {
  e.target.classList.add("interacted");
  if (e.target.value === "" && !e.target.hasAttribute("required")) {
    e.target.classList.remove("interacted");
  }
}

function checkPassword() {
  valid = true;
  for (let i = 0; i < rules.length; i++) {
    if (rules[i].test(pw.value)) {
      pwRules[i].classList.add("valid");
    } else {
      pwRules[i].classList.remove("valid");
      valid = false;
    }
  }
  confirmPassword();
}

function verifyPassword() {
  valid ? pw.classList.remove("invalid") : pw.classList.add("invalid");
  valid ? pw.classList.add("valid") : pw.classList.remove("valid");
}

function confirmPassword() {
  pw.value && pwConfirm.value && pw.value == pwConfirm.value
    ? pwConfirm.classList.remove("invalid")
    : pwConfirm.classList.add("invalid");
}
