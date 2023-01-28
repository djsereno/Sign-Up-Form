const pw = document.querySelector("#password");
const pwConfirm = document.querySelector("#confirm");

pw.addEventListener("keyup", verifyPassword);
pwConfirm.addEventListener("keyup", verifyPassword);

function verifyPassword() {
  console.log(pw.value, pwConfirm.value, pw.value == pwConfirm.value);
  if (pw.value && pwConfirm.value && pw.value == pwConfirm.value) {
    pw.classList.add("valid");
    pwConfirm.classList.add("valid");
  } else {
    pw.classList.remove("valid");
    pwConfirm.classList.remove("valid");
  }
}
