const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const pw = document.querySelector("#password");
const pwConfirm = document.querySelector("#confirm");
const pwRulesList = document.querySelector(".password-rules");
const pwRules = document.querySelectorAll(".password-rules li");

email.addEventListener("focusout", setInteracted);
phone.addEventListener("focusout", setInteracted);
pw.addEventListener("focus", () => toggleRuleVisibility(true));
pw.addEventListener("keyup", checkPassword);
pw.addEventListener("focusout", setInteracted);
pw.addEventListener("focusout", verifyPassword);
pw.addEventListener("focusout", () => toggleRuleVisibility(false));
pwConfirm.addEventListener("focusout", setInteracted);
pwConfirm.addEventListener("keyup", confirmPassword);

const rules = [/^.{8,20}$/, /[a-z]+/, /[A-Z]+/, /[0-9]+/, /[#?!@$%^&*-]+/];
let valid = false;

function setInteracted(e) {
  e.target.value === "" && !e.target.hasAttribute("required")
    ? e.target.classList.remove("interacted")
    : e.target.classList.add("interacted");
}

function toggleRuleVisibility(rulesVisible) {
  if (rulesVisible) {
    pwRulesList.classList.add("visible");
  } else if (valid) {
    pwRulesList.classList.remove("visible");
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
  if (pw.classList.contains("interacted")) verifyPassword();
  if (pwConfirm.classList.contains("interacted")) confirmPassword();
}

function verifyPassword() {
  valid ? setValidity(pw, true) : setValidity(pw, false);
}

function confirmPassword() {
  pw.value == pwConfirm.value && valid
    ? setValidity(pwConfirm, true)
    : setValidity(pwConfirm, false);
}

function setValidity(element, valid) {
  if (valid) {
    element.classList.add("valid");
    element.classList.remove("invalid");
  } else {
    element.classList.add("invalid");
    element.classList.remove("valid");
  }
}
