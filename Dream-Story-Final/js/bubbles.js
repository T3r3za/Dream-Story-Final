var bubbles = [];
var canvas;

function setup() {
 canvas = createCanvas(windowWidth, windowHeight);

}

function mouseClicked() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw() {
  background(0,0,0,0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

function Bubble(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    stroke(255);
    fill(184, 220, 255, 50);
    ellipse(this.x, this.y, 24, 24);
  }

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
}
