let leftBtn = document.querySelector(".left-gradient-btn");
let rightBtn = document.querySelector(".right-gradient-btn");
let copyDiv = document.querySelector(".copy-code");
let prevGradient = [];
let color;



function changeColor() {
  let hex = "0123456789abcdef";
  color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
};

function addColorLeft() {
  document.body.style.backgroundImage = ` linear-gradient(to right, ${changeColor()}, ${rightChanged})`;
}

function addColorRight() {
  document.body.style.backgroundImage = ` linear-gradient(to right, ${leftChanged}, ${changeColor()})`;
}

let leftChanged = "#737fbf";
function changeLeftInnerHtml() {
  leftChanged = color;
  leftBtn.innerHTML = `${color}`;
}

let rightChanged = "#3434cf";
function changeRightInnerHtml() {
  rightChanged = color;
  rightBtn.innerHTML = `${color}`;
}

function updateLeftCopyField() {
  let leftRGB = document.querySelector(".copy-code");
  leftRGB.innerHTML = `background-image: linear-gradient(to right, ${leftChanged}, ${rightChanged});`;
}

function updateRightCopyField() {
  let rightRGB = document.querySelector(".copy-code");
  rightRGB.innerHTML = `background-image: linear-gradient(to right, ${leftChanged}, ${rightChanged});`;
}

leftBtn.addEventListener("click", () => {
//   changeColor();
  addColorLeft();
  changeLeftInnerHtml();
  updateLeftCopyField();
});

rightBtn.addEventListener("click", () => {
//   changeColor()
  addColorRight();
  changeRightInnerHtml();
  updateRightCopyField();
});

copyDiv.addEventListener("click", () => {
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyDiv.innerText);
  alert("code copied to clipboard");
});
