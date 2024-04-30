class Snake {
  constructor() {
    this.body = [{x: width / 2, y: height / 2}];
    this.lastX = width / 2;
    this.lastY = height / 2;
    this.dir = 1;
  }

  update() {
    let head = this.body[0];
    let newX = head.x;
    let newY = head.y;

    if (this.dir == 1) {
      newX += width / GRID_SIZE;
    } else if (this.dir == 2) {
      newY += height / GRID_SIZE;
    } else if (this.dir == 3) {
      newX -= width / GRID_SIZE;
    } else if (this.dir == 4) {
      newY -= height / GRID_SIZE;
    }

    this.body.unshift({x: newX, y: newY});
    this.body.pop();

    this.lastX = head.x;
    this.lastY = head.y;
  }

  draw() {
    fill(0, 255, 0);
    for (let i = 0; i < this.body.length; i++) {
      rect(this.body[i].x, this.body[i].y, width / GRID_SIZE, height / GRID_SIZE);
    }
  }
}