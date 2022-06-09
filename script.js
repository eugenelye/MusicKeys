const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const x = document.querySelector("audio");

//event key creation for game playing
window.addEventListener("keydown", keyDown);

//creating the start button
document.querySelector(".start").addEventListener("click", startGame);
document.querySelector(".restart").addEventListener("click", reload);

function reload() {
  location.reload();
}

//keeping canvas hidden before pressing start
document.getElementById("canvas").style.visibility = "hidden";
document.querySelector(".restart").style.visibility = "hidden";

//this defines the button colors
const colors = ["red", "blue", "green", "yellow", "cyan"];

//this push the buttons into an array
const rectangle = [];

//inital conditions of the game
let score = 0;
let speed = 3;
let time = 30;
let miss = 0;

//function of the start game button
function startGame() {
  x.play();
  //this function makes the rectangle
  setTimeout(makeRect, 0);

  //This cause the rect to fall at speed of 3px every 30 milliseconds -> setInterval of fallingRect at 30 ms.
  const fall = setInterval(fallingRect, 30);
  document.getElementById("canvas").style.visibility = "visible";

  //function when the games end (timer = 0)
  let countDown = setInterval(function () {
    time--;
    if (time === 0) {
      clearInterval(countDown);
      clearInterval(fall);
      x.pause();
      alert(`Time is up! Your score is ${score}!`);
      document.getElementById("canvas").style.display = "none";
      document.querySelector("#score").style.display = "none";
      document.querySelector("#speed").style.display = "none";
      document.querySelector("#time").style.display = "none";
      document.querySelector("#miss").style.display = "none";
      document.querySelector(".start").style.display = "none";
      document.querySelector(".restart").style.visibility = "visible";
    }
    if (miss >= 10) {
      clearInterval(countDown);
      clearInterval(fall);
      x.pause();
      alert(`Game Over!`);
      document.getElementById("canvas").style.display = "none";
      document.querySelector("#score").style.display = "none";
      document.querySelector("#speed").style.display = "none";
      document.querySelector("#time").style.display = "none";
      document.querySelector("#miss").style.display = "none";
      document.querySelector(".start").style.display = "none";
      document.querySelector(".restart").style.visibility = "visible";
      miss = 0;
    }
  }, 1000);
  document.querySelector("#instructions").style.visibility = "hidden";
  document.querySelector("#words").style.visibility = "hidden";
}

//this defines the button width size, which is 1/5 width of the canvas and button height.
const buttonWidth = [
  canvas.width / 5,
  canvas.width / 5,
  canvas.width / 5,
  canvas.width / 5,
  canvas.width / 5,
];
const buttonHeight = [
  canvas.width / 16,
  canvas.width / 16,
  canvas.width / 16,
  canvas.width / 16,
  canvas.width / 16,
];

//this function sets the text properties
function text(message, x, y) {
  ctx.fillStyle = "black";
  ctx.fillText(message, x, y);
}

//this function draw the buttons at the bottom.
function drawButtons() {
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    //this function color the rectangle and set the rectangle properties at the bottom.
    ctx.fillStyle = colors[i];
    ctx.fillRect(
      (i * canvas.width) / 5,
      canvas.height - buttonHeight[i],
      buttonWidth[i],
      buttonHeight[i]
    );
  }
  //this function draw the button text at the bottom.
  ctx.font = "50px Arial";
  text("z", 0 + canvas.width / 10, canvas.height);
  text("x", (1 * canvas.width) / 5 + canvas.width / 10, canvas.height);
  text("c", (2 * canvas.width) / 5 + canvas.width / 10, canvas.height);
  text("v", (3 * canvas.width) / 5 + canvas.width / 10, canvas.height);
  text("b", (4 * canvas.width) / 5 + canvas.width / 10, canvas.height);
}

function drawRect() {
  // This function will draw the rectangle block on the screen based color and position.
  for (let i = 0; i < rectangle.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = colors[rectangle[i][0]];
    ctx.fillRect(
      (rectangle[i][0] * canvas.width) / 5,
      rectangle[i][1],
      canvas.width / 5,
      50
    );
  }
}

function makeRect() {
  // This function will random set a number to the blocks[] (0 = red, 1 = blue, 2 = green, 3 = yellow, 4 =cyan).
  // - Note: This will be call every 3000/speed milliseconds
  rectangle.push([Math.round(Math.random() * 5), 0]);
  setTimeout(makeRect, 3000 / speed);
}

// This function will animate the falling rectangle block on the screen
function fallingRect() {
  //these are the parameters of the game
  document.getElementById("speed").innerHTML = "Speed: " + speed;
  document.getElementById("score").innerHTML = "Score: " + score;
  document.getElementById("time").innerHTML = "Time: " + time;
  document.getElementById("miss").innerHTML = "Misses: " + miss;

  for (let i = 0; i < rectangle.length; i++) {
    //this makes the rectangle fall at the assigned speed. the y position of the rectangle changes by 2 px at every 30ms.
    rectangle[i][1] += speed;

    // when the rectangle made goes beyond half of the button height, it is deleted.
    if (rectangle[i][1] > 800) {
      rectangle.splice(i, 1);
      miss += 1;
    }

    // This function will clear the rectangle on the previous pixel, making the moving effect
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // This function will draw the rectangle with the assigned properties.
    drawRect();

    // This function will draw the buttons below.
    drawButtons();
  }
}

// The event listeners
function keyDown() {
  const key = event.key;

  // when z is pressed, if the position of the rectangle falling is at 0 (left) and within the height of the button
  //, it registers a score. it deletes the rectangle as well.
  if (key == "z") {
    if (rectangle[0][0] == 0) {
      if (rectangle[0][1] >= 700) {
        score += 1;
        rectangle.splice(0, 1);
      } 
    }
  }
  // when x is pressed, if the position of the rectangle falling is at 1 (centre) and within the height of the button
  //, it registers a score. it deletes the rectangle as well.
  if (key == "x") {
    if (rectangle[0][0] == 1) {
      if (rectangle[0][1] >= 700) {
        score += 1;
        rectangle.splice(0, 1);
      } 
    }
  }
  // when c is pressed, if the position of the rectangle falling is at 2 (right) and within the height of the button
  //, it registers a score. it deletes the rectangle as well.
  if (key == "c") {
    if (rectangle[0][0] == 2) {
      if (rectangle[0][1] >= 700) {
        score += 1;
        rectangle.splice(0, 1);
      } 
    }
  }

  if (key == "v") {
    if (rectangle[0][0] == 3) {
      if (rectangle[0][1] >= 700) {
        score += 1;
        rectangle.splice(0, 1);
      } 
    }
  }

  if (key == "b") {
    if (rectangle[0][0] == 4) {
      if (rectangle[0][1] >= 700) {
        score += 1;
        rectangle.splice(0, 1);
      } 
    }
  }
}
