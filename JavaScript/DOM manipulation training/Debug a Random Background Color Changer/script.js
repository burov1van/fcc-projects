const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.getElementById("bg-hex-code");
console.log(bgHexCodeSpanElement);
const btn = document.querySelector(".btn");
console.log(btn);

function getRandomIndex() {
 const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}
console.log(getRandomIndex());

function changeBackgroundColor() {
  let color = darkColorsArr[getRandomIndex()];
  console.log(color);
  bgHexCodeSpanElement.textContent = color;
  body.style.backgroundColor = color;
}

btn.addEventListener("click", changeBackgroundColor);
