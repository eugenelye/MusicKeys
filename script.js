const canvas = document.querySelector("canvas");
// console.log(canvas);

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

//rectangle
// ctx.fillStyle = "red";
// ctx.fillRect(100, 100, 200, 100);
// ctx.fillStyle = "blue";
// ctx.fillRect(300, 100, 200, 100);
// ctx.fillStyle = "green";
// ctx.fillRect(500, 100, 200, 100);

//Line
// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300, 100);
// ctx.lineTo(400, 300);
// ctx.strokeStyle = "blue";
// ctx.stroke();

// Arc/Circle
// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = "blue";
// ctx.stroke();

// for (i = 0; i < 3; i++) {
//   const x = Math.random() * window.innerWidth;
//   const y = Math.random() * window.innerHeight;
//   ctx.beginPath();
//   ctx.arc(x, y, 30, 0, Math.PI * 2, false);
//   ctx.strokeStyle = "blue";
//   ctx.stroke();
// }

// const colors = ["red", "blue", "green"];
// const blocks = [];
// let speed = 1.5;

// function drawBlocks() {
//   // This function will draw the rectangle block on the screen based on what is set in the blocks[]
//   for (let i = 0; i < blocks.length; i++){
//       ctx.beginPath();
//       ctx.rect(blocks[i][0] * canvas.width/3, blocks[i][1], canvas.width/3, 10);
//       ctx.fillStyle = colors[blocks[i][0]];
//       ctx.fill();   
//   }
// }

// function makeBlock() {
//   // This function will random set a number to the blocks[] (0 = red, 1 = blue, 2 = green)
//   // - Note: This will be call every 1500 milliseconds
//   blocks.push([Math.round(Math.random() * 3), -canvas.width / 3]);
//   setTimeout(makeBlock, (3 * 1000) / speed);
// }

// function fallingBlocks() {
//   // This function will basically animate the falling rectangle block on the screen
//   // - Note: This will be call every 20 milliseconds
//   for (let i = 0; i < blocks.length; i++) {
//     blocks[i][1] += speed;
//   }

//   ctx.clearRect(0, 0, 450, 900);

//   drawBlocks();
// }

// setTimeout(makeBlock, 0);
// setInterval(fallingBlocks, 60 / 3);

function Rectangle(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;

  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, canvas.width / 3, 10);
  };

  this.update = function () {
    ctx.clearRect(this.x, this.y, canvas.width /3, 10);
    this.y += 2;
    
    if (this.y > innerHeight/5) {
      this.y = 0;
    }
    this.draw();
  };
}

const blueRectangle = new Rectangle(0, 0, "blue");

const redRectangle = new Rectangle(canvas.width/3, 0, "red");

const greenRectangle = new Rectangle(canvas.width * 2/3, 0, "green");

function animate() {
  requestAnimationFrame(animate);

  const randomNumber = Math.floor(Math.random() * 3);
  const rectArray = [blueRectangle, redRectangle, greenRectangle];
  
  rectArray[randomNumber].update()
  
}

setTimeout(animate, 1500);
