const likeBtns = document.querySelectorAll(".favorite-icon");

likeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.classList.toggle("filled");
    if (btn.classList.contains("filled")) {
      btn.innerHTML = "&#10084;";
    } else {
      btn.innerHTML = "&#9825;";
    }
  });
});
