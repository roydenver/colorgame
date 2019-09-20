let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButton = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  // mode buttons event listeners
  for (let i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener("click", function() {
      modeButton[0].classList.remove("selected");
      modeButton[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function setupSquares() {
  // squares event listeners
  for (var i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
      //grab color of picked square
      let clickedColor = this.style.background;

      //compare color to picked color
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick new random color fom aray
  pickedColor = pickColor();
  // change coloDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  reset.textContent = "New Colors";
  messageDisplay.textContent = "";
  // change colors of squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  // loop through all squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
  // change each color to match given color
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make array
  let arr = [];

  // add random colors to array
  for (let i = 0; i < num; i++) {
    // get random color and push into arr
    arr.push(randomColor());
  }

  // return that array
  return arr;
}

function randomColor() {
  // pick a red from 0 to 255
  let r = Math.floor(Math.random() * 256);
  // pick a green from 0 to 255
  let g = Math.floor(Math.random() * 256);
  // pick a blue from 0 to 255
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
