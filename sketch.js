const GRID_SIZE = 20;

let snake;
function setup() {
  createCanvas(700, 700);
  snake = new Snake();
}

function draw() {
  background(155, 204, 153);
  snake.update();
  snake.draw();
  food.draw();
}

function keyPressed() {
  if (keyCode === 39 && snake.dir !== 3) {
    snake.dir = 1;
  } else if (keyCode === 40 && snake.dir !== 4) {
    snake.dir = 2;
  } else if (keyCode === 37 && snake.dir !== 1) {
    snake.dir = 3;
  } else if (keyCode === 38 && snake.dir !== 2) {
    snake.dir = 4;
  } 
}