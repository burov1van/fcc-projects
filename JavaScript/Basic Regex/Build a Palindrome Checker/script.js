const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultText = document.getElementById("result");

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned == cleaned.split("").reverse().join("");
}

checkBtn.addEventListener("click", () => {
  const rawValue = textInput.value.trim();
  if (rawValue === "") {
    return alert("Please input a value");
  } else if (/[а-яё]/i.test(rawValue)) {
    alert("Пока что поддерживаются только латинские буквы и цифры");
    return;
  } else if (isPalindrome(rawValue)) {
    resultText.innerHTML = `<span class="inner--text_value">${rawValue}</span> <span class="inner--text_result">is a palindrome</span>`;
  } else {
    resultText.innerHTML = `<span class="inner--text_value">${rawValue}</span> <span class="inner--text_result">is not a palindrome</span>`;
  }
});
