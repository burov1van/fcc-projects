const textArea = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

function showAreaLength() {
  let textAreaLength = textArea.value.length;

  if (textAreaLength > 50) {
    textArea.value = textArea.value.slice(0, 50);
    textAreaLength = 50;
  }

  charCount.textContent = `Character Count: ${textAreaLength}/50`;

  if (textAreaLength === 50) {
    charCount.classList.add("red");
  } else {
    charCount.classList.remove("red");
  }
}

textArea.addEventListener("input", function () {
  showAreaLength();
});
