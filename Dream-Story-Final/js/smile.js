let img;
let cam;
value_1 = 0;
value_2 = 1;
value_3 = 2;

function setup() {
  createCanvas(640, 480);

  cam = createCapture(VIDEO);
  //cam.hide();
  img = createImage(width, height);
}

function draw() {
  background(0);
  
  cam.loadPixels();
  img.loadPixels();

  let gridSize = 15;
  noStroke();
  for (let y = 0; y < img.height; y += gridSize) {
    for (let x = 0; x < img.width; x += gridSize) {
      let index = (x + y * img.width) * 4;

      let r = cam.pixels[index + value_1];
      let g = cam.pixels[index + value_2];
      let b = cam.pixels[index + value_3];

      fill(r, g, b);

      let avg = (r + g + b) / 3;

      let size = map(avg, 0, 255, 1, gridSize);

      if (mouseX < 215) {
        rect(x, y, size, size);
      } else if (mouseX >= 215 && mouseX <= 430) {
        heart(x, y, size, size);
      } else if (mouseX >= 430 && mouseX <= 640) {
        ellipse(x, y, size, size);
      }
    }
  }
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

function keyPressed() {
  if (keyCode === CONTROL) {
    value_1 = 222;
  } else if (keyCode === OPTION) {
    value_1 = 0;
    value_2 = 1;
    value_3 = 2;
  } else if (keyCode === ENTER) {
    value_1 = 0;
    value_2 = 56;
    value_3 = 2;
  } else if (keyCode === SHIFT) {
    value_1 = 0;
    value_2 = 1;
    value_3 = 900;
  }
}
