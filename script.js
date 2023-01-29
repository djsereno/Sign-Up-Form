const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const pw = document.querySelector("#password");
const pwConfirm = document.querySelector("#confirm");
const pwRules = document.querySelectorAll(".password-rules li");
const pwRulesDiv = document.querySelector(".password-rules");

email.addEventListener("keyup", setInteracted);
phone.addEventListener("keyup", setInteracted);

pw.addEventListener("keyup", setInteracted);
pw.addEventListener("keyup", verifyPassword);
pw.addEventListener("focus", () => pwRulesDiv.classList.remove("hidden"));
pw.addEventListener("focusout", () => pwRulesDiv.classList.add("hidden"));

pwConfirm.addEventListener("keyup", setInteracted);
pwConfirm.addEventListener("keyup", confirmPassword);

function setInteracted(e) {
  if (e.target.value !== "") {
    e.target.classList.add("interacted");
  }
  if (e.target.value === "" && !e.target.hasAttribute("required")) {
    e.target.classList.remove("interacted");
  }
}

function verifyPassword() {
  const rules = [/^.{8,20}$/, /[a-z]+/, /[A-Z]+/, /[0-9]+/, /[#?!@$%^&*-]+/];
  let valid = true;

  for (let i = 0; i < rules.length; i++) {
    if (rules[i].test(pw.value)) {
      pwRules[i].classList.add("valid");
    } else {
      pwRules[i].classList.remove("valid");
      valid = false;
    }
  }
  valid ? pw.classList.remove("invalid") : pw.classList.add("invalid");
  confirmPassword();
}

function confirmPassword() {
  pw.value && pwConfirm.value && pw.value == pwConfirm.value
    ? pwConfirm.classList.remove("invalid")
    : pwConfirm.classList.add("invalid");
}
