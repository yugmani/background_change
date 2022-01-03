const colorBtn = document.querySelector(".colorBtn");
const bodyBcg = document.querySelector("body");
const colorName = document.querySelector("#colorName");

const colors = [
  "yellow",
  "purple",
  "red",
  "green",
  "blue",
  "silver",
  "gold",
  "bisque",
  "cyan",
  "#3b5998",
];

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  let random = Math.floor(Math.random() * colors.length);
  bodyBcg.style.backgroundColor = colors[random];
  colorName.innerText = colors[random];
  colorName.style.backgroundColor = colors[random];
}
