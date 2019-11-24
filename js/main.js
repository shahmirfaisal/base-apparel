window.onload = function() {
  let form = document.querySelector("form"),
    email = document.getElementById("email"),
    warnIcon = document.getElementById("warn-icon");
  warnText = document.getElementById("warn-text");

  form.addEventListener("submit", submitEmail);

  function submitEmail(e) {
    e.preventDefault();
    if (email.value.trim() === "") {
      warnIcon.style.display = "inline-block";
      warnText.style.display = "block";
      email.style.border = "2px solid var(--softRed)";
    } else {
      warnIcon.style.display = "none";
      warnText.style.display = "none";
      email.value = "";
      email.style.border = "2px solid var(--desaturatedRed)";
    }
  }
};
