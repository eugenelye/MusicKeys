const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

window.addEventListener("keydown", keyDown);

//creating the start button
const startButton = document.createElement('button');
startButton.className = 'start';
startButton.innerText = 'Start Game!';
document.querySelector('body').append(startButton);
startButton.addEventListener("click", startGame);

//onclick function to start the game
function startGame () {
   setInterval(fallingRect, 30);
};

//this defines the button width size, which is 1/3 width of the canvas
const buttonWidth = [canvas.width / 3, canvas.width / 3, canvas.width / 3];
const buttonHeight = [canvas.width / 16, canvas.width / 16, canvas.width / 16];

//this defines the button colors
const colors = ["red", "blue", "green"];

//this push the buttons into an array
const rectangle = [];

//inital conditions of the game
let score = 0;
let speed = 3;
let time = 5;

//this function sets the text properties
function text(message, x, y) {
  ctx.fillStyle = "black";
  ctx.fillText(message, x, y);
}

//this function draw the buttons at the bottom.
function drawButtons() {
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    //this function color the rectangle and set the rectangle properties at the bottom.
    ctx.fillStyle = colors[i];
    ctx.fillRect((i * canvas.width) / 3, canvas.height-buttonHeight[i], buttonWidth[i], buttonHeight[i]);
  }
  //this function draw the button text at the bottom.
  ctx.font = "50px Arial";
  text("z", 0 + 100, canvas.height);
  text("x", (1 * canvas.width / 3) + 100, canvas.height);
  text("c", (2 * canvas.width / 3) + 100, canvas.height);
}

function drawRect() {
  // This function will draw the rectangle block on the screen based on what is set in the rectangle[]
  for (let i = 0; i < rectangle.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = colors[rectangle[i][0]];
    ctx.fillRect(
      (rectangle[i][0] * canvas.width) / 3,
      rectangle[i][1],
      canvas.width / 3,
      50
    );
  }
}

function makeRect() {
  // This function will random set a number to the blocks[] (0 = red, 1 = blue, 2 = green). 
  // if red is randomised, it will be placed at the left. position = 0 will be assigned to the rectangle y position every time. 
  // - Note: This will be call every 3000/speed milliseconds
  rectangle.push([Math.round(Math.random() * 3), 0]);
  setTimeout(makeRect, 3000 / speed);
}

function fallingRect() {

  //these 2 below shows the speed and add the score to be shown to the user.
  document.getElementById("speed").innerHTML = "Speed: " + speed;
  document.getElementById("score").innerHTML = "Score: " + score;
  document.getElementById("time").innerHTML = "Time: " + time;

  // This function will animate the falling rectangle block on the screen
  // - Note: This will be call every 30 milliseconds -> setInterval of fallingRect at 30 ms. 

  for (let i = 0; i < rectangle.length; i++) {
  
  //this makes the rectangle fall at the assigned speed. the y position of the rectangle changes by 2 px at every 30ms. 
    rectangle[i][1] += speed;
  
  // when the rectangle made goes beyond half of the button height, it is deleted. 
    if (rectangle[i][1] > 750) {
      rectangle.splice(i, 1);
    }
    // This function will clear the rectangle on the previous pixel, making the moving effect
    ctx.clearRect(0, 0, canvas.width, canvas.height);

     // This function will draw the rectangle with the assigned properties.
    drawRect();

     // This function will draw the buttons below. 
    drawButtons();
  }
}

setTimeout(makeRect, 0);


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
}