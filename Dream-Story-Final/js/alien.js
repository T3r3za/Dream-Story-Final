let m;
let img;
let angle1 = 0;
let x1 = 100;
let y1 = 100;
let w1 = 60;
let h1 = 60;

let speedx = 3;
let speedy = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  m = new FlyingAlien();
}

function draw() {
  background(0);

 noStroke()
 fill(244, 206, 66)
 ellipse(400, 70, 35, 35);

 fill(245, 235, 237);
 ellipse(200, 400, 500, 500);

 fill(170,160,175, 50);
 arc(100, 340, 60, 60, 50, PI);
 arc(250, 280, 50, 50, 50, PI);
 arc(130, 250, 40, 40, 50, PI);
 arc(300, 355, 65, 65, 50, PI);
 arc(320, 230, 35, 35, 50, PI);
 arc(20, 280, 50, 50, 50, PI);
 arc(100, 200, 25, 25, 50, PI);
 arc(380, 290, 50, 50, 50, PI);

  m.draw(mouseX, mouseY, 600, 0);


}

function mousePressed() {
  m.randomizeSeed();

}

class GameObject {

  constructor(size = 50, seed = 0, speed = .1) {
    this.size = size;
    this.seed = seed;
    this.angle = 0;
    this.speed = speed;
  }

  randomizeSeed() {
    this.seed = random(0, 10000);
  }

  setSeed(seed) {
    if (seed != undefined && seed > 0 && seed < 1e7)
      this.seed = seed;
  }

  draw(x, y, size = this.size, angle = this.angle) {
    push();

    translate(x, y);
    rotate(angle);

    noiseSeed(this.seed);
    randomSeed(this.seed);

    ellipse(0,
            noise(frameCount*this.speed)*this.size*.3,
            size,
            size * noise(this.seed));
    rectMode(CENTER);

    fill(255,128);

    rect(sin(frameCount*this.speed)*this.size*.3,
            0,
            size * random(),
            size);

    pop();
  }

  toString() {
    print(this.name);
  }

}

class FlyingAlien extends GameObject {


  constructor(size = 200, seed = 1, speed = 0.1) {
    super(size, seed, speed);
    this.name = "Flying Alien";
  }

  draw(x, y, size = this.size, angle = this.angle) {
    push();
    stroke(0);
    translate(x, y);
    noiseSeed(this.seed);
    randomSeed(this.seed);
    rotate(
      angle + sin(frameCount * this.speed / 2) * 0.1
    );
    //ship
    //grey saucer
    fill(201, 201, 201);
    ellipse(0, this.size * 0.06, this.size, this.size / 2 - 20);
    //blue bubble
    fill(138, 215, 232);
    ellipse(0, -this.size * 0.06, this.size / 2, this.size / 10);
    arc(0, -this.size * 0.06, this.size / 2, this.size - 40, PI, 0);
    //red details
    fill((this.seed / 38) + 100, noise(this.seed / 38), noise(this.seed / 38));
    ellipse(0, this.size * 0.12, this.size * 0.08, this.size * 0.08);
    ellipse(this.size * 0.15, this.size * 0.1, this.size * 0.08, this.size * 0.08);
    ellipse(-this.size * 0.15, this.size * 0.1, this.size * 0.08, this.size * 0.08);
    ellipse(this.size * 0.3, this.size * 0.05, this.size * 0.08, this.size * 0.08);
    ellipse(-this.size * 0.3, this.size * 0.05, this.size * 0.08, this.size * 0.08);

    //alien
    //lower body
    stroke(0);
    strokeWeight(1);
    fill(noise(this.seed / 38), (this.seed / 38) + 100, noise(this.seed / 38));
    arc(0, -this.size * 0.01, this.size * 0.2, this.size * 0.2, PI, 0);

    //upper body
    rotate(sin(-frameCount * this.speed / 2) * 0.1);
    //antennas
    strokeWeight(1);
    line(0, -this.size * 0.25, -this.size / 5, -this.size / 2);
    line(0, -this.size * 0.25, this.size / 5, -this.size * 0.5);
    // head
    fill(noise(this.seed / 38), (this.seed / 38) + 100, noise(this.seed / 38));
    ellipse(0, -this.size * 0.2, size * 0.08, size * 0.08);

    //eyes
    fill(0);
    ellipse(this.size * 0.05, -this.size * 0.2, size * 0.025, size * 0.025);
    ellipse(-this.size * 0.05, -this.size * 0.2, size * 0.025, size * 0.025);
    fill(255);
    rotate(cos(frameCount * this.speed) * 0.007);
    ellipse(this.size * 0.05, -this.size * 0.2, this.size / 20, this.size / 15);
    ellipse(-this.size * 0.05, -this.size * 0.2, this.size / 20, this.size / 15);
    pop();
  }


}
