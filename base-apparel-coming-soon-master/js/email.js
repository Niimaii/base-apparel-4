const errorText = document.getElementById("errorText");
const errorIcon = document.getElementById("errorIcon");

function displayInput() {
  let emailInput = document.getElementById("email").value;

  let result = emailInput.includes("@" && ".com");

  if (!result) {
    errorText.classList.add("error");
    errorIcon.classList.add("error");
  } else {
    errorText.classList.remove("error");
    errorIcon.classList.remove("error");
  }
}

document.getElementById("emailButton").addEventListener("click", displayInput);
